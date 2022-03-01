/* ===================================================================
 * Main JS
 *
 * ------------------------------------------------------------------- */

$(function() {


    /* loading animation
     * ------------------------------------------------------ */
     var h = $(window).height();
      
         $('.js-loader-bg ,.js-loader').css('display','block');
         $('.js-wrap').css('display','none');
     });
      
     $(window).load(function () { //全ての読み込みが完了したら実行
         $('.js-loader-bg').delay(900).fadeOut(800);
         $('.js-loader').delay(600).fadeOut(300);
         $('.js-wrap').css('display', 'block');
     });
      
     //10秒たったら強制的にロード画面を非表示
     $(function(){
         setTimeout('stopload()',10000);
     });
      
     function stopload(){
         $('.js-wrap').css('display','block');
         $('.js-loader-bg').delay(900).fadeOut(800);
         $('.js-loader').delay(600).fadeOut(300);
     }
 
    /* drower menu
     * ------------------------------------------------------ */
 
     var touch = false;
     $('#humberger').on('click touchstart',function(e){
         switch (e.type) {
             case 'touchstart':
                 drawerToggle();
                 touch = true;
                 return false;
             break;
             case 'click':
                 if(!touch)
                      drawerToggle();
                 return false;
             break;
          }
         function drawerToggle(){
             $('body').toggleClass('drawer-opened');
             touch = false;
         }
     })
     $('#overlay').on('click touchstart',function(){
         $('body').removeClass('drawer-opened');
     });
 
    /* header navigation animation
     * ------------------------------------------------------ */
 
     var $win = $(window),
       $header = $('header'),
       animationClass = 'is-animation';
 
   $win.on('load scroll', function() {
     var value = $(this).scrollTop();
     if ( value > 86 ) {
       $header.addClass(animationClass);
       $('#humberger').addClass(animationClass);
     } else {
       $header.removeClass(animationClass);
       $('#humberger').removeClass(animationClass);
     }
 
 
    /* parallax efect
     * ------------------------------------------------------ */
 
     // 'use strict';
     
     //     let scrollPosi = 0;
  
     //     $(window).scroll(function () {
     //             scrollPosi = $(document).scrollTop();
         
     //     $('.js-parallax').stop(true, true).animate({
     //                     'background-position-y': -scrollPosi / 3 + 'px'
     //             }, 100);
     //     });
 
     
 });
 