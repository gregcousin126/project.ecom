<template>
    <nav>
      
<header class="header">
  <router-link to="/" exact><div class="logo"><logo></logo><p>XOTOPOLO</p></div></router-link>

  <!-- <a href="" class="logo">CSS Nav</a> -->
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  
   <!-- <div class="nav-link"> -->
      <!-- <div class="dropdown-container"> -->
     
      <!-- </div> -->
    <!-- <ul class="menu">
    <li><router-link  to="/register"> <a class="log-link" href=""> register </a></router-link></li>
    <li><router-link  to="/signin"> <a class="log-link" href=""> signin </a></router-link></li>
    <li><router-link  to="/userinfo"> <a class="log-link" href=""> user </a></router-link></li>
    <li><router-link  @click="signOut" to="/"> <a class="log-link" href=""> signout </a></router-link></li>
  </ul>
   -->
  <ul class="menu">

    
    <div class="main-nav-info-container">
      <div class="main-nav-info">
        <router-link  to="/register">
            <label v-if="JSON.stringify(currentUser) !== '{}'" for="openDropdown" class="dropdown">{{currentUser.displayName}}</label>
        </router-link>
        <router-link  to="/register">
         <label v-if="JSON.stringify(currentUser) === '{}'" for="openDropdown" class="dropdown">Authenticate</label>
        </router-link>
      </div>
      <div class="main-nav-info">
          <router-link to="/cart" exact>
            <div class="cart-link">
              <div v-if="noItems > 0" class="cart-link__count">{{ noItems }}</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
                <title id="cart">Shopping Cart</title>
                <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
              </svg>
            </div>
          </router-link>
      </div>
    </div>
    <li v-for="categlories in products">
        <router-link class="router-links" :to="`${categlories}`">{{categlories}}</router-link>
    </li>
  </ul>

  <label class="menu-icon" for="menu-btn"><span class="navicon">
    
      <div v-if="noItems > 0" class="cart-link__count__menu-btn">{{ noItems }}</div>
    
    
  </span>
  
  </label>
  
</header>
<!--       
  <div class="header">
      <router-link to="/" exact><div class="logo"><logo></logo><p>XOTOPOLO</p></div></router-link>
    <div class="nav-link">
      <div class="dropdown-container">
        <label v-if="JSON.stringify(currentUser) !== '{}'" for="openDropdown" class="dropdown">{{currentUser.displayName}}<i class="fas fa-angle-down"></i></label>
        <label v-if="JSON.stringify(currentUser) === '{}'" for="openDropdown" class="dropdown">login<i class="fas fa-angle-down"></i></label>
        <input type="checkbox" id="openDropdown" hidden>
        <div class="dropdown-menu">
        <router-link to="/register">
          <div class="log-link"> register&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 481.5 481.5" style="enable-background:new 0 0 481.5 481.5;" xml:space="preserve"><g><g><path d="M0,240.7c0,7.5,6,13.5,13.5,13.5h326.1l-69.9,69.9c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l93-93    c5.3-5.3,5.3-13.8,0-19.1l-93-93c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l69.9,69.9h-326C6,227.2,0,233.2,0,240.7z"/><path d="M382.4,0H99C44.4,0,0,44.4,0,99v58.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V99c0-39.7,32.3-72,72-72h283.5    c39.7,0,72,32.3,72,72v283.5c0,39.7-32.3,72-72,72H99c-39.7,0-72-32.3-72-72V325c0-7.5-6-13.5-13.5-13.5S0,317.5,0,325v57.5    c0,54.6,44.4,99,99,99h283.5c54.6,0,99-44.4,99-99V99C481.4,44.4,437,0,382.4,0z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </div>
        </router-link>
        <router-link to="/signin">
         <div class="log-link"> signin&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 481.5 481.5" xml:space="preserve"><g><g><path d="M382.4,0H99C44.4,0,0,44.4,0,99v58.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V99c0-39.7,32.3-72,72-72h283.5    c39.7,0,72,32.3,72,72v283.5c0,39.7-32.3,72-72,72H99c-39.7,0-72-32.3-72-72V325c0-7.5-6-13.5-13.5-13.5S0,317.5,0,325v57.5    c0,54.6,44.4,99,99,99h283.5c54.6,0,99-44.4,99-99V99C481.4,44.4,437,0,382.4,0z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
         </div>
        </router-link>
        <router-link to="/userinfo">
         <div class="log-link"> user&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 481.5 481.5" xml:space="preserve"><g><g><path d="M382.4,0H99C44.4,0,0,44.4,0,99v58.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V99c0-39.7,32.3-72,72-72h283.5    c39.7,0,72,32.3,72,72v283.5c0,39.7-32.3,72-72,72H99c-39.7,0-72-32.3-72-72V325c0-7.5-6-13.5-13.5-13.5S0,317.5,0,325v57.5    c0,54.6,44.4,99,99,99h283.5c54.6,0,99-44.4,99-99V99C481.4,44.4,437,0,382.4,0z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
         </div>
        </router-link>
        <router-link to="/">
         <a @click="signOut" class="log-link"> signout&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 481.5 481.5" xml:space="preserve"><g><g><path d="M382.4,0H99C44.4,0,0,44.4,0,99v58.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V99c0-39.7,32.3-72,72-72h283.5    c39.7,0,72,32.3,72,72v283.5c0,39.7-32.3,72-72,72H99c-39.7,0-72-32.3-72-72V325c0-7.5-6-13.5-13.5-13.5S0,317.5,0,325v57.5    c0,54.6,44.4,99,99,99h283.5c54.6,0,99-44.4,99-99V99C481.4,44.4,437,0,382.4,0z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
         </a>
        </router-link>
        </div>
      </div>
     <router-link to="/cart" exact>
        <div class="cart-link">
          <div v-if="noItems > 0" class="cart-link__count">{{ noItems }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
            <title id="cart">Shopping Cart</title>
            <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
          </svg>
        </div>
        </router-link>
      </div>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
        <span v-for="categlories in products">
          <router-link class="router-links" :to="`${categlories}`">{{categlories}}</router-link>
      </span>
    </ul>
    </div> -->
    </nav>
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
    // Authchange,
  },
  methods :{
        signOut () {
        firebaseAuth().signOut();
        this.$store.state.cartItems = 0; 
        this.$store.state.cart= []; 
        
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
    
      // computed: {
    ...mapGetters({
          currentUser : 'currentUser',
    }),
  },
  
  
mounted () {
// console.log('currentUser :>> ', this.currentUser);
  
  
    // function() {
      // const drowdownArrow = document.querySelector('.fa-angle-down');
      // const checkbox = document.getElementById('openDropdown');
      // const dropdownMenu = document.querySelector('.dropdown-menu');
      
      
      // checkbox.addEventListener('change', () => {
      //   drowdownArrow.classList.toggle('rotate-dropdown-arrow');
      // });
      // dropdownMenu.addEventListener('click', (e) => {
      // checkbox.checked = false;
      // checkbox.dispatchEvent(new Event('change'));
      // })
    // }
  },
  
  
  // created() {
  // }

}
</script>

<style lang="css">
.main-nav-info-container{
  float: right;
  /* align-self: center; */
}
.main-nav-info {
float: right;
    /* display: -webkit-box; */
    display: -ms-flexbox;
    /* clear: none; */
    /* float: right; */
    /* top: 0; */
    display: block;
    /* width: 8%; */
    float: left;
    /* font-size: 2em; */
    padding: 28px 20px 20px 10px;
    text-decoration: none;
    /* right: 0; */
    /* position: relative; */
    /* display: -webkit-box; */
    display: block;
    max-height: none;
    margin: 0;
    place-self: center;
    /* padding: 0; */
    list-style: none;
    overflow: hidden;
    background-color: #fff;
    height: 100%;
}


.header {
    /* -webkit-box-align: center; */
    -ms-flex-align: center;
    /* align-items: center; */
    background-color: #fff;
    -webkit-box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    /* align-content: baseline; */
    width: 100%;
    z-index: 3;
    place-content: space-between;
    /* align-content: center; */
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
display: block;
    padding: 0px 22px 25px;
    /* padding-bottom: 30px; */
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
}






.header li a:hover,
.header .menu-btn:hover {
  background-color: #ededed;
}

.cart-link__count__menu-btn {
    position: absolute;
    width: 23px;
    height: 22px;
    border-radius: 50%;
    top: -21px;
    z-index: 1;
    left: 14px;
    /* right: -21px; */
    padding: 7%;
    text-align: center;
    background: #5044ffff;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
}

.header .logo {
    display: inline-block;
    /* text-align: center; */
    float: left;
    /* padding: 5px; */
    /* font-size: 2em; */
    top: 2px;
    margin: 0 auto;
    padding: 15%;
    text-decoration: none;
        float: left;
    position: relative;
    /* top: -17px; */
    color: mediumpurple;
    font-size: 13px;
    font-weight: 500;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
    cursor: pointer;
    display: inline-block;
    /* float: right; */
    padding: 40px 20px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2.5px;
    position: relative;
    -webkit-transition: background .2s ease-out;
    transition: background .2s ease-out;
    width: 27px;
}

.dropdown {
background: #f8f8f8;
    border-radius: 4px;
    height: auto;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    border: 2px solid;
    display: block;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 3px 14px 3px 15px;
    font-size: 1.1rem;
    cursor: pointer;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 7px;
}

.header .menu-icon .navicon:after {
  top: -7px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
 max-height: 400px;
    margin-top: 78px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (max-width: 48em) {
      .header li a:hover, .header .menu-btn:hover{
    background: none;
  }
}
@media (min-width: 48em) {

  /* .header li a:hover,
.header .menu-btn:hover {
  background-color: transparent;
} */

  .header li {
    float: left;
  }
  .header li a {
    padding: 32px 22px;
  }
  .header .menu {
    clear: none;
    /* float: right; */
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
}


.router-links {
  font-family: 'Roboto Condensed', sans-serif;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-transform: capitalize;
  color: black;
}
.mylogo {
border-spacing: 3px;
    height: 40px;
    width: 40px;
    padding: 5px;
    border: 2.5px solid rgba(24, 42, 130, 0.075);
    text-align: center;
    content: '';
    border-radius: 16px;
    /* padding-bottom: 5px; */
    margin-bottom: -2px;
    border-radius: 20%;
    overflow: hidden;
    -webkit-border-radius: 50%;
}


.logo svg {
  width: 40px;
  height: 40px;
}
.logo p {
}
.log-link {
    color: black;
    text-transform: uppercase;
}

.cart-link {
  float: right;
  position: relative;

}
.cart-link svg {
width: 35px;
    border: 2px solid;
    padding: 4px;
    height: 33px;
    border-radius: 4px;
}


.cart-link__count {
position: absolute;
    width: 23px;
    height: 22px;
    border-radius: 100%;
    top: -9px;
    right: -8px;
    padding: 7%;
    text-align: center;
    background: #5044ff;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
} 

@media(max-width: 660px) {
  .header li a:hover, .header .menu-btn:hover{
    background: none;
  }
  
}
/* 
body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
}

a {
  color: #000;
}



.header {
    background-color: #fff;
    
    
    width: 100%;
    height: 0;
    z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}



.header .menu {
  
  

}



.header .menu-icon {
    cursor: pointer;
    display: flex;
    float: right;
    margin-right: 8px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    padding: 13px;
    border-radius: 4px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}



.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
    max-height: 240px;
    display: grid;
    position: relative;
    height: auto;
    top: -10px;
    border-radius: 0px;
    z-index: 0;
    margin: 0 auto;
    padding: 20px;
    border-bottom: solid;
    grid-gap: 10px;
    width: 100%;
    border-width: medium;
}


@media (min-width: 660px) {

  
}


.dropdown-container {
display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-right: 20px;
    -ms-flex-pack: center;
    float: right;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
}

.dropdown {
background: #f8f8f8;
    border-radius: 4px;
    height: auto;
    width: 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 3px 14px 3px 15px;
    font-size: 1.1rem;
    cursor: pointer;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

.fa-angle-down {
  position: relative;
  top: 2px;
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.rotate-dropdown-arrow {
  transform: rotate(-180deg);
}

.dropdown-menu {
display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 0px 0px 6px 6px;
    margin-top:20px;
    width: 100%;
    padding: 8px;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.4);
    background: white;
    -webkit-transform-origin: top left;
    transform-origin: top left;
}

.dropdown-menu span {
  padding: 10px;
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dropdown-menu span:last-child {
  border: none;
}

.dropdown-menu span:hover {
  background: #eee;
}

#openDropdown:checked + .dropdown-menu {
  display: flex;
  animation: openDropDown 0.3s ease;
  z-index: 1;
      position: absolute;
    z-index: 1;
    width: 130px;
    top: 31px;
    display: inline-block;
    -webkit-animation: openDropDown 0.3s ease;
    animation: openDropDown 0.3s ease;
}

@keyframes openDropDown {
  from { transform: rotateX(50deg); }
  to { transform: rotateX(0deg); }
}

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
  padding: 0px;
  position: fixed;
  height: 70px;
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
    margin-bottom: 0px;
}

.log-link svg {
  
}

.mylogo {
  border-spacing: 3px; 
    height: 40px;
    width: 40px;
    padding: 5px;
    border: 2.5px solid rgba(24, 42, 130, 0.075);
    text-align: center;
    content: '';
    border-radius: 16px;
    border-radius: 20%;
    overflow: hidden;
    -webkit-border-radius: 20%;
    -moz-border-radius: 20%;
    -ms-border-radius: 20%;
    -o-border-radius: 20%;
}


.logo {
    float: left;
    position: relative;
    top: -17px;
    color: mediumpurple;
    font-size: 8px;
    font-weight: 500;
}

.logo svg {
  width: 40px;
  height: 40px;
}
.logo p {
}

  
  nav {
    padding: 20px;
  }

  nav > a {
    margin-right: 20px;
  }
}

.nav-link {
     display: flex;
    float: right;
}


.log-link {
    position: relative;
    float: right;
    text-decoration: none;
    padding: 3px;
    display: flex;
        font-size: 13px;
    color: black;
    text-transform: uppercase;
}


.dropdown-menu svg {
  width: 20px;
  height: 20px;
}

*/
</style>
