<template>
  <section class="furniture">
    <h1>Furniture</h1>
       <hr>
    <ProductList category="furniture"/>
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
