var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionFormController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.section.options = $scope.section.settings || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
			tag: 'Easy Development',
			heading: 'Natural language queries make mining data easy for anyone.',
			description: 'Rather than force everyone at your company to learn incredibly difficult terminal commands, we allow anyone to query the data with natural language to return data.',
			button_text: 'Sign Up',
			button_id: 'sign_up_button',
			button_click: 'console.log("the button was clicked")',
			section_background_color: '#262F36',
			inputs: [
				{type: 'email', label: 'Email address', id: 'email', placeholder: 'user@example.com', name: 'email'},
				{type: 'password', label: 'Password', id: 'password', placeholder: 'password', name: 'password'}
			]
	};

	$scope.removeInput = function(ctrl) {
		console.log('trying to remove ctrl: ', ctrl.$modelValue);
		$scope.section.settings.inputs = _.without($scope.section.settings.inputs, ctrl.$modelValue);
	}

	$scope.addInput = function() {
		console.log('pushing a new input...');
		$scope.section.settings.inputs.push({
			type: 'text',
			label: 'New Input',
			id: 'new',
			placeholder: 'Edit me',
			name: 'new'
		});
	}

	$scope.inputItemSettings = function( ctrl ) {
			var settings = {
					title: 'Input Settings',
					settings: [
							{
									label: 'Type',
									key: 'type',
									type: 'text'
							},
							{
									label: 'id Attribute',
									key: 'id',
									type: 'text'
							},
							{
									label: 'Placeholder',
									key: 'placeholder',
									type: 'text'
							},
							{
									label: 'name Attribute',
									key: 'name',
									type: 'text'
							}
					]
			}

			$scope.settingsModal( ctrl.$modelValue, settings );
	}

	$scope.onButtonClick = function() {
		eval($scope.section.settings.button_click);
	}
});
