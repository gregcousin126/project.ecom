<template>
<header class="header">
<nav class="navbar" id="navbar">
 <ul class="navbar-nav">
      <li class="logo">
        <router-link to="/"><a class="nav-link"><span class="link-text logo-text">XOTOPOLO</span><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"><g class="fa-group"><path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z" class="fa-secondary"></path><path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z" class="fa-primary"></path></g></svg></a></router-link>
      </li>
           	<li class="nav-item">
          <router-link to="/home">
          <a class="nav-link" id="show-products-stores" @click="showProductsStores">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M850,580.8c-12.8,0-23.4,10.2-23.4,23v253.8c0,25.6-20.8,46.2-46.6,46.2H616.6c-12.8,0-23.2,10.4-23.2,23.2c0,12.6,10.4,23,23.2,23H780c51.4,0,93.4-41.4,93.4-92.4V603.8C873.4,591,862.8,580.8,850,580.8z M983.2,518.2L516.6,56.7c-9.2-9-24-9-33,0L133.8,402.6l-0.6,0.6l-116.4,115c-9,9.2-9,23.8,0,32.8c9.2,9,24,9,33,0l76.8-76v382.6c0,51,42,92.4,93.4,92.4h163.4c12.8,0,23.2-10.4,23.2-23V719.2h210c13,0,23.4-10.2,23.4-23S629.6,673,616.6,673H383.4c-13,0-23.4,10.4-23.4,23.2l0,207.6H220c-25.8,0-46.6-20.6-46.6-46.2V428.8l326.6-323L950.2,551c4.6,4.4,10.4,6.6,16.4,6.6s12-2.2,16.6-6.6C992.3,542,992.3,527.4,983.2,518.2z"/></g></svg>
            
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 61"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="32" y1="11.833" x2="32" y2="29.18" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path d="M37 11v13a5 5 0 0 1-10 0V11h10z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="52" y1="11.833" x2="52" y2="29.18" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path d="M47 24a5.005 5.005 0 0 0 6.008 4.901C55.382 28.438 57 26.204 57 23.785v-.052a8.017 8.017 0 0 0-.717-3.312l-3.217-7.077A4 4 0 0 0 49.425 11H47v13z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="12" y1="11.833" x2="12" y2="29.18" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path d="M17 11h-2.425a4 4 0 0 0-3.641 2.344l-3.217 7.077A8.022 8.022 0 0 0 7 23.734v.052c0 2.611 1.909 4.943 4.509 5.191A5.002 5.002 0 0 0 17 24V11z" fill="url(#c)"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="25" y1="10" x2="25" y2="54.561" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#d)" d="M24 44h2v4h-2z"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="41" y1="10" x2="41" y2="54.561" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path d="M34 46h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H34c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zm0-10h14v8H34v-8z" fill="url(#e)"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="32" y1="10" x2="32" y2="54.561" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path d="M54 51V29.647c2.357-.838 4-3.175 4-5.914a8.912 8.912 0 0 0-.808-3.726l-3.217-7.076A5.005 5.005 0 0 0 49.425 10H14.575a5.008 5.008 0 0 0-4.551 2.931l-3.217 7.077A8.988 8.988 0 0 0 6 23.785c0 2.665 1.672 4.999 4 5.857V51c0 .352.072.686.184 1H6v2h52v-2h-4.184c.112-.314.184-.648.184-1zM28 38h-8v-2h8v2zm0-4h-8c-1.103 0-2 .897-2 2v12h-6V29.998a6.027 6.027 0 0 0 4.035-1.557c.372-.338.69-.723.962-1.135A6 6 0 0 0 22 30a5.997 5.997 0 0 0 5-2.69c1.075 1.62 2.914 2.69 5 2.69s3.925-1.071 5-2.69A5.995 5.995 0 0 0 42 30a5.995 5.995 0 0 0 5.001-2.693c.326.491.72.942 1.187 1.327A5.996 5.996 0 0 0 52 29.999V48H30V36c0-1.103-.897-2-2-2zm24.155-20.241l3.217 7.077c.417.915.628 1.89.628 2.949 0 2.035-1.339 3.774-3.184 4.135-1.224.241-2.417-.056-3.356-.83A3.99 3.99 0 0 1 48 24V12h1.425c1.174 0 2.245.69 2.73 1.759zM46 12v12c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8zM36 24c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8v12zM26 12v12c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8zM8 23.733c0-1.008.211-1.982.628-2.897l3.217-7.078A3.004 3.004 0 0 1 14.575 12H16v12a4.013 4.013 0 0 1-1.31 2.961 3.99 3.99 0 0 1-3.087 1.021C9.583 27.788 8 25.945 8 23.733zM13 52a1 1 0 0 1-1-1v-1h6v2h-5zm7 0V40h8v12h-8zm10 0v-2h22v1a1 1 0 0 1-1 1H30z" fill="url(#f)"/></svg> -->
            <span class="link-text" >Shop</span >
            
            </a>
            
            </router-link>
          <p class="nav-icon-title-mobile">Store</p>
          <div class="expandable-stores" id="expandable-stores">
            <ul>
              <li v-for="store in stores" class="nav-item">
                <router-link class="router-links" :to="`${store}`"><a class="nav-link"><img :src='`./stores/static/${store.toLowerCase()}/logo.svg`'><span class="link-text"><div >{{store}}</div></span></a></router-link>
              </li>
            </ul>
        </div>
      </li>
      
      
      
      
      <li class="nav-item" >
        <router-link to="/favorites">
        <a class="nav-link" >
          
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M986.8,312.3C966.5,166.1,838.4,66.5,702.6,66.5c-41.6,0-84,9.4-124.1,29.6c-28.2,14.2-53.5,34.3-81.6,52.7c0,0-1.8-1.4-3.5-3c-55.5-52.2-125.8-79.2-197-79.2c-49,0-98.4,12.8-143.6,38.9C49,165.6-6.2,283.9,14.2,401.9c11.7,67.8,44.7,123.9,92.5,172c90.2,90.9,246.2,247.7,332.1,334c16.9,17,39.1,25.5,61.3,25.5c22.1,0,44.3-8.5,61.2-25.4c88.2-88.3,250.4-251.4,344.1-348C971.4,492,1000.1,407.8,986.8,312.3z M854.8,510.3C745.5,623,549.6,819.3,511.5,857.5c-3.9,3.9-8.4,4.7-11.4,4.7c-3,0-7.5-0.8-11.4-4.8c-85.9-86.3-241.8-243-332-333.9c-40.5-40.8-64.3-84.6-72.8-133.9C68.6,301.5,110.5,212.1,188,167.3c33.3-19.3,70.8-29.5,108.4-29.5c54.8,0,107.6,21.3,148.7,60c18.1,17.1,36.1,22.3,51.3,22.3c19.5,0,34.4-8.6,38.9-11.5c9.6-6.3,18.9-12.7,28-19.1c16.5-11.5,32-22.3,46.8-29.7c29.1-14.7,60.2-22.1,92.5-22.1c107.5,0,199.6,79.3,214.2,184.4C927,395.2,906.7,456.7,854.8,510.3z"/></g></svg>
            <span class="link-text" >Favorites</span >


                    <!-- <span class="link-text">Favorites</span> -->

                  <!-- <p class="nav-icon-title-mobile"></p> -->

          <!-- <svg class="icon icon-person" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg> -->
          <!-- <span class="link-text">Hi, {{currentUser.displayName}} 👋</span> -->
        </a>
        </router-link>
                          <p class="nav-icon-title-mobile">Favorites</p>

      </li>
      
      <li class="nav-item" v-if="JSON.stringify(currentUser) !== '{}'">
        <router-link to="/register">
        <a class="nav-link" >
          <svg class="icon icon-person" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
          <span class="link-text">Hi, {{currentUser.displayName}} 👋</span>
        </a>
        </router-link>
      </li>
      
      
      <li class="nav-item" v-if="JSON.stringify(currentUser) === '{}'">
        <router-link  to="/signin"><a class="nav-link" >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M804.3,661.7c-9.3-9.3-24.5-9.3-33.8,0c-9.3,9.3-9.3,24.5,0,33.8c72.3,72.3,112.1,168.4,112.1,270.5c0,13.2,10.7,23.9,23.9,23.9c13.2,0,23.9-10.7,23.9-23.9C930.4,851.1,885.6,743,804.3,661.7z M500,10c-158.2,0-287,128.7-287,287c0,112.9,65.5,210.7,160.5,257.5c-66.5,20.3-127.3,56.7-177.9,107.3C114.3,743,69.6,851.1,69.6,966.1c0,13.2,10.7,23.9,23.9,23.9c13.2,0,23.9-10.7,23.9-23.9c0-102.2,39.8-198.3,112.1-270.5c69.7-69.7,161.5-109.1,259.6-111.9c3.6,0.1,7.3,0.2,10.9,0.2c158.2,0,287-128.7,287-286.9C787,138.7,658.2,10,500,10z M503.9,536c-1.3-0.2-2.6-0.3-3.9-0.3c-3.6,0-7.3,0-10.9,0.1C362.3,530.1,260.9,425.1,260.9,297c0-131.9,107.3-239.1,239.1-239.1c131.8,0,239.1,107.3,239.1,239.1C739.1,427.5,633.9,534,503.9,536z"/></g></svg>

          <!-- <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve"><g>	<g>		<circle style="fill:var(--bg-secondary);" cx="240" cy="240" r="240"/>	</g>	<g>		<g>			<path style="fill:#FFFFFF;" d="M240,360.07c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611				c2.02,1.235,3.588,3.262,3.894,5.784c3.992,32.484,34.781,56.977,71.625,56.977c36.836,0,67.625-24.496,71.625-56.977				c0.31-2.525,1.844-4.549,3.895-5.78c-3.08-12.233-3.503-28.999-3.517-40.615C293.297,348.079,267.944,360.07,240,360.07z"/>		</g>	</g>	<g>		<g>			<path style="fill:#D7DBE0;" d="M310.44,330.174c-18.549,18.477-43.242,29.896-70.44,29.896				c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611c2.02,1.235,3.588,3.262,3.894,5.784				c1.765,14.359,8.778,27.144,19.223,36.954C235.766,405.265,290.437,357.702,310.44,330.174z"/>		</g>	</g>	<g>		<g>			<path style="fill:#FFFFFF;" d="M312,160.07H176c-22.055,0-40,17.945-40,40v48c0,61.758,46.656,112,104,112s104-50.242,104-112				v-56C344,174.426,329.648,160.07,312,160.07z"/>		</g>	</g>	<g>		<g>			<path style="fill:#5C546A;" d="M296,72.07H192c-15.047,0-27.695,10.438-31.102,24.449C133.359,100.02,112,123.598,112,152.07v40				c0,20.617,8.752,39.851,24,53.52v-45.52c0-22.055,17.945-40,40-40h136c17.648,0,32,14.355,32,32v53.511				c15.251-13.667,24-32.899,24-53.511v-48C368,104.371,335.703,72.07,296,72.07z"/>		</g>	</g>	<g>		<path style="fill:#5C546A;" d="M61.632,400.544C105.562,449.319,169.191,480,240,480s134.438-30.681,178.368-79.456			c-7.66-10.356-18.462-18.77-32.352-22.659c-0.32-0.09-0.641-0.16-0.969-0.207l-63.859-9.582c-0.391-0.059-1.227-0.09-1.625-0.09			c-4.039,0-7.445,3.012-7.938,7.023c-4,32.48-34.789,56.977-71.625,56.977c-36.844,0-67.633-24.492-71.625-56.977			c-0.5-4.129-4.219-7.234-8.141-7.02c-0.469-0.027-0.93,0.012-1.422,0.086l-63.859,9.582c-0.328,0.047-0.648,0.117-0.969,0.207			C80.094,381.775,69.292,390.188,61.632,400.544z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> -->
          <span class="link-text">Login</span></a></router-link>
        <p class="nav-icon-title-mobile">You</p>
      </li>
      
      <li class="nav-item" >
        <router-link to="/cart" >
        <a class="nav-link" >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M980.3,255.3C958.6,301,863.2,521.5,850.2,541.9c-1.5,2.4-2.9,4.8-4.2,7.1c-12.7,21.7-26.1,38.4-72.3,38.4H332.8c9.2,28.1,28.5,62.7,68.5,62.7h381.6c11.3,0,20.4,9.2,20.4,20.4c0,11.3-9.1,20.4-20.4,20.4H401.3c-56.6,0-98-44.3-113.4-112.3c-8.5-37.5-111.8-383.1-119.2-410.2c-7.9-17.2-26.4-29.6-44.3-29.6h-94c-11.3,0-20.4-9.2-20.4-20.4S19.2,98,30.4,98h94c35,0,68.1,1.9,82.4,35.1c0.4,0.9,0.7,1.8,0.9,2.7c4.1,14.8,89.7,318.5,114.1,410.7h451.8c26.5,0,29.1-4.6,37-18.1c1.6-2.7,3.2-5.5,5.1-8.4c12.1-19,106.9-238.2,127.1-280.8c8.4-22,6.9-34,4.6-37.4c-1.5-2.2-6.4-3.5-13.1-3.5c-44.2,0.7-605.4,0-624.9,0c-11.3,0-20.4-9.2-20.4-20.5c0-11.3,9.1-20.4,20.4-20.4l0,0c4.8,0,580.3,0.7,624.5,0c26.9,0,40.4,11.5,47.1,21.2C993.2,196.4,993,222.2,980.3,255.3z M390.4,711.1c52.6,0,95.5,42.8,95.5,95.5S443.1,902,390.4,902c-52.6,0-95.4-42.8-95.4-95.5S337.8,711.1,390.4,711.1z M390.4,862.8c31,0,56.2-25.2,56.2-56.2c0-31-25.2-56.2-56.2-56.2c-31,0-56.2,25.2-56.2,56.2C334.3,837.6,359.5,862.8,390.4,862.8z"/><path d="M778.7,711.1c52.6,0,95.5,42.8,95.5,95.5S831.4,902,778.7,902s-95.4-42.8-95.4-95.5S726.1,711.1,778.7,711.1z M778.7,862.8c31,0,56.2-25.2,56.2-56.2c0-31-25.2-56.2-56.2-56.2c-31,0-56.2,25.2-56.2,56.2C722.5,837.6,747.8,862.8,778.7,862.8z"/></g></svg>
          <!--  -->
          <!-- <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 504 504" style="0 0 484 481" xml:space="preserve"><g>	<g>		<path style="fill:#B8BAC0;" d="M485.617,114.305C484.125,112.828,482.102,112,480,112c-0.031,0-0.07,0-0.109,0l-374.5,4.941			c-2.531,0.035-4.906,1.27-6.383,3.328c-1.484,2.059-1.898,4.699-1.125,7.113l62.5,195.059c1.063,3.313,4.141,5.559,7.617,5.559			h280c22.055,0,40-17.945,40-40V120C488,117.859,487.141,115.809,485.617,114.305z M208,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168			c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M248,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z			 M288,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M328,288c0,4.418-3.578,8-8,8s-8-3.582-8-8			V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M368,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z			 M408,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M448,288c0,4.418-3.578,8-8,8s-8-3.582-8-8			V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z"/>	</g>	<g>		<circle style="fill:#5C546A;" cx="144" cy="416" r="32"/>	</g>	<g>		<circle style="fill:#5C546A;" cx="456" cy="416" r="32"/>	</g>	<g>		<path style="fill:#8A8895;" d="M492,108H108c-0.316,0-0.614,0.069-0.924,0.093l-6.85-23.039C96.539,72.656,84.937,64,72.008,64			L72,64.001V64H56v16h16v-0.001L72.008,80c5.898,0,11.195,3.953,12.875,9.613l73.242,246.348			c3.032,10.188,8.988,18.919,16.632,25.696l-37.156,49.542c-2.656,3.535-1.938,8.551,1.602,11.199			c1.438,1.082,3.117,1.602,4.789,1.602c2.438,0,4.836-1.105,6.406-3.199l37.713-50.286c7.295,3.45,15.317,5.485,23.693,5.485H448			v40c0,4.418,3.578,8,8,8s8-3.582,8-8v-40h16c4.422,0,8-3.582,8-8s-3.578-8-8-8H211.805c-17.563,0-33.328-11.762-38.336-28.602			L114.184,132H492c6.625,0,12-5.371,12-12S498.625,108,492,108z"/>	</g>	<g>		<path style="fill:#5C546A;" d="M56,88H16C7.163,88,0,80.837,0,72v0c0-8.837,7.163-16,16-16h40c8.837,0,16,7.163,16,16v0			C72,80.837,64.837,88,56,88z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> -->
          <a class="nav-link" >
            <span v-if="noItems <= 0" class="cart-link__count" id="link__count__regular">0</span>
            <span v-if="noItems > 0" class="cart-link__count" id="link__count__regular">{{ noItems }}</span>
          </a>
          <span class="link-text">Cart</span>
          </a>
          </router-link>
          <p class="nav-icon-title-mobile">Cart</p>

      </li>

    <!-- to add -->
      <li class="nav-item" id="themeButton"> 
        <a class="nav-link"><svg id="lightIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="moon-stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 574 695" class="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"><g class="fa-group"><path fill="currentColor" d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z" class="fa-secondary"></path> <path fill="currentColor" d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z" class="fa-primary"></path></g></svg><svg id="eclipseIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 574 695" class="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" class="fa-secondary"></path> <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z" class="fa-primary"></path></g></svg><svg id="darkIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sunglasses" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 574 695" class="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z" class="fa-secondary"></path> <path fill="currentColor" d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z" class="fa-primary"></path></g></svg> 
          <span class="link-text">Themify</span>
        </a>
                  <p class="nav-icon-title-mobile">Themify</p>

      </li>
    </ul>
  </nav>
  </header>
</template>
<script>

import index from '@/store/index'
import logo from '@/assets/logo'
import firebase from 'firebase'
import {mapState, mapGetters, mapActions} from 'vuex'
import { firebaseAuth } from '../../config/firebase'

export default {
  name:'Sidebar',
  
  data() {
    return { email: '', password: '', displayName: null, photoURL: null, newPassword: null, favoriteFood: null, authUser: null }
  },

  methods :{
    signOut () {
      firebaseAuth().signOut();
      this.$store.state.cartItems = 0; 
      this.$store.state.cart= []; 
    },
      
    // showProductsAll() {
    //   var button = document.getElementById('show-products-all-products');
    //   var expander = document.getElementById('expandable-all-products');
    //   if (!expander.classList.contains('maxheight-expand')) {
    //     expander.classList.add("maxheight-expand");
    //   } else {
    //     expander.classList.remove("maxheight-expand");
    //   }
    // },
    
    showProductsStores() {
      var button = document.getElementById('show-products-stores');
      var expander = document.getElementById('expandable-stores');
      if (!expander.classList.contains('maxheight-expand')) {
        expander.classList.add("maxheight-expand");
      } else {
        expander.classList.remove("maxheight-expand");
      }
    }
  },
  
  computed: {
    products() {
      var product_arr = []; 
      this.$store.state.products.forEach((item) => {product_arr.push(item.category)});
      var product_arrayFiltered = product_arr.filter((v, i, a) => a.indexOf(v) === i); 
      return product_arrayFiltered; 
    },
    
    stores() {
      var store_arr = []; 
      this.$store.state.stores.forEach((item) => { store_arr.push(item.store_name) });
      var store_arrayFiltered = store_arr.filter((v, i, a) => a.indexOf(v) === i); 
      return store_arrayFiltered; 
    },
    
    noItems() { return this.$store.state.cartItems },
    ...mapGetters({ currentUser : 'currentUser', }),
  },
  
  mounted () {
        // var expander_all_products = document.getElementById('expandable-all-products');
        var expander_stores = document.getElementById('expandable-stores');
        var navbar = document.getElementById('navbar');
        
        navbar.addEventListener('mouseleave', function (e) {
          // expander_all_products.classList.remove("maxheight-expand");
          expander_stores.classList.remove("maxheight-expand");
        });
          
        var tmp = null;
        const themeMap = { dark: "light", light: "dark" }; 
        const theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);
        const bodyClass = document.body.classList;
        bodyClass.add(theme);
        
        function toggleTheme() {
          const current = localStorage.getItem('theme');
          const next = themeMap[current];
          bodyClass.replace(current, next);
          localStorage.setItem('theme', next);
        };
        document.getElementById('themeButton').onclick = toggleTheme;
    },
        
  components: {
    logo, 
  },
  
}
</script>

<style lang="css">
#slide-content{margin:50px}

.cart-nav-icon {
  /* display: grid; */
}
a{text-decoration:none}
/* .expandable-all-products{overflow:hidden;transition:all var(--transition-speed-secondary-slower) ease-in-out;max-height:0} */
.expandable-stores{overflow:hidden;transition:all var(--transition-speed-secondary-slower) ease-in-out;max-height:0}
.maxheight-expand{overflow:scroll;max-height:500px}
ul{list-style:none}
.innerdrop ul{margin-left:0;padding-left:0;list-style:none;position:relative}
.innerdrop ul ul{display:none}
.innerdrop ul:hover > ul{display:inline-table}
.innerdrop ul li{text-align:left}
.innerdrop ul li a{padding-right:20px;text-decoration:none}
.innerdrop ul ul{border-radius:0;padding:0;position:relative;top:100%}
.innerdrop ul ul li{float:none;position:relative}
#down-triangle{float:right;width:0;height:0;margin-left:20px;margin-top:5px;border-top:10px solid #2ecc71;border-left:10px solid transparent;border-right:10px solid transparent}
main{margin-left:4rem;padding:1rem}
.navbar{z-index:2;position:fixed;background-color:var(--bg-primary);transition:width var(--transition-speed-primary-faster) ease-out;overflow:scroll;width:100%;-webkit-box-shadow:inset -15px 0 16px -20px rgba(0,0,0,0.68);-moz-box-shadow:inset -15px 0 16px -20px rgba(0,0,0,0.68);box-shadow:inset -15px 0 16px -20px rgba(0,0,0,0.68)}
.cart-link__count{
border-radius: 4px;
    width: 17px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: block;
    padding: 0px;
    /* padding: 6px; */
    padding: 0px;
    height: 17px;
    /* -webkit-box-pack: center; */
    -ms-flex-pack: center;
    /* -webkit-box-pack: center; */
    justify-content: center;
    place-content: center;
    place-items: center;
    margin-top: -16px;
    position: relative;
    font-size: 10px;
    font-weight: 700;
    background: var(--bg-primary);
    margin-left: -36px;
    border: 1.4px solid var(--blue-primary);
}
  
  
.navbar-nav{width:100%;list-style:none;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}
.nav-item{width:100%}
/* .nav-item:last-child{margin-top:auto} */
.nav-link{display:flex;align-items:center;height:3.5rem;color:var(--text-primary);text-decoration:none;filter:grayscale(100%) opacity(0.9);transition:var(--transition-speed-primary-faster)}
.nav-link:hover{filter:grayscale(0%) opacity(1);background:var(--bg-secondary);color:var(--text-secondary)}
.link-text{display:none;margin-left:1rem;font-family:'Overpass'}
.nav-link svg,.nav-link img{
  
  
      fill: var(--text-primary);
  
  width:1.5rem;min-width:1.5rem;margin:0 1.45rem}
.fa-primary{color:#ff7eee}
.fa-secondary{color:#df49a6}
.fa-primary,.fa-secondary{transition:var(--transition-speed-primary-faster)}
.logo{font-weight:700;text-transform:uppercase;text-align:center;color:var(--text-secondary);background:var(--bg-secondary);font-size:1.5rem;letter-spacing:.3ch;width:100%}
.logo svg{transform:rotate(0deg);transition:var(--transition-speed-primary-faster)}
.logo-text{display:inline;position:absolute;left:-999px;transition:var(--transition-speed-primary-faster)}
.navbar:hover .logo svg{transform:rotate(-180deg)}
  .nav-icon-title-mobile {
    display: none;
font-size:10px; margin-top:-13px;
  }

@media (max-width: 600px) {
    .nav-icon-title-mobile {
    display: block;
font-size:10px; 
margin-bottom:2px; 



  }
  

.nav-link svg{
  
      width: 1.4rem;
    min-width: 1.4rem;
    margin: 0 1rem;
  /* width:1.9rem;min-width:1.9rem;margin:0 1rem */

}
/* .expandable-all-products{display:none} */
.expandable-stores{display:none}
.nav-link{display:inline-flex;vertical-align:middle}
.nav-item:hover{background:var(--bg-secondary);color:var(--text-secondary);filter:grayscale(0%) opacity(1)}
.nav-link:hover{background:none}

#down-triangle{margin-left:0}
.navbar{
  overflow:hidden;width:none;-webkit-box-shadow:none;box-shadow:none;
  bottom: 0;
  width:100vw;overflow:scroll;height:3.5rem;border-top:4px solid rgba(0,0,0,0.1);overflow-y:hidden
  
  }
.logo{display:none}
.navbar-nav{flex-direction:row; 
align-items: flex-end;
}
.nav-link{justify-content:center}
main{margin:0}
}


@media only screen and (min-width: 600px) {
.navbar{top:0;position:relative;display:inline-flex;width:4.5rem;min-height:100vh}
.navbar:hover{width:12rem}
.navbar:hover .link-text{display:inline;cursor:pointer}
.navbar:hover .logo svg{margin-left:9.5rem}
.navbar:hover .logo-text{left:5px;font-size:17px}
}
.theme-icon{display:none}
.dark #darkIcon{display:block}
.light #lightIcon{display:block}
.eclipse #eclipseIcon{display:block}





/* bottom section */


</style>
