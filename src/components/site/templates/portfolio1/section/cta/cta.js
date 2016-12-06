var app = angular.module("app");

app.controller("SiteTemplatesPortfolio1SectionCtaController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
		section_background_color: '#f1f1f1',
		section_background_image: '',
		text: "Need a Similar Project?",
		button_text: "LET US KNOW",
		button_url: '/',
		new_tab: false,
		show_button: true
	};

	$scope.hideButton = function() {
		$scope.section.settings.show_button = false;
	}

	$scope.buttonSettings = {
		title: 'Button Settings',
		settings: [
			{
				label: 'Url',
				key: 'button_url',
				type: 'text'
			},
			{
				label: 'Open in new tab',
				key: 'new_tab',
				type: 'switch'
			}
		]
	}
});
