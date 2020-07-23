<template>
  <section class="all-products">
    <ProductList category="all-products"/>
    <!-- <FeatureList category="feature-products" /> -->
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
// import FeatureList from '@/components/FeatureList'
import SideMainLayout from '@/layout/SideMainLayout'
// import Filterbar from '@/components/Filterbar'

export default {
  name: 'all-products',
  components: {
    ProductList,
    // FeatureList,
    SideMainLayout
  }
}
</script>

<style lang="css">
</style>
