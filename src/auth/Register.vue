<template>
<body>
    <div v-if="authUser">
        <authchange/>
    </div>
    <div v-else>
      
      <form @submit.prevent="register">
        <h2>Register</h2>
        <input type="email"  class="inputbox with-transform" v-model="email" placeholder="Type your email">
        <input type="password"  class="inputbox with-transform" v-model="password" placeholder="Pick your password">
        <button>Register</button>
      </form>
    </div>
  </div>
</body>
</template>
<script>

import firebase from 'firebase'
import Authchange from '@/auth/Authchange'


export default {
  
	  name: 'Register',
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
      linkedGoogle () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
      },
      linkedPassword () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'password')
      }
    },
    methods: {
      register () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message))
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
		
    created () {
      firebase.auth().onAuthStateChanged(user => {
        this.authUser = user
        if (user) {
          this.displayName = user.displayName
          this.photoURL = user.photoURL
          this.email = user.email
          firebase.database().ref('users').child(user.uid).once('value', snapshot => {
            if (snapshot.val()) {
              this.favoriteFood = snapshot.val().favoriteFood
              Vue.set(this.authUser, 'favoriteFood', this.favoriteFood)
            }
          })
        }
      })
    },
    
    
    components: {
      Authchange
    }
    
}
</script>

<style lang="css"></style>
