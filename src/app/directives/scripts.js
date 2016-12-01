var app = angular.module( "app" );

app.directive('scripts', function($parse) {
    return {
        restrict: 'E',
        require: 'ngModel',
        link: function(scope, element, attr, ngModel) {
          scope.scripts = ngModel;
          var ranAlready = false;

          scope.$watch('scripts', function ( newVal, oldVal ) {
              if( newVal.$$rawModelValue ) {
                if( !ranAlready ) {
                  eval(newVal.$$rawModelValue);
                  ranAlready = true;
                }
              }
          });
        }
    }
} );
