<template>


<div>
<div class="product">
  <div class="product__header">
    <div class="product__menu"><i class="fa fa-align-center product__menu-icon"></i><span class="product__menu-text">Menu</span></div>
    <h1 class="product__heading">Shoes</h1>
    <ul class="tool">
      <li class="tool__item"><i class="far fa-heart"></i></li>
      <li class="tool__item"><i class="fas fa-search"></i></li>
      <li class="tool__item"><i class="fas fa-shopping-bag"></i></li>
    </ul>
  </div>
  <div class="product__nav">
    <ul class="category">
      <li class="category__item"><a class="category__link" href="javascript:void(0)">Brands</a></li>
      <li class="category__item"><a class="category__link" href="javascript:void(0)">Footwear</a></li>
      <li class="category__item"><a class="category__link" href="javascript:void(0)">Clothing</a></li>
    </ul>
    <div class="social"><span class="social__text">Follow us</span>
      <ul class="social__share">
        <li class="social__share-item"><a class="social__share-link" href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
        <li class="social__share-item"><a class="social__share-link" href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
  </div>
  <div class="product__slider">
    <ul class="slider">
      <li class="slider__item">
        <h2 class="slider__title">Congo african product</h2>
        <div class="slider__img"><img src="https://preview.ibb.co/m4VkQd/congo.png" alt="Congo african product"/>
          <div class="slider__price">$79.00</div>
        </div>
        <button class="btn btn--secondary">Add to cart</button>
      </li>
    </ul>
    <ul class="slider__arrow">
      <li class="slider__arrow-item is-active"><span>Next </span><span>&rarr;</span></li>
      <li class="slider__arrow-item"><span>Prev </span><span>&larr;</span></li>
    </ul>
  </div>
</div>
    
    
  </div>
</template>

<script>
export default {}
</script>
<style lang="css">



@import url("https://fonts.googleapis.com/css?family=Montserrat:400,100, 300,700");
@import url("https://fonts.googleapis.com/css?family=Lobster");

.slider__img img { display: block; max-width: 100%; } 
.btn { border: 0; cursor: pointer; padding: 1.5rem; min-width: 20rem; color: white; text-transform: uppercase; box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.3); outline: none; font-family: "Montserrat"; -webkit-transform: translateY(-5px); transform: translateY(-5px); transition: .2s; } 
.btn:active { -webkit-transform: translateY(0); transform: translateY(0); box-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.3); } 
.btn--secondary { background-color: #F3A74C; } 

.product { background-color: #BA426C; width: 95%; min-height: calc(100vh - 10rem); margin: 5rem auto; box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2); overflow: hidden; position: relative; z-index: 10; } 
.product:before { content: "JOGGER"; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); font-size: 18vw; font-weight: 700; z-index: -1; color: black; opacity: .025; } 
.product__header { display: flex; flex-direction: row; justify-content: space-between; align-items: center; } 
.product__heading { font-size: 2.5rem; color: white; font-family: "Lobster", sans-serif; } 
.product__menu { cursor: pointer; padding: 2rem 3rem; background-color: #60395C; color: white; text-transform: uppercase; display: flex; flex-direction: row; justify-content: center; align-items: center; } 
.product__menu-text { margin-left: 1rem; } 
.product__menu-icon { font-size: 1.6rem; } 
.product__nav { background-color: white; padding: 4rem 3rem; height: calc(100% - 5.6rem); position: absolute; top: 5.6rem; left: 0; display: flex; flex-direction: row; justify-content: space-between; align-items: center; -webkit-writing-mode: vertical-lr; -ms-writing-mode: tb-lr; writing-mode: vertical-lr; z-index: 20; } 
@media only screen and (max-width: 52em){ .product__nav { display: none; } }
.product__nav .share__link i { -webkit-transform-origin: 50% 50%; transform-origin: 50% 50%; -webkit-transform: rotate(90deg); transform: rotate(90deg); } 
.product__nav.is-active { display: flex; } 
.product__slider { width: 100%; min-height: 100vh; position: relative; } 

.slider__img { margin-top: 2rem; margin-bottom: 2rem; } 
.slider__item { min-height: 100vh; padding: 4rem 1.5rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between; align-items: center; } 
.slider__title, .slider__price { font-size: 4rem; color: white; text-transform: uppercase; font-weight: 700; } 
.slider__arrow { position: absolute; top: 50%; right: 0; -webkit-transform: translateY(-50%); transform: translateY(-50%); background-color: rgba(255, 255, 255, 0.1); box-shadow: -0.5rem 0 4rem rgba(0, 0, 0, 0.2); } 
.slider__arrow-item { cursor: pointer; padding: 3rem 2rem; text-transform: uppercase; color: white; text-align: center; } 
.slider__arrow-item span { display: block; margin-top: .25rem; margin-bottom: .25rem; } 
.slider__arrow-item.is-active { background-color: #F3A74C; } 

.category { display: flex; flex-direction: row; justify-content: center; align-items: center; } 
.category__item:not(:last-child) { margin-bottom: 2rem; } 
.category__link { color: black; text-transform: uppercase; text-decoration: none; font-weight: 700; transition: .2s; } 
.category__link:hover { color: #BA426C; } 

.social { display: flex; flex-direction: row; justify-content: space-between; align-items: center; } 
.social__text { text-transform: uppercase; font-weight: 700; margin-bottom: 2rem; } 
.social__share { display: flex; flex-direction: row; justify-content: center; align-items: center; } 
.social__share-item:not(:last-child) { margin-bottom: 1rem; } 
.social__share-link { color: black; } 
.social__share-link i { -webkit-transform: rotate(90deg); transform: rotate(90deg); } 

.tool { padding: 0 3rem; display: flex; flex-direction: row; justify-content: center; align-items: center; } 
.tool__item { color: white; } 
.tool__item:not(:last-child) { margin-right: 1.5rem; } 

</style>
