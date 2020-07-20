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
      <div id="each-store-feature" v-for="store in stores" :key="store.store_id" >
      <a class="see-more-caption-feature">see more</a>
      <h1  class="list-items-title-feature">
        {{store.store_name}}
      <hr>
      </h1>
      <h2 class="store-caption-feature">{{store.feature_caption}}</h2>
      <ul id="store-list-feature">
          <li v-for="product in products" :key="product.product_id" :track-by="product.product_id" class="product-card-feature" :class="[ !productInStock(product) ? 'out-of-stock' : '' ] " tabindex="0">
            <div v-if="store.store_id == product.store_id && product.feature == true">
              <span class="sale-banner-feature" v-if="product.sale">Sale</span>
              <span class="out-of-stock-banner-feature" v-show="!productInStock(product)">Out of Stock</span>
                <div class="product-list-container-feature">
                  <img :src="`./stores/static/${store.store_name.toLowerCase()}/images/${product.img}`" :alt="`image of ${product.title}`">
                    <div class="overlay-feature">
                      <div class="text-feature">{{product.description}}</div>
                    </div>
                </div>
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
  name: 'FeatureList',
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

<style lang="css" scope>
.store-caption-feature {
    font-size: 12px;
    display: table-footer-group;
    position: absolute;
    margin-top: -27px;
    text-transform: capitalize;
    float: left;
    font-weight: 500;
    font-family: Lato;
}
.see-more-caption-feature:hover {
  color: var(--text-feature-hover);
}
.see-more-caption-feature {
  margin-top: 12px;
  cursor: pointer;
  text-transform: capitalize;
      color: var(--text-feature-primary);
  font-size: 10px;
  float: right;
  font-family: lato;
}
#store-list-feature ul:empty{display:none}





.company-svg{width:2.8rem;min-width:1.8rem;filter:grayscale(.6) brightness(1.8) saturate(2) contrast(.8);margin:0 8px -11px 3px}
.takeout{display:none}
.product-list-container-feature
{display:grid;position:relative;width:100%;

    border-radius: 2px;
box-shadow: 1px 2px 4px 0px rgba(0,0,0,.4);
}
.list-items-title-feature{
 text-align: left;
    font-size: 18px;
    font-weight: 700;
    margin-top: -15px;
    line-height: 45px;
    font-weight: 900;
    color: var(--text-feature-primary);
    font-family: 'Prata';
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
/* @media (max-width: 600px) { */

  
  .product-list-feature ul {
    grid-template-columns: none ;
    
    display: flex;
    padding: 0;
    overflow: scroll;
    margin-bottom: 20px;
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
/* } */


</style>
