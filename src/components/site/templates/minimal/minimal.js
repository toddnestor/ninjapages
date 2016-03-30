var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.templates.minimal",{
			url: "/minimal",
			data: { pageTitle: 'Site Templates Minimal ' },
			templateUrl: "/templates/site/templates/minimal/minimal.html",
			controller: "SiteTemplatesMinimalController"
		})
}); 

app.controller("SiteTemplatesMinimalController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	//All your code goes here
});