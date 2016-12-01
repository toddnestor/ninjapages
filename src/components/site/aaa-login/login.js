var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site.login", {
            url: "/ninja/login",
            templateUrl: "/templates/site/aaa-login/login.html",
            controller: "LoginController"
        })
});

app.controller('LoginController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc ) {
  $scope.user = {
    email: '',
    password: ''
  }

  $scope.login = function() {
    Herc.logInWithCredentials( $scope.user.email, $scope.user.password, function(response){
      $state.go('site.home');
    }, function(response) {

    })
  }
} );
