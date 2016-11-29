var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionLogoStripController", function ($scope, $rootScope, $state, $stateParams, Herc, $uibModal ) {
	$scope.section.options = $scope.section.options || {
			settings: [

			]
	};

	$scope.section.settings = $scope.section.settings || {
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
	};

	$scope.removeMe = function( ctrl ) {
        $scope.section.settings.logos = _.without( $scope.section.settings.logos, ctrl.$modelValue );
    }

    $scope.addLogo = function( logos ) {
        var new_logo = {
            height: null,
            width: null,
            'max-height': null,
            'max-width': 211,
            url: 'https://herc.objects.cdn.dream.io/uploads/cc5e30b4b2f1a60af3782d02340819db/startup-6.svg'
        };

        logos.push( new_logo );
    }

    $scope.settings = function( ctrl ) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/site/templates/standard/section/logoStrip/settings.html',
            controller: 'ModalInstanceCtrl',
            size: null,
            resolve: {
                thing: ctrl.$modelValue,
                settings: {}
            }
        });

        modalInstance.result.then(function (selectedItem) {

        }, function () {

        } );
    }
});
