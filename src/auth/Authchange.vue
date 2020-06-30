
  <template>
      <!-- <router-link to="/furniture"><button>Shop Now!</button></router-link> -->
      <div>
      <div v-if="currentUser.displayName">
      <h2>Signed in as {{currentUser.email}}
      </h2>
      <img :src="currentUser.photoURL" height="50">
      <p>👩‍🍳 Hi, {{currentUser.displayName || 'friend'}} we know you like {{currentUser.favoriteFood || 'food'}}.</p>
      <button @click="signOut">Sign out</button>
      <!-- <button v-if="!linkedGoogle" @click="linkGoogle">Link Google Account</button> -->
      <!-- <button v-else @click="unlinkGoogle">Unlink Google Account</button> -->
      <form @submit.prevent="updateProfile">
        <h2>Update Profile</h2>
        <input class="inputbox" v-model="displayName" placeholder="Your name">
        <input class="inputbox" v-model="photoURL" placeholder="Your photo url">
        <button>Update</button>
      </form>
      <form @submit.prevent="updateCustomDetails">
        <h2>Update Additional Details</h2>
        <input class="inputbox" v-model="favoriteFood" placeholder="Your favorite food">
        <button>Update</button>
      </form>
      <form @submit.prevent="updateEmail">
        <h2>Update Email</h2>
        <input class="inputbox" v-model="email" placeholder="Your email">
        <button>Update</button>
      </form>
      <form @submit.prevent="updatePassword">
        <h2>Update Password</h2>
        <input type="password" class="inputbox" v-model="newPassword" placeholder="Your password">
        <button>Update</button>
      </form>
    </div>
 </div>
</template>
<script>

import firebase from 'firebase'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
	  name: 'Authchange',
    data() {
      return {
        email: '',
        password: '',
        displayName: null,       photoURL: null,
        newPassword: null,
        favoriteFood: null,
        authUser: null,
        // currentUser: null
      }
    },
    methods :{
      signOut () {
        firebase.auth().signOut()
      },
      // linkGoogle () {
      //   const provider = new firebase.auth.GoogleAuthProvider()
      //   this.currentUser.linkWithPopup(provider).catch(error => alert('🤕' + error.message))
      // },
      // unlinkGoogle () {
      //   this.authUser.unlink('google.com')
      // },
      updateProfile () {
        this.currentUser.updateProfile({ displayName: this.displayName, photoURL: this.photoURL })
      },
      updateCustomDetails () {
        firebase.database().ref('users').child(this.currentUser.uid)
          .update({favoriteFood: this.favoriteFood})
      },
      updateEmail () {
        this.currentUser.updateEmail(this.email)
      },
      updatePassword () {
        this.currentUser.updatePassword(this.newPassword)
          .then(() => { this.newPassword = null }).catch(error => alert('🤕' + error.message))
      }
    },
    computed: {
      
    ...mapGetters({
          currentUser : 'currentUser',
    }),

    },
		
    created () {
      
      
      
      
      // firebase.auth().onAuthStateChanged(user => {
      //   this.currentUser = user
      //   if (user) {
      //     this.displayName = user.displayName
      //     this.photoURL = user.photoURL
      //     this.email = user.email
          // firebase.database().ref('users').child(user.uid).once('value', snapshot => {
          //   if (snapshot.val()) {
          //     this.favoriteFood = snapshot.val().favoriteFood
          //     Vue.set(this.currentUser, 'favoriteFood', this.favoriteFood)
          //   }
          // })
        // }
      // })
    },
    
}
</script>
<style lang="css">

</style>
