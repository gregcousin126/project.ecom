import { currency } from '@/currency'
import store from '@/store/index'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
