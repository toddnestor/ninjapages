var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionPricingController", function ($scope, $rootScope, $state, $stateParams, Herc) {
  $scope.section.options = $scope.section.options || {
      settings: [

      ]
  };

  $scope.section.settings = $scope.section.settings || {
      section_background_color: '#F4F5F6',
      prices_per_row: 3,
      tagline: 'Business Talk',
      headline: 'No plans. We just bump your plan whenever you need it.',
      prices: [
          {
              background_color: 'transparent',
              name: 'Personal',
              currency_symbol: '$',
              price: '9',
              subtext: '/MO',
              description: 'Plenty of processing power for any personal projects, big or small.',
              features: [
                  {
                      name: '10k',
                      description: 'monthly requests'
                  },
                  {
                      name: '9am-5pm',
                      description: 'technical support'
                  },
                  {
                      name: 'Public',
                      description: 'API access'
                  }
              ],
              button_text: 'Start a personal account',
              button_font_color: '#ffffff',
              button_font_size: 18,
              button_background_color: '#2595ff',
              button_border_color: '#0b89ff'
          },
          {
              background_color: 'transparent',
              name: 'Business',
              currency_symbol: '$',
              price: '49',
              subtext: '/MO',
              description: 'The perfect sized plan for small businesses to get started.',
              features: [
                  {
                      name: '100k',
                      description: 'monthly requests'
                  },
                  {
                      name: '24/7',
                      description: 'technical support'
                  },
                  {
                      name: 'Public',
                      description: 'API access'
                  }
              ],
              button_text: 'Start a business account',
              button_font_color: '#ffffff',
              button_font_size: 18,
              button_background_color: '#2595ff',
              button_border_color: '#0b89ff'
          },
          {
              background_color: 'transparent',
              name: 'Corporate',
              currency_symbol: '$',
              price: '119',
              subtext: '/MO',
              description: 'An unlimited plan that will scale infinitely to any size project.',
              features: [
                  {
                      name: 'Unlimited',
                      description: 'monthly requests'
                  },
                  {
                      name: '24/7',
                      description: 'technical support'
                  },
                  {
                      name: 'Public & Private',
                      description: 'API access'
                  }
              ],
              button_text: 'Start a corporate account',
              button_font_color: '#ffffff',
              button_font_size: 18,
              button_background_color: '#2595ff',
              button_border_color: '#0b89ff'
          }
      ]
  };

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
