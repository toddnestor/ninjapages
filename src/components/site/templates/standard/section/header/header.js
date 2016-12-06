var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionHeaderController", function ($scope, $rootScope, $state, $stateParams, Herc, $uibModal) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
			button_text: 'go',
			header_text: 'Analytics on demand.',
			description: 'Stop installing bloated scripts that all track the exact same things. Install one that does everything.',
			cta_text: 'Try it now',
			cta_url: 'http://google.com',
			cta_background_color: '#2595ff',
			cta_border_color: '#0b89ff',
			cta_font_color: '#ffffff',
			cta_scripts: '',
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
	};

	$scope.removeMenuItem = function( ctrl ) {
    $scope.section.settings.menu_items = _.without( $scope.section.settings.menu_items, ctrl.$modelValue );
  }

    $scope.addMenuItem = function() {
        var color = '#ffffff';

        if( $scope.section.settings.menu_items && $scope.section.settings.menu_items.length > 0 )
        {
            color = $scope.section.settings.menu_items[ $scope.section.settings.menu_items.length - 1].color;
        }

        var menu_item = {
            type: 'url',
            destination: '/',
            text: 'MENU ITEM',
            color: color,
            'new-tab': false
        }

        $scope.section.settings.menu_items.push( menu_item );
    }

    $scope.editCta = function(size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/site/templates/standard/section/header/cta.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                thing: $scope.section,
                settings: {}
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.section = selectedItem
        }, function () {

        });
    }

    $scope.menuItemSettings = function( ctrl ) {
        var settings = {
            title: 'Menu Item Settings',
            settings: [
                {
                    label: 'Url',
                    key: 'destination',
                    type: 'text'
                },
                {
                    label: 'Font Color',
                    key: 'color',
                    type: 'color'
                },
                {
                    label: 'Open in new tab',
                    key: 'new-tab',
                    type: 'switch'
                }
            ]
        }

        $scope.settingsModal( ctrl.$modelValue, settings );
    }

		$scope.graphImgSettings = function( ctrl ) {
        var settings = {
            title: 'Graph Image Settings',
            settings: [
                {
                    label: 'Url',
                    key: 'something',
                    type: 'image'
                }
            ]
        }

        $scope.settingsModal( ctrl.$modelValue, settings );
    }

    $scope.hideGraphImg = function() {
        $scope.section.settings.show_graph_overlay = false;
    }

    $scope.showGraphImg = function() {
        $scope.section.settings.show_graph_overlay = true;
    }

    $scope.toggleDisplayButton = function() {
        $scope.section.settings.display_button = !$scope.section.settings.display_button;
    }

    $scope.toggleDisplayHeader = function() {
        $scope.section.settings.display_header_text = !$scope.section.settings.display_header_text;
    }

    $scope.toggleDisplayDescription = function() {
        $scope.section.settings.display_description = !$scope.section.settings.display_description;
    }

    $scope.toggleDisplayCta = function() {
        $scope.section.settings.display_cta = !$scope.section.settings.display_cta;
    }

		$scope.onCtaClick = function() {
			eval($scope.section.settings.cta_scripts);
		}
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, thing, settings) {

    $scope.thing = thing;
    $scope.settings = settings;

    $scope.ok = function () {
        $uibModalInstance.close( $scope.thing );
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
