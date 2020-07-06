import { currency } from '@/currency'
import store from '@/store/index'
import Vue from 'vue'
import App from './App'
import router from './router'
import { firebaseListener, ref } from '../config/firebase';



Vue.config.productionTip = false;
Vue.filter('currency', currency);

firebaseListener(authStatusChange);

function authStatusChange(loggedIn, user) {
	if (store) {
			store.commit('authStateChange');
		if (user) {
			store.dispatch('firebaseShoppingCart');
		}
	}
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
