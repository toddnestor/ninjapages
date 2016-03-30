var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site.home", {
            url: "/",
            templateUrl: "/templates/site/home/home.html",
            controller: "HomeController"
        })
});

app.controller('HomeController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {

    if( !$scope.onSite() )
        $state.go('site-creation');
} );