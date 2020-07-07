<template>
  <div class="product-list">

      <div id='preloader' v-if="loading">
        <div class='preloader loading spinner'>
          <span class='slice'></span>
          <span class='slice'></span>
          <span class='slice'></span>
          <span class='slice'></span>
          <span class='slice'></span>
          <span class='slice'></span>
        </div>
      </div>
      
      <transition-group name="card" tag="div" v-else>
      <div class="eachstore" v-for="(store, key) in stores" :key="key" >
        <h1>{{store.store_name}}</h1>
        <hr>
          <ul>
          <li v-for="product in products" :key="product.product_id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ]" tabindex="0" v-show="category === product.category || category === 'allproducts'">
              <div v-if="store.store_id == product.store_id">
              <span class="sale-banner" v-if="product.sale">Sale</span>
              <span class="out-of-stock-banner" v-show="!productInStock(product)">Out of Stock</span>
              <div class="product-list-container">
                <img :src="`./stores/static/${store.store_name.toLowerCase()}/images/${product.img}`" :alt="`image of ${product.title}`">
                  <div class="overlay">
                    <div class="text">{{product.description}}</div>
                  </div>
                    <button @click="addProductToCart(product)" class="add-to-cart-btn" id="buttonToggle">Add to cart</button>
              </div>
              <span class="product-store">{{store.store_name}}</span>
              <br>
              <span class="product-title">{{product.title}}</span>
              <span class="product-price"> {{product.price | currency}}</span>
            </div>
            </li>
          </ul>
      </div>
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
    };
  },
  props: {
    category: {
      type: String,
      default: false
    },
  },
  
  computed :{
       stores() { return this.$store.state.stores },
      products() {
      // return this.$store.state.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice);
      const mainJsonCart = this.$store.state.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice).map(x => x)
      const firebaseCart = this.$store.state.cart.map(x => x.product)
      const replacedResult = mainJsonCart.map(item =>  firebaseCart.find(item2 => item.product_id === item2.product_id) || item)
      return replacedResult
    },
    ...mapGetters({
      productInStock: 'productInStock',
    })
  },
 
  created() {
    this.loading = true; 
    this.fetchProducts().then(() => {
      this.fetchStores().then(() => {
      this.loading = false; 
      })
    })
  },
  
  methods : {
    ...mapActions({
      fetchStores: 'fetchStores',
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart',
    }),
  }
}

</script>
<style lang="css">

.product-list-container { position: relative;width: 100%; }

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 2px;
    left: 0;
    right: 0;
    max-height: 228px;
    width: 100%;
    opacity: 0;
    -webkit-transition: .5s ease;
    transition: .5s ease;
    background-color: rgba(0, 0, 39, 0.5);
}
.product-list-container:hover .overlay {
  opacity: 1;
}

.eachstore {
  display: block;
}

.text {
color: white;
    /* font-weight: bold; */
    font-size: 15px;
    /* padding-top: 40%; */
    /* padding-bottom: 40%; */
    /* width: 100%; */
    padding: 20px;
    font-family: Bungee;
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
border-radius: 2px 0px;
    background: rgb(232, 35, 25);
    color: white;
    font-family: sans-serif;
    position: absolute;
    padding: 4px 10px 5px;
    text-transform: uppercase;
    left: 0;
    top: 0;
    font-size: 12px;
    font-weight: 700;
    z-index: 1;
}
.out-of-stock-banner {
    border-radius: 2px 0px;
    background: #505050;
    color: #f9f9f9;
    font-family: sans-serif;
    position: absolute;
    padding: 4px 10px 5px;
    text-transform: uppercase;
    left: 0;
    top: 0;
    font-size: 12px;
    font-weight: 700;
    z-index: 1;
}

/* 
#buttonToggle {
  display: none;
} */
 .add-to-cart-btn {
   z-index: 0;
    display: block;
    opacity: 0;
    margin-top: -45px;
 }
 @media (max-width: 600px) {
   .add-to-cart-btn {
     opacity: 1;
     margin-top: 12px
   }
   
 }
 .product-card:hover, .product-card:focus  {
  
   outline: none;
 }
 .product-card:hover .add-to-cart-btn{
   overflow: hidden;

   transition: margin-top .3s, opacity .5s;
   opacity: 1;
   margin-top: 12px;
   display: block;
 }

 .product-title {
   /* margin-top: 10px; */
   margin-bottom: 8px;
 }
 .product-description {
    margin-top: -3px;
    width: 100%;
    padding: 0px 20px 0px 20px;
    font-size: 11px;
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
 
 li:empty {
   display: none;
 }
 
</style>
