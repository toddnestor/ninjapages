var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site.home", {
            url: "/dashboard",
            templateUrl: "/templates/site/aaa-home/home.html",
            controller: "HomeController",
            resolve: {
              pages: function( Herc ) {
                return Herc.all('Content').getList();
              }
            }
        })
});

app.controller('HomeController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc, pages ) {
  $scope.pages = pages.reverse();
} );
