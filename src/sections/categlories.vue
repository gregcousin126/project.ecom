<template>
  <section class="categlory">
    <TagBar/><br/>
    <hr class="hr-categlory" />
    <ProductList :category="`${tagchoice}`" />
  </section>
</template>

<script>
import ProductList from '@/components/ProductList';
import TagBar from '@/components/TagBar';
import SideMainLayout from '@/layout/SideMainLayout';
import Banner from '@/layout/Banner';

export default {

  
  name: 'categlories',
  
  computed : {
    tagchoice () {
      return this.$store.state.tagchoice[0]
    }
  },
  components: {
    TagBar,
    Banner,
    ProductList,
    SideMainLayout,
  },
};
</script>

<style>
.hr-categlory {
  height: 12px;
  border: none;
  border-radius: 0px;
  margin-bottom: 27px;
  background: rgba(0, 0, 0, 0.08);
  width: 100%;
}
</style>
