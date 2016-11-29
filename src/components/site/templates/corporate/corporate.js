var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.templates.corporate",{
			data: { pageTitle: 'Site Templates Corporate ' },
			templateUrl: "/templates/site/templates/corporate/corporate.html",
			controller: "SiteTemplatesCorporateController"
		})
}); 

app.controller("SiteTemplatesCorporateController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	//All your code goes here
});