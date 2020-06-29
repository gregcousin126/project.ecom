import shop from '@/api/shop';
import { ref, firebaseAuth } from '../../config/firebase';

export default {
	
	// actions = methods
	fetchProducts(context) {
		
		// console.log('context: ', context.getters.cartProducts);
		
		// state
		
		// var another = this.getShoppingCart()
		// console.log('another: ', another);
		// context.getters.
		
		// context.getters.cartProducts.forEach(element => {
			// console.log('element: ', element);
			
		// });
		
    return new Promise(function (resolve, reject) {
			
      shop.getProducts(products => {
					
        context.commit('setProducts', products);
        // context.commit('editproducts', products);
				
        resolve();
      });
    });
	},

	addProductToCart(context, product) { 
    if (context.getters.productInStock(product)) {
      const cartItem = context.state.cart.find(item => item.id === product.id);
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
		const cartItem = context.state.cart.find(item => item.id === product.id);
		if (cartItem && cartItem.quantity > 1) {
			context.commit('decrementItemQty', cartItem, product);
		} else {
			var newCart = context.state.cart.filter((item) => {return item.id !== product.id})
			context.commit('removeCartItem', newCart);
		}
		if (JSON.stringify(context.getters.currentUser) !== '{}') { ref.child('users').child(context.getters.currentUser.displayName).child('cart/').set(context.state.cart) }
	},

	addCartItem(context, product) {
        if (context.getters.productInStock(product)) {

		const cartItem = context.state.cart.find(item => item.id === product.id);
		if (cartItem) { context.commit('incrementItemQty', cartItem, product); }
        } else {
          
          alert(`out of this stock for , ${product.title}`)
          			// var newCart = context.state.cart.filter((item) => {return item.id !== product.id})

          			// context.commit('removeCartItem', newCart);

        }
		if (JSON.stringify(context.getters.currentUser) !== '{}') { ref.child('users').child(context.getters.currentUser.displayName).child('cart/').set(context.state.cart) }
	},

	// addCartItem(context, product) {
	//   // 
	//   // 
	//     // 
	//   // if (context.getters.productInStock(product)) {
	//     const cartItem = context.state.cart.find(item => item.id === product.id);
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

	getShoppingCart(context) {
    if(context.state.user.displayName !== null && context.state.user.displayName !== '') {
      return ref.child('users').child(context.state.user.displayName).child('cart').once('value').then((cart) => {
        var fireBaseUserCart = cart.val();
          if (fireBaseUserCart !== null) {
            fireBaseUserCart.forEach(element => {
              context.state.cart.push({id: element.id, product: element.product,  quantity: element.quantity});
            }); 
           const quantityAmount = fireBaseUserCart.map(x => x.quantity).reduce((a, b) => a + b, 0);
          context.state.cartItems = quantityAmount;
        }
      });
		}
	},
	
	// editCartItem(product) {
	//   
	// },

	checkout(context) {
    
    shop.buyProducts(context.state.cart,
      () => {
        context.commit('emptyCart');
        context.commit('setCheckoutStatus', 'success');
      },
      () => {
        context.commit('setCheckoutStatus', 'fail');
      }
    );
	},
};
