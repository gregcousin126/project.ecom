<template>
<body>
  
  <div>

		<div v-if="JSON.stringify(currentUser) !== '{}'">
      <!-- <h1>{{currentUser.displayName}}</h1> -->
				<authchange/>
		</div>
    <div v-if="JSON.stringify(currentUser) === '{}'">
      <form @submit.prevent="signIn">
        <h2>Sign in</h2>
        <input type="email" v-model="email"  class="inputbox with-transform" placeholder="email">
        <input type="password" v-model="password"  class="inputbox with-transform" placeholder="password">
        <button>Sign In</button>
      </form>
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

</style>
