<template>
  <section class="decoration">
    <!-- <Banner/> -->
    <h1>Decoration</h1>
       <hr>
    <ProductList category="decoration"/>
  </section>
</template>

<script>

import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'
import Banner from '@/layout/Banner'

export default {
  name: 'wall',
  components: {
    Banner,
    ProductList,
    SideMainLayout
  }
}
</script>
<style lang="css"></style>
