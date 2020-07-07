import shop from '@/api/shop';
import { ref } from '../../config/firebase';
export default {
  
  isLoggedIn(state)  { 
    return state.isLoggedIn; 
  },

	currentUser(state, context)  {
		if (state && state.user) {
      return state.user; 
		} else { return {}; }
	},
  
  availableProducts(state, getters) {
    return state.products.filter(product => product.inventory > 0);
  },
  
  
  // firebaseCartProducts(state, getters) {
    // return state.products./filter(product => product.inventory > 0);
  // },
  
  
  cartProducts(state) {
    
    
    
    
    return state.cart.map(cartItem => { 
      console.log('cartItem: ', cartItem);
      // const product = state.products.find(product => product.product_id === cartItem.product_id);
      return {
        product_id: cartItem.product_id,
        store_id: cartItem.store_id,
        store_name: cartItem.store_name,
        title: cartItem.product.title,
        price: cartItem.product.price,
        description: cartItem.product.description,
        img: cartItem.product.img,
        quantity: cartItem.quantity,
        // title: product.title, price: product.price, description: product.description, img: product.img, quantity: cartItem.quantity,
      };
    });
  },
  
  cartTotal(state, getters) {
    return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  },
  
  productInStock() {
    return product => {
      return product.inventory > 0;
    };
  },
};
