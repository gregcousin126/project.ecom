import Register from '@/auth/Register'
import Signin from '@/auth/Signin'
import SideMainLayout from '@/layout/SideMainLayout'
import cart from '@/sections/cart'
import decoration from '@/sections/decoration'
import furniture from '@/sections/furniture'
import home from '@/sections/home'
import wall from '@/sections/wall'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router); 

export default new Router({
  routes: [
    {
      
      //  path: '/', component: register, 
      path: '/',
      // name: 'home',
      component: SideMainLayout,
      children: [
        { path: '/', component: home },
        // { path: '/register', component: Register },
        // { path: '/signin', component: Signin },
        { path: '/furniture', name: 'furniture', component: furniture,  meta: { title: 'Nested - furniture Page' }},
        { path: '/wall', name: 'wall', component: wall,  meta: { title: 'Nested - wall Page' }},
        { path: '/decoration', name: 'decoration', component: decoration, meta: { title: 'Nested - decoration Page' } }
      ]
    },
    { path: '/register', component: Register },
    { path: '/signin', component: Signin },
    { path: '/cart', name: 'cart', component: cart }
    
  ]
})
