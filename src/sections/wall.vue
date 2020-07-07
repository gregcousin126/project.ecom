<template>
  <section class="wall">
    <h1>Walls</h1>
       <hr>
    <ProductList category="wall"/>
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

<style>
</style>
