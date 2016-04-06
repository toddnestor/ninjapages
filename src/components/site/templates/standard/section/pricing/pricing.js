var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionPricingController", function ($scope, $rootScope, $state, $stateParams, Herc) {

    $scope.removeFeature = function( feature, price ) {
        price.features = _.without( price.features, feature );
    }

    $scope.removePrice = function( price ) {
        $scope.section.settings.prices = _.without( $scope.section.settings.prices, price );

        $scope.reChunk();
    }

    $scope.addPrice = function() {
        var new_price = {
            background_color: 'transparent',
            name: 'NEW ONE',
            currency_symbol: '$',
            price: '-',
            subtext: '/MO',
            description: 'New price added.',
            features: [
                {
                    name: 'Coolness',
                    description: 'happens here'
                },
                {
                    name: 'Add',
                    description: 'as many features as you want'
                },
                {
                    name: 'Three',
                    description: 'features are standard'
                }
            ],
            button_text: 'Buy now',
            button_font_color: '#ffffff',
            button_font_size: 18,
            button_background_color: '#2595ff',
            button_border_color: '#0b89ff'
        };

        $scope.section.settings.prices.push( new_price );

        $scope.reChunk();
    }

    $scope.addFeature = function( price ) {
        var new_feature = {
            name: 'New Feature',
            description: 'Click to edit'
        }

        price.features.push( new_feature );
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
        $scope.chunks = $scope.chunk( $scope.section.settings.prices, $scope.section.settings.prices_per_row );
    }

    $scope.reChunk();
});