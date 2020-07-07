import shop from "@/api/shop";
import {firebaseAuth, ref} from "../../config/firebase";
// import getters from "./getters";
export default {
	// SETTING AND UPDATING THE STATE
	setProducts(state, products) { 
		state.products = products;
	},
	
	
	setStores(state, stores) { 
		state.stores = stores;
	},
  
	
	authStateChange(state) {
		state.isLoggedIn = firebaseAuth().currentUser != null;
		state.user = firebaseAuth().currentUser;
	},
  
	pushProductToCart(state, product) {
		state.cart.push({product_id: product.product_id, store_id: product.store_id, store_name: product.store_name,  product: product, quantity: 1});
		state.cartItems++;
	},
  
	incrementItemQty(state, cartItem, product) {
		cartItem.quantity++;
		state.cartItems++;
	},
  
	decrementItemQty(state, cartItem, product) {
		cartItem.quantity--;
		state.cartItems--;
	},
	
  removeCartItem(state, cart) {
			state.cart = cart;
			state.cartItems--;
	}, 
	
	decrementProductInventory(state, product) {
		product.inventory--;
	},
  
	setCheckoutStatus(state, status) { state.checkoutStatus = status;},
	
	emptyCart(state) {
		state.cart = [];
		state.cartItems = 0;
	},
  
	setHighPrice(state, event) { state.highprice = event;},
	
	toggleSale(state) { state.sale = !state.sale;},
	
};
