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
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
                },
                {
                    type: 'codeSample',
                    name: 'Code Sample',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/7fa4045191c63e0e5589f21edaf92052/code-sample.png'
                },
                {
                    type: 'features',
                    name: 'Features',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/6587d4b13cf6feb11299c0b2613e970d/features.png'
                },
                {
                    type: 'footer',
                    name: 'Footer',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/58d86cbf5f3551d42f8cca4f2a7cc8ff/footer.png'
                },
                {
                    type: 'leftImage',
                    name: 'Left Image',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/29ecf3fe291127857be5d167bd6e6760/left-image.png'
                },
                {
                    type: 'rightImage',
                    name: 'Right Image',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/51833f9ad767e77d58216df7410aa99b/right-image.png'
                },
                {
                    type: 'logoStrip',
                    name: 'Logo Strip',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/9a7ee6cdf5d20d1428e97dba266ffc55/logo-strip.png'
                },
                {
                    type: 'pricing',
                    name: 'Pricing',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/167c50ded8dc379e64a0c7a47087ae4e/pricing.png'
                },
                {
                    type: 'quote',
                    name: 'Quote',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/e2877acc91282cb0196f31bd8616c8ba/quote.png'
                },
                {
                    type: 'reverse-quote',
                    name: 'Reverse Quote',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/26f48fb22e5ee491d8cfecea12eea7af/reverse-quote.png'
                }
            ],
						'bold': [
							{
									type: 'header',
									name: 'Header',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
							},
							{
									type: 'imageGrid',
									name: 'Image Grid',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
							},
							{
									type: 'textRight',
									name: 'Text Right',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
							},
							{
									type: 'video',
									name: 'Video',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
							},
							{
									type: 'register',
									name: 'Register',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
							},
							{
									type: 'pricing',
									name: 'Pricing',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
							},
							{
									type: 'footer',
									name: 'Footer',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d8718bd61190709d82976c53abcccef8/header.png'
							},
						]
        };

    $scope.currentTemplate = 'bold';

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

		$scope.updateTheme = function() {
			$scope.content.theme = $scope.currentTemplate;
			$scope.setCurrentSectionOptions();
		}

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
