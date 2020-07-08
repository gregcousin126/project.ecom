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
      <div id="each-store" v-for="(store, key) in stores" :key="key" >
      <h1 id="store-title">{{store.store_name}}<hr></h1>
      <ul id="store-list">
          <li v-for="product in products" :key="product.product_id" :track-by="product.product_id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ] " tabindex="0" v-show="category === product.category || category === 'allproducts'">
            
            
            
            
            
          <!-- <li v-for="(product, key ) in products" :key="product.product_id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ]" tabindex="0" v-show="category === product.category || category === 'allproducts'"> -->
            <div v-if="store.store_id == product.store_id" id="main-list">
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

      // const prod_id = [...new Set(productResult.map(x => x.store_id))];
      // const store_id = this.$store.state.stores.map(x => x.store_id)
      // var difference = store_id.filter(x => !prod_id.includes(x));
      // console.log('difference: ', difference);
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
      this.fetchStores().then(() => {})
      setTimeout(() => { this.loading = false;}, 630);
    // }
    //       document.getElementById("pricerange").addEventListener("change", function() {
          // var store = document.getElementById("each-store");
    //       var fname = document.getElementById("pricerange").value;
    //       console.log('inputval: ', fname);
    //    console.log('store: ', store);
    // store.removeChild(store.childNodes[0]);
    //       });
		
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

@import url('https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800, 800i, 900&display=swap');



.container { position: relative;}
.container .card { position: relative;width: 320px;height: 450px;background: #232323;border-radius: 20px;overflow: hidden;}
.container .card:before { content: "";position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: #1BBFE9;clip-path: circle(150px at 80% 20%);transition: 0.5s ease-in-out;}
.container .card:hover:before { clip-path: circle(300px at 80% -20%);}
.container .card:after { content: "Nike";position: absolute;top: 30%;left: -20%;font-size: 12em;font-weight: 800;font-style: italic;color: rgba(255, 255, 255, 0.04);}
.container .card .imgBx { position: absolute;top: 50%;transform: translateY(-50%);z-index: 1000;width: 100%;height: 100%;transition: .5s;}
.container .card:hover .imgBx { top: 0%;transform: translateY(-25%);/* bug  */ }
.container .card .imgBx img { position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%) rotate(20deg);width: 270px;}
.container .card .contentBx { position: absolute;bottom: 0;width: 100%;height: 100px;text-align: center;transition: 1s;z-index: 90;}
.container .card:hover .contentBx { height: 210px;}
.container .card .contentBx h2 { position: relative;font-weight: 600;letter-spacing: 1px;color: #fff;}
.container .card .contentBx .size,
.container .card .contentBx .color { display: flex;justify-content: center;align-items: center;padding: 8px 20px;transition: .5s;opacity: 0;visibility: hidden;}
.container .card:hover .contentBx .size { opacity: 1;visibility: visible;transition-delay: .5s;}
.container .card:hover .contentBx .color { opacity: 1;visibility: visible;transition-delay: .6s;}
.container .card .contentBx .size h3,
.container .card .contentBx .color h3 { color: white;font-weight: 300;font-size: 14px;text-transform: uppercase;letter-spacing: 2px;margin-right: 10px;}
.container .card .contentBx .size span { width: 26px;height: 26px;text-align: center;line-height: 26px;font-size: 14px;display: inline-block;color: #111;background: #fff;margin: 0 5px;transition: .5s;color: #111;border-radius: 4px;cursor: pointer;}
.container .card .contentBx .size span:hover {  /* other bug */ background: #B90000;}
.container .card .contentBx .color span { width: 20px;height: 20px;background: #ff0;border-radius: 50%;margin: 0 5px;cursor: pointer;}
.container .card .contentBx .color span:nth-child(2) { background: #1BBFE9;}
.container .card .contentBx .color span:nth-child(3) { background: #1B2FE9;}
.container .card .contentBx .color span:nth-child(4) { background: #080481;}
.container .card .contentBx a { display: inline-block;padding: 10px 20px;background: #fff;border-radius: 4px;margin-top: 10px;text-decoration: none;font-weight: 600;color: #111;opacity: 0;transform: translateY(50px);transition: .5s;}
.container .card:hover .contentBx a { opacity: 1;transform: translateY(0px);transition-delay: .7s;} 

/* end */







.takeout{
  display: none;
}

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
 
 
ul:empty {
  display: none;
}

#store-list ul:empty {
  display: none;
}

 
</style>
