var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionLogoStripController", function ($scope, $rootScope, $state, $stateParams, Herc, $uibModal ) {
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