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
          <h4>Categlories</h4>
          
          <ul  class="categlory-tag-container">
          <li v-for="categlories in products">
            <router-link :to="`${categlories}`">
              <!-- <a class="nav-link"> -->
                <!-- <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 509.418 509.418" style="enable-background:new 0 0 509.418 509.418;" xml:space="preserve"><g><g><g><path style="fill:#B8BAC0;" d="M254.497,214.694c-4.422,0-8-3.578-8-8v-32.625c0-7.875,5.906-14.656,13.734-15.781 c10.852-1.555,20.711-7.633,27.047-16.672c6.414-9.141,8.656-20.375,6.313-31.617c-3.141-15.047-15.352-27.258-30.398-30.398 c-12.141-2.508-24.508,0.391-33.906,8.039c-9.398,7.641-14.789,18.961-14.789,31.055c0,4.422-3.578,8-8,8s-8-3.578-8-8 c0-16.938,7.547-32.781,20.695-43.477c13.141-10.68,30.367-14.805,47.266-11.273c21.18,4.414,38.375,21.609,42.789,42.789 c3.258,15.617,0.109,31.266-8.867,44.07c-8.859,12.641-22.664,21.141-37.875,23.328l-0.008,32.563 C262.497,211.116,258.919,214.694,254.497,214.694z"/></g></g><g><path style="fill:#5C546A;" d="M499.442,376.998L261.317,212.826c-4.109-2.828-9.523-2.82-13.633,0.008L9.856,377.092 c-8.266,5.703-11.805,16.016-8.797,25.664c2.958,9.506,11.567,15.9,21.438,15.945v4.008c0,13.234,10.766,24,24,24h40 c4.422,0,8-3.578,8-8s-3.578-8-8-8h-40c-4.414,0-8-3.586-8-8v-4h432v4c0,4.414-3.586,8-8,8h-40c-4.422,0-8,3.578-8,8s3.578,8,8,8 h40c13.234,0,24-10.766,24-24v-4h0.32c9.977,0,18.648-6.469,21.578-16.094C511.364,392.881,507.716,382.553,499.442,376.998z M254.513,237.287l228.328,157.422H26.575L254.513,237.287z"/></g><g><path style="fill:#8A8895;" d="M262.497,174.709h-16c-4.418,0-8,3.582-8,8v30c0,4.418,3.582,8,8,8h16c4.418,0,8-3.582,8-8v-30 C270.497,178.291,266.915,174.709,262.497,174.709z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> -->
                
               <div class="categlory-tag">#{{categlories}}</div>
              <!-- </a> -->
            </router-link>
          </li>
          </ul>
          <label class="categlories-control">
            
            
            <!-- <span class="label-name"></span> -->
            <input type="checkbox" v-model="check" @change="">
            <!-- <div class="checkbox-box"></div> -->
          </label>
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
        <p><p style="display:inline" v-if="JSON.stringify(currentUser) !== '{}'">{{currentUser.displayName}}, </p>Get in touch with us for any queries at <a href="mailto: xotopolo@gmail.com">xotopolo@gmail.com</a></p>
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
    pricerange() { return this.$store.state.highprice },
    checked() { return this.$store.state.sale;},
    
    products() {
      var product_arr = []; 
      this.$store.state.products.forEach((item) => {product_arr.push(item.category)});
      var product_arrayFiltered = product_arr.filter((v, i, a) => a.indexOf(v) === i); 
      return product_arrayFiltered; 
    },
    
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
    display: none;
 
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
    -webkit-transition: var(--transition-speed-primary-faster);
    transition: var(--transition-speed-primary-faster);
    -moz-transition: var(--transition-speed-primary-faster);
    -ms-transition: var(--transition-speed-primary-faster);
    -o-transition: var(--transition-speed-primary-faster);
}


#show-sidebar button:checked ~ span circle { opacity: 0;}
#show-sidebar button:checked ~ span .fltr-line1 { transform: rotate(45deg) translateY(5.5px);}
#show-sidebar button:checked ~ span .fltr-line2 { transform: rotate(-45deg) translateY(-4.5px);}


.expandable-sidebar {
  overflow: hidden;
  transition: all var(--transition-speed-primary-faster) ease-in-out;
  max-height: 0px;
 }
 
 .maxheight-expand-sidebar {
  /* overflow: scroll; */
  /* max-height: 500px; */
  max-height: 1000px;
}

.categlory-tag {
    display: inline-block;
    border-radius: 3px;
    padding: 0.4em .8em .4em;
    border-radius: 2px;
    background: var(--tag-bg);
    color: var(--tag-text-color);
    font-weight: 600;
    margin: .25em .2em;
}
.categlory-tag:hover {

    background: var(--tag-bg-hover);
    
}

.categlory-tag-container {
display: -webkit-box;
    display: -ms-flexbox;
    width: 100%;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-wrap: wrap;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
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
    -webkit-transition: var(--page-transition-speed-primary);
    transition: var(--page-transition-speed-primary);
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
    -webkit-transition: var(--page-transition-speed-primary);
    transition: var(--page-transition-speed-primary);
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
