<template>
  <aside id="sidebar-info">
    <div class="sidebar-mainitems-container">
    <div id="search">
    <i class="fas fa-search" id="search-icon"></i>
    <form>
      <input type="text" id="search-input" class="form-control"  name="search"  placeholder="Search" autocomplete="off" @input="searchFilter($event)">
    </form>
  </div>
    <button type="checkbox" class="sidebarbutton">
    <a ontouchstart="" id="show-sidebar" @click="toggleFilterBar">
      <span class="filter-btn"><p id="remove-filter">filter +</p><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="10" width="18" height="2" fill="var(--blue-primary)" class="fltr-line1"></rect><rect x="7" y="20" width="18" height="2" fill="var(--blue-primary)" class="fltr-line2"></rect><circle cx="13" cy="21" r="2.5" fill="white" stroke="var(--blue-primary)" class="fltr-crcl1"></circle><circle cx="19" cy="11" r="2.5" fill="white" stroke="var(--blue-primary)" class="fltr-crcl2"></circle></svg></span>
    </a>
  </button>
    </div>
  
  
  <div class="expandable-sidebar" id="expandable-sidebar">
      <div class="filter-gif"></div>
      <div class="aside-block">
          <h4>Categlories</h4>
          <ul  class="categlory-tag-container">
                <!-- <div v-for="item in list" :style="{backgroundColor: item.color}" > -->
            <li v-for="(categlories, index) in products" @click="toggleFilterBar">
              <router-link :to="`${categlories}`" >
                    <div class="categlory-tag" :style="{backgroundColor: colors[index]}">#{{categlories}}</div>
                </router-link>
              <!-- <router-link :to="`${categlories}`" :style="buttonStyle"><div class="categlory-tag" >#{{categlories}}</div></router-link> -->
            </li>
                <!-- </div> -->
          </ul>
          <label class="categlories-control"><input type="checkbox" v-model="check"></label>
      </div>
    <div class="aside-block">
      <label for="pricerange">Maximum Price: <span class="current-price">${{ pricerange }}</span></label>
      <input class="slider" id="pricerange" tabindex="0" :value="pricerange" type="range" :min="min" :max="max" step="0.1" @input="updateHighPrice($event)" />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
   </div>
      <div class="aside-block">
          <h4>Super Sale</h4>
          <label class="checkbox-control">
            <span class="">Items on sale</span>
            <input type="checkbox" v-model="check" @change="updateSale">
            <div class="checkbox-box"></div>
          </label>
      </div>
      <div class="aside-block">
        <h4>Support</h4>
        <p style="display:inline" v-if="JSON.stringify(currentUser) !== '{}'">{{currentUser.displayName}}, Get in touch with us for any queries at </p>
        <p style="display:inline" v-else>Get in touch with us for any queries at </p>
        
        
        <a href="mailto: xotopolo@gmail.com">xotopolo@gmail.com</a>
      </div>
  </div>
  </aside>
</template>

<script>
import store from '@/store/index'
import {mapState, mapGetters, mapActions} from 'vuex'



export default {
  name: 'Filterbar',
  data() {
    return {
      min: 0,
      max: 2000,
      check: this.checked,
      displayName: null,
      colors: [ "#ff3860", "#2674fa", "#6ca0fc", "#fa8142", "#ff1443", "#f96a1f", "#fb9865", "#09c372", "#ff5c7c", "#07a15e", "#498afb", "#0be586", "#7d4bc3", "#a481d5", "#ffdd57", "#9166cc", "#ffd633", "#ffe47a", "#ff4088", "#ff1c72", "#ff649e", ],
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
    

    
    toggleFilterBar() {
      var ptag = document.getElementById('remove-filter');
      var expander = document.getElementById('expandable-sidebar');
      var wrapper = document.getElementById('wrapper');
            ptag.style.display = 'none';

      if (!expander.classList.contains('maxheight-expand-sidebar')) { 
        expander.classList.add("maxheight-expand-sidebar");
        wrapper.classList.add("item-blur");

        ptag.style.display = 'none';
      } else { expander.classList.remove("maxheight-expand-sidebar");
       ptag.style.display = 'block';
         wrapper.classList.remove("item-blur");
       
      }
      
      
  
    },
    
    
      // hideFilterbar() {
      // var ptag = document.getElementById('remove-filter');
      // var expander = document.getElementById('expandable-sidebar');
      // if (expander.classList.contains('maxheight-expand-sidebar')) { 
      //   expander.classList.add("maxheight-expand-sidebar");
      //   ptag.style.display = 'none';
      // } else { expander.classList.remove("maxheight-expand-sidebar");
      //  ptag.style.display = 'block';
      // }
      
    // },
    
    updateHighPrice($event) { this.$store.commit('setHighPrice', $event.target.value) },
    searchFilter($event) { this.$store.dispatch('setSearchName', $event.target.value) },
    updateSale() { this.$store.commit('toggleSale');},
    
  },
  
  mounted() {
    
//     document.getElementById("categlory-tag").forEach(element => {
//       console.log('element: ', element);
// //  element.style.color = 'white'
// })
    
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
input[type="checkbox"]{opacity:0;position:absolute}
input[type="checkbox"]:hover ~ .checkbox-box,input[type="checkbox"]:focus ~ .checkbox-box,input[type="checkbox"]:checked ~ .checkbox-box{border-color:#5044ff}
input[type="checkbox"]:checked ~ .checkbox-box::before{content:'';position:absolute;width:14px;height:14px;top:2px;left:2px;background:#5044ff}

.filter-gif{-webkit-box-flex:50%;-ms-flex:50%;flex:50%;display:none;width:290px;position:relative;border-radius:27px;margin:5% auto 0;filter:var(--image-filter);height:218px;background:url(../assets/images/pick-dress.gif);background-repeat:no-repeat;background-size:contain;text-align:center}
.sidebarbutton{
  
  
  font-size:13px;padding:2px;letter-spacing:2px;font-weight:700;width:-webkit-fill-available;border-radius:0;opacity:.7;cursor:pointer;border:2px solid var(--blue-primary);text-transform:uppercase;margin:20px 0 0;-webkit-transition:var(--transition-speed-secondary-slower);transition:var(--transition-speed-secondary-slower);-moz-transition:var(--transition-speed-secondary-slower);-ms-transition:var(--transition-speed-secondary-slower);-o-transition:var(--transition-speed-secondary-slower)}
.filter-btn{display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;place-content:center; background: none;}
.filter-btn:active{background: var(--button-highlight);}
.filter-btn:hover{background: var(--button-hover);}
#remove-filter:hover {color: var(--text-hover)}
/* #remove-filter {display: none;} */
/* #remove-filter {display: none;} */

#show-sidebar span svg *{transition:.15s cubic-bezier(0.35,0.35,0,1.0)}
#show-sidebar span circle{will-change:transform}
#show-sidebar span rect{transform-origin:50% 50%}
#show-sidebar span:active .fltr-crcl1{transform:translateX(6px)}
#show-sidebar span:active .fltr-crcl2{transform:translateX(-6px)}
#show-sidebar svg{width:30px;height:30px}
#show-sidebar button:checked ~ span circle{opacity:0}
#show-sidebar button:checked ~ span .fltr-line1{transform:rotate(45deg) translateY(5.5px)}
#show-sidebar button:checked ~ span .fltr-line2{transform:rotate(-45deg) translateY(-4.5px)}
.expandable-sidebar{overflow:scroll;transition:all var(--transition-speed-secondary-slower) ease-in-out;max-height:0}
.maxheight-expand-sidebar{max-height:1000px}
/* .categlory-tag{display:inline-block;border-radius:3px;padding:.4em .8em;border-radius:2px;background:var(--tag-bg);color:var(--tag-text-color);font-weight:600;margin:.25em .2em} */
.categlory-tag{display:inline-block;border-radius:3px;padding:.4em .8em;border-radius:2px;color:var(--tag-text-color);font-weight:600;margin:.25em .2em}
.categlory-tag:hover{background:var(--tag-bg-hover)}
.categlory-tag-container{display:-webkit-box;display:-ms-flexbox;width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;margin:0;padding:0;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
#search{height:100%;color:var(--text-primary);width:100%;border:solid 3px;padding:2px 8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;border-color:var(--text-floogle);-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:17px;-webkit-transition:var(--page-transition-speed-primary);transition:var(--page-transition-speed-primary)}
#search:hover{cursor:text}
#search-input{height:100%;width:0;font-size:16px;font-weight:500;background:none;color:var(--text-primary);font-family:monospace;border:none;padding:5px 5px 5px 7px;outline:0;visibility:hidden;-webkit-transition:var(--page-transition-speed-primary);transition:var(--page-transition-speed-primary)}
#search.active{width:100%;visibility:visible}
#search-input.active{width:100%;visibility:visible}
.aside-block{padding:30px 0;border-bottom:1px solid var(--text-floogle)}
.min{float:left}
.max{float:right}
.aside-block h4{margin-bottom:10px}
.checkbox-control{grid-auto-flow:column;position:relative;display:inline-grid;place-items:center;grid-gap:10px;vertical-align:middle}
.checkbox-box{width:22px;height:22px;border:2px solid var(--text-floogle);position:relative;cursor:pointer;float:left;top:0;margin-top:2.2px}


@media(max-width:1420px) {
  /* #remove-filter {display: block;} */
.current-price {
  display: block;
}
.checkbox-control {
    grid-auto-flow: row;
}
}


@media(min-width: 600px) and (max-width: 740px) { 
#remove-filter {
  display: none;
}

}


@media (max-width: 600px) {
  
  .maxheight-expand-sidebar{max-height:1000px; margin-bottom: 40px;}
    .current-price {
  display: inline-block;
}

  .expandable-sidebar {
        /* margin-bottom: 35px; */
  }
  
  .sidebar-mainitems-container {
    display: flex;
    place-content: space-between;
        flex-direction: row-reverse;
  }
.sidebarbutton{font-size:14px;
margin: 0 0 0;
    width: 48%;
    float: left;
    padding: 0px;

}
.filter-gif{display:var(--display-primary)}
input[type="checkbox"]:checked ~ .checkbox-box::before{width:16px;height:16px}
.checkbox-box{width:24px;height:24px}
.checkbox-control{grid-template-rows:18px 30px}
#show-sidebar svg{width:45px;height:45px}

#search{
padding: 8px;
    font-size: 14px;
    width: 48%;
    /* float: right; */
    display: inline-flex;
}


}

</style>
