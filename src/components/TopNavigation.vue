<template>
<header class="header">
<nav class="navbar" id="navbar">
  
 <ul class="navbar-nav">
      <li class="logo">
        <router-link to="/">
        <a href="#" class="nav-link"><span class="link-text logo-text">XOTOPOLO</span><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"><g class="fa-group"><path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z" class="fa-secondary"></path><path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z" class="fa-primary"></path></g></svg></a>
        </router-link>
      </li>
      
      <li class="nav-item" v-if="JSON.stringify(currentUser) !== '{}'">
         <router-link to="/register">
        <a  class="nav-link"  >
          <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-cat fa-w-16 fa-9x"><g class="fa-group"><path fill="currentColor" d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z" class="fa-secondary"></path><path fill="currentColor" d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z" class="fa-primary"></path></g></svg>
          <span class="link-text">Hi, {{currentUser.displayName}}</span>
        </a>
        </router-link>
      </li>
      
      <li class="nav-item" v-if="JSON.stringify(currentUser) === '{}'">
          <router-link  to="/signin">
        <a class="nav-link"  >
          <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-cat fa-w-16 fa-9x"><g class="fa-group"><path fill="currentColor" d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z" class="fa-secondary"></path><path fill="currentColor" d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z" class="fa-primary"></path></g></svg>
          <span class="link-text">Login</span>
        </a>
        </router-link>
      </li>
        
      
      <li class="nav-item" >
        <router-link to="/cart" >
        <a class="nav-link"  >
          <div v-if="noItems > 0" class="cart-link__count" id="link__count__regular">{{ noItems }}</div>
          <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-station-moon-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x" ><g class="fa-group"><path fill="currentColor" d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z" class="fa-secondary" ></path><path fill="currentColor" d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z" class="fa-primary" ></path></g></svg>
          <!-- <i class="fas fa-shopping-basket fa-w-2 fa-3x"></i> -->
          <span class="link-text">Cart</span>
        </a>
        </router-link>
      </li>
        
     
     	<li class="innerdrop nav-item">
           <a class="nav-link" @click="showProducts" >
         <svg  aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" svg-inline--fa fa-sun fa-w-16 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" class="fa-secondary"></path> <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z" class="fa-primary"></path></g></svg>
                 <span class="link-text" >Products</span>
                 <div id="down-triangle" ></div>
  </a>
      
         <!-- <a href="#" class="nav-item" >Products<div id="down-triangle" ></div></a> -->
			<ul id="product-line">
               
      <li v-for="categlories in products" class="nav-item">
        <router-link class="router-links" :to="`${categlories}`">
          <a href="#" class="nav-link">
            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-cat fa-w-16 fa-9x"><g class="fa-group"><path fill="currentColor" d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z" class="fa-secondary"></path><path fill="currentColor" d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z" class="fa-primary"></path></g></svg>
            <span class="link-text"><div >{{categlories}}</div></span>
          </a>
        </router-link>
      </li>


       </ul>
         
      </li>
       

      
      <li class="nav-item" id="themeButton"> 
        <a href="#" class="nav-link">
          <svg id="lightIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="moon-stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z" class="fa-secondary"></path> <path fill="currentColor" d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z" class="fa-primary"></path></g></svg>
          <svg id="solarIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" class="fa-secondary"></path> <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z" class="fa-primary"></path></g></svg>
          <svg id="darkIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sunglasses" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z" class="fa-secondary"></path> <path fill="currentColor" d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z" class="fa-primary"></path></g></svg> 
          <span class="link-text">Themify</span>
        </a>
      </li>
    </ul>
    
  </nav>
  </header>
  
    
    
    
</template>

<script>
import index from '@/store/index'
import logo from '@/assets/logo'
import firebase from 'firebase'
import {mapState, mapGetters, mapActions} from 'vuex'
import { firebaseAuth } from '../../config/firebase'

export default {
  name:'TopNavigation',
      data() {
      return {
        email: '',
        password: '',
        displayName: null,
        photoURL: null,
        newPassword: null,
        favoriteFood: null,
        authUser: null
      }
    },
  components: {
    logo, 
  },
  methods :{

      signOut () {
        firebaseAuth().signOut();
        this.$store.state.cartItems = 0; 
        this.$store.state.cart= []; 
      },
      
      
      showProducts() {
    var element = document.getElementById('product-line');
    var button = document.getElementById('product-button');
    
    if(element.style.display == 'inline-table') {
      element.style.display = 'none'
    } else if (element.style.display != 'inline-table') {
      element.style.display = 'inline-table'
    }
      },
   
    
     
      
  },
  computed: {
    products() {
      var arr = []; 
      this.$store.state.products.forEach((item) => {arr.push(item.category)});
      var arrayFiltered = arr.filter((v, i, a) => a.indexOf(v) === i); 
      return arrayFiltered; 
    },
    
    noItems() {
      return this.$store.state.cartItems
    },
    
    ...mapGetters({
      currentUser : 'currentUser',
    }),
  },
  
mounted () {
  
    var element = document.getElementById('product-line');
    var navbar = document.getElementById('navbar');
    navbar.addEventListener('mouseleave', function (e) {
      element.style.display = 'none'
    });
 
      var tmp = null;
      const themeMap = { dark: "light", light: "dark" }; // light: "solar", 
      const theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);
      const bodyClass = document.body.classList;
      bodyClass.add(theme);
      function toggleTheme() {
        const current = localStorage.getItem('theme');
        const next = themeMap[current];

        bodyClass.replace(current, next);
        localStorage.setItem('theme', next);
      }
      document.getElementById('themeButton').onclick = toggleTheme;

  }
}


</script>

<style lang="css">



.innerdrop ul {
	margin-left: 0;
	padding-left: 0;
	/* width: 500px; */
	list-style: none;
	position: relative;
	/* display: inline-table; */
	display: none;
}

.innerdrop ul ul {
	display: none;
}

.innerdrop ul li:hover > ul {
	display: block;
}

.innerdrop ul li {
	/* float: left; */
	/* width: 500px; */
	text-align: left;
	/* border-bottom: 3px solid #2ecc71;  */
}
	
/* .innerdrop ul li:hover { */
	/* background: #f2f2f2; */
/* } */

.innerdrop ul li a {
/* display: block;  */
    padding-right: 20px;
    /* width: 55%; */
    /* color: #2a2a2a; */
    text-decoration: none;
}
					
.innerdrop ul ul {
	border-radius: 0px; 
	padding: 0;
	position: absolute; 
	top: 100%;
}

.innerdrop ul ul li {
	float: none;
	border-bottom: 2px solid #eaeaea; 
	position: relative;
}

.innerdrop ul ul li a {
	padding: 15px 10px;
	color: #838383;
}	

.innerdrop ul ul li a:hover {
	background: #47d583;
	color: #fff;
}	

#down-triangle {
    float: right;
    width: 0;
    height: 0;
    margin-left: 20px;
    margin-top: 5px;
    border-top: 10px solid #2ecc71;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}

/* .circle {
	float: right;
	display: inline;
	width: 10px;
 	height: 10px; 
 	margin-top: 5px;
  border: 3px solid #8ce5b2;
  -moz-border-radius: 100%; 
  -webkit-border-radius: 100%; 
  border-radius: 100%;
}

 */


:root { font-size: 16px; font-family: 'Open Sans'; --text-primary: #b6b6b6; --text-secondary: #ececec; --bg-primary: #23232e; --bg-secondary: #141418; --transition-speed: 170ms;--my-blue: #5044ff ; --my-white: #fff } 
/* body { color: black; background-color: white; margin: 0; padding: 0; }  */
main { margin-left: 4rem; padding: 1rem; } 
.navbar { z-index: 2;position: fixed; background-color: var(--bg-primary); transition: width 170ms ease-out; overflow: scroll; width: 100%;
-webkit-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
-moz-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);

} 
.cart-link__count {
    position: absolute;
    width: 22px;
    border-radius: 16px;
    top: 8px;
    z-index: 1;
    border: 2px solid  var(--my-blue);
    left: 41px;
    padding: 0;
    background:  var(--my-blue);
    color: #fff;
    font-size: 12px;
    font-weight: 600;

  }
.navbar-nav { 
/* -webkit-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
-moz-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
  width: 100%;
  list-style: none;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
     /* min-height: 100%; */
  } 
  
.nav-item { width: 100%; } 
.nav-item:last-child { margin-top: auto; } 
.nav-link { display: flex; align-items: center; height: 4rem; color: var(--text-primary); text-decoration: none; filter: grayscale(100%) opacity(0.7); transition: var(--transition-speed); } 
.nav-link:hover { filter: grayscale(0%) opacity(1); background: var(--bg-secondary); color: var(--text-secondary);
    /* -webkit-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
/* -moz-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
/* box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
/* box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */

 } 
.link-text { display: none; margin-left: 1rem;
font-family: 'Overpass';
 } 
.nav-link svg { width: 2rem; min-width: 2rem; margin: 0 1.5rem; } 
.fa-primary { color: #ff7eee; } 
.fa-secondary { color: #df49a6; } 
.fa-primary,
.fa-secondary { transition: var(--transition-speed); } 
.logo { font-weight: bold; text-transform: uppercase; margin-bottom: 0rem; text-align: center; color: var(--text-secondary); background: var(--bg-secondary); font-size: 1.5rem; letter-spacing: 0.3ch; width: 100%; } 
.logo svg { transform: rotate(0deg); transition: var(--transition-speed); } 
.logo-text { display: inline; position: absolute; left: -999px; transition: var(--transition-speed); } 
.navbar:hover .logo svg { transform: rotate(-180deg); } 
/* Small screens */
@media only screen and (max-width: 600px){
  .nav-link svg {
    width: 1rem;
    min-width: 2rem;
    margin: 0 1rem;
  }
  
  .navbar {

    overflow: hidden;
    width: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
  
  
    #down-triangle {
     margin-left: 0px;
  }
  
 .navbar { width: 100vw; height: 4rem;
 border-bottom: 4px solid rgba(0,0,0,0.1);
  } /*  bottom: 0; */ 
 .logo { display: none; } 
 .navbar-nav { flex-direction: row;
 
 
  } 
 .nav-link { justify-content: center; } 
 main { margin: 0; } 
 }
/* Large screens */
@media only screen and (min-width: 600px){

  
 .navbar { 
   
   top: 0;
    position: relative;
    display: inline-flex;
    width: 5rem;
    min-height: 87vh;
    /* height: 100vh; */
   /* top: 0; width: 5rem; height: 100vh; */
 
 
  } 
 .navbar:hover { width: 16rem; } 
 .navbar:hover .link-text { display: inline; 
 
 cursor: pointer;
 } 
 .navbar:hover .logo svg { margin-left: 11rem; } 
 .navbar:hover .logo-text { left: 10px; 
 font-size: 20px;
 
 } 
 }
 

.dark { --text-primary: #b6b6b6; --text-secondary: #ececec; --bg-primary: #23232e; --bg-secondary: #141418;  --text-floogle: #4c475f62;  } 
.light { --text-primary: #1f1f1f; --text-secondary: #000000; --bg-primary: #ffffff; --bg-secondary: #e4e4e4; --text-floogle: #dfdfdf; } 
.solar { --text-primary: #576e75; --text-secondary: #35535c; --bg-primary: #fdf6e3; --bg-secondary: #f5e5b8; --text-floogle: #ececec; } 
.theme-icon { display: none; 



} 
.dark #darkIcon { display: block; 
} 
.light #lightIcon { display: block; 
} 
.solar #solarIcon { display: block; 
} 

</style>
