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

app.controller("BuilderController", function ($scope, $rootScope, $state, $stateParams, Herc, notify, $uibModal, Upload, $timeout) {
	$scope.templates = {
            'standard': [
                {
                    type: 'header',
                    options: {},
                    settings: {
                        button_text: 'go',
                        header_text: 'Analytics on demand.',
                        description: 'Stop installing bloated scripts that all track the exact same things. Install one that does everything.',
                        cta_text: 'Try it now',
                        cta_url: 'http://google.com',
                        cta_background_color: '#2595ff',
                        cta_border_color: '#0b89ff',
                        cta_font_color: '#ffffff',
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
                    options: {},
                    settings: {
                        code: 'goAnalytics "who are the latest 3 users?"\n\n{\n "Dave": {\n   "fullName": "Dave Gamache",\n   "twitterHandle": "@dhg",\n }\n "Mark": {\n   "fullName": "Mark Otto",\n   "twitterHandle": "@mdo",\n }\n "Jacob": {\n   "fullName": "Jacob Thornton",\n   "twitterHandle": "@fat",\n }\n}',
                        tag: 'Easy Development',
                        heading: 'Natural language queries make mining data easy for anyone.',
                        description: 'Rather than force everyone at your company to learn incredibly difficult terminal commands, we allow anyone to query the data with natural language to return data.',
                        button_text: 'Read our docs',
                        section_background_color: '#262F36'
                    }
                },
                {
                    type: 'features',
                    options: {},
                    settings: {
                        section_background_color: '#ffffff'
                    }
                },
                {
                    type: 'footer',
                    options: {},
                    settings: {
                        section_background_color: '#262F36'
                    }
                },
                {
                    type: 'leftImage',
                    options: {},
                    settings: {
                        section_background_color: '#ffffff'
                    }
                },
                {
                    type: 'logoStrip',
                    options: {},
                    settings: {
                        section_background_color: '#2595FF'
                    }
                },
                {
                    type: 'pricing',
                    options: {},
                    settings: {
                        section_background_color: '#F4F5F6'
                    }
                },
                {
                    type: 'quote',
                    options: {},
                    settings: {
                        section_background_color: '#ffffff'
                    }
                }
            ]
        };

    $scope.currentTemplate = 'standard';

    $scope.currentSectionOptions = [];

    $scope.setCurrentSectionOptions = function() {
        $scope.currentSectionOptions = $scope.templates[ $scope.currentTemplate ];
    }

    $scope.setCurrentSectionOptions();

    $scope.content = {
        title: '',
        permalink: '',
        theme: $scope.currentTemplate,
        sections: []
    };

    $scope.addSection = function( section ) {
        var new_section = angular.copy( section );

        $scope.content.sections.push( new_section );
    }

    $scope.save = function() {
        Herc.all('Content').post( $scope.content ).then( function( response ) {
            notify('Your content saved successfully!');
            //$state.go('site.pages');
        } );
    }

    $scope.remove = function( section ) {
        $scope.content.sections = _.without( $scope.content.sections, section );
    }

    $scope.sectionSettings = function(section, settings) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/builder/section-settings.html',
            controller: 'ModalInstanceCtrl',
            size: null,
            resolve: {
                thing: section,
                settings: settings
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.section = selectedItem
        }, function () {

        });
    }

    $scope.copy = function( section, index ) {
        var new_section = angular.copy( section );

        $scope.content.sections.splice( index, 0, new_section )
    }

    $scope.moveUp = function( section, index ) {
        $scope.remove( section );

        $scope.content.sections.splice( index - 1, 0, section )
    }

    $scope.moveDown = function( section, index ) {
        $scope.remove( section );

        $scope.content.sections.splice( index + 1, 0, section )
    }

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.$error) {
                    Upload.upload({
                        url: 'http://api.hercdev.dev/upload?api_key=a62d34e343718057b0787e1b3f1d542abcab35fe3f942d886e666fab824c',
                        data: {
                            file: file
                        }
                    }).then(function (resp) {
                        $timeout(function() {
                            $scope.log = 'file: ' +
                                resp.config.data.file.name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + $scope.log;
                        });
                    }, null, function (evt) {
                        var progressPercentage = parseInt(100.0 *
                            evt.loaded / evt.total);
                        $scope.log = 'progress: ' + progressPercentage +
                            '% ' + evt.config.data.file.name + '\n' +
                            $scope.log;
                    });
                }
            }
        }
    };
});