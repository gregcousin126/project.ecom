import Vue from 'vue'
import Router from 'vue-router'
import index from '@/sections/index'
import cart from '@/sections/cart'
import furniture from '@/sections/furniture'
import decor from '@/sections/decor'
import SideMainLayout from '@/layout/SideMainLayout'
// 
// var products = require('../../data.json')

Vue.use(Router); 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: SideMainLayout,
      children: [
        { path: '/', component: index },
        { path: '/furniture', name: 'furniture', component: furniture,  meta: { title: 'Nested - furniture Page' }},
        // { path: `/${products.categlory}`, name: `/${products.categlory}`, component: categlory,  meta: { title: 'Nested - furniture Page' }},
        { path: '/decor', name: 'decor', component: decor }
      ]
    },
    
    { path: '/cart', name: 'cart', component: cart }
    
  ]
})
