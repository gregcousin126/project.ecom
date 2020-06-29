<template>
  <div class="product-list">
    <p v-if="loading">Loading....</p>
      <transition-group name="card" tag="ul" v-else>
        <!-- <li v-for="product in products" :key="product.id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ]" tabindex="0" v-show="category === product.category"> -->
        <li v-for="product in products" :key="product.id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ]" tabindex="0" v-show="category === product.category || category === 'allproducts'">
          <span class="sale-banner" v-if="product.sale">Sale</span>
          <span class="out-of-stock-banner" v-show="!productInStock(product)">Out of Stock</span>
          <div class="container">
            <img :src="`./static/images/${product.img}`" :alt="`image of ${product.title}`">
              <div class="overlay">
                <div class="text">{{product.description}}</div>
              </div>
          </div>
          <span class="product-title">{{product.title}}</span>
          <span class="product-price"> {{product.price | currency}}</span>
          <button @click="addProductToCart(product)" class="add-to-cart-btn">Add to cart</button>
          <!-- <div class="container"> <img src="img_avatar.png" alt="Avatar" class="image"> -->
        </li>
      </transition-group>
  </div>
</template>
<script>

import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'ProductList',
  data() {
    return {
      loading: false,
      highprice: 2000,
      // products: []
      // searchQuery : '', 
    };
  },
  props: {
    category: {
      type: String,
      default: false
    },
  },
  computed : {
    // ...mapState({
    //   products: state => state.products
    // }),
    // filtered () {
    //     return this.$store.state.products.filter.filter(function(item){
    //         // 
    //         return item.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
    //     }.bind(this));
    // },
    products() {
      return this.$store.state.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice)
    },
    ...mapGetters({
      productInStock: 'productInStock',
      // // availableProducts: 'availableProducts',
    })
  },
  // computed: {
  //   products() {
  //     return this.$store.state.products
  //   },
  //   productInStock() {
  //     return this.$store.getters.productInStock
  //   }
  // },
  created() {
    // let uid = this.$store.getters.currentUser;
      // console.log('uid: name', uid);
      // console.log('uid: ', uid);
      //  this.listenToProductList();
      // this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    // shop.getProducts(products => {
    //   // this.products = products;
    //   store.commit('setProducts',products)
    // });
    this.loading = true;
    // this.$store.dispatch('fetchProducts')
    this.fetchProducts().then(() => this.loading = false);
  },
  methods : {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart',
    }),
    // addProductToCart(product) {
    //   this.$store.dispatch('addProductToCart',product)
    // }
  }
}
</script>
<style lang="css">
.container { position: relative;width: 100%; }
/* .image {
  display: block;
  width: 100%;
  height: auto;
} */
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    left: 0;
    right: 0;
    max-height: 228px;
    width: 100%;
    opacity: 0;
    -webkit-transition: .5s ease;
    transition: .5s ease;
    background-color: rgba(0, 0, 39, 0.5);
}
.container:hover .overlay {
  opacity: 1;
}
.text {
color: white;
    /* font-weight: bold; */
    font-size: 11px;
    /* padding-top: 40%; */
    /* padding-bottom: 40%; */
    /* width: 100%; */
    padding: 20px;
    font-family: Bungee;
    align-content: ;
    margin: 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    /* justify-content: center; */
    /* align-items: center; */
    /* top: 50%; */
    align-content: center;
    height: 100%;
    /* left: 50%; */
    /* -webkit-transform: translate(-50%, -50%); */
    /* transform: translate(-50%, -50%); */
    text-align: center;
}
.sale-banner {
  border-radius: 7px 0px;
    background: rgb(232, 35, 25);
    color: white;
    font-family: sans-serif;
    position: absolute;
    padding: 2px 10px 4px;
    text-transform: uppercase;
    font-size: 13px;
    z-index: 1;
    font-weight: 700;
}
.out-of-stock-banner {
  border-radius: 7px 0px;
  background: #505050;
  color: #f9f9f9;
  font-family: sans-serif;
  position: absolute;
  padding: 2px 10px 4px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  z-index: 99;
}
 .add-to-cart-btn {
   opacity: 0;
 }
 @media (max-width: 600px) {
   .add-to-cart-btn {
     opacity: 1;
   }
 }
 .product-card:hover, .product-card:focus  {
   box-shadow: 1px 0rem 14px 0px #eee;
   outline: none;
 }
 .product-card:hover .add-to-cart-btn{
   opacity: 1;
 }
/* For keyboard controls */
 .product-card:focus .add-to-cart-btn {
   opacity: 1;
 }
 .add-to-cart-btn:focus {
   opacity: 1;
 }
 .product-title {
   margin-top: 15px;
   margin-bottom: 5px;
 }
 .product-description {
    margin-top: -3px;
    width: 50%;
    font-size: 10px;
    font-family: Helvetica Neue;
    color: rgba(110, 110, 110, 0.773);
    margin-bottom: 10px;
 }
 .product-price {
   font-weight: bold;
 }
 .product-card.out-of-stock {
   pointer-events: none;
 }
 .product-card.out-of-stock button {
   display: none;
 }
 .product-card.out-of-stock img {
   opacity: 0.6;
 }
 .product-card.out-of-stock .product-price,  .product-card.out-of-stock .product-title{
   opacity: 0.6;
 }
</style>
