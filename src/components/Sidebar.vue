<template>
  <aside id="sidebar-info">
    
  <div id="search">
    <i class="fas fa-search" id="search-icon"></i>
    <form>
      <input type="text" id="search-input" class="form-control"  name="search"  placeholder="Search" autocomplete="off" @input="searchFilter($event)">
    </form>
  </div>
  
  
  
          <button type="checkbox" class="sidebarbutton">
        <a id="show-sidebar" @click="showSidebar">
            <!-- <input class="filterbutton" > -->
            <!-- <span class="filter-btn"> -->
            <span  class="filter-btn" ><p id="remove-filter">filter +</p><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="fltr-line1" x="7" y="10" width="18" height="1" fill="var(--my-blue)"/><rect class="fltr-line2" x="7" y="20" width="18" height="1" fill="var(--my-blue)"/><circle class="fltr-crcl1" cx="13" cy="20.5" r="2.5" fill="white" stroke="var(--bg-secondary)"/><circle class="fltr-crcl2" cx="19" cy="10.5" r="2.5" fill="white" stroke="var(--bg-secondary)"/></svg></span>
              
              <!-- </span > -->
         </a>
          </button> 
           
    <div class="expandable-sidebar" id="expandable-sidebar">
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
    
    showSidebar() {
      var ptag = document.getElementById('remove-filter');
      var expander = document.getElementById('expandable-sidebar');
      if (!expander.classList.contains('maxheight-expand-sidebar')) { expander.classList.add("maxheight-expand-sidebar");
      ptag.style.display = 'none'
      
      } 
      else { expander.classList.remove("maxheight-expand-sidebar");
       ptag.style.display = 'block'
      }
      
    },
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
    // var ptag = document.getElementById('remove-filter');

    // var expander = document.getElementById('expandable-sidebar');
    // var button = document.getElementById('show-sidebar');
    
    
    // expander.addEventListener('mouseleave', function (e) {
    //   expander.classList.remove("maxheight-expand-sidebar");
      
    //   });
    
    // if(!expander.matches(':hover')) {
      
      //  ptag.style.display = 'block';
    // button.addEventListener('mouseleave', function (e) {

      // expander.classList.remove("maxheight-expand-sidebar");
      
      // });
      
    // } 
    
    // if (!button.matches(':hover')) {
      //  ptag.style.display = 'block';
    // }
    
    
    
    
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



 .filter-btn {
    /* display: -webkit-inline-box;  */
    /* display: -ms-inline-flexbox; */
    display: flex;
    -webkit-box-align: center;
    /* grid-auto-flow: column; */
    /* grid-template-columns: 15px 32px; */
    /* grid-column: auto; */
    /* grid-gap: 8px; */
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    place-content: center;
    /* padding: 5px; */
  }

#show-sidebar span svg * { 
  transition: .15s cubic-bezier(0.35, 0.35, 0, 1.0);}
#show-sidebar span circle { will-change: transform;}
#show-sidebar span rect { transform-origin: 50% 50%;}
#show-sidebar span:hover .fltr-crcl1 { transform: translateX(6px) }
#show-sidebar span:hover .fltr-crcl2 { transform: translateX(-6px) }



#show-sidebar  svg {
    width: 30px;
    height: 30px;
}
.sidebarbutton {
    font-size: 13px;
    padding: 2px;
    letter-spacing: 1px;
    font-weight: 700;
    width: -webkit-fill-available;
    /* display: none; */
    border-radius: 0px;
    opacity: .7;
    cursor: pointer;
    /* background: white; */
    /* color: var(--my-blue); */
    border: 2px solid var(--my-blue);
    text-transform: uppercase;
    margin: 20px 0px 0px 0px;
    -webkit-transition: 0.15s all ease-out;
    transition: 0.15s all ease-out;
    -moz-transition: 0.15s all ease-out;
    -ms-transition: 0.15s all ease-out;
    -o-transition: 0.15s all ease-out;
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
  overflow: scroll;
  max-height: 500px;
}

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
width: 20px;
    height: 20px;
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
    width: 12px;
    height: 12px;
    top: 2px;
    left: 2px;
    background: #5044ff;
  }
  
  
  @media (max-width: 48em) {
    
    #show-sidebar svg {
    width: 45px;
    height: 45px;
    
    }

    #search {
          padding: 4px 8px 4px 8px;
    }
}



</style>
