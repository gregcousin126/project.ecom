<template>
  <section class="furniture">
    <div class="categlory-title-container">
      <h1 class="categlory-title-tag">Furniture</h1>
    </div>
    <hr class="hr-categlory">
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
