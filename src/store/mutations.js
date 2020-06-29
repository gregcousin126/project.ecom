import shop from "@/api/shop";
import {firebaseAuth, ref} from "../../config/firebase";
// import getters from "./getters";
export default {
	// SETTING AND UPDATING THE STATE
	setProducts(state, products) { 
		state.products = products;
	},
  
	authStateChange(state) {
		state.isLoggedIn = firebaseAuth().currentUser != null;
		state.user = firebaseAuth().currentUser;
	},
  
	pushProductToCart(state, product) {
		state.cart.push({id: product.id, product: product, quantity: 1});
		state.cartItems++;
	},
  
	incrementItemQty(state, cartItem, product) {
		cartItem.quantity++;
		state.cartItems++;
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
	
	setSearchName(state, event) {
		if (state.products.length < 0) {
			state.products = state.products.filter(function(item) { return (item.title.toLowerCase().indexOf(event.toString().toLowerCase()) > -1); }.bind(this));
		} else {
			shop.getProducts(products => { state.products = products.filter(function(item) { return (item.title.toLowerCase().indexOf(event.toString().toLowerCase()) > -1); }); });
		}
	}
};
