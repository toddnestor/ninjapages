var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site.login", {
            url: "/login",
            templateUrl: "/templates/site/aaa-login/login.html",
            controller: "FAQController"
        })
});

app.controller('LoginController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {

} );
