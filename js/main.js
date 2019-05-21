(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();


    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2018/07/20',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> дней</div> '
      +'<div class="time-entry hours"><span>%H</span> часов</div> '
      +'<div class="time-entry minutes"><span>%M</span> минут</div> '
      +'<div class="time-entry seconds"><span>%S</span> секунд</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    });
    $('.scroll-btn').onePageNav();

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 2000);
        return false;
      });

      $(".scrollTo").on('click',function(event){
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $("#schedule").offset().top - 60
        }, 2000);
        return false;
      });
      
       $(".navbar-brand").on('click',function(event){
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $("#header-wrap").offset().top - 60
        }, 2000);
        return false;
      });

      $(".orderSubmitForPay").on('click',function(event){
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $("#orderSubmitForPay").offset().top - 60
        }, 2000);
        return false;
      });



      /* Slider
      ========================================================*/
      $('.slider-youtube').slick({
        infinite: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
         responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

      ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("yandex-map", {
                center: [55.758458, 37.626340],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([55.758458, 37.626340], {
                hintContent: 'Lextorium',
                balloonContent: 'Lextorium'
            });
            
            myMap.behaviors.disable('scrollZoom').enable('ruler');
            myMap.geoObjects.add(myPlacemark);
        }

         // Форма обратной связи

         $("#sendbutton").on("click", function(){
         		 $("#contactForm").submit(function(event) {
		        event.preventDefault();
		        $.ajax({
		            type: 'POST',
		            data: $(this).serialize(),
		            success: function(){
		                $.magnificPopup.open({
		                  items: {
		            src: '#pop-up'
		          },
		          type: 'inline',
		          removalDelay: 3500
		        },0);
		        $.magnificPopup.close();
		            },
		            error: function() {                    
		                $.magnificPopup.open({
		                items: {
		                    src: '#error'
		                },
		                type: 'inline',
		                removalDelay: 3500
		            },0);
		            $.magnificPopup.close();
		            }
		        }).done(function() {
		            $("#contactForm").trigger("reset");
		        });
		        return false;       
		    });
         });


    $( 'a.scroll-btn' ).click( function(){
        if( location.pathname.replace( /^\// , '' ) == this.pathname.replace( /^\// , '' ) && location.hostname == this.hostname ){
            var target = $( this.hash );
            target = target.length ? target : $( '[name='+this.hash.slice( 1 )+']' );
            if( target.length ){
                $( 'html,body' ).stop().animate({
                    scrollTop:target.offset().top + -50
                } , 600 );
            }
        }
      });

    

      


  });  

}(jQuery));