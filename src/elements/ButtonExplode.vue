<template>
  <div class="button-explode">
    <button id="exploding-button" class="btn-splatter" v-on:click="makeSplatter($event)" >{{text}}
      <div v-for="splatter, i in splatters" v-bind:class="splatter.type" v-bind:style="splatter.style" v-bind:ref="createRef(i)" ></div>
    </button>
  </div>
</template>

<script>

import { TweenLite, TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap";

export default {
  props: ['text'],
  name : 'ButtonExplode',
	  data: function() {
      return { splatters: [] }
    },
  
  methods: {
  createRef: function(i) { return 'splatter-' + i; }, getSizeEm: function(s) {
    if (s === 0) { return (1 / 2) + 'em';} 
    else if (s === 1) { return (1.5 / 2) + 'em';} 
    else if (s === 2) { return (1.8 / 2) + 'em';} 
    else { return 0;}
  }, 

  createToXPos: function(tb, w, h, s) {
    let positionStyle = {style: {}};
    let randomPosition = (Math.floor(Math.random() * w));
    let fixedPosition = ((tb === 0) ? h : 0);
    positionStyle.style.top = 'calc(' + fixedPosition + 'px - ' + s + ')';
    positionStyle.style.left = 'calc(' + randomPosition + 'px - ' + s + ')';
    return positionStyle;
  },

  createToYPos: function(lr, w, h, s) {
    let positionStyle = {style: {}};
    let randomPosition = (Math.floor(Math.random() * h));
    let fixedPosition = ((lr === 0) ? w : 0);
    positionStyle.style.left = 'calc(' + fixedPosition + 'px - ' + s + ')';
    positionStyle.style.top = 'calc(' + randomPosition + 'px - ' + s + ')';
    return positionStyle;
  }, 

  createsplatter: function(el, count, types, w, h) {
    for (let i = 0; i < count; i++) {
      let type = Math.floor(Math.random() * 3);
      let xOrY = Math.round(Math.random());
      let tblr = Math.round(Math.random());
      let splt = null;
      let sz = Math.random() + 0.5;
      if (xOrY === 0) { splt = this.createToXPos(tblr, w, h, this.getSizeEm(type));} 
      else { splt = this.createToYPos(tblr, w, h, this.getSizeEm(type));}
      splt.type = types[type];
      splt.scale = sz;
      splt.style.display = 'none';
      splt.style.transform = 'scale(' + sz + ')';
      if (splt !== null) { this.splatters.push(splt); }
    }
  }, 

  explodeSplatter: function() {
    for (var i = 0; i < this.splatters.length; i++) {
      if (this.splatters[i].animationEnd === true) { continue; }
      if (typeof this.splatters[i].moving === 'undefined') {
        let el = this.$refs['splatter-' + i];
        let an = Math.floor(Math.random() * 359) + 1;
        this.splatters[i].style.display = 'block';
        this.splatters[i].moving = true;
        let psY = (Math.sin(an) * 3) + 'em';
        let psX = (Math.cos(an) * 3) + 'em';
        let scl = this.splatters[i].scale;
        TweenLite.to(el, 0.8, {transform: 'translate(' + psX + ', ' + psY + ') rotate(720deg) scale(0)'}).eventCallback('onComplete', () => {
          if (typeof el.dataset == 'undefined') {return} 
          else {el.dataset.animationEnd = true;}
        });
      }
    }
  }, 

  makeSplatter: function(e) {
    let el = e.target;
    let count = Math.floor(Math.random() * 4) + 5;
    let types = ['splatter-round', 'splatter-ring', 'splatter-star'];
    let w = el.clientWidth;
    let h = el.clientHeight;
    this.createsplatter(el, count, types, w, h);
  },
}, 

	watch: {
    splatters: function(newData, oldData) {
      setTimeout(() => {
        this.explodeSplatter();
      }, 1);
    }
  },
}
</script>

<style>

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700);
/* .button-explode{padding:20px} */
.btn-splatter{ 
  /* color: #fff;font-family: inherit;font-weight: 700;background-color: #4487ed;width: 10em;height: 3.5em;border: 0; */
  
  color: #fff;
    font-family: inherit;
    font-weight: 700;
    background-color: #4487ed;
    width: 100%;
    height: 4em;
    font-size: ;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    position: relative;
    border-radius: 2px;
 box-shadow: 0 0.3em 0.4em rgba(0,0,0,.2);-moz-user-select: none;-ms-user-select: none;user-select: none;-webkit-transform: translateY(-.5em);transform: translateY(-.5em);-webkit-transition: background-color .3s cubic-bezier(.18,.89,.32,1.28),-webkit-box-shadow .3s cubic-bezier(.18,.89,.32,1.28),-webkit-transform .3s cubic-bezier(.18,.89,.32,1.28);transition: background-color .3s cubic-bezier(.18,.89,.32,1.28),-webkit-box-shadow .3s cubic-bezier(.18,.89,.32,1.28),-webkit-transform .3s cubic-bezier(.18,.89,.32,1.28);transition: background-color .3s cubic-bezier(.18,.89,.32,1.28),box-shadow .3s cubic-bezier(.18,.89,.32,1.28),transform .3s cubic-bezier(.18,.89,.32,1.28);transition: background-color .3s cubic-bezier(.18,.89,.32,1.28),box-shadow .3s cubic-bezier(.18,.89,.32,1.28),transform .3s cubic-bezier(.18,.89,.32,1.28),-webkit-box-shadow .3s cubic-bezier(.18,.89,.32,1.28),-webkit-transform .3s cubic-bezier(.18,.89,.32,1.28);

}
.btn-splatter:focus{outline:0}
.btn-splatter:active{background-color:#2770df;box-shadow:0 0 0 rgba(0,0,0,.5);transform:translateY(0) scale(.9);transition:background-color 150ms ease-out,box-shadow 150ms ease-out,transform 150ms ease-out}
.splatter{position:absolute;top:0;left:0}
.splatter-ring,.splatter-round,.splatter-star{position:absolute}
.splatter-round{width:1em;height:1em;background-color:#1da5ff;border-radius:50%}
.splatter-ring{width:.8em;height:.8em;border:solid .35em #0099e6;border-radius:50%}
.splatter-star{width:1.8em;height:1.8em;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="%23006dd0" viewBox="0 0 24 24"%3E%3Cpath%20d%3D%22M12%2C17.27L18.18%2C21L16.54%2C13.97L22%2C9.24L14.81%2C8.62L12%2C2L9.19%2C8.62L2%2C9.24L7.45%2C13.97L5.82%2C21L12%2C17.27Z%22%3E%3C%2Fpath%3E%3C/svg%3E')}
</style>