<template>
<header class="header">
<nav class="navbar" id="navbar">
 <ul class="navbar-nav">
      <li class="logo">
        <router-link to="/">
        <a class="nav-link"><span class="link-text logo-text">XOTOPOLO</span><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"><g class="fa-group"><path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z" class="fa-secondary"></path><path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z" class="fa-primary"></path></g></svg></a>
        </router-link>
      </li>
      <li class="nav-item" v-if="JSON.stringify(currentUser) !== '{}'">
         <router-link to="/register">
        <a  class="nav-link"  >
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve"><g>	<g>		<circle style="fill:var(--bg-secondary);" cx="240" cy="240" r="240"/>	</g>	<g>		<g>			<path style="fill:#FFFFFF;" d="M240,360.07c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611				c2.02,1.235,3.588,3.262,3.894,5.784c3.992,32.484,34.781,56.977,71.625,56.977c36.836,0,67.625-24.496,71.625-56.977				c0.31-2.525,1.844-4.549,3.895-5.78c-3.08-12.233-3.503-28.999-3.517-40.615C293.297,348.079,267.944,360.07,240,360.07z"/>		</g>	</g>	<g>		<g>			<path style="fill:#D7DBE0;" d="M310.44,330.174c-18.549,18.477-43.242,29.896-70.44,29.896				c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611c2.02,1.235,3.588,3.262,3.894,5.784				c1.765,14.359,8.778,27.144,19.223,36.954C235.766,405.265,290.437,357.702,310.44,330.174z"/>		</g>	</g>	<g>		<g>			<path style="fill:#FFFFFF;" d="M312,160.07H176c-22.055,0-40,17.945-40,40v48c0,61.758,46.656,112,104,112s104-50.242,104-112				v-56C344,174.426,329.648,160.07,312,160.07z"/>		</g>	</g>	<g>		<g>			<path style="fill:#5C546A;" d="M296,72.07H192c-15.047,0-27.695,10.438-31.102,24.449C133.359,100.02,112,123.598,112,152.07v40				c0,20.617,8.752,39.851,24,53.52v-45.52c0-22.055,17.945-40,40-40h136c17.648,0,32,14.355,32,32v53.511				c15.251-13.667,24-32.899,24-53.511v-48C368,104.371,335.703,72.07,296,72.07z"/>		</g>	</g>	<g>		<path style="fill:#5C546A;" d="M61.632,400.544C105.562,449.319,169.191,480,240,480s134.438-30.681,178.368-79.456			c-7.66-10.356-18.462-18.77-32.352-22.659c-0.32-0.09-0.641-0.16-0.969-0.207l-63.859-9.582c-0.391-0.059-1.227-0.09-1.625-0.09			c-4.039,0-7.445,3.012-7.938,7.023c-4,32.48-34.789,56.977-71.625,56.977c-36.844,0-67.633-24.492-71.625-56.977			c-0.5-4.129-4.219-7.234-8.141-7.02c-0.469-0.027-0.93,0.012-1.422,0.086l-63.859,9.582c-0.328,0.047-0.648,0.117-0.969,0.207			C80.094,381.775,69.292,390.188,61.632,400.544z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          <span class="link-text">Hi, {{currentUser.displayName}} 👋</span>
        </a>
        </router-link>
      </li>
      <li class="nav-item" v-if="JSON.stringify(currentUser) === '{}'">
          <router-link  to="/signin">
        <a class="nav-link"  >
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve"><g>	<g>		<circle style="fill:var(--bg-secondary);" cx="240" cy="240" r="240"/>	</g>	<g>		<g>			<path style="fill:#FFFFFF;" d="M240,360.07c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611				c2.02,1.235,3.588,3.262,3.894,5.784c3.992,32.484,34.781,56.977,71.625,56.977c36.836,0,67.625-24.496,71.625-56.977				c0.31-2.525,1.844-4.549,3.895-5.78c-3.08-12.233-3.503-28.999-3.517-40.615C293.297,348.079,267.944,360.07,240,360.07z"/>		</g>	</g>	<g>		<g>			<path style="fill:#D7DBE0;" d="M310.44,330.174c-18.549,18.477-43.242,29.896-70.44,29.896				c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611c2.02,1.235,3.588,3.262,3.894,5.784				c1.765,14.359,8.778,27.144,19.223,36.954C235.766,405.265,290.437,357.702,310.44,330.174z"/>		</g>	</g>	<g>		<g>			<path style="fill:#FFFFFF;" d="M312,160.07H176c-22.055,0-40,17.945-40,40v48c0,61.758,46.656,112,104,112s104-50.242,104-112				v-56C344,174.426,329.648,160.07,312,160.07z"/>		</g>	</g>	<g>		<g>			<path style="fill:#5C546A;" d="M296,72.07H192c-15.047,0-27.695,10.438-31.102,24.449C133.359,100.02,112,123.598,112,152.07v40				c0,20.617,8.752,39.851,24,53.52v-45.52c0-22.055,17.945-40,40-40h136c17.648,0,32,14.355,32,32v53.511				c15.251-13.667,24-32.899,24-53.511v-48C368,104.371,335.703,72.07,296,72.07z"/>		</g>	</g>	<g>		<path style="fill:#5C546A;" d="M61.632,400.544C105.562,449.319,169.191,480,240,480s134.438-30.681,178.368-79.456			c-7.66-10.356-18.462-18.77-32.352-22.659c-0.32-0.09-0.641-0.16-0.969-0.207l-63.859-9.582c-0.391-0.059-1.227-0.09-1.625-0.09			c-4.039,0-7.445,3.012-7.938,7.023c-4,32.48-34.789,56.977-71.625,56.977c-36.844,0-67.633-24.492-71.625-56.977			c-0.5-4.129-4.219-7.234-8.141-7.02c-0.469-0.027-0.93,0.012-1.422,0.086l-63.859,9.582c-0.328,0.047-0.648,0.117-0.969,0.207			C80.094,381.775,69.292,390.188,61.632,400.544z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          <!-- <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-cat fa-w-16 fa-9x"><g class="fa-group"><path fill="currentColor" d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z" class="fa-primary"></path><path fill="currentColor" d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z" class="fa-primary"></path></g></svg> -->
          <span class="link-text">Login</span>
        </a>
        </router-link>
      </li>
      <li class="nav-item" >
        <router-link to="/cart" >
        <a class="nav-link"  >
          <div v-if="noItems > 0" class="cart-link__count" id="link__count__regular">{{ noItems }}</div>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 504 504" style="enable-background:new 0 0 504 504;" xml:space="preserve"><g>	<g>		<path style="fill:#B8BAC0;" d="M485.617,114.305C484.125,112.828,482.102,112,480,112c-0.031,0-0.07,0-0.109,0l-374.5,4.941			c-2.531,0.035-4.906,1.27-6.383,3.328c-1.484,2.059-1.898,4.699-1.125,7.113l62.5,195.059c1.063,3.313,4.141,5.559,7.617,5.559			h280c22.055,0,40-17.945,40-40V120C488,117.859,487.141,115.809,485.617,114.305z M208,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168			c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M248,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z			 M288,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M328,288c0,4.418-3.578,8-8,8s-8-3.582-8-8			V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M368,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z			 M408,288c0,4.418-3.578,8-8,8s-8-3.582-8-8V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z M448,288c0,4.418-3.578,8-8,8s-8-3.582-8-8			V168c0-4.418,3.578-8,8-8s8,3.582,8,8V288z"/>	</g>	<g>		<circle style="fill:#5C546A;" cx="144" cy="416" r="32"/>	</g>	<g>		<circle style="fill:#5C546A;" cx="456" cy="416" r="32"/>	</g>	<g>		<path style="fill:#8A8895;" d="M492,108H108c-0.316,0-0.614,0.069-0.924,0.093l-6.85-23.039C96.539,72.656,84.937,64,72.008,64			L72,64.001V64H56v16h16v-0.001L72.008,80c5.898,0,11.195,3.953,12.875,9.613l73.242,246.348			c3.032,10.188,8.988,18.919,16.632,25.696l-37.156,49.542c-2.656,3.535-1.938,8.551,1.602,11.199			c1.438,1.082,3.117,1.602,4.789,1.602c2.438,0,4.836-1.105,6.406-3.199l37.713-50.286c7.295,3.45,15.317,5.485,23.693,5.485H448			v40c0,4.418,3.578,8,8,8s8-3.582,8-8v-40h16c4.422,0,8-3.582,8-8s-3.578-8-8-8H211.805c-17.563,0-33.328-11.762-38.336-28.602			L114.184,132H492c6.625,0,12-5.371,12-12S498.625,108,492,108z"/>	</g>	<g>		<path style="fill:#5C546A;" d="M56,88H16C7.163,88,0,80.837,0,72v0c0-8.837,7.163-16,16-16h40c8.837,0,16,7.163,16,16v0			C72,80.837,64.837,88,56,88z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          <!-- <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m485.096 201.844-63.03-137.987c-6.227-13.63-13.287-20.902-26.982-27.79l-69.592-35c-2.192-1.102-4.711-1.361-7.081-.726-48.413 12.973-76.41 12.972-124.821 0-2.37-.636-4.891-.376-7.081.726l-69.591 35c-13.695 6.888-20.756 14.16-26.982 27.791l-63.031 137.986c-2.087 4.567-.463 9.974 3.796 12.635l75.303 47.064v240.457c0 5.523 4.478 10 10 10h279.995c5.522 0 10-4.477 10-10v-240.457l75.302-47.064c4.257-2.661 5.882-8.068 3.795-12.635zm-175.901-178.579c-6.199 21.438-27.696 37.298-53.195 37.298s-46.995-15.86-53.194-37.297c39.005 9.056 67.382 9.057 106.389-.001zm96.803 214.693v-61.96c0-5.523-4.478-10-10-10s-10 4.477-10 10v316.002h-259.995v-316.002c0-5.523-4.478-10-10-10s-10 4.477-10 10v61.96l-57.26-35.787 59.384-130.003c4.326-9.471 8.147-13.39 17.777-18.233l20.372-10.246c10.176 28.542 32.538 52.331 61.66 64.96 1.296.562 2.646.828 3.974.828 3.864 0 7.544-2.253 9.18-6.024 2.197-5.067-.129-10.956-5.196-13.153-24.839-10.771-43.683-31.271-51.583-55.681l18.394-9.251c7.3 31.51 37.382 55.196 73.295 55.196s65.996-23.686 73.296-55.196l18.394 9.251c-7.899 24.412-26.745 44.913-51.588 55.684-5.067 2.197-7.395 8.085-5.197 13.153 1.635 3.771 5.315 6.024 9.18 6.024 1.327 0 2.678-.266 3.973-.828 29.127-12.628 51.492-36.419 61.668-64.963l20.372 10.246c9.63 4.843 13.451 8.762 17.777 18.232l59.384 130.003z"/><path d="m256 98.561h-.007c-5.522 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z"/></g></g></svg> -->
          <!-- <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-station-moon-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x" ><g class="fa-group"><path fill="currentColor" d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z" class="fa-secondary" ></path><path fill="currentColor" d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z" class="fa-primary" ></path></g></svg> -->
          <!-- <i class="fas fa-shopping-basket fa-w-2 fa-3x"></i> -->
          <span class="link-text">Cart</span>
        </a>
        </router-link>
      </li>
     	<li class="nav-item">
            <router-link to="/">
              <a class="nav-link" id="show-products-categlory" @click="showProductsCateglory">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><rect x="159.992" width="192" height="120" style="fill: rgb(82, 121, 145);"></rect></g><g><path d="M507.235,141.633c-0.031-0.055-0.07-0.109-0.102-0.164l-50.891-83.082 C434.188,22.371,394.235,0,351.992,0c-4.422,0-8,3.582-8,8c0,48.523-39.477,88-88,88s-88-39.477-88.008-88c0-4.418-3.586-8-8-8 C117.742,0,77.797,22.371,55.742,58.387L4.75,141.633c-4.203,7.246-2.195,16.328,4.672,21.133l66.836,46.789 c3.664,2.547,8.242,3.461,12.633,2.516c4.359-0.969,8.148-3.742,10.391-7.609l4.711-8.133V496c0,8.82,7.18,16,16,16h272 c8.82,0,16-7.18,16-16V196.328l4.711,8.133c2.242,3.867,6.031,6.641,10.391,7.609c4.391,0.953,8.969,0.039,12.625-2.516 l66.844-46.789C509.43,157.961,511.438,148.879,507.235,141.633z" style="fill: var(--my-turk);"></path></g><g><g><path d="M335.992,215.995c-4.422,0-8-3.578-8-8c0-35.703-18.203-90.035-45.297-114.008 c-3.313-2.926-3.625-7.984-0.695-11.293s8.008-3.605,11.289-0.691c31.32,27.703,50.703,86.969,50.703,125.992 C343.992,212.417,340.414,215.995,335.992,215.995z" style="fill: rgb(255, 149, 0);"></path></g></g><g><path d="M279.992,40h-48c-4.418,0-8-3.582-8-8v-8c0-4.418,3.582-8,8-8h48c4.418,0,8,3.582,8,8v8 C287.992,36.418,284.411,40,279.992,40z" style="fill: rgb(92, 84, 106);"></path></g><g><path d="M99.281,204.461l3.346-5.776L9.664,133.61l-4.914,8.022c-4.203,7.246-2.195,16.328,4.672,21.133 l66.836,46.789c3.664,2.547,8.242,3.461,12.633,2.516C93.25,211.102,97.039,208.328,99.281,204.461z" style="fill: rgb(82, 121, 145);"></path></g><g><path d="M412.719,204.461l-3.346-5.776l92.963-65.074l4.914,8.022c4.203,7.246,2.195,16.328-4.672,21.133 l-66.836,46.789c-3.664,2.547-8.242,3.461-12.633,2.516C418.75,211.102,414.961,208.328,412.719,204.461z" style="fill: rgb(82, 121, 145);"></path></g><g><path d="M103.992,488v8c0,8.82,7.18,16,16,16h272c8.82,0,16-7.18,16-16v-8H103.992z" style="fill: rgb(82, 121, 145);"></path></g><g><path d="M324.679,211.314l-8,8c-3.001,3.001-4.686,7.07-4.686,11.314V296c0,4.418,3.582,8,8,8h32 c4.418,0,8-3.582,8-8v-65.373c0-4.243-1.686-8.313-4.686-11.314l-8-8C341.058,205.065,330.927,205.065,324.679,211.314z M335.992,232c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8s8,3.582,8,8C343.992,228.418,340.411,232,335.992,232z" style="fill: rgb(255, 209, 0);"></path></g><g><path d="M346.821,227.797l-2.991-2.991c-0.423,4.02-3.705,7.194-7.837,7.194s-7.415-3.174-7.837-7.194 l-2.991,2.991c-0.742,0.75-1.172,1.773-1.172,2.828V292h24v-61.375C347.992,229.57,347.563,228.547,346.821,227.797z" style="fill: rgb(255, 149, 0);"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                  <!-- <svg  aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" svg-inline--fa fa-sun fa-w-16 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" class="fa-secondary"></path> <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z" class="fa-primary"></path></g></svg> -->
                <span class="link-text" >Categlories</span >
              </a>
            </router-link>
          <div class="expandable-categlory" id="expandable-categlory">
            <ul>
              <li v-for="categlories in products" class="nav-item"  >
                <router-link class="router-links" :to="`${categlories}`">
                  <a class="nav-link">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 509.418 509.418" style="enable-background:new 0 0 509.418 509.418;" xml:space="preserve"><g><g><g><path style="fill:#B8BAC0;" d="M254.497,214.694c-4.422,0-8-3.578-8-8v-32.625c0-7.875,5.906-14.656,13.734-15.781 c10.852-1.555,20.711-7.633,27.047-16.672c6.414-9.141,8.656-20.375,6.313-31.617c-3.141-15.047-15.352-27.258-30.398-30.398 c-12.141-2.508-24.508,0.391-33.906,8.039c-9.398,7.641-14.789,18.961-14.789,31.055c0,4.422-3.578,8-8,8s-8-3.578-8-8 c0-16.938,7.547-32.781,20.695-43.477c13.141-10.68,30.367-14.805,47.266-11.273c21.18,4.414,38.375,21.609,42.789,42.789 c3.258,15.617,0.109,31.266-8.867,44.07c-8.859,12.641-22.664,21.141-37.875,23.328l-0.008,32.563 C262.497,211.116,258.919,214.694,254.497,214.694z"/></g></g><g><path style="fill:#5C546A;" d="M499.442,376.998L261.317,212.826c-4.109-2.828-9.523-2.82-13.633,0.008L9.856,377.092 c-8.266,5.703-11.805,16.016-8.797,25.664c2.958,9.506,11.567,15.9,21.438,15.945v4.008c0,13.234,10.766,24,24,24h40 c4.422,0,8-3.578,8-8s-3.578-8-8-8h-40c-4.414,0-8-3.586-8-8v-4h432v4c0,4.414-3.586,8-8,8h-40c-4.422,0-8,3.578-8,8s3.578,8,8,8 h40c13.234,0,24-10.766,24-24v-4h0.32c9.977,0,18.648-6.469,21.578-16.094C511.364,392.881,507.716,382.553,499.442,376.998z M254.513,237.287l228.328,157.422H26.575L254.513,237.287z"/></g><g><path style="fill:#8A8895;" d="M262.497,174.709h-16c-4.418,0-8,3.582-8,8v30c0,4.418,3.582,8,8,8h16c4.418,0,8-3.582,8-8v-30 C270.497,178.291,266.915,174.709,262.497,174.709z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    <span class="link-text"><div >{{categlories}}</div></span>
                  </a>
                </router-link>
              </li>
            </ul>
        </div>
      </li>
     	<li class="nav-item">
            <router-link to="/">
              <a class="nav-link" id="show-products-stores" @click="showProductsStores">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve"><g><g><rect x="32" y="196" style="fill:#FFE0B1;" width="416" height="248"/></g><g><rect x="72" y="276" style="fill:#51DBFF;" width="64" height="104"/></g><g><polygon style="fill:#B2F3FF;" points="72,276 136,340 136,380 72,316 		"/></g><g><path style="fill:#7E5C62;" d="M296,260H184c-8.82,0-16,7.176-16,16v168c0,4.418,3.578,8,8,8h128c4.422,0,8-3.582,8-8V276 C312,267.176,304.82,260,296,260z"/></g><g><g><path style="fill:#5C546A;" d="M168,444h72V260h-56c-8.837,0-16,7.163-16,16V444z"/></g></g><g><path style="fill:#FF4F19;" d="M400,196c0,17.673,14.327,32,32,32s32-14.327,32-32L435.716,47.509 C433.56,36.19,423.663,28,412.14,28H67.86c-11.523,0-21.42,8.19-23.576,19.509L16,196c0,17.673,14.327,32,32,32s32-14.327,32-32 c0,17.673,14.327,32,32,32s32-14.327,32-32c0,17.673,14.327,32,32,32s32-14.327,32-32c0,17.673,14.327,32,32,32s32-14.327,32-32 c0,17.673,14.327,32,32,32s32-14.327,32-32c0,17.673,14.327,32,32,32S400,213.673,400,196z"/></g><g><g><path style="fill:#5C546A;" d="M472,452H8c-4.422,0-8-3.582-8-8s3.578-8,8-8h464c4.422,0,8,3.582,8,8S476.422,452,472,452z"/></g></g><g><path style="fill:#E7001E;" d="M208,196.001C208.001,213.673,222.327,228,240,228s31.999-14.326,32-31.999L268,28h-56L208,196.001 z"/></g><g><path style="fill:#E7001E;" d="M80,196l-0.912,7.292C79.639,200.94,80,198.519,80,196z"/></g><g><path style="fill:#E7001E;" d="M144,196L144,196l11.5-168H101L80,196c0,17.673,14.327,32,32,32S144,213.673,144,196z"/></g><g><path style="fill:#E7001E;" d="M400,196c0,2.519,0.361,4.94,0.912,7.292L400,196z"/></g><g><path style="fill:#E7001E;" d="M336,196.005c0.003,17.67,14.328,31.995,32,31.995c17.673,0,32-14.327,32-32L379,28h-54.5 L336,196.005z"/></g><g><path style="fill:#7E5C62;" d="M142.4,260H65.6c-5.302,0-9.6,3.582-9.6,8v120c0,4.418,4.298,8,9.6,8h76.8c5.302,0,9.6-3.582,9.6-8 V268C152,263.582,147.702,260,142.4,260z M136,276v24H72v-24H136z M72,380v-64h64v64H72z"/></g><g><rect x="344" y="276" style="fill:#51DBFF;" width="64" height="104"/></g><g><polygon style="fill:#B2F3FF;" points="344,276 408,340 408,380 344,316 		"/></g><g><path style="fill:#7E5C62;" d="M414.4,260h-76.8c-5.302,0-9.6,3.582-9.6,8v120c0,4.418,4.298,8,9.6,8h76.8 c5.302,0,9.6-3.582,9.6-8V268C424,263.582,419.702,260,414.4,260z M408,276v24h-64v-24H408z M344,380v-64h64v64H344z"/></g><g><path style="fill:#51DBFF;" d="M223,380h-38c-0.552,0-1-0.448-1-1V277c0-0.552,0.448-1,1-1h38c0.552,0,1,0.448,1,1v102 C224,379.552,223.552,380,223,380z"/></g><g><polygon style="fill:#B2F3FF;" points="224,324 184,284 184,324 224,364 		"/></g><g><path style="fill:#51DBFF;" d="M295,380h-38c-0.552,0-1-0.448-1-1V277c0-0.552,0.448-1,1-1h38c0.552,0,1,0.448,1,1v102 C296,379.552,295.552,380,295,380z"/></g><g><polygon style="fill:#B2F3FF;" points="296,324 256,284 256,324 296,364 		"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                  <!-- <svg  aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" svg-inline--fa fa-sun fa-w-16 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" class="fa-secondary"></path> <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z" class="fa-primary"></path></g></svg> -->
                <span class="link-text" >Stores</span >
              </a>
            </router-link>
          <div class="expandable-stores" id="expandable-stores">
            <ul>
              <li v-for="store in stores" class="nav-item">
                <router-link class="router-links" :to="`${store}`">
                  <a class="nav-link">
                    
                      <img :src='`./stores/static/${store.toLowerCase()}/logo.svg`'>

                      <!-- <img :src="`./stores/static/${store.toLowerCase()}/images/logo.svg`" :alt="`image of ${product.title}`"> -->

                      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="32" y1="11.833" x2="32" y2="29.18" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path d="M37 11v13a5 5 0 0 1-10 0V11h10z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="52" y1="11.833" x2="52" y2="29.18" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path d="M47 24a5.005 5.005 0 0 0 6.008 4.901C55.382 28.438 57 26.204 57 23.785v-.052a8.017 8.017 0 0 0-.717-3.312l-3.217-7.077A4 4 0 0 0 49.425 11H47v13z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="12" y1="11.833" x2="12" y2="29.18" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path d="M17 11h-2.425a4 4 0 0 0-3.641 2.344l-3.217 7.077A8.022 8.022 0 0 0 7 23.734v.052c0 2.611 1.909 4.943 4.509 5.191A5.002 5.002 0 0 0 17 24V11z" fill="url(#c)"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="25" y1="10" x2="25" y2="54.561" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#d)" d="M24 44h2v4h-2z"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="41" y1="10" x2="41" y2="54.561" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path d="M34 46h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H34c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zm0-10h14v8H34v-8z" fill="url(#e)"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="32" y1="10" x2="32" y2="54.561" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path d="M54 51V29.647c2.357-.838 4-3.175 4-5.914a8.912 8.912 0 0 0-.808-3.726l-3.217-7.076A5.005 5.005 0 0 0 49.425 10H14.575a5.008 5.008 0 0 0-4.551 2.931l-3.217 7.077A8.988 8.988 0 0 0 6 23.785c0 2.665 1.672 4.999 4 5.857V51c0 .352.072.686.184 1H6v2h52v-2h-4.184c.112-.314.184-.648.184-1zM28 38h-8v-2h8v2zm0-4h-8c-1.103 0-2 .897-2 2v12h-6V29.998a6.027 6.027 0 0 0 4.035-1.557c.372-.338.69-.723.962-1.135A6 6 0 0 0 22 30a5.997 5.997 0 0 0 5-2.69c1.075 1.62 2.914 2.69 5 2.69s3.925-1.071 5-2.69A5.995 5.995 0 0 0 42 30a5.995 5.995 0 0 0 5.001-2.693c.326.491.72.942 1.187 1.327A5.996 5.996 0 0 0 52 29.999V48H30V36c0-1.103-.897-2-2-2zm24.155-20.241l3.217 7.077c.417.915.628 1.89.628 2.949 0 2.035-1.339 3.774-3.184 4.135-1.224.241-2.417-.056-3.356-.83A3.99 3.99 0 0 1 48 24V12h1.425c1.174 0 2.245.69 2.73 1.759zM46 12v12c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8zM36 24c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8v12zM26 12v12c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8zM8 23.733c0-1.008.211-1.982.628-2.897l3.217-7.078A3.004 3.004 0 0 1 14.575 12H16v12a4.013 4.013 0 0 1-1.31 2.961 3.99 3.99 0 0 1-3.087 1.021C9.583 27.788 8 25.945 8 23.733zM13 52a1 1 0 0 1-1-1v-1h6v2h-5zm7 0V40h8v12h-8zm10 0v-2h22v1a1 1 0 0 1-1 1H30z" fill="url(#f)"/></svg> -->
                    <span class="link-text"><div >{{store}}</div></span>
                  </a>
                </router-link>
              </li>
            </ul>
        </div>
      </li>
      <li class="nav-item" id="themeButton"> 
        <a class="nav-link">
          <svg id="lightIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="moon-stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 549" class="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"><g class="fa-group"><path fill="currentColor" d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z" class="fa-secondary"></path> <path fill="currentColor" d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z" class="fa-primary"></path></g></svg>
          <svg id="solarIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 549" class="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" class="fa-secondary"></path> <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z" class="fa-primary"></path></g></svg>
          <svg id="darkIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sunglasses" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 549" class="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"> <g class="fa-group"> <path fill="currentColor" d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z" class="fa-secondary"></path> <path fill="currentColor" d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z" class="fa-primary"></path></g></svg> 
          <span class="link-text">Themify</span>
        </a>
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
  name:'TopNavigation',
      data() {
      return {
        email: '',
        password: '',
        displayName: null,
        photoURL: null,
        newPassword: null,
        favoriteFood: null,
        authUser: null
      }
    },
  components: {
    logo, 
  },
  methods :{
      signOut () {
        firebaseAuth().signOut();
        this.$store.state.cartItems = 0; 
        this.$store.state.cart= []; 
      },
      
      
    showProductsCateglory() {
      var button = document.getElementById('show-products-categlory');
      var expander = document.getElementById('expandable-categlory');
      if (!expander.classList.contains('maxheight-expand')) {
        expander.classList.add("maxheight-expand");
      } else {
        expander.classList.remove("maxheight-expand");
      }
    },
    
    
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
    noItems() {
      return this.$store.state.cartItems
    },
    ...mapGetters({
      currentUser : 'currentUser',
    }),
  },
mounted () {
    // var element = document.getElementById('product-line');
    // var button = document.getElementById('show-products-categlory');
      var expander_categlory = document.getElementById('expandable-categlory');
      var expander_stores = document.getElementById('expandable-stores');
      var navbar = document.getElementById('navbar');
      navbar.addEventListener('mouseleave', function (e) {
        expander_categlory.classList.remove("maxheight-expand");
        expander_stores.classList.remove("maxheight-expand");
        
        });
      var tmp = null;
      const themeMap = { dark: "light", light: "dark" }; // light: "solar", 
      const theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);
      const bodyClass = document.body.classList;
      bodyClass.add(theme);
      function toggleTheme() {
        const current = localStorage.getItem('theme');
        const next = themeMap[current];
        bodyClass.replace(current, next);
        localStorage.setItem('theme', next);
      }
      document.getElementById('themeButton').onclick = toggleTheme;
  }
}
</script>
<style lang="css">
/* * { margin:0; padding:0; } */
/* body { font-family: sans-serif;}  */
#slide-content { margin: 50px;

 } 
a { text-decoration: none; }  

.expandable-categlory {
  overflow: hidden;
  transition: all var(--transition-speed-primary-faster) ease-in-out;
  max-height: 0px;
 }
 
.expandable-stores {
  overflow: hidden;
  transition: all var(--transition-speed-primary-faster) ease-in-out;
  max-height: 0px;
 }
 
 .maxheight-expand {
  overflow: scroll;
  max-height: 500px;
}
 
 
 ul {
   list-style: none;
 }
 
.innerdrop ul { margin-left: 0;padding-left: 0;list-style: none;position: relative;}
.innerdrop ul ul { display: none;}
.innerdrop ul:hover > ul { display: inline-table;}
.innerdrop ul li { text-align: left;}
.innerdrop ul li a { padding-right: 20px;text-decoration: none;}
.innerdrop ul ul { border-radius: 0px; padding: 0;position: relative; top: 100%;}
.innerdrop ul ul li { float: none;position: relative;}
.innerdrop ul ul li a { }	
#down-triangle { float: right;width: 0;height: 0;margin-left: 20px;margin-top: 5px;border-top: 10px solid #2ecc71;border-left: 10px solid transparent;border-right: 10px solid transparent;}





/* body { color: black; background-color: white; margin: 0; padding: 0; }  */
main { margin-left: 4rem; padding: 1rem; } 
.navbar { z-index: 2;position: fixed; background-color: var(--bg-primary); transition: width var(--transition-speed-primary-faster) ease-out; overflow: scroll; width: 100%;
-webkit-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
-moz-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
} 
.cart-link__count {
position: absolute;
    width: 22px;
    border-radius: 16px;
    top: 8px;
    z-index: 1;
    border: 2px solid var(--bg-low-opacity);
    left: 41px;
    padding: 0;
    background: var( --blue-primary);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
.navbar-nav { 
/* -webkit-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
-moz-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68);
box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
  width: 100%;
  list-style: none;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
     /* min-height: 100%; */
  } 
.nav-item { width: 100%; } 
.nav-item:last-child { margin-top: auto; } 
.nav-link { display: flex; align-items: center; height: 4rem; color: var(--text-primary); text-decoration: none; filter: grayscale(100%) opacity(0.7); transition: var(--transition-speed-primary-faster); } 
.nav-link:hover { filter: grayscale(0%) opacity(1); background: var(--bg-secondary); color: var(--text-secondary);
    /* -webkit-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
/* -moz-box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
/* box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
/* box-shadow: inset -15px 0px 16px -20px rgba(0,0,0,0.68); */
 } 
.link-text { display: none; margin-left: 1rem;
font-family: 'Overpass';
 } 
.nav-link svg, .nav-link img {
      width: 1.8rem;
    min-width: 1.8rem;
    margin: 0 1.5rem;
   /* width: 2rem; min-width: 2rem; margin: 0 1.5rem; */
    } 
.fa-primary { color: #ff7eee; } 
.fa-secondary { color: #df49a6; } 
.fa-primary,
.fa-secondary { transition: var(--transition-speed-primary-faster); } 
.logo { font-weight: bold; text-transform: uppercase; margin-bottom: 0rem; text-align: center; color: var(--text-secondary); background: var(--bg-secondary); font-size: 1.5rem; letter-spacing: 0.3ch; width: 100%; } 
.logo svg { transform: rotate(0deg); transition: var(--transition-speed-primary-faster); } 
.logo-text { display: inline; position: absolute; left: -999px; transition: var(--transition-speed-primary-faster); } 
.navbar:hover .logo svg { transform: rotate(-180deg); } 
/* Small screens */
@media (max-width: 600px){
  .nav-link svg {
    width: 2rem;
    min-width: 2.1rem;
    /* margin: 0px; */
  /* margin: 0rem 1.2rem -.4rem; */
}
  .expandable-categlory {
    display: none;
  }
  .expandable-stores {
    display: none;
  }
  
  .nav-link {
    display: inline-flex;
    /* filter: grayscale(0%) opacity(1); */
  }
  
  .nav-item:hover {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    filter: grayscale(0%) opacity(1);
}
  
  
  .nav-link:hover {
    background: none;
  }
  
  /* .nav-link svg {
    width: 1rem;
    min-width: 2rem;
    margin: 0 1rem;
  } */
  .navbar {
    overflow: hidden;
    width: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
    #down-triangle {
     margin-left: 0px;
  }
 .navbar {
   
       width: 100vw;
    overflow: scroll;
    height: 4rem;
    border-bottom: 4px solid rgba(0,0,0,0.1);
    overflow-y: hidden;
  } /*  bottom: 0; */ 
 .logo { display: none; } 
 .navbar-nav { flex-direction: row;
  } 
 .nav-link { justify-content: center; } 
 main { margin: 0; } 
 }
/* Large screens */
@media only screen and (min-width: 600px){
 .navbar { 
    top: 0;  
    position: relative;
    display: inline-flex;
    width: 5rem;
    min-height: 100vh;
    /* min-height: 87vh; */
    /* height: 100vh; */
   /* top: 0; width: 5rem; height: 100vh; */
  } 
 .navbar:hover { width: 16rem; } 
 .navbar:hover .link-text { display: inline; 
 cursor: pointer;
 } 
 .navbar:hover .logo svg { margin-left: 11rem; } 
 .navbar:hover .logo-text { left: 10px; 
 font-size: 17px;
 } 
 }



.theme-icon { display: none; 
} 
.dark #darkIcon { display: block; 
} 
.light #lightIcon { display: block; 
} 
.solar #solarIcon { display: block; 
} 
</style>
