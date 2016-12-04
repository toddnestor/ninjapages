var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site",{
			controller: "SiteController",
      template: '<ui-view></ui-view>'
		})
});

app.controller("SiteController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.logout = Herc.logout;
});
