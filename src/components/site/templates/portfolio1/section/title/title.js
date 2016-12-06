var app = angular.module("app");

app.controller("SiteTemplatesPortfolio1SectionTitleController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [
				{
					label: 'Overlay Color',
					key: 'overlay_color',
					type: 'color',
				},
				{
					label: 'Padding',
					key: 'padding',
					type: 'number',
				}
			]
	};

	$scope.section.settings = $scope.section.settings || {
		section_background_color: '#ffffff',
		section_background_image: '',
		title: 'Change this title',
		overlay_color: 'rgba(255,255,255,.5)',
		padding: 215
	};
});
