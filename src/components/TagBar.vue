<template>
  <div>
      <ul class="categlory-tag-container-chosen">
        
        
        <li >
        <!-- <li v-for="(categlories, index) in products"> -->
          <!-- {{tagchoice}} -->
          
          <!-- <router-link :to="`${categlories}`"> -->
            <div class="categlory-tag" :style="{backgroundColor: tagchoice[1]}">{{tagchoice[0]}}</div>
        <!-- {{tagchoice[1]}} -->
            <!--  -->
            <!-- <div class="categlory-tag" :style="{backgroundColor: tagColors[index]}">#{{categlories}}</div> -->
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'TagBar',
  data() {
    return {
      // tagColors: this.$store.state.tagchoice[1],
          // console.log('this.$store.state.tagchoice: ', this.$store.state.tagchoice);

    };
  },

  computed: {
    
    products() {
      var product_arr = [];
      this.$store.state.stores.products.forEach((item) => {
        product_arr.push(item.category);
      });
      
      var product_arrayFiltered = product_arr.filter((v, i, a) => a.indexOf(v) === i);
      return product_arrayFiltered;
    },
  tagchoice() {
    // console.log('this.$store.state.tagchoice: ssss', this.$store.state.tagchoice);
    return this.$store.state.tagchoice;
  }
  },
  
};
</script>

<style>
.categlory-tag {
  display: inline-block;
  border-radius: 3px;
  padding: 0.4em 0.8em;
  border-radius: 2px;
  color: var(--tag-text-color);
  font-weight: 600;
  margin: 0.25em 0.2em;
}

.categlory-tag-container-chosen {
  width: 100%;
  display: inline-flex;
  -ms-flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: left;
  flex-wrap: wrap;
}

.aside-bar {
  overflow: scroll;
  /* padding: 0px 0 10px; */
}
</style>


