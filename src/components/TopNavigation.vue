<template>
    <nav>
      <router-link to="/" exact>
        <div class="logo"><logo></logo><p>XOTOSPHERE</p></div>
      </router-link>
      
      <span v-for="product in products">
          <router-link class="router-links" :to="`${product}`">{{product}}</router-link>
      </span>
      <!-- <router-link to="/decor">Decor</router-link> -->
      <div class="nav-link">
        <router-link to="/cart" exact>
        <div class="cart-link">
          <div v-if="noItems > 0" class="cart-link__count">{{ noItems }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
            <title id="cart">
              Shopping Cart
            </title>
            <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
          </svg>
        </div>
        </router-link>
      </div>
    </nav>
</template>

<script>
import index from '@/store/index'
import logo from '@/assets/logo'

export default {
  
  
  
  name:'TopNavigation',
  components: {
    logo
  },
  computed: {
        
    products() {
      // // console.log('wow', );
      
      // this.$store.state.products.forEach((item) => {
      //   // console.log('item: ', );
        
      //   console.log('item.categlory: ', item.category);
        
      //   if (item.category)
        
      // })
      
      // this.$store.state.products.category;
      // console.log('this.$store.state.products.category;: ', this.$store.state.products.category);
      
      // forach
      
         var arr = []; 
      
      this.$store.state.products.forEach((item) => {
        // console.log('item: ', item);
        //  var cool = [...new Set(item)]
        //  console.log('cool:/*  */ ', item.category);
         
         
         arr.push(item.category)

        
      })
      
             var cool = arr.filter((v, i, a) => a.indexOf(v) === i); 
             console.log('cool: ', cool);
             return cool; 
      // console.log('unique: ', unique);
      // var unique = this.$store.state.products.filter((v, i, a) => a.indexOf(v) === i); 
      // console.log('unique: ', unique);

      
//   function onlyUnique(value, index, self) { 
//     return self.indexOf(value) === index;
// }

      
    // //  var acool = this.$store.state.products.filter(el => this.$store.state.sale ? el.price < this.$store.state.highprice && el.sale : el.price < this.$store.state.highprice)
    //  var acool = this.$store.state.products.filter((el) => {
    //   // el.category 
    //   console.log('el.category : ', el.category );
    //   // var va[...new Set(el.category)]
      
     
    //  }); 
    //  console.log('el.category: ', );
     
    //  console.log('acool: ', acool);
    //  retrun[...new Set(acool.categlory)]
      // return 
    },
    
    
    
    
    noItems() {
      return this.$store.state.cartItems
    }
  }
}
</script>

<style lang="css">

.router-links {
font-family: 'Roboto Condensed', sans-serif;
    padding: 12px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    text-transform: capitalize;
    color: black;
}
nav {
  box-shadow: 1px 0rem 14px 0px #eee;
  width: 100%;
  padding: 24px;
  position: fixed;
  height: 66px;
  background-color: #fff;
  z-index: 99;
}

nav > a {
  font-size: 16px;
  color: #131313;
  font-weight: bold;
  text-decoration: none;
  margin-right: 50px;
  letter-spacing: 0.5px;
}

nav a:hover {
  opacity: 0.7;
}

nav a.router-link-active {
  color: #5044ff;
}

.logo {
    float: left;
    position: relative;
    top: -7px;
    color: mediumpurple;
    font-size: x-small;
}

.logo svg {
  width: 40px;
  height: 40px;
}

@media(max-width: 600px) {
  nav {
    padding: 20px;
  }

  nav > a {
    margin-right: 20px;
  }
}

.nav-link {
  display: inline;
}

.cart-link {
  float: right;
  position: relative;
}

.cart-link__count {
  position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    top: -8px;
    right: -5px;
    /* text-align: center; */
    background: #5044ff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
}
</style>
