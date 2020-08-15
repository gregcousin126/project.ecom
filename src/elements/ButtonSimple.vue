<template>
    <div class="button-simple">
      <button>{{text}}</button>
    </div>
</template>
<script>
export default {
  props: ['text'],
  name: 'ButtonSimple',
};
</script>
<style>

.button-simple button {
  background: 0 0;
  border: 0;
  color: var(--blue-primary);
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none
}



.button-simple button::-moz-focus-inner {
  border: 0;
  padding: 0
}


.button-simple button {
    padding: 9px;
    font-size: 10px;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid var(--blue-primary);
    text-transform: uppercase;
    margin: 10px auto;
    -webkit-transition: var(--transition-speed-primary-faster);
    transition: var(--transition-speed-primary-faster);
    -moz-transition: var(--transition-speed-primary-faster);
    -ms-transition: var(--transition-speed-primary-faster);
    -o-transition: var(--transition-speed-primary-faster);
}

.button-simple button:hover {
  background: var(--button-hover);
  /* background: var(--button-hover); */
  color: var(--blue-primary);
  -webkit-transition: var(--transition-speed-primary-faster) all ease-in;
  transition: var(--transition-speed-primary-faster) all ease-in;
  outline: 0
}






</style>
