/**
 * MOCKING CLIENT-SERVER PROCESSING
 */

var _products = require('../../data.json')

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  
  buyProducts (products, cb, errorCb) {
    // SIMULATE RANDOM CHECKOUT FAILURE.
    setTimeout(() => {
      cb();
      // (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ? cb() : errorCb()
    }, 100)
  }
}

