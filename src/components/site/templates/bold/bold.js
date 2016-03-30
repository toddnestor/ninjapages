var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.templates.bold",{
			url: "/bold",
			data: { pageTitle: 'Site Templates Bold ' },
			templateUrl: "/templates/site/templates/bold/bold.html",
			controller: "SiteTemplatesBoldController"
		})
}); 

app.controller("SiteTemplatesBoldController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	//All your code goes here
});