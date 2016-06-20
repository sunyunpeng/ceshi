/**
 * Created by Administrator on 2016/6/9.
 */
var box=document.getElementById('box')
 var PMheight=window.screen.height ;
var PMwidth=window.screen.width ;
console.log(PMheight)
var a=PMheight/100;
var b=PMwidth/100;
console.log(a)
animate.setCss(box,'height',a)
animate.setCss(box,'width',b)
console.log(box.style.height)


var mySwiper = new Swiper ('.swiper-container', {
 direction: 'vertical',
 loop: true,



 // 如果需要分页器
 pagination: '.swiper-pagination',

 // 如果需要前进后退按钮
 nextButton: '.swiper-button-next',
 prevButton: '.swiper-button-prev',

 // 如果需要滚动条
 effect : 'cube',
 cube: {
  slideShadows: true,
  shadow: true,
  shadowOffset: 100,
  shadowScale: 0.6,


  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
   swiperAnimateCache(swiper); //隐藏动画元素
   swiperAnimate(swiper); //初始化完成开始动画
  },
  onSlideChangeEnd: function(swiper){
   swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  }  //初始化完成开始动画
 }
})



function TList() {
 max=TList.arguments.length;
 for (i=0; i<max; i++)
  this[i]=TList.arguments[i];
}

tl = new TList(  "    传统的HTML语言不能开发交互式的动态网页，而JavaScript却能很好的做到这一点。JavaScript是一门相当简单易学的网络化编程语言，通过把她和HTML语言相互结合起来，能够实现实时的动态网页特效，这给网页浏览者在浏览网页的同时也提供了某些乐趣。"
);

var x = 0; pos = 0;
var l = tl[0].length;
function TextOutput() {
 document.TyperText.tickfield.value = tl[x].substring(0, pos) + "I";
 if(pos++ == l) {
  pos = 0;
  setTimeout("TextOutput()", 1000);
  if(++x == max) x = 0;
  l = tl[x].length;
 } else
  setTimeout("TextOutput()", 50);
}







