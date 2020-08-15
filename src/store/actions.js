import shop from '@/api/shop';
import { ref, firebaseAuth } from '../../config/firebase';

export default {
	
	// actions = methods
	// fetchProducts(context) {
  //   return new Promise(function (resolve, reject) {
  //     shop.getProducts(products => {
  //       context.commit('setProducts', products);
  //       resolve();
  //     });
  //   });
	// },
	
	fetchStores(context) {
		// console.log('context: ', context);
    return new Promise(function (resolve, reject) {
      shop.getStores(stores => {
        context.commit('setStores', stores);
        resolve();
      }); 
    });
	},

	addProductToCart(context, product) { 
		// console.log('product: ', product);


    if (context.getters.productInStock(product)) {
			var store = context.state.stores.find(item => item.store_id == product.store_id)
			var product = {... store, ...product}
			
      const cartItem = context.state.cart.find(item => item.product_id === product.product_id);
			
      if (!cartItem) {
        context.commit('pushProductToCart', product);
      } else {
        context.commit('incrementItemQty', cartItem, product);
      }
      context.commit('decrementProductInventory', product);
    }
		if (JSON.stringify(context.getters.currentUser) !== '{}') { ref.child('users').child(context.getters.currentUser.displayName).child('cart/').set(context.state.cart) }
	},

  // in cart
	subtractCartItem(context, product) {
		const cartItem = context.state.cart.find(item => item.product_id === product.product_id);
		if (cartItem && cartItem.quantity > 1) {
			context.commit('decrementItemQty', cartItem, product);
		} else {
			var newCart = context.state.cart.filter((item) => {return item.product_id !== product.product_id})
			context.commit('removeCartItem', newCart);
		}
		if (JSON.stringify(context.getters.currentUser) !== '{}') { ref.child('users').child(context.getters.currentUser.displayName).child('cart/').set(context.state.cart) }
	},

	addCartItem(context, product) {
		// console.log('product: ', product);
		// console.log('context.getters.productInStock(product): ', context.getters.productInStock(product));
	if (context.getters.productInStock(product)) {
		// console.log('product: ', product);
		
		// console.log('product: ', product);
		const cartItem = context.state.cart.find(item => item.product_id === product.product_id);

		
				if (cartItem && cartItem.quantity <= cartItem.product.inventory)  { context.commit('incrementItemQty', cartItem, product); }
         else {
          alert(`out of this stock for , ${product.title}`)
					// var newCart = context.state.cart.filter((item) => {return item.product_id !== product.product_id})
					// context.commit('removeCartItem', newCart);
        }
		if (JSON.stringify(context.getters.currentUser) !== '{}') { ref.child('users').child(context.getters.currentUser.displayName).child('cart/').set(context.state.cart) }
	}
	},

	// addCartItem(context, product) {
	//   // if (context.getters.productInStock(product)) {
	//     const cartItem = context.state.cart.find(item => item.product_id === product.product_id);
	//     // 
	//     // 
	//     if (!cartItem) {
	//   //     context.commit('pushProductToCart', product);
	//     } else {
	//       context.commit('incrementItemQty', cartItem, product);
	//     }
	//   //   context.commit('decrementProductInventory', product);
	//   // }
	//     if (JSON.stringify(context.getters.currentUser) !== '{}') { ref.child('users').child(context.getters.currentUser.displayName).child('cart/').set(context.state.cart) }
	// },
	
	 
  // filteredStoreInventory(context, product) {
		
		
    
  // },
	
		setSearchName(context, event) {
		if (context.state.products.length < 0) {
			context.state.products = context.state.products.filter(function(item) { return (item.title.toLowerCase().indexOf(event.toString().toLowerCase()) > -1); }.bind(this));
		} else {
			shop.getProducts(products => { 
				context.state.products = products.filter(function(item) { return (item.title.toLowerCase().indexOf(event.toString().toLowerCase()) > -1); }); });
		}
	},

	firebaseShoppingCart(context) {
    if(context.state.user.displayName !== null && context.state.user.displayName !== '') {
      return ref.child('users').child(context.state.user.displayName).child('cart').once('value').then((cart) => {
        var fireBaseUserCart = cart.val();
          if (fireBaseUserCart !== null) {
            fireBaseUserCart.forEach(items => {
              // context.state.firebaseCart.push({id: items.product_id, product: items.product,  quantity: items.quantity});
              context.state.cart.push({id: items.product_id, product: items.product,  quantity: items.quantity});
            }); 
           const quantityAmount = fireBaseUserCart.map(x => x.quantity).reduce((a, b) => a + b, 0);
          context.state.cartItems = quantityAmount;
        }
      });
		}
	},
	

	checkout(context) {
		setTimeout(() => { 
			shop.buyProducts(context.state.cart,
      () => {
        context.commit('emptyCart');
        context.commit('setCheckoutStatus', 'success');
      },
      () => {
        context.commit('setCheckoutStatus', 'fail');
      }
    );
		}, 250);
		

	},
};
