<template>
  <div class="product-list-feature">
    
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
    <!-- <div v-if="products.length > 1"> -->
    
    <!-- {{products}} -->
  <div class="each-store-feature" v-for="store in stores" :key="store.store_id" >
      <!-- <div v-if="emptyStoreIndex.includes(index)"> -->
        
      <!-- <h1  id="store-title" class="list-items-title"><img :src='`./stores/static/${store.store_id}/logo.svg`' class="company-svg">{{store.store_name}}<hr class="hr-product-list"></h1> -->
      <a class="see-more-caption-feature">see more</a>
      <h1  class="store-caption-feature">
        {{store.feature_caption}}
      <hr class="hr-featured">
      </h1>
      <h2 class="store-title-feature">{{store.store_name}}</h2>
      <ul id="store-list-feature">
          <li v-for="product in products"  :track-by="product.product_id" class="product-card-feature" :class="[ !productInStock(product) ? 'out-of-stock' : '' ] " tabindex="0">
            <div v-if="store.store_id == product.store_id && product.feature == true">
              <span class="sale-banner-feature" v-if="product.sale">Sale</span>
              <span class="out-of-stock-banner-feature" v-show="!productInStock(product)">Out of Stock</span>
                <div class="product-list-container-feature">
                  <div class="favorite-svg">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M986.8,312.3C966.5,166.1,838.4,66.5,702.6,66.5c-41.6,0-84,9.4-124.1,29.6c-28.2,14.2-53.5,34.3-81.6,52.7c0,0-1.8-1.4-3.5-3c-55.5-52.2-125.8-79.2-197-79.2c-49,0-98.4,12.8-143.6,38.9C49,165.6-6.2,283.9,14.2,401.9c11.7,67.8,44.7,123.9,92.5,172c90.2,90.9,246.2,247.7,332.1,334c16.9,17,39.1,25.5,61.3,25.5c22.1,0,44.3-8.5,61.2-25.4c88.2-88.3,250.4-251.4,344.1-348C971.4,492,1000.1,407.8,986.8,312.3z M854.8,510.3C745.5,623,549.6,819.3,511.5,857.5c-3.9,3.9-8.4,4.7-11.4,4.7c-3,0-7.5-0.8-11.4-4.8c-85.9-86.3-241.8-243-332-333.9c-40.5-40.8-64.3-84.6-72.8-133.9C68.6,301.5,110.5,212.1,188,167.3c33.3-19.3,70.8-29.5,108.4-29.5c54.8,0,107.6,21.3,148.7,60c18.1,17.1,36.1,22.3,51.3,22.3c19.5,0,34.4-8.6,38.9-11.5c9.6-6.3,18.9-12.7,28-19.1c16.5-11.5,32-22.3,46.8-29.7c29.1-14.7,60.2-22.1,92.5-22.1c107.5,0,199.6,79.3,214.2,184.4C927,395.2,906.7,456.7,854.8,510.3z"/></g></svg>
                  </div>
                  <img :src="`./stores/static/${store.store_id}/images/${product.img}`" :alt="`image of ${product.title}`">
                  <div class="overlay-feature">
                    <div class="text-feature">
                      {{product.description}}
                    </div>
                  </div>
                </div>
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
import ButtonPress from '../elements/ButtonPress'
export default {
  name: 'FeatureList',
  data() {
    return {
      loading: false,
      highprice: 2000,
      emptyStoreIndex: []
    };
  },
  computed : {
    
    stores() { return this.$store.state.stores },
      
    products() {
        this.emptyStoreIndex = []
        const CurrentCartItems = [];
        const firebaseCart = this.$store.state.cart.map(x => x.product);
        this.$store.state.stores.forEach(storeItems => { 
          CurrentCartItems.push(storeItems.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice).map(x => x)) 
        });
           CurrentCartItems.forEach((items, index) => { 
             items.forEach(products => {
               if (products.feature != false) {
                  if (products.length > 1) { 
            this.emptyStoreIndex.push(index);
            } 
               
               }
          })
             })
             
    
        return [...new Set(Array.prototype.concat.apply([], CurrentCartItems).map(item => firebaseCart.find(item2 => item.product_id === item2.product_id) || item))]
    },
    ...mapGetters({productInStock: 'productInStock',})
  },
  

  created() {
    
    

    this.loading = true; 
   this.fetchStores().then(() => {
     this.loading = false; 
   }); // setTimeout(() => {}, 630);
    

  },
  
  
  methods : {
    ...mapActions({
      fetchStores: 'fetchStores',
      addProductToCart: 'addProductToCart',
    }),
  },
  components : {
    ButtonPress
  }
}
</script>

<style lang="css" scoped>
li:empty{display:none}
ul:empty{display:none} 


.hr-featured {
    height: 12px;
    /* color: rgba(0, 0, 0, .005); */
    border: none;
    border-radius: 0px;
    margin-bottom: 27px;
    margin-top: -23px;
    background: rgba(0, 0, 0, .08);
    width: 100%;
}

.favorite-svg {
width: 23px;
    z-index: 1;
    top: 0;
    height: 23px;
    padding: 2px;
    margin: 4px;
    right: 0;
    fill: white;
    position: absolute;
    display: block;
}





.store-title-feature {
    font-size: 12px;
    display: table-footer-group;
    position: absolute;
    margin-top: -27px;
    text-transform: capitalize;
    float: left;
    font-weight: 500;
    font-family: Lato;
}

.see-more-caption-feature {
    margin-top: 6px;
    cursor: pointer;
    text-transform: capitalize;
    color: var(--text-feature-primary);
    font-size: 10px;
    float: right;
    color: var(--blue-dark);
    font-family: OverPass;
}
.see-more-caption-feature:hover {
  color: var(--text-feature-hover);
}
#store-list-feature ul:empty{display:none}

.company-svg{width:2.8rem;min-width:1.8rem;filter:grayscale(.6) brightness(1.8) saturate(2) contrast(.8);margin:0 8px -11px 3px}
.takeout{display:none}
.product-list-container-feature
{display:grid;position:relative;width:100%;

    border-radius: 2px;
box-shadow: 1px 2px 4px 0px rgba(0,0,0,.4);
}
.store-caption-feature{
text-align: left;
    font-size: 13px;
    letter-spacing: 0px;
    font-weight: 500;
    line-height: 45px;
    /* font-weight: 900; */
    color: var(--text-feature-primary);
    /* font-family: 'Prata'; */
    /* text-shadow: 3px 2px 0px var(--bg-primary);*/
  } 

.product-list-container-feature:hover .overlay-feature{opacity:1}
/* .text-feature{color:#fff;font-size:15px;font-family:Bungee;margin:0 auto;display:inline-flex;align-items:center;justify-content:center;position:relative;align-content:center;height:100%;text-align:center; width: 100%;} */
.sale-banner-feature{border-radius:2px 0;background:#e82319;color:#fff;font-family:sans-serif;position:absolute;padding:4px 10px 5px;text-transform:uppercase;left:0;top:0;font-size:12px;font-weight:700;z-index:1}
.out-of-stock-banner-feature{border-radius:2px 0;background:#505050;color:#f9f9f9;font-family:sans-serif;position:absolute;padding:4px 10px 5px;text-transform:uppercase;left:0;top:0;font-size:12px;font-weight:700;z-index:1}
.product-card-feature:hover,.product-card-feature:focus{outline:none}
.product-description{width:100%;padding:3px 20px 3px;font-size:11px;font-family:Helvetica Neue;color:rgba(110,110,110,0.773);
}

.product-card-feature.out-of-stock{pointer-events:none}
.product-card-feature.out-of-stock button{display:none}

.product-card-feature.out-of-stock img{opacity:.6}

.content-wrapper {
  
  padding: 20px 15px;
}

  .product-list-feature ul {
    grid-template-columns: none ;
    
    display: flex;
    padding: 0;
    overflow: scroll;
    padding-bottom: 15px;
  }
  .product-card-feature img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    border-radius: 2px;
    height: 100%;
  }
  .product-list-container-feature {
    cursor: pointer;
    width: 150px;
    height: 129px;
  }
  .overlay-feature {
      position:absolute;
  top:0;
  padding:8%;
  bottom:0;border-radius:2px;left:0;right:0;
  width:100%;opacity:0;-webkit-transition:var(--animation-speed-primary-faster) ease-in-out;transition:var(--animation-speed-primary-faster) ease-in-out;background-color:rgba(0,0,39,0.5);
  
    height: 129px;
    width: 100%;
  }
  .text-feature{color:#fff;font-size:12px;font-family:Bungee;margin:0 auto;display:inline-flex;align-items:center;justify-content:center;position:relative;align-content:center;height:100%;text-align:center; width: 100%;}
  .product-card-feature {
    display: -webkit-box;
    display: -ms-flexbox;
    -ms-flex-direction: column;
    position: relative;
    padding-right: 30px;
    height: 139px;

  }
  
  
</style>
