var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site.home", {
            url: "/dashboard",
            templateUrl: "/templates/site/aaa-home/home.html",
            controller: "HomeController"
        })
});

app.controller('HomeController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {
  
} );
