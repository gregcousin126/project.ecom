<template>
  <div id="app">
    <Sidebar/>
    <div class="sidebar-wrap" id="sidebar-wrap">
      <Filterbar/>
    </div>
    <!-- <Filterbar/> -->
      <div class="content-wrapper" id="wrapper">
        <router-view/>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Filterbar from '@/components/Filterbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Filterbar,
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
