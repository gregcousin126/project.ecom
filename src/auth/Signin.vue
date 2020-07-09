<template>
<body>
  
  <div>

		<div v-if="JSON.stringify(currentUser) !== '{}'">
				<authchange/>
		</div>
    <div v-if="JSON.stringify(currentUser) === '{}'">
      
      

      <div class="top-signin-container cardcontainer" id="target">
      <div class="signin-container card">
        <div class="image-signin">
          <h1 class="signin-banner">
            Welcome To
            <span class="colorspan">Xotpolo</span>
          </h1>
        </div>
        <div class="signin-content">
          <h1>Sign in</h1>
          <form @submit.prevent="signIn">
            <input type="email" class="inputbox with-transform" v-model="email" placeholder="Type your email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Do you have an email 📧'"/>
            <input type="password" class="inputbox with-transform" v-model="password" placeholder="Pick your password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your data is safe 🔒'"/>
            <a class="fp" >Forgot Password?</a>
            <button type="submit" class="btn-signin">Login</button>
            <button type="button" class="btn-signin" @click="registerAnim">Register</button>
          </form>
          <!-- <router-link to="/signin"> -->
          <!-- </router-link> -->
        </div>
      </div>
    </div>

      
    </div>
  </div>
</body>
</template>
<script>

import firebase from 'firebase'
import { ref, firebaseAuth } from '../../config/firebase';
import {mapState, mapGetters, mapActions} from 'vuex'
import Authchange from './Authchange'


export default {
  
	  name: 'Signin',
    data() {
      return {
        email: '',
        password: '',
        displayName: null,
        photoURL: null,
        newPassword: null,
        // currentUser: null,
        favoriteFood: null,
        authUser: null
      }
    },
    
    computed: {
        ...mapGetters({
          currentUser : 'currentUser',
    }),
    },
    
    methods: {
      
          registerAnim() {
        const target = document.getElementById("target");
        target.style.opacity = '0'
        setTimeout( () => { this.$router.push('/register');}, 300); 
    },
    
    
      signIn () {
      firebaseAuth().signInWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message))
        this.$router.push('/')
      },
    },

  components: {
    Authchange
  }
}

</script>
<style lang="css">
/* * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
} */

.log-link {
  /* position: relative;
    float: right;
    text-decoration: none;
    padding: 3px;
    display: flex;
        font-size: 13px; */
    color: var(--text-secondary);
  text-transform: uppercase;
}


.authchoice {
    display: grid;
    grid-auto-flow: column;
    /* border-radius: 2px; */
    /* border: 2px solid; */
    margin-top: 25px;
    border-radius: 4px;
    list-style: none;
    border: 2px solid;
    place-content: center;
    /* margin-top: 30px; */
    grid-auto-columns: -webkit-min-content;
    /* grid-auto-columns: min-content; */
    font-weight: 500;
    padding: 22px;
    /* margin: 0 auto; */
    font-size: 14px;
    width: 100%;
    /* margin: 24px auto; */
    font-family: 'Roboto Condensed', sans-serif;
    grid-gap: 28px;
}


.top-signin-container {
  text-align: -webkit-center;
  margin: 0px auto;
  justify-content: center;
    z-index: 0;
        padding: 5% 7%;
    transition: opacity .2s;
    display: flex;
  text-align: -webkit-center;
   margin: 0px auto;
  /* border-radius: 10px;
      top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%); */
}
/* 
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background: url('http://i.xp.io/HXKwJPw.jpg');
} */

.signin-container {
  height: auto;
  /* width: 60%; */
  -webkit-box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.603);
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.603);

  display: flex;
  border-radius: 5px;
}




.image-signin {
  /* flex: 35%; */
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/stylewoman.jpg');
  background-size: cover;
  text-align: center;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.image-signin h1 {
  margin-top: 60%;
  padding-left: 20px;
  padding-right: 20px;
  letter-spacing: 2px;
  font-weight: 100;
  margin-bottom: 10px;
  font-family: 'Bungee';
}

.colorspan {
  color: chartreuse;
}

.signin-content {
  flex: 50%;
  justify-content: center;
  background-color: var(--my-white);
  text-align: center;
 padding: 50px;
  font-family: 'Montserrat', sans-serif;
}

.signin-content h1 {
  /* padding: 40px; */
  padding-bottom: 11px;
  /* bottom: -9px; */
  margin-bottom: 0px;
  padding-bottom: -10px;
  font-family: 'Niconne', cursive;
  font-size: 40px;
  text-align: center;
  color: #c446c9;
}

.signin-banner {
  font-size: 25px;
  line-height: 35px;
}

#txt {
  margin: 10px;
  padding: 5px;
  border: none;
  background-color: rgba(156, 77, 156, 0.3);
  border-radius: 10px;
  font-weight: bold;
  font-size: small;
  font-family: 'Montserrat', sans-serif;
  color: #aa38a4;
}

/* label {
    font-weight: bold;
    font-size: small;
} */

#txt:focus {
  outline: none;
}

.fp {
  text-decoration: none;
  font-weight: bold;
  font-size: small;
  transition: 0.3s;
  display: block;
  margin: 30px;
}

.fp:hover {
  color: #c446c9;
}

.btn-signin {
  width: 95px;
  margin: 0px 4px 20px;
  display: inline-flex;
  place-content: center;
  border: none;
  background: -webkit-gradient(linear, left top, right top, from(#4568dc), to(#b06ab3));
  background: linear-gradient(to right, #4568dc, #b06ab3);
  border-radius: 4px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.btn-signin:hover {
  transform: scale(1.1);
      /* transform: scale(1.1); */
    /* font-family: 'Overpass'; */
    letter-spacing: 1px;
}

.btn-signin {
  text-decoration: none;
  color: white;
}


/* animations */

.cardcontainer {
  animation: float var(--animation-speed-primary-slower) ease-in-out infinite;
}
.card {
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transition: all var(--transition-speed-primary-slower) ease;
  transition: all var(--transition-speed-primary-slower) ease;
  -webkit-animation: shadeanm var(--animation-speed-primary-slower) ease-in-out infinite, fadeup (--animation-speed-primary-slower) ease-in-out;
  animation: shadeanm var(--animation-speed-primary-slower) ease-in-out infinite, fadeup (--animation-speed-primary-slower) ease-in-out;
}

.card:hover {
  transform: rotate3D(0, 0, 0, 0deg);
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-13px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes shadeanm {
  0% {
    box-shadow: 0 5px 13px 0px rgba(0, 0, 0, 0.6);
  }
  50% {
    box-shadow: 0 20px 13px 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 5px 13px 0px rgba(0, 0, 0, 0.6);
  }
}

@keyframes fadeup {
  0% {
    /* opacity: 0; */
    transform: translate(0, 1000px);
    -webkit-transform: translate(0, 1000px);
    -moz-transform: translate(0, 1000px);
    -ms-transform: translate(0, 1000px);
    -o-transform: translate(0, 1000px);
  }
  30% {
    /* opacity: 0.7; */
  }
  70% {
    transform: translate(0, -20px);
    -webkit-transform: translate(0, -20px);
    -moz-transform: translate(0, -20px);
    -ms-transform: translate(0, -20px);
    -o-transform: translate(0, -20px);
  }
  100% {
    /* opacity: 1; */
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
  }
}




@media (max-width: 600px) {
/* @media (max-width: 48em) { */
  .image-signin {
    display: none;
  }
  
    .signin-content {

    padding: 20px;
    
  }
  
  
  .card {
  background: white;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  /* -webkit-transition: none;
  transition:none;
  -webkit-animation: none;
  animation: none; */
}
.cardcontainer {
    -webkit-animation: none;
    animation: none;
}
.top-signin-container {
      padding: 0%;
}

.signin-container {
  box-shadow: 0px 9px 19px -7px rgba(0, 0, 0, 0.603);
  
  
  
  
  
}

  .signin-container {
    
    width: 100%;
    /* padding: 20px; */
  }
  .signin-content {
    border-radius: 5px;
  }
}
</style>
