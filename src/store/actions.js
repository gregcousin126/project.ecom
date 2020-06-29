import shop from '@/api/shop';
import { ref, firebaseAuth } from '../../config/firebase';

export default {
  // actions = methods
  fetchProducts(context) {
    
    return new Promise(function (resolve, reject) {
      shop.getProducts(products => {
        console.log('products: ', products);
        context.commit('setProducts', products);
        resolve();
      });
    });
  },

  addProductToCart(context, product) {      
    console.log('product: ', product);
    let currentUser = context.getters.currentUser;
    if (context.getters.productInStock(product)) {
      const cartItem = context.state.cart.find(item => item.id === product.id);
      if (!cartItem) {
        context.commit('pushProductToCart', product);
      } else {
        context.commit('incrementItemQty', cartItem, product);
      }
      context.commit('decrementProductInventory', product);
    }
      if (JSON.stringify(currentUser) !== '{}') { ref.child('users').child(currentUser.displayName).child('cart/').set(context.state.cart) }
  },
  
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
