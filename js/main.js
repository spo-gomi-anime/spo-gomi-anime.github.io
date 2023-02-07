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


    /* Swiper ( Introduction )
     * ------------------------------------------------------ */

    const swiper = new Swiper(".js-swiper-ss", {
    spaceBetween: 16,
    slidesPerView: 5
    });

    const swiper2 = new Swiper(".js-swiper-ss2", {
    thumbs: {
        swiper: swiper
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
    });

    /* Swiper ( Characters )
     * ------------------------------------------------------ */

    const swiper3 = new Swiper(".js-chara-ss", {
    spaceBetween: 16,
    slidesPerView: 9
    });

    const swiper4 = new Swiper(".js-chara-ss2", {
    thumbs: {
        swiper: swiper3
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
    });


    /* Current Navigation
     * ------------------------------------------------------ */

    $(function () {
        var set = 80;//ウインドウ上部からどれぐらいの位置で変化させるか
        var boxTop = new Array;
        var current = -1;
        //各要素の位置
        //position-nowは場所を取得したい対象の要素に付ける
        $('.position-now').each(function (i) {
          boxTop[i] = $(this).offset().top;
        });
        //最初の要素にclass="positiion-now"をつける
        changeBox(0);
        //スクロールした時の処理
        $(window).scroll(function () {
          scrollPosition = $(window).scrollTop();
          for (var i = boxTop.length - 1; i >= 0; i--) {
            if ($(window).scrollTop() > boxTop[i] - set) {
              changeBox(i);
              break;
            }
          };
        });
        //ナビの処理
        function changeBox(secNum) {
          if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
            $('.c-aside-nav-item a').removeClass('link-current');

            //位置によって個別に処理をしたい場合　
            if (current == 0) {
              $('#top_link_js').addClass('link-current');
              // 現在地がsection1の場合の処理
            } else if (current == 1) {
              $('#introduction_link_js').addClass('link-current');
              // 現在地がsection2の場合の処理
            } else if (current == 2) {
              // 現在地がsection3の場合の処理
              $('#characters_link_js').addClass('link-current');
            } else if (current == 3) {
              // 現在地がsection4の場合の処理
              $('#staff_link_js').addClass('link-current');
            } else if (current == 4) {
            // 現在地がsection5の場合の処理
              $('#streaming_link_js').addClass('link-current');
            }

          }
        };
      });

 });
