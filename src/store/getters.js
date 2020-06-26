import shop from '@/api/shop';

export default {
  // = computed properties

  availableProducts(state, getters) {
    // console.log('product.inventory > 0): ', state.products.filter(product => product.inventory > 0));
    return state.products.filter(product => product.inventory > 0);
  },

  cartProducts(state) {
    return state.cart.map(cartItem => {
      const product = state.products.find(
        product => product.id === cartItem.id
      );
      return {
        title: product.title,
        price: product.price,
        description: product.description,
        img: product.img,
        quantity: cartItem.quantity,
      };
    });
  },

  cartTotal(state, getters) {
    // let total = 0; getters.cartProducts.forEach(product => { total = total + product.price * product.quantity }); return total;
    return getters.cartProducts.reduce(
      (total, product) => total + product.price * product.quantity, 0
    );
  },

  productInStock() {
      // console.log(' product.inventory > 0;: ',  product.inventory > 0);
    return product => {
      return product.inventory > 0;
    };
  },
};

