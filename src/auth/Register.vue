<template>
<body>
  
  <div v-if="!currentUser.displayName">
    <div class="top-register-container">
    <div class="register-container">
        <div class="image">
            <h1 class="register-banner">Welcome To <span class="colorspan">Xotpolo</span></h1>
        </div>
        <div class="register-content">
            <h1>Register</h1>
            <!-- <h1>{{authUser}}</h1> -->
         <form @submit.prevent="register">
        <input type="email"  class="inputbox with-transform" v-model="email" placeholder="Type your email">
        <input type="password"  class="inputbox with-transform" v-model="password" placeholder="Pick your password">
        <input type="displayName"  class="inputbox with-transform" v-model="displayName" placeholder="Whats your name">
             <a class="fp" href="index.html">Forgot Password?</a>
            <br>
            <button type="submit" class="btn-register">Register</button>
        </form>
            <router-link  to="/signin"><button class="btn-register" href="">signin</button></router-link>
        </div>
    </div>
    </div>
    </div>

    <div v-if="currentUser.displayName">
        <h2>Hi {{currentUser.displayName}},</h2><br> <p>It Looks like you are already signed in 🧐. What would you like to do?</p>
        <ul class="authchoice">
          <li><router-link  to="/register"><a class="dropdown log-link" href="">register</a></router-link></li>
          <li><router-link  to="/signin"><a class="dropdown log-link" href="">signin</a></router-link></li>
          <li><router-link  to="/userinfo"><a class="dropdown log-link" href="">user</a></router-link></li>
          <li><router-link   to="/"><a @click="signOut" class="dropdown log-link" href="">signout</a></router-link></li>
        </ul>
  </div>

  

</body>
</template>
<script>

import firebase from 'firebase'
import Authchange from '@/auth/Authchange'
import { ref, firebaseAuth } from '../../config/firebase';
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
	  name: 'Register',
    data() {
      return {
        email: '',
        password: '',
        displayName: null,
        authUser: null
      }
    },
    computed: {
      
    ...mapGetters({
      currentUser : 'currentUser',
    }),
      
      linkedGoogle () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
      },
      
      linkedPassword () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'password')
      }
    },
    
    methods: {
      signOut () {
        firebase.auth().signOut();
      },
      
      register () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message)).then(() => {
          firebaseAuth().currentUser.updateProfile({displayName: this.displayName}).catch(error => alert('🤕' + error.message)).then(() => {
        this.$router.push('/');
        });
        })
      },

      linkGoogle () {
        const provider = new firebase.auth.GoogleAuthProvider()
        this.authUser.linkWithPopup(provider).catch(error => alert('🤕' + error.message))
      },
      
      unlinkGoogle () {
        this.authUser.unlink('google.com')
      },
      
      updateProfile () {
        this.authUser.updateProfile({ displayName: this.displayName, photoURL: this.photoURL })
      },
      
      updateCustomDetails () {
        firebase.database().ref('users').child(this.authUser.uid)
          .update({favoriteFood: this.favoriteFood})
      },
      
      updateEmail () {
        this.authUser.updateEmail(this.email)
      },
      
      updatePassword () {
        this.authUser.updatePassword(this.newPassword)
          .then(() => { this.newPassword = null }).catch(error => alert('🤕' + error.message))
      }
    },
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
    color: black;
    text-transform: uppercase;
}


.dropdown {
  
}

.authchoice {
    display: grid;
    grid-auto-flow: column;
    /* border-radius: 2px; */
    /* border: 2px solid; */
    list-style: none;
    margin-top: 30px;
    font-weight: 500;
    padding: 0px;
    font-size: 17px;
    width: 30%;
    margin: 24px auto;
    font-family: 'Roboto Condensed', sans-serif;
    grid-gap: 20px;
}

.top-register-container {
  
  
      text-align: -webkit-center;
    margin: 0 auto;
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

.register-container {
    height: auto;
    width: 56%;
    -webkit-box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.603);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.603);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 5px;
}

.image {
    flex: 50%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://c1.wallpaperflare.com/preview/1017/473/68/clothing-store-shop-boutique-men-s-fashion.jpg');
    background-size: cover;
    text-align: center;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.image h1 {
    margin-top: 42%;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.colorspan {
    color: chartreuse;
}

.register-content {
    flex: 50%;
    background-color: white;
    text-align: center;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
}

.register-content h1 {
    /* padding: 40px; */
    padding-top: 10px;
    /* bottom: -9px; */
    margin-bottom: 0px;
    padding-bottom: -10px;
    font-family: 'Niconne', cursive;
    font-size: 40px;
    text-align: center;
    color: #c446c9;
}

.register-banner{
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
    margin: 10px;
}

.fp:hover {
    color: #c446c9;
}

.btn-register {
    width: 34%;
    margin: 0px 0px 20px;
    display: inline-flex;
    place-content: center;
    border: none;
    background: -webkit-gradient(linear, left top, right top, from(#4568DC), to(#B06AB3));
    background: linear-gradient(to right, #4568DC, #B06AB3);
    border-radius: 4px;
    -webkit-transition: 0.3s;
    transition: 0.4s;
}


.btn-register:hover {
    transform: scale(1.1);
}

.btn-register {
    text-decoration: none;
    color: white;
}


@media (max-width: 48em) { 
  .image {
    display: none;
  }
  
  .register-container {
      width: 100%;
    padding: 15px;
  }
  .register-content{
    border-radius: 5px;
    
  }
}


</style>
