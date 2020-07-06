<template>
  <aside>
    
  <div id="search">
    <i class="fas fa-search" id="search-icon"></i>
    <form>
      <input type="text" id="search-input" class="form-control"  name="search"  placeholder="Search" autocomplete="off" @input="searchFilter($event)">
    </form>
  </div>
    <div class="aside-block">
      <label for="pricerange">Maximum Price: <span>${{ pricerange }}</span></label>
      <input class="slider" id="pricerange" tabindex="0" :value="pricerange" type="range" :min="min" :max="max" step="0.1" @input="updateHighPrice($event)" />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </div>
    <div class="aside-block">
        <h4>Super Sale</h4>
        <label class="checkbox-control">
          <span class="label-name">Show only sale item</span>
          <input type="checkbox" v-model="check" @change="updateSale">
          <div class="checkbox-box"></div>
        </label>
    </div>
    
    <div class="aside-block">
      <h4>Support</h4>
      <p><p style="display:inline" v-if="JSON.stringify(currentUser) !== '{}'">{{currentUser.displayName}}, </p>Get in touch with us for any queries at <a href="#">xotopolo@gmail.com</a></p>
    </div>
  </aside>
</template>

<script>
import store from '@/store/index'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'Sidebar',
  data() {
    return {
      min: 0,
      max: 2000,
      check: this.checked,
      displayName: null,
    };
  },
  
  computed: { 
    pricerange() {
      return this.$store.state.highprice
    },
    
    checked() {
      return this.$store.state.sale;
    },
        ...mapGetters({
          currentUser : 'currentUser',
    }),
  },
  
  methods: {
    updateHighPrice($event) {
      this.$store.commit('setHighPrice', $event.target.value)
    },
    
    searchFilter($event) {
      this.$store.dispatch('setSearchName', $event.target.value)
    },
    
    updateSale() {
      this.$store.commit('toggleSale');
    },
    
  },
  
  mounted() {
    const body = document.querySelector('body');
    const searchBtn = document.querySelector('#search');
    const searchInput = document.querySelector('#search-input');
    
    let active = false;

    body.addEventListener('click', (e) => {
      if(e.target.id === 'search' || e.target.id === 'search-input' || e.target.id === 'search-icon') {
        if(!active) {
          searchBtn.classList.add('active');
          searchInput.classList.add('active');
          active = true;
        }
      } 
    });
    


  }
}

</script>

<style lang="css">


#search {
    /* margin-top: 40px; */
    height: 100%;
    color: var(--text-primary);
    width: 100%;
    border: solid 2px;
    padding: 2px 8px 2px 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    border-color: var(--text-floogle);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 17px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
#search:hover {
cursor: text;
}

#search-input {
    height: 100%;
    width: 0;
    font-size: 16px;
    font-weight: 500;
    background: none;
    color: var(--text-primary);
    font-family: monospace;
    border: none;
    padding: 5px 5px 5px 7px;
    outline: 0;
    visibility: hidden;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

#search.active {
    width: 100%;
    visibility: visible;
}

#search-input.active {
    width: 100%;
    visibility: visible;
}

  .aside-block {
    padding: 30px 0;
    border-bottom: 1px solid var(--text-floogle);
    font-size: 15px;
  }
  .min {
    float: left;
  }
  .max {
    float: right;
  }

  .aside-block h4 {
    margin-bottom: 10px;
  }
  .checkbox-control {

    grid-auto-flow: column;
        position: relative;
    display: inline-grid;
    place-items: center;
    /* width: 59%; */
    /* padding-bottom: 8px; */
    grid-gap: 10px;
    vertical-align: middle;
    /* white-space: break-spaces; */
  }
  .checkbox-box {
width: 18px;
    height: 18px;
    border: 2px solid var(--text-floogle);
    position: relative;
    cursor: pointer;
    float: left;
    top: 0px;
    margin-top: 2.2px;
  }

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
  }

  input[type="checkbox"]:hover ~ .checkbox-box, input[type="checkbox"]:focus ~ .checkbox-box, input[type="checkbox"]:checked ~ .checkbox-box{
    border-color: #5044ff;
  }

  input[type="checkbox"]:checked ~ .checkbox-box::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 2px;
    left: 2px;
    background: #5044ff;
  }
  
  
  @media (max-width: 48em) {

    #search {
          padding: 4px 8px 4px 8px;
    }
}



</style>
