<template>
  <div class="shopping-cart">
    <div v-if="$store.state.cart.length <= 0" class="empty-cart">
      <p>Your cart is currently empty. 😱</p>
      <router-link to="/"><button>Shop Now!</button></router-link>
    </div>
    <div v-else class="shopping-cart-items">
      <ul>
        <li v-for="product in products" class="cart-product-card">
          <img :src="`./static/images/${product.img}`" :alt="`Image of ${product.title}`">
          <div class="cart-detail">
            
          <p class="product-title">{{product.title}}</p>
          <p class="product-description"> {{product.description }}</p>
          <p class="product-price"> {{product.price | currency}} X {{product.quantity}} </p>
          
          
        <div class="quantity">
          <a @click="subtractCartItem(product)" href="#" class="quantity__minus" ><span>-</span></a>
          <!-- <p name="quantity" type="text" class="quantity__input" :value="`${product.quantity}`">{{product.quantity}}</p> -->
          <a @click="addCartItem(product)" href="#" class="quantity__plus"><span>+</span></a>
        </div>
          </div>
        
        </li>
      </ul>
      <div class="cart-checkout">
        <h3>Cart total : </h3>
        <p>{{ total | currency}}</p>
        <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button> -->
        <!-- <p class="status" v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p> -->
        <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button> -->
        <!-- <p class="status" v-if="checkoutStatus">{{checkoutStatus}}</p> -->
         <button type="checkbox" @click="checkout">Checkout</button>
        <p class="status" >{{checkoutStatus}}</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'ShoppingCart',
  
  computed: { 
    ...mapGetters({ products:'cartProducts', total:'cartTotal', currentUser : 'currentUser',}), 
    ...mapState({ checkoutStatus: 'checkoutStatus' }) 
    },
    
  methods: { 
    ...mapActions({ checkout: 'checkout', addCartItem: 'addCartItem', subtractCartItem: 'subtractCartItem'}), 
  },
 
}
</script>

<style lang="css" scoped>



.quantity {
/* margin: px; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    /* border-radius: 6px; */
    /* -webkit-box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.2); */
}

.quantity__minus,
.quantity__plus {
display: block;
    width: 34px;
    border-radius: 5px;
    height: 34px;
    margin: 6px;
    background: var(--text-floogle);
    text-decoration: none;
    text-align: center;
    line-height: 34px;
}
.quantity__minus:hover,
.quantity__plus:hover {
  background: var(--blue-primary);
  color: var(--text-floogle);
} 
/* .quantity__minus {
border-radius: 4px 0 0 6px;
}
.quantity__plus {
  border-radius: 0 6px 6px 0;
} */

.quantity__input {
  margin: 0px 14px 0px 14px;
    font-size: 16px;
    font-family: 'Overpass';
}
/* .quantity__input {
    width: 32px;
    height: 23px;
    margin: 0;
    padding: 0;
    text-align: center;
    border-top: 2px solid #dee0ee;
    border-bottom: 2px solid #dee0ee;
    border-left: 1px solid #dee0ee;
    border-right: 2px solid #dee0ee;
    color: #8184a1;
} */
.quantity__minus:link,
.quantity__plus:link {
  color: #8184a1;
} 
.quantity__minus:visited,
.quantity__plus:visited {
  color: #fff;
}

.card-image {
	display: block;
	min-height: 20rem; /* layout hack */
	background: #fff center center no-repeat;
	background-size: cover;
	filter: blur(3px); /* blur the lowres image */
}

.card-image.is-loaded {
	filter: none; /* remove the blur on fullres image */
	transition: filter 1s;
}

/* 
.card-list {
	display: block;
	margin: 1rem auto;
	padding: 0;
	font-size: 0;
	text-align: center;
	list-style: none;
}
 */

.cart-detail {
  margin: 15px;
}

.empty-cart {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-45%);
}

.empty-cart p {
  margin-bottom: 30px;
}

.shopping-cart-items {
  display: flex;
  flex-direction: row;
}

ul {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 800px;
    -webkit-box-flex: 10;
    -ms-flex: 10;
    flex: 10;
    /* padding: 41px; */
    padding-left: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.cart-checkout {
  flex: 1;
  justify-content: center;
}

.cart-checkout p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
}

.cart-product-card {
    align-items: center;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-right: 48px;
    overflow: hidden;
    width: 210px;
    background: var(--bg-primary);
    margin-bottom: 40px;
    border-radius: 2px;
    /* padding-bottom: 20px; */
    box-shadow: 2px 3px 4.5px .5px rgba(0,0,0,0.3);
    -webkit-transition: -webkit-transform 0.25s ease-in-out, -webkit-box-shadow 0.25s;
    transition: -webkit-transform 0.25s ease-in-out, -webkit-box-shadow 0.25s;
    transition: transform 0.25s ease-in-out, box-shadow 0.25s;
    transition: transform 0.25s ease-in-out, box-shadow 0.25s, -webkit-transform 0.25s ease-in-out, -webkit-box-shadow 0.25s;
}

.cart-product-card:hover {
	transform: translateY(-0.3rem) translateX(-0.3rem) scale(1.0125);
	box-shadow: 6px 6px 1.5px 0px rgba(0,0,0,0.2);
  border-radius: 2px;
	/* box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5); */
}

.product-price {
  margin-bottom: 5px;
}

img {
    width: 100%;
    height: 209px;
    /* border-radius: 8px; */
}

@media(max-width: 600px) {
  .cart-product-card {
    width: 240px;
  }
  
  .cart-product-card {
	box-shadow: 6px 6px 1.5px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
}
.cart-product-card:hover {
	transform: none;
}
 
  .quantity__minus, .quantity__plus {
display: block;
    width: 44px;
    border-radius: 24px;
    height: 44px;
    font-size: 22px;
    margin: 12px 12px 12px 12px;
    background: var(--text-floogle);
    text-decoration: none;
    text-align: center;
    line-height: 44px;

  }  
  .shopping-cart-items {
    flex-direction: column;
  }
  
img {
   width: 100%;
    height: 219px;
    /* border-radius: 8px; */
}
  .cart-product-card {
    margin-right: 0px;
  }
  ul {
    justify-content: space-around;
  }
/* 
  img {
    width: auto;
  } */
}
</style>
