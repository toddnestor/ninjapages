var app = angular.module( "app" );

app.directive('isotope', function($parse) {
    return {
        link: function(scope, element, attr) {
          var $container = $(element).find('.portfolioContainer');

          $container.isotope({
  						filter: '*',
  						animationOptions: {
  								duration: 750,
  								easing: 'linear',
  								queue: false
  						}
  				});

          $(element).on('click', 'a[data-filter]', function(){
  						$('.portfolioFilter .current').removeClass('current');
  						$(this).addClass('current');
              console.log('what we filtering?', $(this).attr('data-filter') );

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
  				})
        }
    }
} );
