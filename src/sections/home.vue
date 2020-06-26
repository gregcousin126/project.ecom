<template>

  <section class="allproducts">
    <h1>Products</h1>
      <hr>
    <ProductList category="allproducts"/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'allproducts',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>

<style lang="css">
</style>
