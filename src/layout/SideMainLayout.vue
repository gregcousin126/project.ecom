<template>
  <div class="product-page">
    <div class="sidebar-wrap">
      <!-- <Sidebar/> -->
      <Filterbar/>
    </div>
    <div class="product-list-wrap">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Filterbar from '@/components/Filterbar'
// import Sidebar from '@/components/Sidebar'
import ProductList from '@/components/ProductList'

export default {
  components: {
    // Sidebar,
    Filterbar,
    ProductList
  }
}

</script>

<style>
</style>
