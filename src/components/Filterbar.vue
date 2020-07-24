<template>
  <aside id="sidebar-info">
    <div class="sidebar-container">
    <div class="filterbar-buttons">
    <a ontouchstart="" @click="compressFilterArrows"  class="search-arrow-btn search-arrow show-sidebar" type="check"  id="search-arrow">
      <span class="filter-btn-filter">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -450 1200 2000" ><g><path d="M241.5,453.5L665.9,29.1c25.5-25.5,67-25.5,92.5,0c25.5,25.5,25.5,67,0,92.5L380.1,500l378.3,378.3c25.5,25.5,25.5,67,0,92.5c-25.5,25.5-67,25.5-92.5,0L241.5,546.5c-12.8-12.8-19.1-29.6-19.1-46.5S228.7,466.4,241.5,453.5z"/></g></svg>
				
      <!-- <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"><g class="fa-group"><path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z" class="fa-secondary"></path><path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z" class="fa-primary"></path></g></svg> -->
      </span>
    </a>
    <a ontouchstart="" class="show-sidebar" @click="toggleSimpleFilters">
      <span class="filter-btn-filter"><p id="remove-label">filter +</p><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="10" width="18" height="2" fill="var(--text-primary)" class="fltr-line1"></rect><rect x="7" y="20" width="18" height="2" fill="var(--text-primary)" class="fltr-line2"></rect><circle cx="13" cy="21" r="2.5" fill="white" stroke="var(--text-primary)" class="fltr-crcl1"></circle><circle cx="19" cy="11" r="2.5" fill="white" stroke="var(--text-primary)" class="fltr-crcl2"></circle></svg></span>
    </a>
    </div>
    <div class="sidebar-mainitems-container">
    <div class="input-group"  >
      <!-- @focus="onFocus($event)"
       @blur="onBlur"  -->
      <input value="" @click="toggleFilterBar" :class='form_control' type="text" name="text" id="text" required="required" placeholder="Seach">
      <label for="text">Seach</label>
    </div>
  </div>
  </div>
  <div class="expandable-sidebar" id="expandable-sidebar">
      <div class="filter-gif"></div>
      <div class="aside-block">
          <h4>Categlories</h4>
          <ul  class="categlory-tag-container">
            <li v-for="(categlories, index) in products" @click="compressFilterBar" >
              <router-link :to="`${categlories}`" >
                    <div class="categlory-tag" :style="{backgroundColor: tagColors[index]}">#{{categlories}}</div>
                </router-link>
            </li>
          </ul>
          <label class="categlories-control"><input type="checkbox" v-model="check"></label>
      </div>
    <div class="aside-block">
      <label for="pricerange">Maximum Price: <span class="current-price">${{ pricerange }}</span></label>
      <input class="slider" id="pricerange" tabindex="0" :value="pricerange" type="range" :min="min" :max="max" step="0.1" @input="updateHighPrice($event)" />
      <div class="min-max">
        
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
        
      </div>
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
import utils from '@/utils'

export default {
	name: 'Filterbar',
	data() {
    return {
      content: `click-this`,
      input_active: false,
      min: 0,
      max: 2000,
      check: this.checked,
      displayName: null,
      tagColors: utils.tagColors()
      
      
    };
	},
	computed: {
		form_control: function() {
				var searchbar = document.getElementById('search-arrow')
				if (this.input_active == false) {
          
          
        }
				if (this.input_active == true) {
				}
			},
			
		pricerange() { return this.$store.state.highprice},
		checked() { return this.$store.state.sale;},
		products() {
			var product_arr = [];
			this.$store.state.products.forEach((item) => {product_arr.push(item.category)});
			var product_arrayFiltered = product_arr.filter((v, i, a) => a.indexOf(v) === i);
			return product_arrayFiltered;
		},
		...mapGetters({currentUser: 'currentUser'}),
	},
	
	methods: {
		onFocus: function(event) { this.input_active = true;},
		onBlur: function(event) { this.input_active = false;},
    
		expandFilterBar() {
			var expander = document.getElementById('expandable-sidebar');
			if (!expander.classList.contains('maxheight-expand-sidebar')) { expander.classList.add("maxheight-expand-sidebar"); }
		},
		
		compressFilterBar() {
			var expander = document.getElementById('expandable-sidebar');
			if (expander.classList.contains('maxheight-expand-sidebar')) { 
        
        expander.classList.remove("maxheight-expand-sidebar"); 
        this.compressFilterArrows();
      
      
      }
		},
		
		expandFilterArrows() {
			var searchbar = document.getElementById('search-arrow')
			var expander = document.getElementById('expandable-sidebar');
			if (!expander.classList.contains('maxheight-expand-sidebar')) {
			} else if (expander.classList.contains('maxheight-expand-sidebar')) {
				searchbar.classList.remove("remove-search-arrow");
				searchbar.classList.add("add-search-arrow");
			}
		},
		
		compressFilterArrows() {
			var searchbar = document.getElementById('search-arrow')
			var expander = document.getElementById('expandable-sidebar');
        searchbar.classList.remove("add-search-arrow");
				searchbar.classList.add("remove-search-arrow");
        expander.classList.remove("maxheight-expand-sidebar");
        
		},
		
		toggleFilter() {
			var expander = document.getElementById('expandable-sidebar');
			var wrapper = document.getElementById('wrapper');
			if (!expander.classList.contains('maxheight-expand-sidebar')) {
				wrapper.classList.add("item-blur");
			} else if (expander.classList.contains('maxheight-expand-sidebar')) {
				wrapper.classList.remove("item-blur");
			}
		},
		

		toggleFilterBar() {
      // alert('sd')
			this.expandFilterBar();
			this.expandFilterArrows();
			this.toggleFilter();
		},
		

		toggleSimpleFilters() {
      
      			var searchbar = document.getElementById('search-arrow')

			var expander = document.getElementById('expandable-sidebar');
			if (!expander.classList.contains('maxheight-expand-sidebar')) {
				expander.classList.add("maxheight-expand-sidebar");
        
        
			} else if (expander.classList.contains('maxheight-expand-sidebar')) {
				expander.classList.remove("maxheight-expand-sidebar");
        
			}
		},
		
		updateHighPrice($event) { this.$store.commit('setHighPrice', $event.target.value)},
		searchFilter($event) { this.$store.dispatch('setSearchName', $event.target.value)},
		updateSale() { this.$store.commit('toggleSale');},
	},

	mounted() {
		const body = document.querySelector('body');
		const searchBtn = document.querySelector('#search');
		const searchInput = document.querySelector('#search-input');
		let active = false;
		body.addEventListener('click', (e) => {
			if (e.target.product_id === 'search' || e.target.product_id === 'search-input' || e.target.product_id === 'search-icon') {
				if (!active) {
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
.search-arrow{position:relative;cursor:pointer;padding:auto;

margin-left:-150px;
-ms-flex-item-align:center;width:46px;border:none;display:none;-webkit-transform:rotate(180deg);transform:rotate(180deg);float:left;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:end;-webkit-box-pack:center;justify-content:center}
.sidebar-container{display:flex;align-items:center;text-align:center;-webkit-box-orient:horizontal;display:flex;flex-direction:column-reverse}
.filterbar-buttons{display:flex;width:100%;}

.show-sidebar{


border:2px solid;width:100%}
.min-max {
/* margin-top: -px; */
    margin-bottom: 20px;
}
.input-group{font-size:17px;display:block;width:100%;max-width:100%;height:40px;border:0;background-color:var(--bg-low-opacity);border-radius:2px;position:relative;color:#a7b4c1;-webkit-transition:opacity .2s ease-in-out,-webkit-filter .2s ease-in-out,-webkit-box-shadow .1s ease-in-out;transition:opacity .2s ease-in-out,-webkit-filter .2s ease-in-out,-webkit-box-shadow .1s ease-in-out}
.input-group input{
	
	
	font-family:'Overpass';
	position:absolute;border:0;box-shadow:none;background-color:rgba(255,255,255,0);top:0;font-size:13px;width:100%;padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:3;display:block;color:#1a6fc4;transition:top .1s ease-in-out}
.input-group label{position:absolute;border:0;top:0;left:0;right:0;bottom:0;z-index:2;display:flex;align-items:center;padding:0 20px;box-sizing:border-box;transition:all .1s ease-in-out;cursor:text}
.input-group input:not(:placeholder-shown)+label,:focus+label{bottom:20px;font-size:13px;opacity:.7}
.input-group input::placeholder{color:rgba(0,0,0,0)}
.input-group input:focus,.input-group input:not(:placeholder-shown){top:17px; 
font-size:13px;

}
.add-search-arrow{animation:arrow-move .3s ease-in-out forwards}
.remove-search-arrow{animation:arrow-remove .3s ease-in-out forwards}


@-o-keyframes arrow-move{
0%{margin-left:-150px}
100%{margin-left:0px}
}


@keyframes arrow-move{
0%{margin-left:-150px}
100%{margin-left:0px}
}


@-o-keyframes arrow-remove{
0%{margin-left:0px}
100%{margin-left:-150px}
}

@keyframes arrow-remove{
0%{margin-left:0px}
100%{margin-left:-150px}
}


input[type=checkbox]{opacity:0;position:absolute}
input[type=checkbox]:checked~.checkbox-box,input[type=checkbox]:focus~.checkbox-box,input[type=checkbox]:hover~.checkbox-box{border-color:#5044ff}
input[type=checkbox]:checked~.checkbox-box::before{content:'';position:absolute;width:14px;height:14px;top:2px;left:2px;background:#5044ff}
.filter-gif{-webkit-box-flex:50%;-ms-flex:50%;flex:50%;display:none;width:290px;position:relative;border-radius:27px;margin:5% auto 0;filter:var(--image-filter);height:218px;background:url('../assets/images/pick-dress.gif');background-repeat:no-repeat;background-size:contain;text-align:center}
.sidebar-button{font-size:13px;padding:2px;letter-spacing:2px;font-weight:700;width:-webkit-fill-available;border-radius:0;opacity:.7;cursor:pointer;border:2px solid var(--blue-primary);text-transform:uppercase;margin:20px 0 0;-webkit-transition:var(--transition-speed-secondary-slower);transition:var(--transition-speed-secondary-slower);-moz-transition:var(--transition-speed-secondary-slower);-ms-transition:var(--transition-speed-secondary-slower);-o-transition:var(--transition-speed-secondary-slower)}
.filter-btn-filter{
      cursor: pointer;
    height: 100%;
        align-items: center;
    display: inline-flex;
		
		color: var(--text-primary);
    -ms-flex-align: center;
    border-radius: 2px;
    width: 100%;
    right: -20px;
    place-content: center;
    background: 0 0;
		/* width: 55px; */
  
}

  /* cursor:pointer;height:100%;display:grid;-ms-flex-align:center;border-radius:2px;width:100%;right:-20px;place-content:center;background:0 0} */
.filter-btn-filter:active{background:var(--button-highlight)}
.filter-btn-filter:hover{background:var(--button-hover)}
#remove-label:hover{color:var(--text-primary)}
.show-sidebar span svg *{transition:.15s cubic-bezier(.35,.35,0,1)}
.show-sidebar span circle{will-change:transform}
.show-sidebar span rect{transform-origin:50% 50%}
.show-sidebar span:active .fltr-crcl1{transform:translateX(6px)}
.show-sidebar span:active .fltr-crcl2{transform:translateX(-6px)}
.show-sidebar svg{width:40px;height:40px;

fill: var(--text-primary);
}
.show-sidebar button:checked~span circle{opacity:0}
.show-sidebar button:checked~span .fltr-line1{transform:rotate(45deg) translateY(5.5px)}
.show-sidebar button:checked~span .fltr-line2{transform:rotate(-45deg) translateY(-4.5px)}
.expandable-sidebar{
  /* overflow-wrap: normal; */
  overflow-y:scroll;
  overflow-x:hidden;
  /* overflow-y:none; */
  width:100%;transition:all var(--transition-speed-secondary-slower) ease-in-out;max-height:0}
.maxheight-expand-sidebar{max-height:700px}
.categlory-tag{display:inline-block;border-radius:3px;padding:.4em .8em;border-radius:2px;color:var(--tag-text-color);font-weight:600;margin:.25em .2em}
/* .categlory-tag:hover{background:var(--tag-bg-hover)} */
.categlory-tag-container{display:-webkit-box;display:-ms-flexbox;width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;margin:0;padding:0;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
.aside-block{padding:30px 0;border-bottom:1px solid var(--text-floogle)}
.min{float:left}
.max{float:right}
.aside-block h4{margin-bottom:10px}
.checkbox-control{grid-auto-flow:column;position:relative;display:inline-grid;place-items:center;grid-gap:10px;vertical-align:middle}
.checkbox-box{width:22px;height:22px;border:2px solid var(--text-floogle);position:relative;cursor:pointer;float:left;top:0;margin-top:2.2px}
.sidebar-container{display:flex;flex-direction:column-reverse}
.sidebar-mainitems-container{
  margin-bottom: 20px;
  display:-webkit-box;width:100%;display:-ms-flexbox;display:inline-block;place-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}
@media(max-width:1420px){
.current-price{display:block}
.checkbox-control{grid-auto-flow:row}
}
@media(min-width:600px) and (max-width:740px){
#remove-label{display:none}
}
@media (max-width:600px){
  
  /* .expandable-sidebar{
    overflow:scroll;
    } */

	
	.filter-btn-filter{
		
    transform: rotate(180deg);
		
	}

/* .input-group{border-radius:20px} */
.search-arrow{display:flex}
.sidebar-container{flex-direction:row}
/* .filterbar-buttons a{margin:0 5px} */
.show-sidebar{border:none}
#remove-label{display:none}
.sidebar-button{display:none}
.maxheight-expand-sidebar{
  max-height:700px;
  /* margin-bottom:40px;  */

padding: 20px;
}
.current-price{display:inline-block}
.sidebar-mainitems-container{margin:7px 11px;display:flex;place-content:space-between;flex-direction:row-reverse}
.sidebar-button{font-size:14px;margin:0 0 0;width:100%;float:left;border-radius:30px;padding:0}
.filter-gif {
-webkit-box-flex: 50%;
    -ms-flex: 50%;
    /* flex: 50%; */
    display: var(--display-primary);
    width: 56vw;
    position: relative;
    border-radius: 27px;
    margin: 0px auto;
    -webkit-filter: var(--image-filter);
    filter: var(--image-filter);
    height: 45vw;
    background: url(/stores/img/pick-dress.fa3d91e.gif);
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
}
/* .filter-gif{display:var(--display-primary)} */
input[type=checkbox]:checked~.checkbox-box::before{width:16px;height:16px}
.checkbox-box{width:24px;height:24px}
.checkbox-control{grid-template-rows:18px 30px}
#search{padding:8px;font-size:14px;width:48%;display:inline-flex}
/* .filter-btn-filter{width:55px} */
.filterbar-buttons{display:flex;width:fit-content}
/* .filterbar-buttons a{margin:0 10px} */
/* .filterbar-buttons a{ margin:0 10px;} */

}


</style>
