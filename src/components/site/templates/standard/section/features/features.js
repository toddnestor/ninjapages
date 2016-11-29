var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionFeaturesController", function ($scope, $rootScope, $state, $stateParams, Herc) {

  $scope.section.options = $scope.section.options || {
      settings: [

      ]
  };

  $scope.section.settings = $scope.section.settings || {
      section_background_color: '#ffffff',
      tagline: 'Inside the Machine',
      headline: 'It\'s not hard to see how we make your life easier every day.',
      features: [
          {
              image: 'https://herc.objects.cdn.dream.io/uploads/b00ed107c2680d2b22f6a9eab27e241f/startup-9.svg',
              name: '24/7 support.',
              description: 'We\'re always here for you no matter what time of day.'
          },
          {
              image: 'https://herc.objects.cdn.dream.io/uploads/d756545bbc7d99f1d674b9336951ecb0/startup-10.svg',
              name: 'E-commerce.',
              description: 'We automatically handle all sales analytics.'
          },
          {
              image: 'https://herc.objects.cdn.dream.io/uploads/18c557de784c864b03f8edd6799446e7/startup-11.svg',
              name: 'Turnaround.',
              description: 'Our data analysis is distributed, so it processes in seconds.'
          },
          {
              image: 'https://herc.objects.cdn.dream.io/uploads/046d2d53322ee4926cb4865af9745223/startup-12.svg',
              name: 'Rich calculations.',
              description: 'Limitless ways to splice and dice your data.'
          },
          {
              image: 'https://herc.objects.cdn.dream.io/uploads/3889ef8c5acb3317098581ec9631dc5b/startup-13.svg',
              name: 'Mobile apps.',
              description: 'iOS and Android apps available for monitoring.'
          },
          {
              image: 'https://herc.objects.cdn.dream.io/uploads/7d15184add2d161a19d9b58c8c6019ff/startup-14.svg',
              name: 'Secure connections.',
              description: 'Every single request is routed through HTTPS.'
          }
      ]
  };

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
