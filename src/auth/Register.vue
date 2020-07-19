<template>
<body >
<div v-if="!currentUser.displayName" >
    <div class="top-register-container register-card-container" id="target">
      <div class="register-container card">
        <div class="image-register">
          <h1 class="register-banner">Welcome To<span class="colorspan">Xotpolo</span></h1>
        </div>
        <div class="register-content">
          <h1>Register</h1>
          <form @submit.prevent="register">
            <input type="displayName" class="inputbox with-transform" v-model="displayName" placeholder="Hi 🖐️, whats your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'We need your name 😉'"/>
            <input type="email" class="inputbox with-transform" v-model="email" placeholder="Type your email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Do you have an email 📧'"/>
            <input type="password" class="inputbox with-transform" v-model="password" placeholder="Pick a password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your data is safe 🔒'"/>
            <a class="fp">Forgot Password?</a>
            <button type="submit" class="btn-register">Register</button>
            <button type="button"  class="btn-register" @click="signinAnim" >Login</button>
          </form>
        </div>
      </div>
    </div>
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
    ...mapGetters({ currentUser: 'currentUser', }),
    linkedGoogle() { return !!this.authUser.providerData.find((provider) => provider.providerId === 'google.com');},
    linkedPassword() { return !!this.authUser.providerData.find((provider) => provider.providerId === 'password');},
  },
  methods: {
    signinAnim() {
        const target = document.getElementById("target");
        target.style.opacity = '0'
        setTimeout( () => { this.$router.push('/signin');}, 300); 
    },
    
   
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => alert('🤕' + error.message)).then(() => {firebaseAuth().currentUser.updateProfile({displayName: this.displayName}).catch((error) => alert('🤕' + error.message)).then(() => {this.$router.push('/');});});
    },
    
    linkGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.authUser.linkWithPopup(provider).catch((error) => alert('🤕' + error.message));
    },
    unlinkGoogle() { this.authUser.unlink('google.com');},
    updateProfile() { this.authUser.updateProfile({displayName: this.displayName, photoURL: this.photoURL});},
    updateCustomDetails() {firebase.database().ref('users').child(this.authUser.uid).update({favoriteFood: this.favoriteFood});},
    updateEmail() { this.authUser.updateEmail(this.email);},
    updatePassword() { this.authUser.updatePassword(this.newPassword).then(() => {this.newPassword = null;}).catch((error) => alert('🤕' + error.message));},
  },
};
</script>
<style lang="css">
.authchoice{display:grid;grid-auto-flow:column;margin-top:25px;border-radius:4px;list-style:none;border:2px solid;place-content:center;grid-auto-columns:-webkit-min-content;font-weight:500;padding:22px;font-size:14px;width:100%;font-family:'Roboto Condensed',sans-serif;grid-gap:28px}
.top-register-container{z-index:0;justify-content:center;padding:5% 7%;transition:opacity var(--transition-speed-primary-faster);display:flex;text-align:-webkit-center}
.register-container{height:auto;-webkit-box-shadow:0 15px 25px rgba(0,0,0,0.603);box-shadow:0 15px 25px rgba(0,0,0,0.603);display:flex;border-radius:5px}
.image-register{flex:35%;background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../assets/images/jamesbond.jpg);background-size:cover;text-align:center;color:#fff;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif}
.image-register h1{margin-top:17%;padding-left:20px;padding-right:20px;letter-spacing:2px;font-weight:100;margin-bottom:10px;font-family:'Bungee'}
.colorspan{color:#7fff00}
.register-content{flex:50%;justify-content:center;background-color:var(--my-white);text-align:center;padding:50px;font-family:'Montserrat',sans-serif}
.register-content h1{font-family:'Niconne',cursive;font-size:40px;text-align:center;color:#c446c9}
.register-banner{font-size:25px;line-height:35px}
#txt{margin:10px;padding:5px;border:none;background-color:rgba(156,77,156,0.3);border-radius:10px;font-weight:700;font-size:small;font-family:'Montserrat',sans-serif;color:#aa38a4}
#txt:focus{outline:none}
.fp{text-decoration:none;font-weight:700;font-size:small;transition:var(--transition-speed-primary-faster);display:block;margin:30px}
.fp:hover{color:#c446c9}
.btn-register{width:95px; height: 40px; font-size:12.5px;margin:0 4px 20px;display:inline-flex;place-content:center;border:none;background:-webkit-gradient(linear,left top,right top,from(#4568dc),to(#b06ab3));background:linear-gradient(to right,#4568dc,#b06ab3);border-radius:4px;-webkit-transition:.2s;transition:.2s}
.btn-register:hover{transform:scale(1.1);letter-spacing:1px}
.btn-register{text-decoration:none;color:#fff}
.register-card-container{animation:float var(--animation-speed-primary-slower) ease-in-out infinite}
.card{background:#fff;-webkit-perspective:1000px;perspective:1000px;-webkit-transition:all var(--transition-speed-primary-slower) ease;transition:all var(--transition-speed-primary-slower) ease;-webkit-animation:shadeanm var(--animation-speed-primary-slower) ease-in-out infinite,fadeup var(--animation-speed-primary-faster) ease-in-out;animation:shadeanm var(--animation-speed-primary-slower) ease-in-out infinite,fadeup var(--animation-speed-primary-faster) ease-in-out}
.card:hover{transform:rotate3D(0,0,0,0deg)}
@keyframes float {
0%{transform:translatey(0px)}
50%{transform:translatey(-13px)}
100%{transform:translatey(0px)}
}
@keyframes shadeanm {
0%{box-shadow:0 9px 8px -1px rgba(0,0,0,0.65)}
50%{box-shadow:0 10px 10px 4px rgba(0,0,0,0.2)}
100%{box-shadow:0 9px 8px -1px rgba(0,0,0,0.65)}
}
@keyframes fadeup {
0%{transform:translate(0,1000px);-webkit-transform:translate(0,1000px);-moz-transform:translate(0,1000px);-ms-transform:translate(0,1000px);-o-transform:translate(0,1000px)}
70%{transform:translate(0,-20px);-webkit-transform:translate(0,-20px);-moz-transform:translate(0,-20px);-ms-transform:translate(0,-20px);-o-transform:translate(0,-20px)}
100%{transform:translate(0,0);-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0)}
}
@media (max-width: 600px) {
.image-register{display:none}
.top-register-container{padding:0}
.register-content{padding:20px}
.card{background:#fff;-webkit-perspective:1000px;perspective:1000px;transition:fadeup 0.var(--animation-speed-primary-slower) ease;-webkit-animation:fadeup .7s ease-in-out;animation:fadeup .7s ease-in-out}
.register-card-container{-webkit-animation:none;animation:none}
.register-container{box-shadow:0 9px 19px -7px rgba(0,0,0,0.603);width:100%}
.register-content{border-radius:5px}
}

  
  @media (max-width: 700px) {
  .register-content{padding: 9%;}

  }
</style>
