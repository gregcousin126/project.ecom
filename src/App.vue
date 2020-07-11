<template>
  <div id="app">
    <Sidebar/>
      <div class="content-wrapper" id="wrapper">
        <router-view/>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Sidebar,
    Footer
  }
}
</script>
<style> 
@import './assets/css/root.css'; 
@import './assets/css/styles.css'; 
@import './assets/css/loading.css'; 
@import './assets/css/fonts.css';




</style>
