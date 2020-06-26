import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import firebase from 'firebase'

var config = {
	apiKey: "AIzaSyAGFN1GuDhnDa9mm-_jNC9SVa88h5o8yjU",
	authDomain: "xotopolo-4f021.firebaseapp.com",
	databaseURL: "https://xotopolo-4f021.firebaseio.com",
	projectId: "xotopolo-4f021",
	storageBucket: "xotopolo-4f021.appspot.com",
	messagingSenderId: "228613646081",
	appId: "1:228613646081:web:85f08b10063fc824f0dd00",
	measurementId: "G-VKCW7THF9B"
}

firebase.initializeApp(config);


export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartItems: 0,
    checkoutStatus: null,
    highprice: 2000,
    sale: false,
  },  
  
  getters: getters,
  actions: actions,
  mutations : mutations,
  
})
