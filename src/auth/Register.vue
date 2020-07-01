<template>
<body >
  <div v-if="!currentUser.displayName" >
    <!-- <div id="imageonly"></div> -->
    <div class="top-register-container cardcontainer" id="target">
      <div class="register-container card">
        <div class="image-register">
          <h1 class="register-banner">
            Welcome To
            <span class="colorspan">Xotpolo</span>
          </h1>
        </div>
        <div class="register-content">
          <h1>Register</h1>
          <!-- <h1>{{authUser}}</h1> -->
          <form @submit.prevent="register">
            <input type="email" class="inputbox with-transform" v-model="email" placeholder="Type your email"/>
            <input type="password" class="inputbox with-transform" v-model="password" placeholder="Pick your password"/>
            <input type="displayName" class="inputbox with-transform" v-model="displayName" placeholder="Whats your name"/>
            <a class="fp" href="index.html">Forgot Password?</a>
            <br />
            <button type="submit" class="btn-register">Register</button>
          </form>
          <!-- <router-link to="/signin"> -->
            <button class="btn-register" @click="signinAnim" >signin</button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    </div>

    <!-- <div class="cardcontainer">
  <div class="card">  a</div>
    </div>-->

  <div v-if="currentUser.displayName">
    <h2>Hi {{currentUser.displayName}},</h2>
    <br />
    <p>It Looks like you are already signed in 🧐. What would you like to do?</p>
    <ul class="authchoice">
      <li>
        <router-link to="/register">
          <a class="dropdown log-link" href>register</a>
        </router-link>
      </li>
      <li>
        <router-link to="/signin">
          <a class="dropdown log-link" href>signin</a>
        </router-link>
      </li>
      <li>
        <router-link to="/userinfo">
          <a class="dropdown log-link" href>user</a>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <a @click="signOut" class="dropdown log-link" href>signout</a>
        </router-link>
      </li>
    </ul>
  </div>
</body>
</template>
<script>
import firebase from 'firebase';
import Authchange from '@/auth/Authchange';
import {ref, firebaseAuth} from '../../config/firebase';
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      displayName: null,
      authUser: null,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: 'currentUser',
    }),

    linkedGoogle() {
      return !!this.authUser.providerData.find((provider) => provider.providerId === 'google.com');
    },

    linkedPassword() {
      return !!this.authUser.providerData.find((provider) => provider.providerId === 'password');
    },
  },

  methods: {
    
    signinAnim() {
        const target = document.getElementById("target");
        target.style.opacity = '0'
        setTimeout( () => { this.$router.push('/signin');}, 300); 
    },
    
    signOut() {
      firebase.auth().signOut();
    },

    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch((error) => alert('🤕' + error.message))
        .then(() => {
          firebaseAuth()
            .currentUser.updateProfile({displayName: this.displayName})
            .catch((error) => alert('🤕' + error.message))
            .then(() => {
              this.$router.push('/');
            });
        });
    },

    linkGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.authUser.linkWithPopup(provider).catch((error) => alert('🤕' + error.message));
    },

    unlinkGoogle() {
      this.authUser.unlink('google.com');
    },

    updateProfile() {
      this.authUser.updateProfile({displayName: this.displayName, photoURL: this.photoURL});
    },

    updateCustomDetails() {
      firebase
        .database()
        .ref('users')
        .child(this.authUser.uid)
        .update({favoriteFood: this.favoriteFood});
    },

    updateEmail() {
      this.authUser.updateEmail(this.email);
    },

    updatePassword() {
      this.authUser
        .updatePassword(this.newPassword)
        .then(() => {
          this.newPassword = null;
        })
        .catch((error) => alert('🤕' + error.message));
    },
  },
};
</script>

<style lang="css">

/* body {
    background-size: cover;
  background: url(../assets/sddd.jpg);
} */


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

/* .background { */
   /* z-index: 0; */
  /* background-image: url(); */
    /* background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://c1.wallpaperflare.com/preview/1017/473/68/clothing-store-shop-boutique-men-s-fashion.jpg'); */

/* } */

.authchoice {
display: grid;
    grid-auto-flow: column;
    /* border-radius: 2px; */
    /* border: 2px solid; */
    list-style: none;
    place-content: center;
    /* margin-top: 30px; */
    grid-auto-columns: min-content;
    font-weight: 500;
    padding: 31px;
    /* margin: 0 auto; */
    font-size: 17px;
    width: 100%;
    /* margin: 24px auto; */
    font-family: 'Roboto Condensed', sans-serif;
    grid-gap: 25px;
    /* top: 15px; */
}

.top-register-container {
  z-index: 0;
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


#target {
  
    height: 100px;
    /* background-color: red; */
    transition: opacity .2s;
}


.image-register {
  flex: 50%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/jamesbond.jpg');
  background-size: cover;
  text-align: center;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.image-register h1 {
  margin-top: 17%;
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

.register-content {
  flex: 50%;
  /* background-color: white; */
  text-align: center;
  padding: 5%;
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

.register-banner {
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
  width: 95px;
  margin: 0px 0px 20px;
  display: inline-flex;
  place-content: center;
  border: none;
  background: -webkit-gradient(linear, left top, right top, from(#4568dc), to(#b06ab3));
  background: linear-gradient(to right, #4568dc, #b06ab3);
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
  .image-register {
    display: none;
  }

  .register-container {
    
    width: 100%;
    padding: 15px;
  }
  .register-content {
    border-radius: 5px;
  }
}

/* animations */

.cardcontainer {
  
  animation: float 6s ease-in-out infinite;
}
.card {
  background: white;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  -webkit-animation: shadeanm 6s ease-in-out infinite, fadeup .7s ease-in-out;
  animation: shadeanm 6s ease-in-out infinite, fadeup .7s ease-in-out;
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
</style>
