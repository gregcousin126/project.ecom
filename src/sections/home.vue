<template>
  <section class="allproducts">

    <ProductList category="allproducts"/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'
import Filterbar from '@/components/Filterbar'

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
