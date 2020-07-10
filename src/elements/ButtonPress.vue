<template>
  <div>
    <!-- <link href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css" /> -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" /> -->
    <!-- <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" /> -->
    <div class="button-cart" >
      <span>{{text}}</span>
    </div>
  </div>
</template>
<script>

export default {
  props :['text'],
  name: 'ButtonPress',
};
</script>
<style scoped>

.button-cart {
    display: inline-block;
    margin: 0px auto;
    -webkit-border-radius: 3px;
    -webkit-box-shadow: var(--button-boxshadow-passive-primary);
    -webkit-transition: -webkit-box-shadow 0.2s ease-in-out;
}

.button-cart span {
  background: #9bc2f5;
  color: #f0f0f0;
  border: 3px solid #a1c6f74d;
  -webkit-border-radius: 3px;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  display: inline-block;
  padding: 1px 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  font-size: var(--button-font-primary);
}

.button-cart span:hover {
  color: (--bg-button);
  cursor: pointer;
}
.button-cart:active {
-webkit-box-shadow: var(--button-boxshadow-active-primary);

}
.button-cart:active span {
  -webkit-transform: translate(0, 5px);
}
@media(max-width: 650px) {
  .button-cart span {

  padding: 0px 2px;
  
}
}
</style>
