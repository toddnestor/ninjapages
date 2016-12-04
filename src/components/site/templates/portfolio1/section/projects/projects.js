var app = angular.module("app");

app.controller("SiteTemplatesPortfolio1SectionProjectsController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
		section_background_color: '#ffffff',
		section_background_image: '',
		categories: [
			'Design',
			'Development',
			'Branding',
			'Ruby',
			'Angular',
			'Rails'
		],
		projects: [
			{
				name: 'Digital Pen',
				url: '/whatever',
				image_url: 'https://herc.objects.cdn.dream.io/uploads/a05a5b067e8a99376bfd73d3b228160a/bg1.jpg',
				categories: [
					'Design',
					'Branding'
				]
			},
			{
				name: 'Digital Pen',
				url: '/whatever',
				image_url: 'https://herc.objects.cdn.dream.io/uploads/a05a5b067e8a99376bfd73d3b228160a/bg1.jpg',
				categories: [
					'Design',
					'Branding'
				]
			},
			{
				name: 'Digital Pen',
				url: '/whatever',
				image_url: 'https://herc.objects.cdn.dream.io/uploads/a05a5b067e8a99376bfd73d3b228160a/bg1.jpg',
				categories: [
					'Design',
					'Branding'
				]
			},
			{
				name: 'Digital Pen',
				url: '/whatever',
				image_url: 'https://herc.objects.cdn.dream.io/uploads/a05a5b067e8a99376bfd73d3b228160a/bg1.jpg',
				categories: [
					'Design',
					'Branding'
				]
			}
		]
	};

	$scope.classify = function(category) {
		return category.replace(/[^a-z0-9\-\_]/gi,'');
	}

	$scope.classes = function(categories) {
		return categories.map(function(category) { return $scope.classify(category)}).join(' ');
	}

	$scope.addCategory = function() {
		$scope.section.settings.categories.push('New Category');
	}

	$scope.addProject = function() {
		console.log('we got called at least...');
		$scope.section.settings.projects.push({
			name: 'New Project',
			url: '/whatever',
			image_url: 'https://herc.objects.cdn.dream.io/uploads/a05a5b067e8a99376bfd73d3b228160a/bg1.jpg',
			categories: [
				'Design',
				'Branding'
			]
		});
	}

	$scope.editCategory = function() {

	}
});
