/*** MOCKING CLIENT-SERVER PROCESSING */
var data = require('../../stores/data.json')
// var _products = [],
var _stores = [];

data.forEach((element, index) => { 
_stores.push(...element.store_data);
});

// var _productList = Array.prototype.concat.apply([], _products);

export default {
  // getProducts (cb) {
  //   setTimeout(() => cb(_stores), 100)
  // },
  getStores (cb) {
    setTimeout(() => cb(_stores), 100)
  },
  buyProducts (products, cb, errorCb) {
    // SIMULATE RANDOM CHECKOUT FAILURE.
    setTimeout(() => {
      cb();
      // (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ? cb() : errorCb()
    }, 100)
  }
}
