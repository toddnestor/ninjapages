var app = angular.module( "app" );

app.directive('switch', function carousel($rootScope, $timeout) {
    return {
        restrict: 'E',
        require: 'ngModel',
        link: function(scope, element, attributes, ngModel) {
            scope.checkbox = 0;
            element.html( '<div class="builder"><label class="switch"><input ng-model="checkbox" type="checkbox"><span></span></label></div>' );

            scope.$watch( 'checkbox', function( newVal, oldVal ) {
                console.log('anything changing? ', newVal, oldVal );
            } );
        }
    }
} );