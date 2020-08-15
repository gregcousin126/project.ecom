<template>
  <section class="all-products">
            <ProductList category="all-products" />

    <!-- <StoreList/> -->
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'

export default {
  name: 'all-products',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>

<style lang="css">
</style>
