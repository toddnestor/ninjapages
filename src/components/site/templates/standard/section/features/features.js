var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionFeaturesController", function ($scope, $rootScope, $state, $stateParams, Herc) {

    $scope.removeMe = function( ctrl ) {
        $scope.section.settings.features = _.without( $scope.section.settings.features, ctrl.$modelValue );

        $scope.reChunk();
    }

    $scope.addFeature = function() {
        var new_feature = {
            image: 'https://herc.objects.cdn.dream.io/uploads/7d15184add2d161a19d9b58c8c6019ff/startup-14.svg',
            name: 'New Feature.',
            description: 'Description of new feature.'
        }

        $scope.section.settings.features.push( new_feature );

        $scope.reChunk();
    }

    $scope.chunk = function(arr, size) {
        if (arr != undefined)
        {
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));
            }
            return newArr;
        } else {
            return [];
        }
    }

    $scope.reChunk = function() {
        $scope.chunks = $scope.chunk( $scope.section.settings.features, 3 );
    }

    $scope.reChunk();
});