var app = angular.module("app");

app.controller("SiteTemplatesPortfolio1SectionMenuController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
		section_background_color: '#ffffff',
		section_background_image: '',
		logo_url: '#',
		logo_text: 'Logo goes here',
		logo_image: '',
		logo_type: 'text'
	}
});
