var app = angular.module( "app" );

app.directive('isotope', function($parse, $timeout) {
    return {
        link: function(scope, element, attr, ngModel) {
          $timeout(function(){
            var $container = $(element).find('.portfolioContainer');

            $container.isotope({
              filter: '*',
              layoutMode:'masonry',
              animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
              }
            });

            $(element).on('click', 'a[data-filter]', function(){
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
          }, 500);
        }
    }
} );
