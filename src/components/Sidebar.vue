<template>
  <aside>
    
  <div id="search">
    <i class="fas fa-search" id="search-icon"></i>
    <form>
      <input type="text" id="search-input" class="form-control"  name="search"  placeholder="Search" autocomplete="off" @input="filtered($event)">
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
      <p>Get in touch with us for any queries at <a href="#">xotopolo@gmail.com</a></p>
    </div>
  </aside>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'Sidebar',
  data() {
    return {
      min: 0,
      max: 2000,
      check: this.checked,
      // searchQuery : '', 
    };
  },
  
  computed: { 
    pricerange() {
      return this.$store.state.highprice
    },
    
    checked() {
      return this.$store.state.sale;
    }
  },
  
  methods: {
    updateHighPrice($event) {
      this.$store.commit('setHighPrice', $event.target.value)
    },
    
    filtered($event) {
      this.$store.commit('setSearchName', $event.target.value)
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
          // searchBtn.focus
            // searchInput.focus()
        }
      } 
    });
    


  }
}

</script>

<style lang="css">
#search {
    margin-top: 40px;
    height: 100%;
    color: rgba(84, 84, 84, 0.989);
    width: 100%;
    border: solid 2px;
    padding: 0px 6px 0px 6px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    border-color: rgba(216, 216, 216, 0.687);
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
    width:0;
    font-size: 17px;
    font-weight: 500;
    background: none;
    color: black;
    font-family: monospace;
    border: none;
    padding: 5px 5px 5px 5px;
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
    padding: 38px 0;
    border-bottom: 1px solid #eee;
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
    position: relative;
    display: inline-block;
  }
  .checkbox-box {
    width: 18px;
    height: 18px;
    border: 2px solid #131313;
    position: relative;
    cursor: pointer;
    float: left;
    top: 0px;
    margin-right: 10px;
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

</style>
