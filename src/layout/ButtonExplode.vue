<template>
<div class="button-explode"><button class="btn-splatter" v-on:click="makeSplatter(event)" >{{text}} <div v-for="splatter, i in splatters" v-bind:class="splatter.type" v-bind:style="splatter.style" v-bind:ref="createRef(i)" ></div></button></div>
</template>

<script>
export default {
	
	props: ['text'],
  data: function() {
    return {
      splatters: []
    }
  },
	
	methods : {
	
	},
	watch: {
    splatters: function(newData, oldData) {
      setTimeout(() => {
        this.explodeSplatter();
      }, 1);
    }
  }
}
</script>

<style lang="css">

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");


.btn-splatter {
  color: #ffffff;
  font-family: inherit;
  font-weight: bold;
  background-color: #4487ed;
  width: 12em;
  height: 4em;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  position: relative;
  border-radius: 0.9em;
  box-shadow: 0 0.6em 0.9em rgba(0, 0, 0, 0.6);
  user-select: none; /* Thanks to @SplittyDev */
  transform: translateY(-0.5em);
  transition:
    background-color 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28),
    box-shadow 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28),
    transform 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.btn-splatter:focus {
  outline: 0;
}

.btn-splatter:active {
  background-color: #2770df;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
  transform: translateY(0em) scale(0.9);
  transition:
    background-color 150ms ease-out,
    box-shadow 150ms ease-out,
    transform 150ms ease-out;
}

.splatter {
  position: absolute;
  top: 0;
  left: 0;
}

.splatter-round, .splatter-ring, .splatter-star {
  position: absolute;
}

.splatter-round {
  width: 1em;
  height: 1em;
  background-color: #1da5ff;
  border-radius: 50%;
}

.splatter-ring {
  width: 0.8em;
  height: 0.8em;
  border: solid 0.35em #0099e6;
  border-radius: 50%;
}

.splatter-star {
  width: 1.8em;
  height: 1.8em;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="%23006dd0" viewBox="0 0 24 24"%3E%3Cpath%20d%3D%22M12%2C17.27L18.18%2C21L16.54%2C13.97L22%2C9.24L14.81%2C8.62L12%2C2L9.19%2C8.62L2%2C9.24L7.45%2C13.97L5.82%2C21L12%2C17.27Z%22%3E%3C%2Fpath%3E%3C/svg%3E');
}

</style>




