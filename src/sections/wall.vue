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

export default {
  name: 'wall',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>

<style>
</style>
