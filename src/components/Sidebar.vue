<template>
  <aside id="sidebar-info">
    
  <div id="search">
    <i class="fas fa-search" id="search-icon"></i>
    <form>
      <input type="text" id="search-input" class="form-control"  name="search"  placeholder="Search" autocomplete="off" @input="searchFilter($event)">
    </form>
  </div>
  <button type="checkbox" class="sidebarbutton">
    <a ontouchstart="" id="show-sidebar" @click="showSidebar">
        <span  class="filter-btn" ><p id="remove-filter">filter +</p><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="10" width="18" height="2" fill="var(--blue-primary)" class="fltr-line1"></rect><rect x="7" y="20" width="18" height="2" fill="var(--blue-primary)" class="fltr-line2"></rect><circle cx="13" cy="21" r="2.5" fill="white" stroke="var(--blue-primary)" class="fltr-crcl1"></circle><circle cx="19" cy="11" r="2.5" fill="white" stroke="var(--blue-primary)" class="fltr-crcl2"></circle></svg></span>
      </a>
  </button> 

    <div class="expandable-sidebar" id="expandable-sidebar">
    <div class="mygif"></div>
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
      <p><p style="display:inline" v-if="JSON.stringify(currentUser) !== '{}'">{{currentUser.displayName}}, </p>Get in touch with us for any queries at <a href="mailto: xotopolo@gmail.com">xotopolo@gmail.com</a></p>
    </div>
  </div>
    <div class="aside-block">
      <label for="pricerange">Maximum Price: <span>${{ pricerange }}</span></label>
      <input class="slider" id="pricerange" tabindex="0" :value="pricerange" type="range" :min="min" :max="max" step="0.1" @input="updateHighPrice($event)" />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
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
    pricerange() { return this.$store.state.highprice },
    checked() { return this.$store.state.sale;},
    ...mapGetters({currentUser : 'currentUser'}),
  },
  
  methods: {
    
    showSidebar() {
      var ptag = document.getElementById('remove-filter');
      var expander = document.getElementById('expandable-sidebar');
      if (!expander.classList.contains('maxheight-expand-sidebar')) { 
        expander.classList.add("maxheight-expand-sidebar");
        ptag.style.display = 'none';
      } else { expander.classList.remove("maxheight-expand-sidebar");
       ptag.style.display = 'block';
      }
      
    },
    
    updateHighPrice($event) {
      // console.log('$event: ', $event);
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
      if(e.target.product_id === 'search' || e.target.product_id === 'search-input' || e.target.product_id === 'search-icon') {
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

 
.mygif {
-webkit-box-flex: 50%;
    -ms-flex: 50%;
    flex: 50%;
    display: var(--display-primary);
 
    width: 290px;
    position: relative;
    border-radius: 27px;
    margin: 5% auto 0px;
    /* margin: -20px 0 -55%; */
    /* -webkit-filter: var(--image-filter); */
    filter: var(--image-filter);
    height: 218px;
        background: url('../assets/pick-dress.gif');
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
}



 .filter-btn {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    place-content: center;
  }


#show-sidebar span svg * { transition: .15s cubic-bezier(0.35, 0.35, 0, 1.0);}
#show-sidebar span circle { will-change: transform;}
#show-sidebar span rect { transform-origin: 50% 50%;}
#show-sidebar span:active .fltr-crcl1 { transform: translateX(6px) }
#show-sidebar span:active .fltr-crcl2 { transform: translateX(-6px) }

#show-sidebar  svg { width: 30px;height: 30px;}

.sidebarbutton {
    font-size: 13px;
    padding: 2px;
    letter-spacing: 1px;
    font-weight: 700;
    width: -webkit-fill-available;
    border-radius: 0px;
    opacity: .7;
    cursor: pointer;
    border: 2px solid var(--blue-primary);
    text-transform: uppercase;
    margin: 20px 0px 0px 0px;
    -webkit-transition: var(--transition-speed);
    transition: var(--transition-speed);
    -moz-transition: var(--transition-speed);
    -ms-transition: var(--transition-speed);
    -o-transition: var(--transition-speed);
}


#show-sidebar button:checked ~ span circle { opacity: 0;}
#show-sidebar button:checked ~ span .fltr-line1 { transform: rotate(45deg) translateY(5.5px);}
#show-sidebar button:checked ~ span .fltr-line2 { transform: rotate(-45deg) translateY(-4.5px);}


.expandable-sidebar {
  overflow: hidden;
  transition: all var(--transition-speed) ease-in-out;
  max-height: 0px;
 }
 
 .maxheight-expand-sidebar {
  /* overflow: scroll; */
  max-height: 500px;
}

#search {
/* margin-top: 40px;  */
    height: 100%;
    color: var(--text-primary);
    width: 100%;
    border: solid 3px;
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
    /* font-size: 15px; */
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
width: 22px;
    height: 22px;
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
    width: 14px;
    height: 14px;
    top: 2px;
    left: 2px;
    background: #5044ff;
  }
  
  /* @media (min-width: 48em) { */
/*   
   .mygif {
      display: none;
    } */
    
  /* } */
  
  
  
  @media (max-width: 600px) {
    
    .sidebarbutton {
      font-size: 14px;
    }
   .mygif {
      display: var(--display-primary);
    } 
  }
  /* @media (max-width: 48em) { */
  @media (max-width: 600px) {
  input[type="checkbox"]:checked ~ .checkbox-box::before { 
        width: 16px;
    height: 16px;
   }
    .checkbox-box {
    width: 24px;
    height: 24px;
    }
    
    .checkbox-control {

    grid-template-rows: 18px 30px;
    }
    
    #show-sidebar svg {
    width: 45px;
    height: 45px;
    
    }

    #search {
          padding: 8px;
    }
}



</style>
