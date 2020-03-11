import shop from '@/api/shop'

export default { // setting and updating the state
  setProducts (state, products) {
    state.products = products
  },
  
  pushProductToCart (state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
    state.cartItems++
  },
  
  incrementItemQty (state, cartItem) {
    cartItem.quantity++
    state.cartItems++
  },
  
  decrementProductInventory (state, product) {
    product.inventory--
  },
  
  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  },
  
  emptyCart (state) {
    state.cart = []
    state.cartItems = 0
  },
  
  setHighPrice (state, event) {
    state.highprice = event
  },
  
  setSearchName (state, event) {
    console.log('state: ', state);
    console.log('event: ', event);

    if (state.products.length < 0) { 
      console.log('state.products.length: ', state.products.length);
      state.products = state.products.filter(function(item) { return item.title.toLowerCase().indexOf(event.toString().toLowerCase()) > -1; }.bind(this));
    } else {
      shop.getProducts(products => { state.products = products.filter(function(item) { return item.title.toLowerCase().indexOf(event.toString().toLowerCase()) > -1; }); }) }
  },
  
  toggleSale (state) {
    state.sale = !state.sale
  }
}
