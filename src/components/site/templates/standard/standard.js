var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.templates.standard",{
			url: "/standard",
			data: { pageTitle: 'Site Templates Standard ' },
			templateUrl: "/templates/site/templates/standard/standard.html"
		})
}); 

app.controller("SiteTemplatesStandardController", function ($scope, $rootScope, $state, $stateParams, Herc) {
    $scope.content = $scope.getContent();
});