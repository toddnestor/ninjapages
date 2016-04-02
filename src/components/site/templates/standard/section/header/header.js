var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionHeaderController", function ($scope, $rootScope, $state, $stateParams, Herc, $uibModal) {
	$scope.removeMenuItem = function( item ) {
        $scope.section.settings.menu_items = _.without( $scope.section.settings.menu_items, item );
    }

    $scope.addMenuItem = function() {
        var menu_item = {
            type: 'url',
            destination: '/',
            text: 'MENU ITEM'
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
                settings: settings
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.section = selectedItem
        }, function () {

        });
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