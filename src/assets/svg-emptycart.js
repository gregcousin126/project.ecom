
import  { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax, Circ } from 'gsap';
// import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
// import from "gsap/TweenMax";
window.onload = function () { 

var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  dotPos = {
    x: 0,
    y: 304
  },
  allMenus = selectAll('.menuItem'),
  allMenuHits = selectAll('.menuHit'),
  allMenuPosArray = [],
  oldId = 0,
  currentId = 1,
  iconObj = []

TweenMax.set('svg', {
  visibility: 'visible'
})

function setUI() {
  for (var i = 0; i < allMenus.length; i++) {
    var menu = allMenus[i];
    menu.setAttribute('menuId', i);
    menu.onclick = onMenuClick;
    allMenuPosArray.push({
      x: Number(select('#menuDot' + i).getAttribute('cx')),
      y: Number(select('#menuDot' + i).getAttribute('cy'))
    })
    var icon = selectAll('#dimIconGroup path')[i];
    var fill = selectAll('.selectionDot')[i].getAttribute('fill');
    console.log(fill)
    iconObj.push({
      icon: icon,
      fill: fill
    })
  }

  onMenuClick({
    currentTarget: allMenus[0]
  })
}

function onMenuClick(e) {

  oldId = currentId;

  if (oldId == Number(e.currentTarget.getAttribute('menuId'))) {
    return
  }
  currentId = (e) ? Number(e.currentTarget.getAttribute('menuId')) : currentId;

  if (e) {
    TweenMax.from(e.currentTarget, 1, {
      //scale:0.39,
      transformOrigin: '50% 50%'
    })
    TweenMax.fromTo(allMenuHits[currentId], 1, {
        alpha: 0.3,
        scale: 1
      }, {
        alpha: 0,
        scale: 0.85,
        transformOrigin: '50% 50%'
      })
      /*     TweenMax.fromTo(iconObj[oldId].icon, 1, {
            fill:iconObj[oldId].fill
          },{
            fill:'#9387A9',
            ease:Power2.easeIn
          })  */
  }

  //animates the masked, coloured selection dots
  var tl = new TimelineMax();
  tl.to('.selectionDot', 0.5, {
      scale: 0.6,
      transformOrigin: '50% 50%',
      ease: Power2.easeIn
    })
    .to('.selectionDot', 0.5, {
      x: allMenuPosArray[currentId].x,
      //ease:Elastic.easeOut.config(0.6, 0.8)
      ease: Circ.easeInOut
    }, '-=0.25')
    .to('.selectionDot', 0.9, {
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Elastic.easeOut.config(0.6, 0.8)
    }, '-=0.25')

  //turns the pointer on and off

  TweenMax.staggerTo(allMenus, 0, {
    cycle: {

      cursor: function(i) {

        return (i == currentId) ? 'auto' : 'pointer'
      }
    }
  }, 0)

  TweenMax.staggerTo(selectAll('#dimIconGroup path'), 0.6, {
    cycle: {
      fill: function(i) {

        return (i == currentId) ? '#FFF' : '#9387A9'
      },
      scale: function(i) {

        return (i == currentId) ? 1.2 : 0.8
      },
      duration: function(i) {

        return (i == currentId) ? 1.4 : 0.2
      },
      ease: function(i) {

        return (i == currentId) ? Power4.easeInOut : Linear.easeNone
      }
    },
    transformOrigin: '50% 50%'
  }, 0)
}

setUI();
TweenMax.globalTimeScale(1.2)

}