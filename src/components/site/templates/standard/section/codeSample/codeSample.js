var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionCodeSampleController", function ($scope, $rootScope, $state, $stateParams, Herc, $sce) {
	$scope.section.options = $scope.section.settings || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
			code: 'goAnalytics "who are the latest 3 users?"\n\n{\n "Dave": {\n   "fullName": "Dave Gamache",\n   "twitterHandle": "@dhg",\n }\n "Mark": {\n   "fullName": "Mark Otto",\n   "twitterHandle": "@mdo",\n }\n "Jacob": {\n   "fullName": "Jacob Thornton",\n   "twitterHandle": "@fat",\n }\n}',
			tag: 'Easy Development',
			heading: 'Natural language queries make mining data easy for anyone.',
			description: 'Rather than force everyone at your company to learn incredibly difficult terminal commands, we allow anyone to query the data with natural language to return data.',
			button_text: 'Read our docs',
			section_background_color: '#262F36'
	};

	$scope.codeSample = function( code ) {
        var final_code = "";
        var line_count = 1;

        angular.forEach( code.split("\n"), function( value ) {
            final_code += ( line_count > 1 ? "\n" : '' ) + "<span>" + line_count + "</span> " + value;
            line_count++;
        } );

        return $sce.trustAsHtml( final_code );
    }
});
