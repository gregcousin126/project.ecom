<template>
<body>
  <div>
		<div v-if="authUser">
				<authchange/>
		</div>
    <div v-else>
      <form @submit.prevent="signIn">
        <h2>Sign in</h2>
          <div>
        <div class="sig" @click="signInWithGoogle"><svg class="g" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g id="Google-Button" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="G" sketch:type="MSArtboardGroup"><g id="Group-Copy" sketch:type="MSLayerGroup"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4" sketch:type="MSShapeGroup"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853" sketch:type="MSShapeGroup"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05" sketch:type="MSShapeGroup"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335" sketch:type="MSShapeGroup"></path></g></g></g></svg><img class="g" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAABWtJREFUWAm9WHtMW1UY/865lVLLe4MydcMNEKRB7ADDmIQNRAwxasHX9gfxjykm+8M/MNNkRuuDZHMucZtmI/E/s4fGBBdgTsZoF50kvJa4VIyYuOA2WpiU8ShltPf4neJtLvTe9uLoTtqec7/n75z7fd85pwRW2W5WWbIEpqtlhJURQiyEQToDSAPCRGDgQnP8O0qAXADR+0OGw8mfNTeiUZK4qkteoQBN6LQSEIkmPYYNoA9APGjqGWrTohPVsLu6pAYYOYQQirQYVJVhMChCYF9mz1CPqgwycNLKbSQnR++qKjmKS99112C4CwLFFGj3eFXpx7YIfhVX6O9t5jT9/YbzaKVUGe7dURmws6aLAy8oWdGtJLrKH8sghrhuBFO4krcWzxhU8yCSL9RsLQPkNJvjiEH/PS5bDMHAcyZHP05YuS0DtN5kOIJgtimLhlEHMIc6RQZ9DEQ3MIa5J2RQYMVAaR3aKZNrLK1MZDBcPhRDYztLKwUKDrkRpTGmcS/4/c2mS1d6lfgSzV1VWg7AMDtJuVYwXDcI6NuXQNjpKf6VMVogGVTqcTUOnOjp32/DwqLEX0mz7wBdgVDSAgFyIdJrkusFAfm6hWf9V9e1e89vBPArVwLMjE8xM96RK8diHPQuAG3UF3ogsfEPoCkLYX4wVk7cCzDcMfG0QUpCom4Mh/GcwHwU5jqyYHEkmT8iATwzt8XN2YODt5cIsf2lRqPwogSGuyLxIhgb/oL4ypv4wPiOefhegeH+dUBoBR/IG986DeXjIGzweuZOPnBEzlMbV344W6PG00LH2BHtHyRc5HVItQjGbZ65bHQ4Z7UYFHTQpUUukozZ5tRTAuxBVSERBlR5MWCkQyYWVoD/ojfcAwPiDqfGjkKoYFIuOrHzGdGyyIQkDkg1nfF1miJaWGOmyMg/FF/LDVW7FEpUeTFgBIC5eJZdxa9Fyf7wYqrZ/KU5wbnXETXTsJqfVbIhp+HpcyPunlvlNNk48AscvqUDJv6EtahRxsCTBMDX8znQ6n10i2EdeQt5LXK+0tj+XqLiCVAuW9Uy/RmeXhUB4YSugc0m0rm5wHeo5JMUZ0Ud7Jt5Ao57C3BLxyhi0Fzc+pRqJkp60friNwbuY0AbVOUI4JEZ4aZaYWpepMGi9qc/CV6bqoSf72SG9LBqp0JS8oEQ4X8OkjblvY4bwMNq6iKInZwXTHuXqP/mnO8h2DNVATdEY5gOgnpz65n6g2EMjYQdLZ7HMX4OqYoz8JLFSTvnC/zn2MLCbyM51dYAUNU0R4PbN9Tnx48V/m7HcyVGmba286Pp7ZQIHXi5TFHVIOJR+/uZ5zg/eEDjA8spKx5hqYOPIzbGegOMNV/Z3RbxCFt0xvqIjtG39dPVu/S3dicQ3MeVGgbzlM8vZvfakic5PwSIPxSfbjjOXw8fR22M73OsE680fXgjdYuU6SkjWzBjs3E1ef2qQ1vBkBDmc8Hg3gs0kBpmFmPnXcf+pFA4LANktpnjDHl5DlxerTePMAdqBIIJw0HpfPkhEVwdx7h/tNZpM9+RiMEYkh4mHBOB9c/nt1OBPINIVeNJkl9VTxdgMfEyLmocgsrFng0zv//pftumObmdZSskMcxf1aYZEoxYF2JzldbNlg7HX2+qc9hSr0k+pV5xt3fu+XFyany+Am8axyTBteqx0HbMgP1JJTDch+IKyZ2XnLLWMIp/xwApktNXO8Y6MYHb1CeDu9r4JFXLRlRAQcc2oJZc68uU0iY8+FciOG16S55H8c+1z9m0v3Wwqd0bbSKaDUuGLCfrs4hAavEOX4YLbMGppqORNHy9+IFxhDqBo+uI+RLe+buGXm0blnS19P8CWL3OY1MuAyEAAAAASUVORK5CYII="></div>
      </div>
         <!-- <div > -->
        <input type="email" v-model="email"  class="inputbox with-transform" placeholder="email">
              <!-- </div> -->
        <input type="password" v-model="password"  class="inputbox with-transform" placeholder="password">
        <button>Sign In</button>
      <!-- </div> -->
      
      </form>
  

     
    </div>
  </div>
</body>
</template>
<script>

import firebase from 'firebase'
import Authchange from '@/auth/Authchange'

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
      linkedGoogle () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
      },
      linkedPassword () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'password')
      }
    },
    methods: {
      signOut () {
        firebase.auth().signOut()
      },
      signIn () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message))
      },
      signInWithGoogle () {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).catch(error => alert('🤕' + error.message)).then(data => console.log(data.user, data.credential.accessToken))
      },

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
<style lang="css">

</style>
