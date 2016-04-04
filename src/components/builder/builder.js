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

app.controller("BuilderController", function ($scope, $rootScope, $state, $stateParams, Herc, notify, $uibModal, $sce ) {
	$scope.templates = {
            'standard': [
                {
                    type: 'header',
                    name: 'Header',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/ef7b7fc4-546c-493d-a74a-8dd1f81d4810/2016-04-04_1510.png',
                    options: {
                                settings: [

                                ]
                    },
                    settings: {
                        button_text: 'go',
                        header_text: 'Analytics on demand.',
                        description: 'Stop installing bloated scripts that all track the exact same things. Install one that does everything.',
                        cta_text: 'Try it now',
                        cta_url: 'http://google.com',
                        cta_background_color: '#2595ff',
                        cta_border_color: '#0b89ff',
                        cta_font_color: '#ffffff',
                        section_background_image: 'https://herc.objects.cdn.dream.io/uploads/e315d8528b13ca0c3164dd1a9b45fc06/startup-1.jpg',
                        show_graph_overlay: true,
                        display_button: true,
                        display_header_text: true,
                        display_description: true,
                        display_cta: true,
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
                    name: 'Code Sample',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/b7f73a9f-b819-4055-bff7-d2cf99549b5c/2016-04-04_1511.png',
                    options: {
                        settings: [

                        ]
                    },
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
                    name: 'Features',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/a3371f06-cbc9-4e95-9cab-36745c0c4689/2016-04-04_1513.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#ffffff'
                    }
                },
                {
                    type: 'footer',
                    name: 'Footer',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/f5271860-978d-4004-8c02-aeb84980bd26/2016-04-04_1513.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#262F36'
                    }
                },
                {
                    type: 'leftImage',
                    name: 'Left Image',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/e8159c6f-8d7a-4320-b16a-64b8db94cc72/2016-04-04_1511.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#ffffff',
                        image: 'https://herc.objects.cdn.dream.io/uploads/5692f0b86b5f6f17647ee155674e6d31/startup-2.jpg',
                        tag_text: 'Rich Information',
                        header_text: 'Make informed decisions with historical & real time data.',
                        description_text: 'We combine immediate real time events with rich historical data to help answer the toughest questions about retention, growth, and engagement.',
                        col1_header: 'Data frequency',
                        col1_text: 'We poll for data on a millisecond basis. You can react to new information in seconds rather than days. <a href="#" class="text-primary">Learn more.</a>',
                        col2_header: 'Reliability & uptime',
                        col2_text: 'We process our data across a massively distributed network of reliable servers to ensure 99.99% uptime, always. <a href="#" class="text-primary">Learn more</a>.'
                    }
                },
                {
                    type: 'logoStrip',
                    name: 'Logo Strip',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/59b4d54e-ad52-4ec6-864e-6d22506fbc24/2016-04-04_1512.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#2595FF',
                        logos: [
                            {
                                height: null,
                                width: null,
                                'max-height': null,
                                'max-width': 218,
                                url: 'https://herc.objects.cdn.dream.io/uploads/0fc981861e5fdcf83f3fa4de71546678/startup-4.svg'
                            },
                            {
                                height: null,
                                width: null,
                                'max-height': null,
                                'max-width': 95,
                                url: 'https://herc.objects.cdn.dream.io/uploads/476ab6e32a86e185245a416402d537ee/startup-5.svg'
                            },
                            {
                                height: null,
                                width: null,
                                'max-height': null,
                                'max-width': 211,
                                url: 'https://herc.objects.cdn.dream.io/uploads/cc5e30b4b2f1a60af3782d02340819db/startup-6.svg'
                            },
                            {
                                height: null,
                                width: null,
                                'max-height': null,
                                'max-width': 193,
                                url: 'https://herc.objects.cdn.dream.io/uploads/a99826d750cf84b12969e015427dfc80/startup-7.svg'
                            },
                            {
                                height: null,
                                width: null,
                                'max-height': null,
                                'max-width': 167,
                                url: 'https://herc.objects.cdn.dream.io/uploads/7a22b9d1037c53bd06b0a599a6e9d2da/startup-8.svg'
                            }
                        ]
                    }
                },
                {
                    type: 'pricing',
                    name: 'Pricing',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/365ed855-793b-45b6-944a-63f6540f1608/2016-04-04_1513.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#F4F5F6'
                    }
                },
                {
                    type: 'quote',
                    name: 'Quote',
                    thumbnail: 'http://content.screencast.com/users/todd_nestor/folders/Jing/media/6b848822-ae09-4e12-822d-5ca47aaba0f9/2016-04-04_1512.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#ffffff',
                        image: 'https://herc.objects.cdn.dream.io/uploads/c4a057bf4e5ba552f9f6aef750bd0c54/startup-3.jpg',
                        quote_title: 'High Praise',
                        quote_description: '"Go Analytics is amazing. Decisions that used to take weeks, now only takes minutes and is available to everyone on my team."',
                        quoter: 'Cindy Smith, founder of Cool Startup'
                    }
                }
            ]
        };

    $scope.currentTemplate = 'standard';

    $scope.currentSectionOptions = [];

    $scope.safeHtml = function( text ) {
        return $sce.trustAsHtml( text );
    }

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
            $scope.content.id = response.id;
            $scope.content.permalink = response.permalink;
        } );
    }

    $scope.setPermalink = function() {
        if( !$scope.content.permalink )
            $scope.content.permalink = $scope.content.title.toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z0-9\-]/g, '' );
        else
            $scope.content.permalink = $scope.content.permalink.replace(/ /g, '-').replace(/[^a-zA-Z0-9\-]/g, '' );
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
});