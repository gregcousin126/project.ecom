<template>
  <div id="app">
    
    <TopNavigation/>
      <div class="content-wrapper" id="wrapper">

        <router-view/>
      </div>
    <Footer/>
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    TopNavigation
  }
}
</script>
<style> 
@import './assets/css/root.css'; 
@import './assets/css/styles.css'; 
@import './assets/css/loading.css'; 
@import './assets/css/fonts.css';




</style>
