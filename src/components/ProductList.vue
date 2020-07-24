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
        <!-- :key="product.product_id"  -->
          <li v-for="product in products" :track-by="product.product_id" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ] " tabindex="0" v-show="category === product.category || category === 'all-products'">
            <div v-if="store.store_id == product.store_id" id="main-list">
              <span class="sale-banner" v-if="product.sale">Sale</span>
              <span class="out-of-stock-banner" v-show="!productInStock(product)">Out of Stock</span>
                <div class="product-list-container">
                                    <div class="favorite-svg">
                    
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M986.8,312.3C966.5,166.1,838.4,66.5,702.6,66.5c-41.6,0-84,9.4-124.1,29.6c-28.2,14.2-53.5,34.3-81.6,52.7c0,0-1.8-1.4-3.5-3c-55.5-52.2-125.8-79.2-197-79.2c-49,0-98.4,12.8-143.6,38.9C49,165.6-6.2,283.9,14.2,401.9c11.7,67.8,44.7,123.9,92.5,172c90.2,90.9,246.2,247.7,332.1,334c16.9,17,39.1,25.5,61.3,25.5c22.1,0,44.3-8.5,61.2-25.4c88.2-88.3,250.4-251.4,344.1-348C971.4,492,1000.1,407.8,986.8,312.3z M854.8,510.3C745.5,623,549.6,819.3,511.5,857.5c-3.9,3.9-8.4,4.7-11.4,4.7c-3,0-7.5-0.8-11.4-4.8c-85.9-86.3-241.8-243-332-333.9c-40.5-40.8-64.3-84.6-72.8-133.9C68.6,301.5,110.5,212.1,188,167.3c33.3-19.3,70.8-29.5,108.4-29.5c54.8,0,107.6,21.3,148.7,60c18.1,17.1,36.1,22.3,51.3,22.3c19.5,0,34.4-8.6,38.9-11.5c9.6-6.3,18.9-12.7,28-19.1c16.5-11.5,32-22.3,46.8-29.7c29.1-14.7,60.2-22.1,92.5-22.1c107.5,0,199.6,79.3,214.2,184.4C927,395.2,906.7,456.7,854.8,510.3z"/></g></svg>
                    
                  </div>
                  
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

.favorite-svg {
width: 23px;
    z-index: 0;
    height: 23px;
    top: 0;
    padding: 2px;
    margin: 4px;
    right: 0;
    fill: white;
    position: absolute;
    display: block;
}


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
