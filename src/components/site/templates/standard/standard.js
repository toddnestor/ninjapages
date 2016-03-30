var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.templates.standard",{
			url: "/standard",
			data: { pageTitle: 'Site Templates Standard ' },
			templateUrl: "/templates/site/templates/standard/standard.html",
			controller: "SiteTemplatesStandardController"
		})
}); 

app.controller("SiteTemplatesStandardController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.sections = [
        'header',
        'leftImage',
        'logoStrip',
        'codeSample',
        'quote',
        'codeSample',
        'logoStrip',
        'codeSample',
        'features',
        'logoStrip',
        'features',
        'header',
        'pricing',
        'logoStrip',
        'pricing',
        'footer'
    ];
});