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
        });
    }

    $scope.createSiteFunction = function() {
      $('body').on('click','a',function(e){
        e.preventDefault();
        $.ajax({
          method: 'post',
          url: 'https://api.hercdev.io/Site?api_key=a62d34e343718057b0787e1b3f1d542abcab35fe3f942d886e666fab824c',
          data: {
            email: 'todd.nestor@gmail.com',
            password: 'hotties2',
            subdomain: 'thisisagoodtest'
          },
          success: function(response) {
            location.href = 'http://' + response.subdomain + '.ninjapages.' + location.host.split('.').pop() + '?access_token=' + response.access_token;
          }
        });
      });
    }
} );
