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
      <h1  id="store-title" class="list-items-title"><img :src='`./stores/static/${store.store_name.toLowerCase()}/logo.svg`' class="company-svg">{{store.store_name}}<hr></h1>
      <ul id="store-list">
          <li v-for="product in products" :key="product.product_id" :track-by="product.product_id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ] " tabindex="0" v-show="category === product.category || category === 'all-products'">
            <div v-if="store.store_id == product.store_id" id="main-list">
              <span class="sale-banner" v-if="product.sale">Sale</span>
              <span class="out-of-stock-banner" v-show="!productInStock(product)">Out of Stock</span>
                <div class="product-list-container">
                  <img :src="`./stores/static/${store.store_name.toLowerCase()}/images/${product.img}`" :alt="`image of ${product.title}`">
                    <div class="overlay">
                      <div class="text">{{product.description}}</div>
                    </div>
                </div>
                  <a @click="addProductToCart(product)" ontouchstart="" class="add-to-cart-btn">
                    <ButtonPress @click="addProductToCart(product)"  text="Add" id="buttonToggle"/>
                    <ButtonPress @click="addProductToCart(product)"  text="View" id="buttonToggle"/>
                  </a>
                <span class="product-title">{{product.title}}</span><br>
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
import ButtonPress from '../elements/ButtonPress'

export default {
  name: 'ProductList',
  
    props: {
    category: {
      type: String,
      default: false
    },
  },
  
  data() {
    return {
      loading: false,
      highprice: 2000,
    };
  },
  
  computed : {
      stores() { return this.$store.state.stores },
      products() {
      const mainJsonCart = this.$store.state.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice).map(x => x)
      const firebaseCart = this.$store.state.cart.map(x => x.product)
      const replacedResult = mainJsonCart.map(item =>  firebaseCart.find(item2 => item.product_id === item2.product_id) || item)
      const productResult = [...new Set(replacedResult)]
      return productResult
    },
    
    ...mapGetters({productInStock: 'productInStock',})
  },
  
  created() {
    this.loading = true; 
    this.fetchProducts().then(() => {this.fetchStores().then(() => {}); this.loading = false; }) // setTimeout(() => { }, 630);
  },
  
  methods : {
    ...mapActions({
      fetchStores: 'fetchStores',
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart',
    }),
  },
  components : {
    ButtonPress
  }
  
}

</script>
<style lang="css">
li:empty{display:none}
ul:empty{display:none}
#store-list ul:empty{display:none}

.company-svg{width:2.8rem;min-width:1.8rem;filter:grayscale(.6) brightness(1.8) saturate(2) contrast(.8);margin:0 8px -11px 3px}
.takeout{display:none}
.product-list-container{
  
  display:grid;position:relative;width:100%;margin-bottom:13px}
.list-items-title{text-align:left;margin-bottom:20px;font-size:19px;font-weight:700;top:-30px;margin-top:-10px;line-height:59px;font-weight:900;color:var(--text-primary);font-family:Mellody}
.overlay{position:absolute;top:0;padding:8%;bottom:0;border-radius:2px;left:0;right:0;max-height:228px;height:228px;width:100%;opacity:0;-webkit-transition:var(--animation-speed-primary-faster) ease-in-out;transition:var(--animation-speed-primary-faster) ease-in-out;background-color:rgba(0,0,39,0.5)}
.product-list-container:hover .overlay{opacity:1}
.text{color:#fff;font-size:15px;font-family:Bungee;margin:0 auto;display:inline-flex;align-items:center;justify-content:center;position:relative;align-content:center;height:100%;text-align:center; width: 100%;}
.sale-banner{border-radius:2px 0;background:#e82319;color:#fff;font-family:sans-serif;position:absolute;padding:4px 10px 5px;text-transform:uppercase;left:0;top:0;font-size:12px;font-weight:700;z-index:1}
.out-of-stock-banner{border-radius:2px 0;background:#505050;color:#f9f9f9;font-family:sans-serif;position:absolute;padding:4px 10px 5px;text-transform:uppercase;left:0;top:0;font-size:12px;font-weight:700;z-index:1}
.add-to-cart-btn{
z-index: 0;
filter: saturate(.2);
    display: -webkit-box;
    display: -ms-flexbox;
    grid-auto-flow: column;
    width: 100%;
    display:grid;
    grid-gap: 6px;
    
    -webkit-box-align: center;
    -ms-flex-align: center;
    opacity: 0;
    z-index: 0;
    
    /* align-items: center; */
    overflow: visible;
    /* margin-top: -2px; */
    place-content: auto;
    height: 30px;
    padding: 0;
    margin: 0;
    margin-bottom: -34px;
}
  
  /* z-index:0;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;opacity:0;place-content:center;overflow:visible;margin-top:-2px;height:48px;margin-bottom:-40px} */
/* #buttonToggle{margin:0 2%} */
#buttonToggle{margin:0 0%}
.product-card:hover,.product-card:focus{outline:none}
.product-card:hover .add-to-cart-btn{transition:margin-bottom var(--animation-speed-secondary-slower) ease-in-out,opacity var(--animation-speed-secondary-slower) ease-in-out;opacity:1;margin-bottom:10px}
.product-title{font-family:FoobarPro; padding-bottom: 5px;}
.product-description{width:100%;padding:3px 20px 3px;font-size:11px;font-family:Helvetica Neue;color:rgba(110,110,110,0.773);margin-bottom:10px}
.product-price{font-weight:700}
.product-card.out-of-stock{pointer-events:none}
.product-card.out-of-stock button{display:none}
.product-card.out-of-stock img{opacity:.6}
.product-card.out-of-stock .product-price,.product-card.out-of-stock .product-title{opacity:.6}

@media (max-width: 600px) {.product-title{font-size:var(--font-mobile-secondary)}.product-description{width:100%;padding:10px 20px 3px;font-size:11px;font-family:Helvetica Neue;color:rgba(110,110,110,0.773)}.product-price{font-weight:700;font-size:var(--font-mobile-secondary)}.add-to-cart-btn{opacity:1;margin-bottom:10px}}
</style>
