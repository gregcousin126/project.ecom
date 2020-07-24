<template>
  <section class="decoration">
    <div class="categlory-title-container">
      <h1 class="categlory-title-tag">Decoration</h1>
    </div>
    <hr class="hr-categlory">
    
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
