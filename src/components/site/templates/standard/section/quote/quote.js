var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionQuoteController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
			section_background_color: '#ffffff',
			image: 'https://herc.objects.cdn.dream.io/uploads/c4a057bf4e5ba552f9f6aef750bd0c54/startup-3.jpg',
			quote_title: 'High Praise',
			quote_description: '"Go Analytics is amazing. Decisions that used to take weeks, now only takes minutes and is available to everyone on my team."',
			quoter: 'Cindy Smith, founder of Cool Startup'
	};
	
});
