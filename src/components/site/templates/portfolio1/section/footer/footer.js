var app = angular.module("app");

app.controller("SiteTemplatesPortfolio1SectionFooterController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
		section_background_color: '#f1f1f1',
		section_background_image: '',
		address: "239/2 North Kafrul\nNew York, NY 201890",
		copyright: "&copy; 2016 NEON, Designed by <a href=\"#\">ShapedTheme</a> in Bangladesh",
		social_icons: [
			{type: 'twitter', url: '#'},
			{type: 'facebook', url: '#'},
			{type: 'google-plus', url: '#'},
			{type: 'linkedin', url: '#'},
			{type: 'youtube', url: '#'}
		]
	};


	$scope.social_icons = {
		twitter: 'fa-twitter',
		facebook: 'fa-facebook-f',
		'google-plus': 'fa-google-plus',
		linkedin: 'fa-linkedin',
		youtube: 'fa-youtube-play',
		github: 'fa-github',
		bitbucket: 'fa-bitbucket'
	};

	$scope.addIcon = function() {
		$scope.section.settings.social_icons.push({type: 'facebook', url: '#'});
	}

	$scope.iconSettings = {
		title: 'Icon Settings',
		settings: [
			{
				label: 'Url when clicked',
				key: 'url',
				type: 'text'
			},
			{
				label: 'Type',
				key: 'type',
				type: 'select',
				options: [
					{value: 'twitter', label: 'Twitter'},
					{value: 'facebook', label: 'Facebook'},
					{value: 'google-plus', label: 'Google Plus'},
					{value: 'linkedin', label: 'LinkedIn'},
					{value: 'youtube', label: 'Youtube'},
					{value: 'github', label: 'GitHub'},
					{value: 'bitbucket', label: 'Bitbucket'}
				]
			}
		]
	}
});
