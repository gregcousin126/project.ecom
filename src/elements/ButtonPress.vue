<template>
  <div>
    <div class="button-cart"><span>{{text}}</span></div>
  </div>
</template>
<script>

export default {
  props :['text'],
  name: 'ButtonPress',
};

</script>
<style scoped>
.button-cart{display:inline-block;margin:0 auto;-webkit-border-radius:1px;-webkit-box-shadow:var(--button-boxshadow-passive-primary);-webkit-transition:-webkit-box-shadow .2s ease-in-out}
.button-cart span{
background: var(--button-boxshadow-backround);
color: #f0f0f0;
border: 3px solid var(--button-boxshadow-backround);
/* border: 3px solid #a1c6f74d; */
-webkit-border-radius: 1px;
-webkit-transition: -webkit-transform .2s ease-in-out;
display: -webkit-box;
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
display: -ms-flexbox;
/* width: 108px; */
display: inline-grid;
padding: 1px 23px;
/* padding: 1px 5px; */
word-spacing: -.5px;
text-transform: uppercase;
font-family: inherit;
font-weight: 700;
font-size: var(--button-font-primary);
place-content: center;
  }
.button-cart span:hover{color:(--bg-button);cursor:pointer}
.button-cart:active{-webkit-box-shadow:var(--button-boxshadow-active-primary)}
.button-cart:active span{-webkit-transform:translate(0,5px)}

/*  */

/* @media(max-width: 1710px) { .button-cart span{padding:1px 8px;} }
@media(max-width: 1100px) { .button-cart span{padding:1px 13px;} }
@media(max-width: 990px) { .button-cart span{padding:1px 4px;} }
@media(max-width: 650px) { .button-cart span{padding:1px 0px;} }
@media(max-width: 550px) { .button-cart span{padding:2px 20px;} }
@media(max-width: 510px) { .button-cart span{padding:2px 10px;} }
@media(max-width: 470px) { .button-cart span{padding:2px 7px;} }
@media(max-width: 430px) { .button-cart span{padding:2px 5px;} }
@media(max-width: 390px) { .button-cart span{padding:2px 2px;} }
@media(max-width: 370px) { .button-cart span{padding:6px 45px;} }
@media(max-width: 360px) { .button-cart span{padding:6px 40px;} }
@media(max-width: 340px) { .button-cart span{padding:6px 35px;} }
@media(max-width: 320px) { .button-cart span{padding:6px 30px;} }
@media(max-width: 290px) { .button-cart span{padding:6px 15px;} } */
</style>
