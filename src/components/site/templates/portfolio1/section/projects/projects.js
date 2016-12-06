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
	var count = 1;

	$scope.addCategory = function() {
		$scope.section.settings.categories.push('New Category ' + count);
		count++;
	}

	$scope.removeCategory = function(category) {
		return function() {
			$scope.section.settings.categories = _.without($scope.section.settings.categories, category);
		}
	}

	$scope.categoryOptions = function() {
		var options = [];

		for( var i = 0; i < $scope.section.settings.categories.length; i++ ) {
			options.push({
				value: $scope.section.settings.categories[i],
				label: $scope.section.settings.categories[i]
			});
		}

		return options;
	}

	$scope.projectSettings = function() {
		return {
			title: 'Project Settings',
			settings: [
				{
					label: 'Url when clicked',
					key: 'url',
					type: 'text'
				},
				{
					label: 'Image',
					key: 'image_url',
					type: 'image'
				},
				{
					label: 'Categories',
					key: 'categories',
					type: 'select-multiple',
					options: $scope.categoryOptions()
				}
			]
		};
	}

	$scope.addProject = function() {
		$scope.section.settings.projects.push({
			name: 'New Project',
			url: '/whatever',
			image_url: 'https://herc.objects.cdn.dream.io/uploads/a05a5b067e8a99376bfd73d3b228160a/bg1.jpg',
			categories: [
				'Design',
				'Branding'
			]
		});

		var $container = $(element).find('.portfolioContainer');

		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$(element).on('click', 'a[data-filter]', function(){
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	}

	$scope.editCategory = function() {

	}
});
