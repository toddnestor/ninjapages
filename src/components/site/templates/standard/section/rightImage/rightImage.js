var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionRightImageController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
			section_background_color: '#ffffff',
			image: 'https://herc.objects.cdn.dream.io/uploads/5692f0b86b5f6f17647ee155674e6d31/startup-2.jpg',
			tag_text: 'Rich Information',
			header_text: 'Make informed decisions with historical & real time data.',
			description_text: 'We combine immediate real time events with rich historical data to help answer the toughest questions about retention, growth, and engagement.',
			col1_header: 'Data frequency',
			col1_text: 'We poll for data on a millisecond basis. You can react to new information in seconds rather than days. <a href="#" class="text-primary">Learn more.</a>',
			col2_header: 'Reliability & uptime',
			col2_text: 'We process our data across a massively distributed network of reliable servers to ensure 99.99% uptime, always. <a href="#" class="text-primary">Learn more</a>.'
	};
});
