var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.templates",{
			templateUrl: "/templates/site/templates/templates.html",
			controller: "SiteTemplatesController"
		})
}); 

app.controller("SiteTemplatesController", function ($scope, $rootScope, $state, $stateParams, Herc) {

});