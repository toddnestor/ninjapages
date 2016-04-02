var app = angular.module( "app" );

app.directive('hercUpload', function ($uibModal) {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {

        }
    }
} );