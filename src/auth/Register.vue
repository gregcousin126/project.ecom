<template>
<body>
    <!-- <div v-if="authUser"> <div v-else> -->
      <form @submit.prevent="register">
        <h2>Register</h2>
        <input type="email"  class="inputbox with-transform" v-model="email" placeholder="Type your email">
        <input type="password"  class="inputbox with-transform" v-model="password" placeholder="Pick your password">
        <input type="displayName"  class="inputbox with-transform" v-model="displayName" placeholder="Whats your name">
        <button>Register</button>
      </form>
    <!-- </div> -->
</body>
</template>
<script>

import firebase from 'firebase'
import Authchange from '@/auth/Authchange'
import { ref, firebaseAuth } from '../../config/firebase';

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

<style lang="css"></style>
