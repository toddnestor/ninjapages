var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site.faq", {
            url: "/ninja/faq",
            templateUrl: "/templates/site/aaa-faq/faq.html",
            controller: "FAQController"
        })
});

app.controller('FAQController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {

} );
