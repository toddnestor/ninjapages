var app = angular.module("app");

app.controller("SiteTemplatesPortfolio1SectionMenuController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
		section_background_color: '#ffffff',
		section_background_image: '',
		logo_url: '#',
		logo_text: 'Logo goes here',
		logo_image: '',
		logo_type: 'text',
		menu_items: [
			{
				type: 'url',
				destination: '/',
				text: 'Home',
				color: '#5b5b5b',
				'new-tab': false,
				menu_items: []
			},
			{
				type: 'url',
				destination: '/',
				text: 'About',
				color: '#5b5b5b',
				'new-tab': false,
				menu_items: []
			},
			{
				type: 'url',
				destination: '/',
				text: 'Other',
				color: '#5b5b5b',
				'new-tab': false,
				menu_items: [
					{
						type: 'url',
						destination: '/',
						text: 'Sub Menu item',
						color: '#5b5b5b',
						'new-tab': false,
						menu_items: [
							{
								type: 'url',
								destination: '/',
								text: 'Sub-sub Menu Item',
								color: '#5b5b5b',
								'new-tab': false
							}
						]
					}
				]
			}
		]
	}

	$scope.logoSettings = {
		title: 'Logo Settings',
		settings: [
			{
					label: 'Url when clicked',
					key: 'logo_url',
					type: 'text'
			},
			{
					label: 'Logo Type',
					key: 'logo_type',
					type: 'select',
					options: [
						{value: 'text', label: 'Text'},
						{value: 'image', label: 'Image'}
					]
			}
		]
	}

	$scope.menuItemSettings = {
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

	$scope.removeMenuItem = function(menu) {
		return function( ctrl ) {
	    menu.menu_items = _.without( menu.menu_items, ctrl.$modelValue );
	  }
	}

	$scope.addMenuItem = function(menu) {
		if( menu && menu.menu_items ) {
			menu.menu_items.push({
				type: 'url',
				destination: '/',
				text: 'New Item',
				color: '#5b5b5b',
				'new-tab': false,
				menu_items: []
			});
		}
	}
});
