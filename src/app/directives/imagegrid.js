var app = angular.module( "app" );

app.directive('imagegrid', function carousel($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            $(element).imageGrid();
        }
    }
} );