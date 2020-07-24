<template>
  <section class="other">
    <div class="categlory-title-container">
      <h1 class="categlory-title-tag">Other</h1>
    </div>
    <hr class="hr-categlory">
    <ProductList category="other"/>
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
