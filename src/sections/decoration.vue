<template>
  <section class="decoration">
    <h1>Decoration</h1>
       <hr>
    <ProductList category="decoration"/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'

export default {
  name: 'decoration',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>
<style lang="css"></style>
