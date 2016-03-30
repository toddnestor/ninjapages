var app = angular.module( "app" );

app.directive('grow', function carousel($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            $(element).focus(function(){
                if ($(window).width() > 1000) {
                    $(this).animate({
                        width: 300
                    })
                }
            }).blur(function(){
                if ($(window).width() > 1000) {
                    var $this = $(this).animate({
                        width: 180
                    })
                }
            });
        }
    }
} );