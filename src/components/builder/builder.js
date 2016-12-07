var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("builder",{
			url: "/builder/:id",
			data: { pageTitle: 'Builder ' },
			templateUrl: "/templates/builder/builder.html",
			controller: "BuilderController",
			resolve: {
				content: function( $stateParams, Herc, $rootScope ) {
					if( $stateParams.id.match(/^[0-9]+$/) ) {
						return Herc.one('Content', $stateParams.id).get();
					} else {
						return {
							title: '',
							permalink: '',
							theme: $stateParams.id,
							sections: [],
							field_custom_styles: "",
							field_head_scripts: "",
							field_footer_scripts: ""
						};
					}
				},
				clone: function() {
					return false;
				}
			}
		})
});

app.config(function($stateProvider){
	$stateProvider
		.state("builder2",{
			url: "/builder/:id/clone",
			data: { pageTitle: 'Builder ' },
			templateUrl: "/templates/builder/builder.html",
			controller: "BuilderController",
			resolve: {
				content: function( $stateParams, Herc, $rootScope ) {
					if( $stateParams.id.match(/^[0-9]+$/) ) {
						return Herc.one('Content', $stateParams.id).get();
					} else {
						return {
							title: '',
							permalink: '',
							theme: $stateParams.id,
							sections: [],
							field_custom_styles: "",
							field_head_scripts: "",
							field_footer_scripts: ""
						};
					}
				},
				clone: function() {
					return true;
				}
			}
		})
});

app.controller("BuilderController", function ($scope, $rootScope, $state, $stateParams, Herc, notify, $uibModal, $sce, $timeout, content, clone ) {
	if( !Herc.is_logged_in ) {
    $state.go('site.login');
  }


	$scope.logout = Herc.logout;

	$scope.content = content;

	$scope.brIfy = function(text) {
		return text.replace(/\n/g, "<br />");
	}

	if( clone ) {
		delete $scope.content.id;
	}

	if( $scope.content.meta_data ) {
		angular.forEach($scope.content.meta_data, function(unused, key) {
			$scope.content['field_' + key] = $scope.content.meta_data[key];
		});
	}

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
                    type: 'form',
                    name: 'Form',
                    thumbnail: 'https://herc.objects.cdn.dream.io/uploads/d34d371595af4a6f3bfeb425fe1850f8/2016-12-01_0606.png'
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
						],
						portfolio1: [
							{
									type: 'menu',
									name: 'Menu',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/886435535c2ad20b1ab15c0fe1505a2f/menu.png'
							},
							{
									type: 'title',
									name: 'Title',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/98d952a4d5bc5d7206e05c2cad31c542/title.png'
							},
							{
									type: 'projects',
									name: 'Projects',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/dd06fb82e10b1b60472e44c495a97340/projects.png'
							},
							{
									type: 'cta',
									name: 'Call To Action',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/11e904ddc08ccd17ae3f9c1ec32f4eb9/cta.png'
							},
							{
								type: 'project-detail',
								name: 'Project Detail',
								thumbnail: 'https://herc.objects.cdn.dream.io/uploads/b8f94999207fc0dadf8af9001a627c99/project-detail.png'
							},
							{
									type: 'footer',
									name: 'Footer',
									thumbnail: 'https://herc.objects.cdn.dream.io/uploads/a1e08ccefb657523bd30c5498fb154a2/footer.png'
							}
						]
        };

    $scope.currentTemplate = $scope.content.theme;

    $scope.currentSectionOptions = [];

    $scope.safeHtml = function( text ) {
        return $sce.trustAsHtml( text );
    }

    $scope.setCurrentSectionOptions = function() {
        $scope.currentSectionOptions = $scope.templates[ $scope.currentTemplate ];
    }

    $scope.setCurrentSectionOptions();

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
                scrollTop: $('.main-builder-area').offset().top + $('.main-builder-area').height()
            }, 1000);
        }, 100 )
    }

    $scope.save = function() {
			if( $scope.content.id ) {
				$scope.content.put().then( function( response ) {
					notify('Your content saved successfully!');
					$scope.content.permalink = response.permalink;
				})
			} else {
				Herc.all('Content').post( $scope.content ).then( function( response ) {
					notify('Your content saved successfully!');
					$scope.content.id = response.id;
					$scope.content.permalink = response.permalink;

					Herc.restangularizeElement('', $scope.content, 'Content');
					window.history.replaceState({}, "Builder", '/builder/' + $scope.content.id );
				} );
			}
    }

    $scope.settingsModal = function( model, settings ) {
        if( !settings )
            settings = {};

				if( typeof settings === "function" )
					settings = settings();

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

		$scope.settings = function( settings ) {
			return function( ctrl ) {
				$scope.settingsModal( ctrl.$modelValue, settings );
			}
    }

		$scope.removeItem = function(parent, key, item) {
			return function() {
				parent[key] = _.without(parent[key], item);
			}
		}

		$scope.pageSettings = function() {
        var settings = {
            title: 'Page Settings',
            settings: [
							{
                  label: 'Custom Styles',
                  key: 'field_custom_styles',
                  type: 'textarea'
              },
              {
                  label: 'Footer Scripts',
                  key: 'field_footer_scripts',
                  type: 'textarea'
              }
            ]
        }

        $scope.settingsModal( $scope.content, settings );
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
