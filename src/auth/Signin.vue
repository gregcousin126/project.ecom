<template>
<body>
  <div>
		<!-- <div v-if="authUser"> -->
				<!-- <authchange/> -->
		<!-- </div> -->
    <!-- <div v-else> -->
      <form @submit.prevent="signIn">
        <h2>Sign in</h2>
        <input type="email" v-model="email"  class="inputbox with-transform" placeholder="email">
        <input type="password" v-model="password"  class="inputbox with-transform" placeholder="password">
        <button>Sign In</button>
      </form>
    <!-- </div> -->
  </div>
</body>
</template>
<script>

import firebase from 'firebase'
import { ref, firebaseAuth } from '../../config/firebase';

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
    },
    
    methods: {
      signIn () {
      firebaseAuth().signInWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message))
        this.$router.push('/')
      },
    },
}

</script>
<style lang="css">

</style>
