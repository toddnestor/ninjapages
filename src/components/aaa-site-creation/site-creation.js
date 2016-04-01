var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site-creation", {
            url: "/site-setup",
            templateUrl: "/templates/aaa-site-creation/site-creation.html",
            controller: "SiteCreationController"
        });
});

app.controller('SiteCreationController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {
    if( $scope.onSite() )
        $state.go( 'home' );

    $scope.new_account = {
        email: '',
        password: '',
        subdomain: ''
    };

    $scope.save = function() {
        Herc.all('Site').post( $scope.new_account).then( function( response ) {
            location.href = 'http://' + response.subdomain + '.' + location.host + '?access_token=' + response.access_token;
        } );
    }
} );