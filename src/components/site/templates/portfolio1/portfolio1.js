var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.templates.portfolio1",{
			url: "/portfolio1",
			data: { pageTitle: 'Site Templates Minimal Portfolio ' },
			templateUrl: "/templates/site/templates/portfolio1/portfolio1.html"
		})
});

app.controller("SiteTemplatesPortfolio1Controller", function ($scope, $rootScope, $state, $stateParams, Herc) {
    $scope.content = $scope.getContent();

		
});
