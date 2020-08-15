import Register from '@/auth/Register'
import Signin from '@/auth/Signin'
import Userinfo from '@/auth/Authchange'
import SideMainLayout from '@/layout/SideMainLayout'
import cart from '@/sections/cart'
// import men from '@/sections/men'
// import other from '@/sections/other'
// import decoration from '@/sections/decoration'
import ErrorPage from '@/sections/error'
// import furniture from '@/sections/furniture'
import FeatureList from '@/components/FeatureList'
// import StoreList from '@/components/StoreList'
import home from '@/sections/home'
// import wall from '@/sections/wall'
import Vue from 'vue'
import Router from 'vue-router'


import categlories from '@/sections/categlories'



Vue.use(Router); 

export default new Router({
    // base: process.env.BASE_URL,

  mode: 'history',
  routes: [
    {
      path: '/',
      component: SideMainLayout,
      children: [
        { path: '/', component: FeatureList, name : 'FeatureList' },
        { path: '/home', component: home, name : 'home' },
        // { path: '/StoreList', component: StoreList, name : 'StoreList' },
        { path: '/categlories', component: categlories, name : 'categlories' },
        
        // { path: '/furniture', name: 'furniture', component: furniture,  meta: { title: 'Nested - furniture Page' }},
        // { path: '/wall', name: 'wall', component: wall,  meta: { title: 'Nested - wall Page' }},
        // { path: '/men', name: 'men', component: men,  meta: { title: 'Nested - men Page' }},
        // { path: '/other', name: 'other', component: other,  meta: { title: 'Nested - other Page' }},
        // { path: '/decoration', name: 'decoration', component: decoration, meta: { title: 'Nested - decoration Page' } },
        // { path: '/home', name: 'home', component: home, meta: { title: 'Nested - home Page' } }
      ]
    },
    
    
              //  { path: '/Banner', name: 'Banner', component: Banner,  meta: { title: 'Nested - Banner Page' }},
    
    { path: '/userinfo', component: Userinfo, name: 'Authchange' },
    { path: '/register', component: Register },
    { path: '/signin', component: Signin },
    { path: '/cart', name: 'cart', component: cart },
    // { path: '*', redirect: '/error',  },
    { path: '*', component: ErrorPage}
    
    

  ],
  
   scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
})
