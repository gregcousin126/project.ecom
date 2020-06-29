
  <template>
      <!-- <router-link to="/furniture"><button>Shop Now!</button></router-link> -->
      <dir>
      <div v-if="authUser">
      <h2>Signed in as {{authUser.email}}
      </h2>
      <img :src="authUser.photoURL" height="50">
      <p>👩‍🍳 Hi, {{authUser.displayName || 'friend'}} we know you like {{authUser.favoriteFood || 'food'}}.</p>
      <button @click="signOut">Sign out</button>
      <!-- <button v-if="!linkedGoogle" @click="linkGoogle">Link Google Account</button> -->
      <!-- <button v-else @click="unlinkGoogle">Unlink Google Account</button> -->
      <form @submit.prevent="updateProfile">
        <h2>Update Profile</h2>
        <input v-model="displayName" placeholder="Your name">
        <input v-model="photoURL" placeholder="Your photo url">
        <button>Update</button>
      </form>
      <form @submit.prevent="updateCustomDetails">
        <h2>Update Additional Details</h2>
        <input v-model="favoriteFood" placeholder="Your favorite food">
        <button>Update</button>
      </form>
      <form @submit.prevent="updateEmail">
        <h2>Update Email</h2>
        <input v-model="email" placeholder="Your email">
        <button>Update</button>
      </form>
      <form @submit.prevent="updatePassword">
        <h2>Update Password</h2>
        <input type="password" class="inputbox" v-model="newPassword" placeholder="Your password">
        <button>Update</button>
      </form>
    
    </div>
          <div else>
        <h2>Sign In or Register</h2>
    </div>
 </dir>
</template>
<script>

import firebase from 'firebase'

export default {
	  name: 'Authchange',
    data() {
      return {
        email: '',
        password: '',
            displayName: null,       photoURL: null,
        newPassword: null,
        favoriteFood: null,
        authUser: null
      }
    },
    methods :{
      signOut () {
        firebase.auth().signOut()
      },
      // linkGoogle () {
      //   const provider = new firebase.auth.GoogleAuthProvider()
      //   this.authUser.linkWithPopup(provider).catch(error => alert('🤕' + error.message))
      // },
      // unlinkGoogle () {
      //   this.authUser.unlink('google.com')
      // },
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
    computed: {

    },
		
    created () {
      
      
      
      
      // firebase.auth().onAuthStateChanged(user => {
      //   this.authUser = user
      //   if (user) {
      //     this.displayName = user.displayName
      //     this.photoURL = user.photoURL
      //     this.email = user.email
          // firebase.database().ref('users').child(user.uid).once('value', snapshot => {
          //   if (snapshot.val()) {
          //     this.favoriteFood = snapshot.val().favoriteFood
          //     Vue.set(this.authUser, 'favoriteFood', this.favoriteFood)
          //   }
          // })
        // }
      // })
    },
    
}
</script>
<style lang="css"></style>
