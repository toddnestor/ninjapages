/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
;(function ($) {
    'use strict'; // use strict to start


    $(window).load(function() {

        /* ---------------------------------------------
         # pre-loader
         --------------------------------------------- */
        (function () {
            $('.st-preloader-wave').fadeOut();
            $('#st-preloader').delay(200).fadeOut('slow').remove();
        }());


        /*--------------------------------------------------------------
         # Portfolio Tow
         --------------------------------------------------------------*/
        (function () {
            var $container = $('.portfolioContainerTwo');
            $container.isotope({
                filter: '*',
                layoutMode:'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.portfolioFilter a').click(function(){
                $('.portfolioFilter .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }());

    });


    /*--------------------------------------------------------------
     # Video Post
     --------------------------------------------------------------*/

    (function () {
        $('.video-post').magnificPopup({type:'iframe'});
    }());


    /*--------------------------------------------------------------
     # Clients Logo
     --------------------------------------------------------------*/

    (function () {
        $('.clients-logo').owlCarousel({
            items : 5,
            navigation : false,
            autoPlay: false,
            autoHeight: false,
            pagination : false
        });
    }());


    /*--------------------------------------------------------------
     # Post Slider
     --------------------------------------------------------------*/

    (function () {
        $('.post-slider').owlCarousel({
            singleItem : true,
            navigation : true,
            navigationText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'],
            autoPlay: true,
            autoHeight: false,
            pagination : false
        });
    }());


    /*--------------------------------------------------------------
     # Menu
     --------------------------------------------------------------*/

    (function () {
        $('.main-menu').slicknav({
            prependTo:'.menu-mobile',
            label:''
        })
    }());



})(jQuery);
