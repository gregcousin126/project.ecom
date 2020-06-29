import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import VuexPersistence from 'vuex-persist'
// import auth from './auth/*  */';
import { firebaseAuth } from '../../config/firebase'

// import firebase from 'firebase'
// import { FBconfig, firebaseApp} from '../../config/firebase'

// import toastr from 'toastr'
// import { FBconfig } from '../../config/firebase'


Vue.use(Vuex);

// firebase.initializeApp(FBconfig);

// let db = app.database(); 
// let products = db.ref('products')

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartItems: 0,
    checkoutStatus: null,
    highprice: 2000,
    sale: false,
    isLoggedIn: '', 
    user: '', 
    // isLoggedIn: firebaseAuth().currentUser != null,
    // user: firebaseAuth().currentUser,
  },  

  getters: getters,
  actions: actions,
  mutations : mutations,
  
})
