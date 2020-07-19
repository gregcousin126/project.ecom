<template>
  <div class="product-page">
    <!-- <div class="sidebar-wrap">
      <Filterbar/>
    </div> -->
    <div class="product-list-wrap">
      <transition name="fade"><router-view /></transition>
    </div>
  </div>
</template>

<script>
// import Filterbar from '@/components/Filterbar'
import ProductList from '@/components/ProductList'

export default {
  components: {
    // Filterbar,
    ProductList
  }
}

</script>

<style>
</style>
