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
      <div id="each-store" v-for="store in stores" :key="store.store_id" >
        <!-- <div id="each-store" > -->
      <h1  id="store-title" class="list-items-title">
        
      <img :src='`./stores/static/${store.store_name.toLowerCase()}/logo.svg`' class="company-svg">
        {{store.store_name}}<hr>
        
        
        </h1>
      

      <!-- <h1 :class="[  ? 'takeout' : '' ] " id="store-title">{{store.store_name}}<hr></h1> -->
      
      <ul id="store-list">
          <li v-for="product in products" :key="product.product_id" :track-by="product.product_id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ] " tabindex="0" v-show="category === product.category || category === 'allproducts'">
            
            
            <!-- {{}} -->
            
          <!-- <li v-for="(product, key ) in products" :key="product.product_id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ]" tabindex="0" v-show="category === product.category || category === 'allproducts'"> -->
            
            <div v-if="store.store_id == product.store_id" id="main-list">
              
              <!-- {{product}} -->
              
              <span class="sale-banner" v-if="product.sale">Sale</span>
              <span class="out-of-stock-banner" v-show="!productInStock(product)">Out of Stock</span>
                <div class="product-list-container">
                  <img :src="`./stores/static/${store.store_name.toLowerCase()}/images/${product.img}`" :alt="`image of ${product.title}`">
                    <div class="overlay">
                      <div class="text">{{product.description}}</div>
                    </div>
                </div>
                    <button @click="addProductToCart(product)" class="add-to-cart-btn" id="buttonToggle">Add to cart</button>
              <!-- <span class="product-store">{{store.store_name}}</span> -->
              <span class="product-title">{{product.title}}</span>
              <br>
              <span class="product-price"> {{product.price | currency}}</span>
            </div>
            </li>
          </ul>
      </div>
   <!-- </div> -->
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
  
  computed : {
      stores() { 
        
      // console.log('mainJsonCart: ', this.$store.state.stores);
        
        
        return this.$store.state.stores
      
      
       },
      products() {
      // return this.$store.state.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice);
      const mainJsonCart = this.$store.state.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice).map(x => x)
      const firebaseCart = this.$store.state.cart.map(x => x.product)
      const replacedResult = mainJsonCart.map(item =>  firebaseCart.find(item2 => item.product_id === item2.product_id) || item)
      const productResult = [...new Set(replacedResult)]

    // const store_id = this.$store.state.stores.map(x => x.store_id)
    // const prod_id = [...new Set(productResult.map(x => x.store_id))];
    // var store = Object.assign({}, this.$store.state.stores);
     


      return productResult
    },
    

    
    ...mapGetters({
      productInStock: 'productInStock',
    })
  },
  

 
  created() {
  // var store = document.getElementById("main-list");
  // console.log('store: ', store);
      
        
    this.loading = true; 
    this.fetchProducts().then(() => {
      
      this.fetchStores().then(() => {
        
        
      })
        setTimeout(() => { 
          this.loading = false;
          
        
        }, 630);
        
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

.company-svg {
    width: 2.8rem;
    min-width: 1.8rem;
    filter: grayscale(.6) brightness(1.8) saturate(2) contrast(.8);
    margin: 0px 8px -11px 3px;
} 


.takeout{
  display: none;
}

.product-list-container { 
  display: grid;
  position: relative; width: 100%;

 }
.list-items-title {
      text-align: left;
    margin-bottom: 20px;
    font-size: 19px;
    font-weight: 700;
    top: -30px;
    margin-top: -10px;
    line-height: 59px;
    font-weight: 900;
    color: var(--text-primary);
    font-family: Mellody;
    /* font-family: 'Overpass'; */
}
.overlay {
    position: absolute;
    top: 0;
    padding: 8%;
    bottom: 0;
    border-radius: 2px;
    left: 0;
    right: 0;
    max-height: 228px;
    height: 228px;
    width: 100%;
    opacity: 0;
    -webkit-transition: .5s ease;
    transition: .5s ease;
    background-color: rgba(0, 0, 39, 0.5);
}
.product-list-container:hover .overlay {
  opacity: 1;
}

/* .each-store {
  display: block;
} */


.text {
color: white;
    /* font-weight: bold; */
    font-size: 15px;
    /* padding-top: 40%; */
    /* padding-bottom: 40%; */
    /* width: 100%; */
    /* padding: 20px; */
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
    .product-title {
    margin-bottom: 8px;
    line-height: 22px;
    font-size: var(--font-mobile-secondary);
    font-family: FoobarPro;
 }
 .product-description {
    margin-top: -3px;
    width: 100%;
    padding: 3px 20px 3px 20px;
    font-size: 11px;
    font-family: Helvetica Neue;
    color: rgba(110, 110, 110, 0.773);
    margin-bottom: 10px;
 }
 .product-price {
   font-weight: bold;
    font-size: var(--font-mobile-secondary);

 }
   .add-to-cart-btn {
     opacity: 1;
     margin-top:10px;
   }
   
 }
 .product-card:hover, .product-card:focus  {
  
   outline: none;
 }
 .product-card:hover .add-to-cart-btn{
   overflow: hidden;

   transition: margin-top var(--transition-speed-primary-faster), opacity var(--transition-speed-primary-faster);
   opacity: 1;
   margin-top: 10px;
   display: block;
 }

 .product-title {
    margin-bottom: 8px;
    line-height: 22px;
    font-family: FoobarPro;
 }
 .product-description {
    margin-top: -3px;
    width: 100%;
    padding: 3px 20px 3px 20px;
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
 
 
ul:empty {
  display: none;
}

#store-list ul:empty {
  display: none;
}

 
</style>
