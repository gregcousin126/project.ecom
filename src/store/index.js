import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import VuexPersistence from 'vuex-persist'
import { firebaseAuth } from '../../config/firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // products: [],
    stores: [],
    tagchoice: [],
    cart: [],
    firebaseCart: [], 
    cartItems: 0,
    storeIds: [],
    checkoutStatus: null,
    highprice: 2000,
    sale: false,
    isLoggedIn: '', 
    user: '', 
  },  

  getters: getters,
  actions: actions,
  mutations : mutations,
  
})
