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

app.controller("BuilderController", function ($scope, $rootScope, $state, $stateParams, Herc, notify, $uibModal, $sce, $timeout ) {
	$scope.templates = {
            'standard': [
                {
                    type: 'header',
                    name: 'Header',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png',
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
                                text: 'Standard',
                                color: '#ffffff',
                                'new-tab': false
                            },
                            {
                                type: 'url',
                                destination: '/minimal',
                                text: 'Minimal',
                                color: '#ffffff',
                                'new-tab': false
                            },
                            {
                                type: 'url',
                                destination: '/bold',
                                text: 'Bold',
                                color: '#ffffff',
                                'new-tab': false
                            }
                        ]
                    }
                },
                {
                    type: 'codeSample',
                    name: 'Code Sample',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/7fa4045191c63e0e5589f21edaf92052/code-sample.png',
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
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/6587d4b13cf6feb11299c0b2613e970d/features.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#ffffff',
                        tagline: 'Inside the Machine',
                        headline: 'It\'s not hard to see how we make your life easier every day.',
                        features: [
                            {
                                image: 'https://herc.objects.cdn.dream.io/uploads/b00ed107c2680d2b22f6a9eab27e241f/startup-9.svg',
                                name: '24/7 support.',
                                description: 'We\'re always here for you no matter what time of day.'
                            },
                            {
                                image: 'https://herc.objects.cdn.dream.io/uploads/d756545bbc7d99f1d674b9336951ecb0/startup-10.svg',
                                name: 'E-commerce.',
                                description: 'We automatically handle all sales analytics.'
                            },
                            {
                                image: 'https://herc.objects.cdn.dream.io/uploads/18c557de784c864b03f8edd6799446e7/startup-11.svg',
                                name: 'Turnaround.',
                                description: 'Our data analysis is distributed, so it processes in seconds.'
                            },
                            {
                                image: 'https://herc.objects.cdn.dream.io/uploads/046d2d53322ee4926cb4865af9745223/startup-12.svg',
                                name: 'Rich calculations.',
                                description: 'Limitless ways to splice and dice your data.'
                            },
                            {
                                image: 'https://herc.objects.cdn.dream.io/uploads/3889ef8c5acb3317098581ec9631dc5b/startup-13.svg',
                                name: 'Mobile apps.',
                                description: 'iOS and Android apps available for monitoring.'
                            },
                            {
                                image: 'https://herc.objects.cdn.dream.io/uploads/7d15184add2d161a19d9b58c8c6019ff/startup-14.svg',
                                name: 'Secure connections.',
                                description: 'Every single request is routed through HTTPS.'
                            }
                        ]
                    }
                },
                {
                    type: 'footer',
                    name: 'Footer',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/58d86cbf5f3551d42f8cca4f2a7cc8ff/footer.png',
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
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/29ecf3fe291127857be5d167bd6e6760/left-image.png',
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
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/9a7ee6cdf5d20d1428e97dba266ffc55/logo-strip.png',
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
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/167c50ded8dc379e64a0c7a47087ae4e/pricing.png',
                    options: {
                        settings: [

                        ]
                    },
                    settings: {
                        section_background_color: '#F4F5F6',
                        prices_per_row: 3,
                        tagline: 'Business Talk',
                        headline: 'No plans. We just bump your plan whenever you need it.',
                        prices: [
                            {
                                background_color: 'transparent',
                                name: 'Personal',
                                currency_symbol: '$',
                                price: '9',
                                subtext: '/MO',
                                description: 'Plenty of processing power for any personal projects, big or small.',
                                features: [
                                    {
                                        name: '10k',
                                        description: 'monthly requests'
                                    },
                                    {
                                        name: '9am-5pm',
                                        description: 'technical support'
                                    },
                                    {
                                        name: 'Public',
                                        description: 'API access'
                                    }
                                ],
                                button_text: 'Start a personal account',
                                button_font_color: '#ffffff',
                                button_font_size: 18,
                                button_background_color: '#2595ff',
                                button_border_color: '#0b89ff'
                            },
                            {
                                background_color: 'transparent',
                                name: 'Business',
                                currency_symbol: '$',
                                price: '49',
                                subtext: '/MO',
                                description: 'The perfect sized plan for small businesses to get started.',
                                features: [
                                    {
                                        name: '100k',
                                        description: 'monthly requests'
                                    },
                                    {
                                        name: '24/7',
                                        description: 'technical support'
                                    },
                                    {
                                        name: 'Public',
                                        description: 'API access'
                                    }
                                ],
                                button_text: 'Start a business account',
                                button_font_color: '#ffffff',
                                button_font_size: 18,
                                button_background_color: '#2595ff',
                                button_border_color: '#0b89ff'
                            },
                            {
                                background_color: 'transparent',
                                name: 'Corporate',
                                currency_symbol: '$',
                                price: '119',
                                subtext: '/MO',
                                description: 'An unlimited plan that will scale infinitely to any size project.',
                                features: [
                                    {
                                        name: 'Unlimited',
                                        description: 'monthly requests'
                                    },
                                    {
                                        name: '24/7',
                                        description: 'technical support'
                                    },
                                    {
                                        name: 'Public & Private',
                                        description: 'API access'
                                    }
                                ],
                                button_text: 'Start a corporate account',
                                button_font_color: '#ffffff',
                                button_font_size: 18,
                                button_background_color: '#2595ff',
                                button_border_color: '#0b89ff'
                            }
                        ]
                    }
                },
                {
                    type: 'quote',
                    name: 'Quote',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/e2877acc91282cb0196f31bd8616c8ba/quote.png',
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

        $scope.scrollToBottom();
    }

    $scope.scrollToBottom = function() {
        $timeout( function() {
            $('html, body').animate({
                scrollTop: $('.site-templates-standard').offset().top + $('.site-templates-standard').height()
            }, 1000);
        }, 100 )
    }

    $scope.save = function() {
        Herc.all('Content').post( $scope.content ).then( function( response ) {
            notify('Your content saved successfully!');
            $scope.content.id = response.id;
            $scope.content.permalink = response.permalink;
        } );
    }

    $scope.settingsModal = function( model, settings ) {
        if( !settings )
            settings = {};

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/builder/settings.html',
            controller: 'ModalInstanceCtrl',
            size: null,
            resolve: {
                thing: model,
                settings: settings
            }
        });

        modalInstance.result.then(function (selectedItem) {

        }, function () {

        });
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