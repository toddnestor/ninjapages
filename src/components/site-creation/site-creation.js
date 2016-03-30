var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site-creation", {
            url: "/site-setup",
            templateUrl: "/templates/site-creation/site-creation.html",
            controller: "SiteCreationController"
        });
});

app.controller('SiteCreationController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {
    if( $scope.onSite() )
        $state.go( 'home' );
} );