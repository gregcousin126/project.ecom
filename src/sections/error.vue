<template>

<div class="error-page-container">
  <div class="on-ground-lights"><div class="window-light"><div class="cat"><div class="head"></div></div></div><div class="window-light"></div></div>
  <div class="table right"><div class="table-shadow"><div class="window-light"></div></div></div>
  <div class="bed">
    <div class="bed-shadow"><div class="window-light"></div><div class="window-light"></div></div>
    <div class="bed-head"></div>
    <div class="ground-cloth">
      <div class="window-light"></div>
      <div class="window-light"></div>
      <div class="under-pillow-shadows"><div class="head-shadow"></div><div class="neck-shadow"></div></div>
      <div class="pillow"><div class="window-light"></div><div class="pillow-shadows"><div class="ear-shadow"></div><div class="head-shadow"></div></div></div>
      <div class="boy">
        <div class="shoulder"></div>
        <div class="neck"></div>
        <div class="ears"></div>
        <div class="head"><div class="nose"></div><div class="eyebrows"><div class="eyebrow"></div><div class="eyebrow"></div></div><div class="eyes"></div><div class="mouth"></div></div>
        <div class="hair"><div class="part"></div><div class="part keen"></div><div class="part keen"></div><div class="part keen"></div><div class="part keen"></div><div class="part keen"></div><div class="part"></div><div class="part"></div></div>
      </div>
    </div>
    <div class="quilt">
      <div class="top"><div class="window-light"></div><div class="window-light"></div><div class="window-light"></div><div class="window-light"></div></div>
      <div class="bottom"><div class="window-light"></div><div class="window-light"></div></div>
    </div>
  </div>
  <div class="shoes"><div class="shoe"></div><div class="shoe"></div></div>
  <div class="table left"><div class="lamp"><div class="bulb"></div></div><div class="phone"></div></div>
</div> 
</template>

<script>



export default {};
</script>

<style lang="css">

/* Options */
/* body {
  background-color: #423852;
  overflow: hidden;
}

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
} */

.empty-cart-svg {
  width: 100%;
  height: 100%;
  visibility: hidden;
}

.selectionDot,
#menuShadow,
#dimIconGroup > path,
.menuHit {
  pointer-events: none;
}

.menuItem {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Man */

.error-page-container { width: 0px; height: 0px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(.6); } 
.error-page-container .bed { background: #332944; width: 365px; height: 580px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 10px; box-shadow: inset 0px 30px #262038, -50px 7px 0px 10px #262038; } 
.error-page-container .bed .bed-shadow { width: 100%; height: 100%; position: absolute; top: 0; left: 0; overflow: hidden; } 
.error-page-container .bed .bed-shadow .window-light { background: #5a5b89; right: -40px; top: 109px; height: 139px; } 
.error-page-container .bed .bed-shadow .window-light:nth-child(2) { top: 261px; } 
.error-page-container .bed .bed-head { width: 400px; height: 25px; background: #3c3557; border-radius: 5px; position: absolute; top: -20px; left: 50%; transform: translateX(-50%); } 
.error-page-container .bed .ground-cloth { width: 340px; height: 210px; background: #565881; position: absolute; top: 20px; left: 50%; transform: translateX(-50%); border-radius: 10px 10px 0 0; overflow: hidden; } 
.error-page-container .bed .ground-cloth:after { content: " "; width: 100%; height: 15px; background: #4b4d73; position: absolute; bottom: 0; left: 0; } 
.window-light { position: absolute; width: 235px; height: 145px; right: 30px; bottom: -35px; border-radius: 5px; background: #ff766c; transform: skewY(-10deg); } 
.error-page-container .bed .ground-cloth .window-light:first-child { right: -216px; top: 56px; } 
.error-page-container .bed .ground-cloth .under-pillow-shadows { width: 100px; height: 65px; position: absolute; bottom: 0; left: 110px; overflow: hidden; } 
.error-page-container .bed .ground-cloth .under-pillow-shadows .head-shadow { width: 92px; height: 90px; border-radius: 0 0 46px 46px; position: absolute; bottom: 31px; left: 2px; background: #4b4d76; } 
.error-page-container .bed .ground-cloth .under-pillow-shadows .neck-shadow { width: 22px; height: 35px; position: absolute; bottom: 7px; left: 36px; background: #4b4d76; } 
.error-page-container .bed .ground-cloth .pillow { width: 230px; height: 110px; position: absolute; border-radius: 8px; top: 25px; left: 50%; transform: translateX(-50%); background: #453e5f; box-shadow: 0px 10px 0px 4px #4b4d76; overflow: hidden; } 
.error-page-container .bed .ground-cloth .pillow .window-light { right: -25px; top: 83px; } 
.error-page-container .bed .ground-cloth .pillow .pillow-shadows { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px; box-shadow: inset 0px -5px 0px #453e5f; overflow: hidden; } 
.error-page-container .bed .ground-cloth .pillow .pillow-shadows .ear-shadow { background: #352a4a; border-radius: 50%; width: 40px; height: 32px; position: absolute; bottom: -8px; left: 46px; } 
.error-page-container .bed .ground-cloth .pillow .pillow-shadows .head-shadow { background: #352a4a; border-radius: 50%; width: 71px; height: 90px; position: absolute; bottom: -6px; left: 54px; transform: rotate(10deg); } 
.error-page-container .bed .ground-cloth .boy { position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); z-index: 99; } 
.error-page-container .bed .ground-cloth .boy .shoulder { width: 110px; height: 110px; background: #473e5b; border-radius: 40px; position: absolute; left: 50%; bottom: -62px; transform: scaleY(0.5) translateX(-50%) rotate(-45deg); } 
.error-page-container .bed .ground-cloth .boy .neck { width: 22px; height: 35px; position: absolute; left: 50%; bottom: 15px; transform: translateX(-50%); background: #3e385a; border-radius: 50px / 20px; box-shadow: inset 0px -20px 0px #b34c39; } 
.error-page-container .bed .ground-cloth .boy .ears { position: absolute; left: 50%; bottom: 107px; transform: translateX(-50%); } 
.error-page-container .bed .ground-cloth .boy .ears:after, .error-page-container .bed .ground-cloth .boy .ears:before { content: " "; position: absolute; left: -60px; width: 18px; height: 18px; background: #373461; border: 5px solid #b34c39; border-radius: 50%; } 
.error-page-container .bed .ground-cloth .boy .ears:after { left: 32px; } 
.error-page-container .bed .ground-cloth .boy .head { width: 92px; height: 90px; border-radius: 0 0 46px 46px; position: absolute; left: 50%; bottom: 43px; transform: translateX(-50%); background: #e36559; box-shadow: inset 0px -7px 0px #b34c39; } 
.error-page-container .bed .ground-cloth .boy .head .nose { width: 13px; height: 22px; background: #b54b3e; border-radius: 10px; position: absolute; animation: yawnForNose 5s infinite ease-in-out; left: 50%; transform: translateX(-50%); } 
.error-page-container .bed .ground-cloth .boy .head .nose:after, .error-page-container .bed .ground-cloth .boy .head .nose:before { content: " "; width: 10px; height: 8px; background: #b54b3e; border-radius: 50%; position: absolute; left: -25px; top: 22px; } 
.error-page-container .bed .ground-cloth .boy .head .nose:after { left: 28px; } 
.error-page-container .bed .ground-cloth .boy .head .eyebrows { position: absolute; bottom: 67px; left: 50%; transform: translateX(-50%); perspective: 50px; } 
.error-page-container .bed .ground-cloth .boy .head .eyebrows .eyebrow { width: 30px; height: 9px; border-radius: 30% 50% 30% 70%; background: #342b4a; position: absolute; left: -38px; top: -8px; transform: rotateY(-38deg) scaleX(1.3) rotate(-2deg); } 
.error-page-container .bed .ground-cloth .boy .head .eyebrows .eyebrow:nth-child(2) { left: 4px; transform: rotateY(117deg) scaleX(0.8) rotate(180deg) rotateY(180deg); } 
.error-page-container .bed .ground-cloth .boy .head .eyes { position: absolute; left: 50%; transform: translateX(-50%); animation: yawnForEyes 5s infinite ease-in-out; } 
.error-page-container .bed .ground-cloth .boy .head .eyes:after, .error-page-container .bed .ground-cloth .boy .head .eyes:before { content: " "; width: 9px; height: 9px; border: 2.5px solid #342b4a; border-top-color: transparent; border-right-color: transparent; transform: rotate(-45deg); border-radius: 50%; position: absolute; left: -28px; top: 0; } 
.error-page-container .bed .ground-cloth .boy .head .eyes:after { left: 13px; } 
.error-page-container .bed .ground-cloth .boy .head .mouth { height: 12px; animation: yawnForMouth 5s infinite ease-in-out; position: absolute; left: 50%; transform: translateX(-50%); background: #342b4a; } 
.error-page-container .bed .ground-cloth .boy .head .mouth:after { content: " "; position: absolute; top: 6px; width: 20px; height: 17px; border-radius: 50%; box-shadow: inset 0px -10px 0px -5px #b54b3e; left: 50%; transform: translateX(-50%); } 
.error-page-container .bed .ground-cloth .boy .hair { position: absolute; bottom: 130px; left: 50%; transform: translateX(-50%); } 
.error-page-container .bed .ground-cloth .boy .hair .part { position: absolute; border-radius: 50%; background: #342b4a; } 
.error-page-container .bed .ground-cloth .boy .hair .part.keen:after, .error-page-container .bed .ground-cloth .boy .hair .part.keen:before { content: " "; width: 50px; height: 25px; border-radius: 25px 25px 0 0; background: #342b4a; position: absolute; top: 0; left: 0; transform: scaleY(0.7) skew(28deg); } 
.error-page-container .bed .ground-cloth .boy .hair .part.keen:after { border-radius: 0 0 25px 25px; transform: scaleY(0.7) skew(-28deg); top: 17px; } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(1) { width: 85px; height: 40px; left: -41px; bottom: -4px; } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(2) { left: 43px; bottom: 30px; transform: rotate(69deg) scale(0.85) scaleY(0.8); } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(3) { left: -20px; bottom: 15px; transform: rotate(107deg) scale(0.75) scaleY(0.9); } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(4) { left: -29px; bottom: 17px; transform: rotate(18deg) scale(0.9) scaleY(0.5); } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(5) { left: -25px; bottom: 33px; transform: rotate(-26deg) scale(0.9) scaleY(0.8); } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(6) { left: -47px; bottom: 21px; transform: rotate(-48deg) scale(0.9) scaleY(0.8); } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(7) { left: -54px; bottom: -28px; width: 21px; height: 10px; border-radius: 30px; transform: rotate(85deg) skew(-24deg); } 
.error-page-container .bed .ground-cloth .boy .hair .part:nth-child(8) { left: 32px; bottom: -26px; width: 23px; height: 10px; border-radius: 30px; transform: rotate(95deg) skew(24deg); } 
.error-page-container .bed .quilt { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 340px; height: 350px; background: #332944; } 
.error-page-container .bed .quilt .top { width: 354px; height: 75px; border-radius: 8px; background: #453e5f; position: absolute; top: 0; left: -7px; overflow: hidden; } 
.error-page-container .bed .quilt .top .window-light:nth-child(1) { right: 37px; bottom: 46px; } 
.error-page-container .bed .quilt .top .window-light:nth-child(2) { right: 37px; bottom: -113px; } 
.error-page-container .bed .quilt .top .window-light:nth-child(3) { right: -209px; bottom: 91px; } 
.error-page-container .bed .quilt .top .window-light:nth-child(4) { right: -209px; bottom: -68px; } 
.error-page-container .bed .quilt .bottom { width: 100%; height: 252px; border-radius: 0 0 8px 8px; background: #453e5f; position: absolute; bottom: 8px; left: 0; overflow: hidden; box-shadow: 22.5px -58px 0px -52.5px #565891; } 
.error-page-container .bed .quilt .bottom .window-light:nth-child(1) { right: 30px; bottom: 162px; } 
.error-page-container .bed .quilt .bottom .window-light:nth-child(2) { right: -216px; bottom: 207px; } 

.error-page-container .shoes { width: 70px; height: 68px; position: absolute; top: 0; left: -260px; } 
.error-page-container .shoes .shoe { position: absolute; width: 40px; height: 32px; background: #453e5f; border-radius: 20px 8px 8px 20px; box-shadow: -10px 5px 0px #261f3e; } 
.error-page-container .shoes .shoe:before { content: " "; position: absolute; right: -31px; width: 27px; height: 27px; top: 3px; border-radius: 2px 20px 20px 2px; background: #342b4a; } 
.error-page-container .shoes .shoe:nth-child(1) { top: 0; } 
.error-page-container .shoes .shoe:nth-child(2) { bottom: 0; } 

.error-page-container .table { width: 140px; height: 143px; background: #3c3557; border-radius: 7px; position: absolute; box-shadow: -30px 12px #262038}
.error-page-container .table:before { content: " "; width: 120px; height: 12px; background: #312b47; border-radius: 0 0 5px 5px; position: absolute; bottom: -12px; left: 10px; box-shadow: -30px 12px #262038}
.error-page-container .table:after { content: " "; width: 30px; height: 15px; border-radius: 0 0 15px 15px; position: absolute; background: #403659; left: 50%; transform: translateX(-50%); bottom: -27px; box-shadow: -30px 12px #262038}
.error-page-container .table.left { left: -340px; top: -260px; } 
.error-page-container .table.left .lamp { background: #565881; width: 130px; height: 130px; border-radius: 50%; position: absolute; top: -25px; left: -22px; } 
.error-page-container .table.left .lamp .bulb { position: absolute; width: 23px; height: 23px; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 16px solid #202038; } 
.error-page-container .table.left .lamp .bulb:after, .error-page-container .table.left .lamp .bulb:before { content: " "; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #202038; width: 3px; height: 25px; } 
.error-page-container .table.left .lamp .bulb:after { transform: translate(-50%, -50%) rotate(90deg); } 
.error-page-container .table.left .phone { position: absolute; width: 25px; height: 45px; bottom: 15px; right: 15px; border-radius: 3px; background: #091434; transform: rotate(35deg); box-shadow: -1px 2px #322b4c; } 
.error-page-container .table.left .phone:before { content: " "; position: absolute; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; bottom: 3px; border-radius: 50%; background: #3f508e; } 
.error-page-container .table.left .phone:after { content: " "; position: absolute; left: 50%; transform: translateX(-50%); width: 19px; height: 30px; top: 6px; animation: phoneLCD 20s infinite -3s ease-out; } 

.error-page-container .table.right { left: 198px; top: -260px; } 
.error-page-container .table.right .table-shadow { position: absolute; width: 100%; height: 100%; top: 0; left: 0; border-radius: 7px; overflow: hidden; } 
.error-page-container .table.right .table-shadow .window-light { right: -68px; bottom: -100px; background: #5a5b89; } 

.error-page-container .on-ground-lights .window-light { right: -390px; bottom: 35px; } 
.error-page-container .on-ground-lights .window-light:nth-child(2) { bottom: -125px; } 
.error-page-container .on-ground-lights .window-light .cat { background: #342b4a; width: 45px; height: 90px; position: absolute; right: 0; top: 50%; margin-top: 10px; transform: translateY(-50%); border-radius: 50px 0 0 30px; } 
.error-page-container .on-ground-lights .window-light .cat .head { background: #342b4a; position: absolute; width: 50px; height: 36px; bottom: 0; right: 16px; animation: catHeadShake 10s infinite ease-out; border-radius: 50% / 79px; } 
.error-page-container .on-ground-lights .window-light .cat .head:after, .error-page-container .on-ground-lights .window-light .cat .head:before { content: " "; background: #342b4a; width: 32px; height: 17px; transform: skewX(60deg); position: absolute; top: 0; left: 0; } 
.error-page-container .on-ground-lights .window-light .cat .head:after { transform: skewX(-60deg); top: 19px; } 

@keyframes yawnForMouth { 0%, 50%, 100% { bottom: 22px; width: 24px; border-radius: 5px 5px 12px 12px; } 75% { bottom: 18px; width: 12px; border-radius: 12px; } }
@keyframes yawnForNose { 0%, 50%, 100% { bottom: 45px; } 75% { bottom: 42px; } }
@keyframes yawnForEyes { 0%, 50%, 100% { bottom: 66px; } 75% { bottom: 65px; } }
@keyframes catHeadShake { 0%, 67%, 100% { transform: rotate(0deg); } 70%, 97% { transform: rotate(-10deg); } }
@keyframes phoneLCD { 0%, 70%, 100% { background: black; } 72%, 93% { background: white; } }

@media(max-width: 700px) { .error-page-container { width: 0px; height: 0px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(.5); } }
@media(max-width: 600px) { .error-page-container { width: 0px; height: 0px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(.4); } }

</style>



