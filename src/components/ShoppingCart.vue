<template>
    <transition name="fade">

  <div class="shopping-cart">
    <div v-if="$store.state.cart.length <= 0" class="empty-cart-container">
      <div class="empty-cart">
        <p>Your cart is currently empty. 😱</p>
        <router-link to="/">
        
        <ButtonSimple text="Shop Now!"/>
        
       </router-link>
      </div>
    </div>
    <div v-else class="shopping-cart-items">
      <ul>
        <li v-for="product in products" class="cart-product-card">
          <img :src="`./stores/static/${product.store_name.toLowerCase()}/images/${product.img}`" :alt="`Image of ${product.title}`">
          <div class="cart-detail">
          <p class="product-title">{{product.title}}</p>
          <p class="product-description"> {{product.description}}</p>
          <p class="product-price"> {{product.price | currency}} X {{product.quantity}} </p>
          <div class="quantity">
            <a @click="subtractCartItem(product)" class="quantity__minus" ><span>-</span></a>
            <a @click="addCartItem(product)" class="quantity__plus"><span>+</span></a>
          </div>
          </div>
        </li>
      </ul>
      <div class="cart-checkout">
        <h3>Cart total : </h3>
        <div class="coin-container">
          <p>{{ total | currency}}</p>
          <div class="coin-svg"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve"><g><g><circle style="fill:#FFD100;" cx="240" cy="240" r="240"/></g><g><path style="fill:#FF9500;" d="M240,480c66.274,0,126.274-26.863,169.706-70.294L70.294,70.294C26.863,113.726,0,173.726,0,240 C0,372.548,107.452,480,240,480z"/></g><g><path style="fill:#FFFFFF;" d="M240.102,228c-32.617,0-60.18-17.586-60.18-38.398c0-20.816,27.563-38.402,60.18-38.402 c32.625,0,60.188,17.586,60.188,38.402c0,6.629,5.375,12,12,12s12-5.371,12-12c0-31.958-30.876-57.52-72.188-61.726V112 c0-6.629-5.375-12-12-12s-12,5.371-12,12v15.876c-41.304,4.207-72.18,29.768-72.18,61.725c0,34.988,36.977,62.398,84.18,62.398 c32.625,0,60.188,17.586,60.188,38.402c0,20.813-27.563,38.398-60.188,38.398c-32.617,0-60.18-17.586-60.18-38.398 c0-6.629-5.375-12-12-12s-12,5.371-12,12c0,31.953,30.875,57.515,72.18,61.721V368c0,6.629,5.375,12,12,12s12-5.371,12-12v-15.876 c41.311-4.206,72.188-29.768,72.188-61.722C324.289,255.41,287.313,228,240.102,228z"/></g><g><path style="fill:#FFD100;" d="M232.156,408c0-4.402,3.602-8,8-8l0,0c4.398,0,8,3.598,8,8l0,0c0,4.398-3.602,8-8,8l0,0 C235.758,416,232.156,412.398,232.156,408z"/></g><g><path style="fill:#FFD100;" d="M215.117,414.238c-4.32-0.641-7.359-4.641-6.719-9.039l0,0c0.563-4.402,4.641-7.359,8.961-6.801 h0.078c4.32,0.641,7.359,4.719,6.719,9.039l0,0c-0.555,4-4,6.883-7.836,6.883l0,0C215.922,414.32,215.516,414.32,215.117,414.238z "/></g><g><path style="fill:#FFD100;" d="M256.156,407.438c-0.641-4.398,2.398-8.398,6.805-9.039v-0.078c4.32-0.563,8.398,2.477,9.039,6.797 l0,0c0.641,4.402-2.398,8.48-6.805,9.121l0,0c-0.398,0-0.719,0.082-1.117,0.082l0,0 C260.156,414.32,256.719,411.438,256.156,407.438z"/></g><g><path style="fill:#FFD100;" d="M190.641,408.957c-4.242-1.199-6.719-5.68-5.445-9.918l0,0c1.203-4.242,5.68-6.641,9.922-5.441l0,0 c4.242,1.281,6.641,5.68,5.438,9.922l0,0c-1.039,3.52-4.234,5.758-7.758,5.758l0,0 C192.078,409.277,191.359,409.199,190.641,408.957z"/></g><g><path style="fill:#FFD100;" d="M279.758,403.438c-1.203-4.238,1.203-8.641,5.438-9.918l0,0c4.242-1.281,8.727,1.199,9.922,5.438 l0,0c1.281,4.242-1.117,8.641-5.359,9.922l0,0c-0.797,0.238-1.516,0.32-2.32,0.32l0,0 C284,409.199,280.797,406.957,279.758,403.438z"/></g><g><path style="fill:#FFD100;" d="M167.039,400.238c-4-1.84-5.758-6.559-3.922-10.641l0,0c1.844-4,6.563-5.758,10.563-3.918l0,0 c4,1.84,5.836,6.559,4,10.559l0,0c-1.359,2.961-4.242,4.719-7.281,4.719l0,0C169.281,400.957,168.156,400.719,167.039,400.238z"/></g><g><path style="fill:#FFD100;" d="M302.641,396.16c-1.844-4-0.086-8.801,3.914-10.641l0,0c4-1.84,8.805-0.082,10.641,3.918l0,0 c1.844,4.082,0.086,8.801-3.914,10.641l0,0c-1.125,0.48-2.242,0.719-3.359,0.719l0,0C306.875,400.797,304,399.039,302.641,396.16z "/></g><g><path style="fill:#FFD100;" d="M145.039,388.238c-3.758-2.398-4.797-7.359-2.398-11.121l0,0c2.32-3.68,7.281-4.797,11.039-2.398 l0,0c3.68,2.398,4.797,7.359,2.398,11.039l0,0c-1.523,2.402-4.156,3.68-6.719,3.68l0,0 C147.836,389.438,146.32,389.039,145.039,388.238z"/></g><g><path style="fill:#FFD100;" d="M324.156,385.68c-2.398-3.762-1.281-8.723,2.398-11.121l0,0c3.688-2.398,8.641-1.359,11.047,2.398 l0,0c2.398,3.68,1.359,8.641-2.32,11.043l0,0l0,0l0,0c-1.359,0.879-2.883,1.277-4.406,1.277l0,0 C328.242,389.277,325.68,388,324.156,385.68z"/></g><g><path style="fill:#FFD100;" d="M124.875,373.199c-3.273-2.961-3.68-8-0.797-11.281l0,0c2.883-3.359,8-3.758,11.281-0.879l0,0 c3.359,2.879,3.758,8,0.797,11.281l0,0c-1.516,1.84-3.758,2.797-6,2.797l0,0C128.32,375.117,126.398,374.48,124.875,373.199z"/></g><g><path style="fill:#FFD100;" d="M344,372.16c-2.883-3.363-2.484-8.402,0.797-11.281l0,0c3.359-2.879,8.398-2.559,11.281,0.801l0,0 c2.883,3.359,2.563,8.398-0.797,11.277l0,0c-1.523,1.281-3.359,2-5.203,2l0,0C347.836,374.879,345.602,374,344,372.16z"/></g><g><path style="fill:#FFD100;" d="M107.117,355.438c-2.875-3.359-2.477-8.398,0.805-11.277l0,0c3.359-2.883,8.398-2.563,11.273,0.797 l0,0c2.961,3.363,2.563,8.402-0.719,11.281l0,0c-1.516,1.281-3.438,2-5.281,2l0,0 C110.961,358.238,108.719,357.277,107.117,355.438z"/></g><g><path style="fill:#FFFFFF;" d="M361.758,356c-3.359-2.883-3.68-7.922-0.797-11.281l0,0c2.875-3.359,7.914-3.68,11.281-0.801l0,0 c3.359,2.879,3.68,7.922,0.797,11.281l0,0c-1.602,1.84-3.844,2.801-6.078,2.801l0,0C365.117,358,363.281,357.359,361.758,356z"/></g><g><path style="fill:#FFD100;" d="M92.078,335.359c-2.398-3.68-1.359-8.641,2.398-11.039l0,0c3.68-2.402,8.641-1.281,11.039,2.398 l0,0c2.406,3.68,1.281,8.641-2.398,11.039l0,0c-1.359,0.879-2.797,1.281-4.32,1.281l0,0 C96.156,339.039,93.602,337.758,92.078,335.359z"/></g><g><path style="fill:#FFFFFF;" d="M377.039,337.52c-3.68-2.402-4.797-7.359-2.398-11.039l0,0c2.398-3.762,7.359-4.801,11.039-2.402 l0,0c3.758,2.402,4.797,7.359,2.398,11.039l0,0c-1.523,2.402-4.078,3.68-6.719,3.68l0,0 C379.836,338.797,378.398,338.398,377.039,337.52z"/></g><g><path style="fill:#FFD100;" d="M80,313.438c-1.844-4.078-0.078-8.801,3.922-10.641l0,0c4-1.84,8.797-0.078,10.633,3.922l0,0 c1.844,4,0.086,8.801-3.914,10.641l0,0c-1.125,0.48-2.242,0.719-3.359,0.719l0,0C84.242,318.078,81.359,316.32,80,313.438z"/></g><g><path style="fill:#FFFFFF;" d="M389.516,317.039c-4-1.84-5.758-6.559-3.914-10.559l0,0c1.836-4.082,6.555-5.844,10.555-4l0,0 c4,1.84,5.844,6.637,4,10.637l0,0c-1.359,2.961-4.234,4.641-7.281,4.641l0,0C391.758,317.758,390.641,317.52,389.516,317.039z"/></g><g><path style="fill:#FFD100;" d="M71.195,289.918c-1.273-4.238,1.125-8.719,5.359-9.918l0,0c4.242-1.281,8.727,1.117,9.922,5.359 l0,0c1.281,4.238-1.117,8.719-5.359,9.918l0,0c-0.797,0.242-1.516,0.32-2.242,0.32l0,0 C75.359,295.598,72.242,293.359,71.195,289.918z"/></g><g><path style="fill:#FFFFFF;" d="M398.961,295.039c-4.242-1.281-6.641-5.762-5.445-10l0,0c1.281-4.242,5.766-6.641,10-5.441l0,0 c4.242,1.281,6.641,5.68,5.445,9.922l0,0c-1.039,3.52-4.242,5.758-7.766,5.758l0,0 C400.477,295.277,399.758,295.199,398.961,295.039z"/></g><g><path style="fill:#FFD100;" d="M65.836,265.359c-0.641-4.32,2.406-8.402,6.719-9.039l0,0c4.406-0.641,8.484,2.398,9.125,6.797l0,0 c0.641,4.32-2.398,8.402-6.805,9.043l0,0c-0.398,0.078-0.797,0.078-1.117,0.078l0,0C69.836,272.238,66.398,269.359,65.836,265.359 z"/></g><g><path style="fill:#FFFFFF;" d="M405.195,271.84c-4.398-0.641-7.438-4.723-6.797-9.043l0,0c0.641-4.398,4.641-7.438,9.039-6.797 l0,0c4.398,0.637,7.359,4.637,6.805,9.039l0,0c-0.563,4-4,6.879-7.922,6.879l0,0C405.922,271.918,405.602,271.84,405.195,271.84z" /></g><g><path style="fill:#FFD100;" d="M64,240.32c0-4.402,3.516-8,8-8l0,0c4.398,0,8,3.598,8,8l0,0c0,4.398-3.602,8-8,8l0,0 C67.602,248.32,64,244.797,64,240.32z"/></g><g><path style="fill:#FFFFFF;" d="M400,240c0-0.082,0-0.082,0-0.16l0,0c0-0.16,0-0.32,0-0.48l0,0c0-4.48,3.516-8,7.922-8.082l0,0 c4.477,0,8,3.602,8.078,8l0,0c0,0.16,0,0.242,0,0.402l0,0c0,0.078,0,0.238,0,0.32l0,0c0,4.398-3.602,8-8,8l0,0 C403.602,248,400,244.398,400,240z"/></g><g><polygon style="fill:#FFFFFF;" points="416,239.277 416,239.277 416,239.277 416,239.277 416,239.277 		"/></g><g><path style="fill:#FFD100;" d="M72.477,224.398c-4.32-0.641-7.359-4.719-6.797-9.039l0,0c0.641-4.402,4.641-7.441,9.039-6.801l0,0 c4.398,0.559,7.438,4.641,6.797,8.961l0,0c-0.555,4-3.914,6.961-7.836,6.961l0,0C73.281,224.48,72.875,224.398,72.477,224.398z"/></g><g><path style="fill:#FFFFFF;" d="M398.32,216.559c-0.641-4.32,2.398-8.398,6.719-9.039l0,0c4.398-0.641,8.477,2.398,9.117,6.719l0,0 c0.641,4.398-2.398,8.48-6.797,9.121l0,0c-0.398,0-0.805,0.078-1.203,0.078l0,0C402.32,223.438,398.875,220.559,398.32,216.559z" /></g><g><path style="fill:#FFD100;" d="M76.398,200.719c-4.242-1.281-6.641-5.68-5.438-9.922l0,0c1.281-4.238,5.68-6.719,9.914-5.438l0,0 c4.242,1.199,6.641,5.68,5.445,9.918l0,0c-0.961,3.441-4.242,5.762-7.68,5.762l0,0C77.922,201.039,77.117,200.957,76.398,200.719z "/></g><g><path style="fill:#FFFFFF;" d="M393.359,194.32L393.359,194.32c-1.281-4.242,1.195-8.723,5.438-9.922l0,0 c4.242-1.281,8.641,1.121,9.922,5.359l0,0l0,0l0,0c1.281,4.242-1.203,8.641-5.359,9.922l0,0c-0.805,0.238-1.523,0.32-2.32,0.32 l0,0C397.602,200,394.398,197.758,393.359,194.32z"/></g><g><path style="fill:#FFD100;" d="M83.68,177.84c-4.078-1.84-5.844-6.563-4-10.641l0,0l0,0l0,0c1.836-4,6.563-5.762,10.641-3.922l0,0 c4,1.84,5.758,6.563,3.922,10.563l0,0c-1.281,2.957-4.242,4.719-7.281,4.719l0,0C85.836,178.559,84.719,178.32,83.68,177.84z"/></g><g><path style="fill:#FFFFFF;" d="M385.281,172.957c-1.844-4-0.086-8.797,3.914-10.637l0,0c4.086-1.84,8.805-0.082,10.641,3.918l0,0 c1.844,4,0.086,8.801-3.914,10.641l0,0c-1.047,0.48-2.242,0.719-3.367,0.719l0,0C389.516,177.598,386.641,175.918,385.281,172.957 z"/></g><g><path style="fill:#FFD100;" d="M94.156,156.238c-3.758-2.398-4.875-7.359-2.477-11.039l0,0c2.398-3.762,7.359-4.801,11.039-2.48 l0,0c3.758,2.398,4.797,7.359,2.477,11.121l0,0c-1.516,2.32-4.156,3.68-6.797,3.68l0,0 C96.961,157.52,95.438,157.039,94.156,156.238z"/></g><g><path style="fill:#FFFFFF;" d="M374.32,153.039c-2.398-3.762-1.359-8.719,2.32-11.121l0,0c3.758-2.398,8.641-1.281,11.117,2.402 l0,0c2.398,3.68,1.281,8.637-2.398,11.039l0,0c-1.359,0.879-2.883,1.277-4.32,1.277l0,0 C378.398,156.637,375.836,155.359,374.32,153.039z"/></g><g><path style="fill:#FFD100;" d="M107.516,136.32c-3.359-2.883-3.68-7.922-0.797-11.281l0,0c2.883-3.359,7.922-3.68,11.281-0.801 l0,0c3.359,2.879,3.68,7.922,0.797,11.281l0,0c-1.602,1.84-3.758,2.719-6,2.719l0,0 C110.875,138.238,109.039,137.598,107.516,136.32z"/></g><g><path style="fill:#FFFFFF;" d="M360.555,134.797c-2.875-3.359-2.555-8.398,0.727-11.277l0,0c3.359-2.883,8.398-2.563,11.273,0.801 l0,0c2.961,3.277,2.641,8.316-0.719,11.199l0,0c-1.516,1.359-3.359,2-5.281,2l0,0C364.32,137.52,362.156,136.637,360.555,134.797z "/></g><g><path style="fill:#FFFFFF;" d="M123.602,118.559c-2.883-3.359-2.563-8.398,0.797-11.281l0,0l0,0l0,0 c3.359-2.957,8.398-2.559,11.281,0.801l0,0c2.875,3.281,2.563,8.32-0.805,11.281l0,0c-1.438,1.277-3.359,1.918-5.195,1.918l0,0 C127.438,121.277,125.195,120.32,123.602,118.559z"/></g><g><path style="fill:#FFFFFF;" d="M344.32,118.719c-3.359-2.879-3.68-7.922-0.805-11.281l0,0c2.883-3.359,7.922-3.758,11.281-0.879 l0,0l0,0l0,0c3.359,2.879,3.68,8,0.805,11.281l0,0c-1.523,1.84-3.766,2.797-6,2.797l0,0 C347.758,120.637,345.836,120,344.32,118.719z"/></g><g><path style="fill:#FFFFFF;" d="M142.078,103.277c-2.398-3.758-1.359-8.719,2.398-11.117l0,0c3.68-2.402,8.641-1.363,11.039,2.398 l0,0c2.406,3.68,1.281,8.641-2.398,11.039l0,0c-1.281,0.883-2.797,1.281-4.32,1.281l0,0 C146.156,106.879,143.602,105.598,142.078,103.277z"/></g><g><path style="fill:#FFFFFF;" d="M326.078,105.117c-3.758-2.398-4.883-7.359-2.477-11.117l0,0c2.398-3.68,7.359-4.801,11.039-2.402 l0,0c3.758,2.402,4.797,7.359,2.477,11.039l0,0c-1.516,2.402-4.156,3.684-6.797,3.684l0,0 C328.875,106.32,327.359,105.918,326.078,105.117z"/></g><g><path style="fill:#FFFFFF;" d="M162.477,90.719c-1.836-4.082-0.078-8.801,3.922-10.641l0,0c4-1.84,8.797-0.078,10.641,3.922l0,0 c1.836,4,0.078,8.719-3.922,10.637l0,0c-1.117,0.48-2.242,0.723-3.359,0.723l0,0C166.719,95.359,163.836,93.598,162.477,90.719z" /></g><g><path style="fill:#FFFFFF;" d="M306,94.238c-4-1.84-5.844-6.641-4-10.641l0,0c1.836-4,6.555-5.84,10.641-4l0,0l0,0l0,0 c4,1.84,5.758,6.563,3.914,10.641l0,0c-1.359,2.961-4.234,4.641-7.273,4.641l0,0C308.156,94.879,307.039,94.719,306,94.238z"/></g><g><path style="fill:#FFFFFF;" d="M184.477,81.199c-1.195-4.242,1.203-8.719,5.445-10l0,0c4.234-1.199,8.633,1.199,9.914,5.438l0,0 c1.281,4.242-1.117,8.641-5.359,9.922l0,0c-0.797,0.238-1.516,0.32-2.32,0.32l0,0C188.719,86.879,185.516,84.637,184.477,81.199z" /></g><g><path style="fill:#FFFFFF;" d="M284.555,86.32L284.555,86.32c-4.234-1.281-6.633-5.684-5.438-9.922l0,0 c1.203-4.238,5.68-6.719,9.922-5.441l0,0c4.242,1.203,6.641,5.602,5.438,9.84l0,0c-1.039,3.523-4.156,5.84-7.68,5.84l0,0 C286.078,86.637,285.359,86.48,284.555,86.32z"/></g><g><path style="fill:#FFFFFF;" d="M207.68,74.879c-0.641-4.32,2.398-8.398,6.797-9.039l0,0c0,0,0,0-0.078,0l0,0 c4.398-0.641,8.477,2.398,9.117,6.797l0,0c0.641,4.32-2.398,8.402-6.797,9.043l0,0c-0.398,0.078-0.719,0.078-1.117,0.078l0,0 C211.68,81.758,208.242,78.879,207.68,74.879z"/></g><g><path style="fill:#FFFFFF;" d="M262.242,81.52L262.242,81.52c-4.32-0.563-7.445-4.641-6.805-9.039l0,0 c0.641-4.32,4.641-7.363,9.039-6.801l0,0l0,0l0,0c4.398,0.641,7.445,4.641,6.805,9.039l0,0c-0.563,4-4,6.879-7.922,6.879l0,0 C263.039,81.598,262.641,81.598,262.242,81.52z"/></g><g><path style="fill:#FFFFFF;" d="M231.438,72c0-4.402,3.602-8,8-8l0,0c4.398,0,8,3.52,8.078,8l0,0c0,4.398-3.594,8-8,8l0,0 C235.039,80,231.516,76.48,231.438,72z"/></g><g><g><path style="fill:#FFFFFF;" d="M240,448c-114.695,0-208-93.309-208-208S125.305,32,240,32s208,93.309,208,208 S354.695,448,240,448z M240,48C134.133,48,48,134.133,48,240s86.133,192,192,192s192-86.133,192-192S345.867,48,240,48z"/></g></g><g><path style="fill:#FFD100;" d="M240,448c57.347,0,109.347-23.327,147.01-60.99L375.7,375.7C340.934,410.467,292.934,432,240,432 c-105.867,0-192-86.133-192-192c0-52.934,21.533-100.934,56.3-135.7L92.99,92.99C55.327,130.654,32,182.654,32,240 C32,354.691,125.305,448,240,448z"/></g><g><g><path style="fill:#FFD100;" d="M252.102,368v-15.876c29.095-2.962,52.957-16.542,64.559-35.463l-17.917-17.917 c-6.163,16.958-30.496,30.057-58.643,30.057c-32.617,0-60.18-17.586-60.18-38.398c0-6.629-5.375-12-12-12s-12,5.371-12,12 c0,31.953,30.875,57.515,72.18,61.721V368c0,6.629,5.375,12,12,12S252.102,374.629,252.102,368z"/></g><g><path style="fill:#FFD100;" d="M163.474,163.474c-4.82,7.911-7.552,16.73-7.552,26.128c0,34.988,36.977,62.398,84.18,62.398 c4.396,0,8.688,0.343,12.845,0.947l-25.936-25.936c-26.568-3.936-47.089-19.458-47.089-37.41c0-2.805,0.538-5.543,1.484-8.196 L163.474,163.474z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>
        </div>
        <a @click="checkout" ontouchstart>
          <ButtonExplode text="Checkout"/>
        </a>
        <p class="status" >{{checkoutStatus}}</p>
      </div>
    </div>
  </div>
    </transition>
  
</template>
<script>
       
import {mapState, mapGetters, mapActions} from 'vuex'
import ButtonExplode from '../elements/ButtonExplode'
import ButtonSimple from '../elements/ButtonSimple'

export default {
  name: 'ShoppingCart',
  computed: { 
    ...mapGetters({ products:'cartProducts', total:'cartTotal', currentUser : 'currentUser',}), 
    ...mapState({ checkoutStatus: 'checkoutStatus' }) 
  },
    
  methods: { 
  ...mapActions({ checkout: 'checkout', addCartItem: 'addCartItem', subtractCartItem: 'subtractCartItem'}), 
  }, 

  components : {
    ButtonExplode,
    ButtonSimple
  }
}

</script>
<style lang="css" scoped>

ul{display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;flex:10;padding-left:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:space-around}
img{width:100%;object-fit:cover;height:209px}

.quantity{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
.quantity__minus,.quantity__plus{cursor:pointer;display:block;width:34px;border-radius:3px;height:34px;color:var(--my-white);font-size:20px;margin:6px;background:var(--text-floogle);text-decoration:none;text-align:center;line-height:34px}
.quantity__minus:hover{background:var(--bg-subtract)}
.quantity__plus:hover{background:var(--bg-add)}
.coin-svg{-webkit-animation:float-coin-data-v-ee9c2650 3s ease-in-out infinite;animation:float-coin-data-v-ee9c2650 3s ease-in-out infinite;width:100%;z-index:0;align-items:center;display:inline-grid;position:relative;-webkit-filter:drop-shadow(1px 2px 3px gold) contrast(.95) grayscale(0) saturate(.85);filter:drop-shadow(0 1px 3px gold) contrast(.95) grayscale(0) saturate(.85)}
.coin-container{grid-gap:22px;margin:auto 25px;-ms-flex-align:center;height:60px;margin-top:0;grid-template-columns:40px 33px;place-content:center;display:inline-grid;position:relative;z-index:0}
.empty-cart-container{padding:90px}
.quantity__input{margin:0 14px;font-size:16px;font-family:Overpass}
.quantity__minus:link,.quantity__plus:link{color:#8184a1}
.quantity__minus:visited,.quantity__plus:visited{color:#fff}
.card-image{display:block;min-height:20rem;background:#fff center center no-repeat;background-size:cover;filter:blur(3px)}
.card-image.is-loaded{filter:none;transition:filter var(--transition-speed-primary-faster)}
.cart-detail{padding:15px}
.empty-cart{position:absolute;top:45%;left:50%;transform:translate(-50%,-45%)}

.empty-cart p{margin-bottom:30px}
.shopping-cart-items{display:flex;flex-direction:row}
.cart-checkout{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
.cart-checkout p{mix-blend-mode:multiply;margin-top:10px;margin-bottom:10px;font-size:18px;z-index:1}
.shopping-cart{position:relative}
.cart-product-card{-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:-webkit-min-content;height:-moz-min-content;height:min-content;display:inline-block;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:25px;width:47%;overflow:hidden;max-width:210px;background:var(--bg-primary);margin-bottom:25px;border-radius:2px;-webkit-box-shadow:2px 3px 4.5px .5px rgba(0,0,0,.3);box-shadow:2px 3px 4.5px .5px rgba(0,0,0,.3);-webkit-transition:-webkit-transform .25s ease-in-out,-webkit-box-shadow .25s;transition:-webkit-transform .25s ease-in-out,-webkit-box-shadow .25s;transition:transform .25s ease-in-out,box-shadow .25s;transition:transform .25s ease-in-out,box-shadow .25s,-webkit-transform .25s ease-in-out,-webkit-box-shadow .25s}
.cart-product-card:hover{transform:translateY(-.3rem) translateX(-.3rem) scale(1.0125);box-shadow:6px 6px 1.5px 0 rgba(0,0,0,.2);border-radius:2px}
.product-price{margin-bottom:5px}

@media(max-width:600px) {
  
  
  
  
  
  
  
  ul {
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    /* -webkit-box-flex: 10; */
    width: 100%;
    flex-flow: column;
    -ms-flex: 10;
    /* flex: 10; */
    padding-left: 0;
    /* -webkit-box-pack: center; */
    -ms-flex-pack: center;
  }
  
  
  
  .cart-product-card{
  display: inline-flex;
    flex-direction: row-reverse;
  
    -ms-flex-align: center;
    align-items: center;
    height: -moz-min-content;
    /* height: min-content; */
    display: flex;
    /* -webkit-box-orient: vertical; */
    /* -webkit-box-direction: normal; */
    -ms-flex-direction: column;
    /* flex-direction: column; */
    /* margin-right: 25px; */
    width: 100%;
    overflow: hidden;
    max-width: 100%;
    /* background: var(--bg-primary); */
    /* margin-bottom: 25px; */
    /* border-radius: 2px; */
    /* -webkit-box-shadow: 2px 3px 4.5px 0.5px rgba(0,0,0,.3); */
    box-shadow: 2px 2px 7px 0px rgba(0,0,0,.2);
    /* -webkit-transition: -webkit-transform .25s ease-in-out,-webkit-box-shadow .25s; */
    /* transition: -webkit-transform .25s ease-in-out,-webkit-box-shadow .25s; */
    /* transition: transform .25s ease-in-out,box-shadow .25s; */
  }
  
  .cart-product-card:hover {
    transform:translateY(-.2rem) translateX(-.2rem) scale(1);
        box-shadow: 2px 3px 8px 0px rgba(0,0,0,.2);

  }
  
  img {
    width: 85px;
    height: 80px;
    place-self: center;
    border-radius: 0px 2px 2px 0px;
}
.product-price {
  margin-bottom : 0px; 
  width: 50%;
}

.product-description {
    /* width: 100%; */
width: 50%; 
    padding: 0px 14px 0px 14px;
    /* font-size: 11px; */
    margin: 0px;
    /* font-size: 11px; */
    /* font-family: Helvetica Neue; */
    /* color: hsla(0,0%,43.1%,.773); */
    
}

.quantity {
    width: 10%;
    flex-direction: column-reverse;
}

.product-title {
  width: 50%;
}


   .quantity__minus,.quantity__plus{
border-radius: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 40px;
    height: 40px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 23px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: -webkit-pictograph;
    font-weight: 300;
    margin: 0px;
    background: none;
    color: var(--text-primary);
    text-decoration: none;
    text-align: center;
    /* line-height: 37px;
    /* line-height: 37px; */
     
     
     /* border-radius:3px;display:block;width:37px;height:37px;font-size:22px;margin:5px;background:var(--text-floogle);text-decoration:none;text-align:center;line-height:37px */
     
     } 
  
   .cart-detail{
    padding: 0px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
   }
      
   /* .cart-detail{padding:5px}  */
   /* .cart-product-card{
     
     
     width:47%;box-shadow:6px 6px 1.5px 0 rgba(0,0,0,.2);
     border-radius:2px}  */
   /* .cart-product-card:hover{transform:none}  */
   /* .quantity__minus,.quantity__plus{border-radius:3px;display:block;width:37px;height:37px;font-size:22px;margin:10px;background:var(--text-floogle);text-decoration:none;text-align:center;line-height:37px}  */
   .shopping-cart-items{flex-direction:column} 
   
   /* img{width:100%;height:180px}  */
   /* .cart-product-card{margin:0 0 20px} ul{justify-content:space-around}  */
   
   
}
   
   
@keyframes float-coin { 0%{transform:translatey(0)} 50%{transform:translatey(-3px)} 100%{transform:translatey(0)} }
</style>
