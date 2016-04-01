var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("builder",{
			url: "/builder",
			data: { pageTitle: 'Builder ' },
			templateUrl: "/templates/builder/builder.html",
			controller: "BuilderController"
		})
}); 

app.controller("BuilderController", function ($scope, $rootScope, $state, $stateParams, Herc, notify) {
	$scope.templates = {
            'standard': [
                {
                    type: 'header',
                    settings: {
                        button_text: 'go',
                        header_text: 'Analytics on demand.',
                        description: 'Stop installing bloated scripts that all track the exact same things. Install one that does everything.',
                        cta_text: 'Try it now',
                        menu_items: [
                            {
                                type: 'url',
                                destination: '/standard',
                                text: 'Standard'
                            },
                            {
                                type: 'url',
                                destination: '/minimal',
                                text: 'Minimal'
                            },
                            {
                                type: 'url',
                                destination: '/bold',
                                text: 'Bold'
                            }
                        ]
                    }
                },
                {
                    type: 'codeSample',
                    settings: {
                        code: 'goAnalytics "who are the latest 3 users?"\n\n{\n "Dave": {\n   "fullName": "Dave Gamache",\n   "twitterHandle": "@dhg",\n }\n "Mark": {\n   "fullName": "Mark Otto",\n   "twitterHandle": "@mdo",\n }\n "Jacob": {\n   "fullName": "Jacob Thornton",\n   "twitterHandle": "@fat",\n }\n}',
                        tag: 'Easy Development',
                        heading: 'Natural language queries make mining data easy for anyone.',
                        description: 'Rather than force everyone at your company to learn incredibly difficult terminal commands, we allow anyone to query the data with natural language to return data.',
                        button_text: 'Read our docs'
                    }
                },
                {type: 'features'},
                {type: 'footer'},
                {type: 'leftImage'},
                {type: 'logoStrip'},
                {type: 'pricing'},
                {type: 'quote'}
            ]
        };

    $scope.currentTemplate = 'standard';

    $scope.currentSectionOptions = [];

    $scope.setCurrentSectionOptions = function() {
        $scope.currentSectionOptions = $scope.templates[ $scope.currentTemplate ];
    }

    $scope.addSection = function( section ) {
        //$scope.sections.push( section );
    }

    $scope.setCurrentSectionOptions();

    $scope.content = {
        title: '',
        permalink: '',
        theme: $scope.currentTemplate,
        sections: []
    };

    $scope.save = function() {
        Herc.all('Content').post( $scope.content ).then( function( response ) {
            notify('Your content saved successfully!');
            //$state.go('site.pages');
        } );
    }
});