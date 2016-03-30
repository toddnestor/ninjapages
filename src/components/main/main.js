var app = angular.module( "app" );

app.controller('MainController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {
    $scope.setTitle = function( title ) {
        $scope.title = title;
    }

    $scope.fb_login_url = Herc.fb_login_url;

    $scope.domains = [
        'ninjapages.dev',
        'ninjapages.co'
    ];

    $scope.onSite = function() {
        var onSite = true;

        angular.forEach( $scope.domains, function( value ) {
            var regex = new RegExp( '^' + value + '$' );

            if( location.host.match( regex ) )
                onSite = false;
        } );

        return onSite;
    }
} );