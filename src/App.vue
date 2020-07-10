<template>
  <div id="app">
    
    <SideNavigation/>
      <div class="content-wrapper" id="wrapper">

        <router-view/>
      </div>
    <Footer/>
  </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    SideNavigation
  }
}
</script>
<style> 
@import './assets/css/root.css'; 
@import './assets/css/styles.css'; 
@import './assets/css/loading.css'; 
@import './assets/css/fonts.css';




</style>
