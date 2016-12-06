var app = angular.module("app");

app.controller("SiteTemplatesPortfolio1SectionPortfolio-detailController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
		section_background_color: '#ffffff',
		section_background_image: '',
		data: [
			{
				name: 'Category',
				text: 'Design',
				url: ''
			},
			{
				name: 'Skills required',
				text: 'Sketching, ART',
				url: ''
			},
			{
				name: 'Project URL',
				text: 'LIVE',
				url: '#'
			}
		],
		caption: 'Caption Text',
		image_url: 'https://herc.objects.cdn.dream.io/uploads/a9221da56dcbfcadf95dd3040a8a38f0/single-portfolio.jpg',
		project_name: 'Project Name',
		description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
		prev_project_text: 'Previous Project',
		show_prev_proj: true,
		show_next_proj: true,
		prev_project_url: '#',
		next_project_text: 'Next Project',
		next_project_url: '#',
		all_projects_url: '#',
		all_projects_show: true
	};

	$scope.addData = function() {
		$scope.section.settings.data.push({
			name: 'New Item',
			text: 'Value',
			url: '#'
		});
	}

	$scope.datumSettings = {
		title: 'Detail Settings',
		settings: [
			{
				label: 'Url (leave blank if you don\'t want it to be a link)',
				key: 'url',
				type: 'text'
			}
		]
	}

	$scope.removePrevProj = function() {
		$scope.section.settings.show_prev_proj = false;
	}

	$scope.prevProjectSettings = {
		title: 'Previous Project Settings',
		settings: [
			{
				label: 'Url',
				key: 'prev_project_url',
				type: 'text'
			}
		]
	}

	$scope.removeNextProj = function() {
		$scope.section.settings.show_next_proj = false;
	}

	$scope.nextProjectSettings = {
		title: 'Next Project Settings',
		settings: [
			{
				label: 'Url',
				key: 'next_project_url',
				type: 'text'
			}
		]
	}

	$scope.removeAllProj = function() {
		$scope.section.settings.all_projects_show = false;
	}

	$scope.allProjectSettings = {
		title: 'All Project Button Settings',
		settings: [
			{
				label: 'Url',
				key: 'all_projects_url',
				type: 'text'
			}
		]
	}
});
