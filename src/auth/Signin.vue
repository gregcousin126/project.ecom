<template>
<body>
 <div v-if="!currentUser.displayName">
		<div v-if="JSON.stringify(currentUser) !== '{}'"><authchange/></div>
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
        </div>
      </div>
    </div>
    </div>
  </div>
  
  <div v-else-if="currentUser.displayName">
    <h2>Hi {{currentUser.displayName}},</h2><br/>
    <p>It Looks like you are already signed in 🧐. What would you like to do?</p>
    <ul class="authchoice">
      <li><router-link to="/register"><a class="log-link">register</a></router-link></li>
      <li><router-link to="/signin"><a class="log-link">log-in</a></router-link></li>
      <li><router-link to="/userinfo"><a class="log-link">user</a></router-link></li>
      <li><router-link to="/"><a @click="signOut" class="log-link">signout</a></router-link></li>
    </ul>
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
       signOut() {
      firebase.auth().signOut();
    },
    
      registerAnim() {
        const target = document.getElementById("target");
        target.style.opacity = '0';
        setTimeout( () => { this.$router.push('/register');}, 300); 
      },
      signIn () {
        firebaseAuth().signInWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message)); this.$router.push('/') 
      },
    },
  components: {
    Authchange
  }
}
</script>
<style lang="css">

  .log-link{color:var(--text-secondary);text-transform:uppercase}
  .authchoice{display:grid;grid-auto-flow:column;margin-top:25px;border-radius:4px;list-style:none;border:2px solid;place-content:center;grid-auto-columns:-webkit-min-content;font-weight:500;padding:22px;font-size:14px;width:100%;font-family:'Roboto Condensed',sans-serif;grid-gap:28px}
  .top-signin-container{text-align:-webkit-center;margin:0 auto;justify-content:center;z-index:0;padding:5% 7%;transition:opacity .2s;display:flex;text-align:-webkit-center;margin:0 auto}
  .signin-container{height:auto;-webkit-box-shadow:0 15px 25px rgba(0,0,0,0.603);box-shadow:0 15px 25px rgba(0,0,0,0.603);display:flex;border-radius:5px}
  .image-signin{background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../assets/images/stylewoman.jpg);background-size:cover;text-align:center;color:#fff;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif}
  .image-signin h1{margin-top:60%;padding-left:20px;padding-right:20px;letter-spacing:2px;font-weight:100;margin-bottom:10px;font-family:'Bungee'}
  .colorspan{color:#7fff00}
  .signin-content{flex:50%;justify-content:center;background-color:var(--my-white);text-align:center;padding:50px;font-family:'Montserrat',sans-serif}
  .signin-content h1{
font-size: 22px;
    font-family: Mellody;
    text-align: center;
    color: var(--text-primary);
    /* text-shadow: -4px 3px black; */
    /* color: #717171; */
    /* color: #7d7d7d; */
    color: #505050;
    /* ont-family:'Niconne',cursive;font-size:40px;text-align:center;color:#c446c9 */
    
    }
  .signin-banner{font-size:25px;line-height:35px}
  #txt{margin:10px;padding:5px;border:none;background-color:rgba(156,77,156,0.3);border-radius:10px;font-weight:700;font-size:small;font-family:'Montserrat',sans-serif;color:#aa38a4}
  #txt:focus{outline:none}
  .fp{
        text-decoration: none;
    font-weight: 500;
    font-size: small;
    font-family: monospace;
    -webkit-transition: .3s;
    transition: .3s;
    display: block;
    margin: 30px;
    /* text-decoration:none;font-weight:700;font-size:small;transition:.3s;display:block;margin:30px */
    
    }
  .fp:hover{color:#c446c9}
  .btn-signin{
    /* width:95px; height: 40px; font-size:12.5px;margin:0 4px 20px;display:inline-flex;place-content:center;border:none;background:-webkit-gradient(linear,left top,right top,from(#4568dc),to(#b06ab3));background:linear-gradient(to right,#4568dc,#b06ab3);border-radius:4px;-webkit-transition:.2s;transition:.2s */
    width: 95px;
    height: 40px;
    font-size: 12.5px;
    margin: 0 4px 20px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    place-content: center;
    filter: grayscale(.3);
    border: none;
    background: var(--button-highlight);
    /* background: -webkit-gradient(linear,left top, right top,from(#4568dc),to(#b06ab3)); */
    /* background: linear-gradient(to right,#4568dc,#b06ab3); */
    border-radius: 4px;
    -webkit-transition: .2s;
    transition: .2s;
    }
  .btn-signin:hover{transform:scale(1.1);letter-spacing:1px}
  .btn-signin{text-decoration:none;color:#fff}
  .cardcontainer{animation:float var(--animation-speed-primary-slower) ease-in-out infinite}
  .card{-webkit-perspective:1000px;perspective:1000px;-webkit-transition:all var(--transition-speed-primary-slower) ease;transition:all var(--transition-speed-primary-slower) ease;-webkit-animation:shadeanm var(--animation-speed-primary-slower) ease-in-out infinite,fadeup (--animation-speed-primary-slower) ease-in-out;animation:shadeanm var(--animation-speed-primary-slower) ease-in-out infinite,fadeup (--animation-speed-primary-slower) ease-in-out}
  .card:hover{transform:rotate3D(0,0,0,0deg)}
  @keyframes float {
  0%{transform:translatey(0px)}
  50%{transform:translatey(-13px)}
  100%{transform:translatey(0px)}
  }
  @keyframes shadeanm {
  0%{box-shadow:0 5px 13px 0 rgba(0,0,0,0.6)}
  50%{box-shadow:0 20px 13px 0 rgba(0,0,0,0.2)}
  100%{box-shadow:0 5px 13px 0 rgba(0,0,0,0.6)}
  }
  @keyframes fadeup {
  0%{transform:translate(0,1000px);-webkit-transform:translate(0,1000px);-moz-transform:translate(0,1000px);-ms-transform:translate(0,1000px);-o-transform:translate(0,1000px)}
  70%{transform:translate(0,-20px);-webkit-transform:translate(0,-20px);-moz-transform:translate(0,-20px);-ms-transform:translate(0,-20px);-o-transform:translate(0,-20px)}
  100%{transform:translate(0,0);-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0)}
  }
  @media (max-width: 600px) {
  .image-signin{display:none}
  .signin-content{padding:20px}
  .card{background:#fff;-webkit-perspective:1000px;perspective:1000px}
  .cardcontainer{-webkit-animation:none;animation:none}
  .top-signin-container{padding:0}
  .signin-container{box-shadow:0 9px 19px -7px rgba(0,0,0,0.603);width:100%}
  .signin-content{border-radius:5px}
  }
  
  @media (max-width: 700px) {
  .signin-content{padding: 9%;}

  }
</style>
