var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionHeaderController", function ($scope, $rootScope, $state, $stateParams, Herc) {
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
});