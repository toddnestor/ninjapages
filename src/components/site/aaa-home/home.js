var app = angular.module( "app" );

app.config(function ($stateProvider) {
    $stateProvider
        .state("site.home", {
            url: "/dashboard",
            templateUrl: "/templates/site/aaa-home/home.html",
            controller: "HomeController",
            resolve: {
              pages: function( Herc ) {
                return Herc.all('Content').getList();
              },
              site: function( Herc ) {
                if( location.hostname === 'ninjapages.co' || location.hostname === 'ninjapages.dev' ) {
                  return {};
                } else {
                  return Herc.one('SiteDetail').get();
                }
              }
            }
        })
});

app.controller('HomeController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc, $uibModal, pages, site ) {
  if( !Herc.is_logged_in ) {
    $state.go('site.login');
  }

  $scope.site = site;

  if( $scope.site.meta_data ) {
		angular.forEach($scope.site.meta_data, function(unused, key) {
			$scope.site['field_' + key] = $scope.site.meta_data[key];
		});
	}

  $scope.pages = pages.reverse();

  $scope.templates = [
    {
      name: 'Standard',
      slug: 'standard',
      thumbnail: 'https://herc.objects.cdn.dream.io/uploads/218ca340768739a028f6b6415edce91c/standard-template.png',
      'demo-link': 'http://ninjapages.co/standard',
      description: 'This is a versatile theme to create sales pages, informational pages, or even sign up pages with.'
    },
    {
      name: 'Minimal Portfolio',
      slug: 'portfolio1',
      thumbnail: 'https://herc.objects.cdn.dream.io/uploads/43443e77640c4a03bec6ed05976ecf5d/minimal-portfolio.png',
      'demo-link': 'http://ninjapages.co/minimal-portfolio',
      description: 'This theme was designed with portfolios in mind, however you it can be used to create other types of pages too.'
    },
    {
      name: 'Bold Marketing',
      slug: 'bold',
      thumbnail: 'https://herc.objects.cdn.dream.io/uploads/43443e77640c4a03bec6ed05976ecf5d/minimal-portfolio.png',
      'demo-link': 'http://ninjapages.co/bold-marketing',
      description: 'This theme gives provides a unique layout that stands out.'
    },
  ];

  $scope.newPage = function(template) {
    $state.go('builder', {id: template});
  }

  $scope.deletePage = function(page) {
    page.remove();
    $scope.pages = _.without($scope.pages, page);
  }

  $scope.setAsHome = function(page) {
    Herc.all('Content').customGET('setAsHome/' + page.id).then(function(response){
      if( response.old_home ) {

        var oldHome = _.find( $scope.pages, {id: response.old_home}) || _.find( $scope.pages, {id: parseInt(response.old_home)});

        if( oldHome ) {
          oldHome.permalink = page.permalink;
        }
      }

      page.permalink = 'home';
    });
  }

  $scope.settingsModal = function() {
      var settings = {
        title: 'Website Settings',
        settings: [
          {
            label: 'Mapped Domain (make sure to add DNS record for IP 67.205.60.80)',
            key: 'domain',
            type: 'text'
          }
        ]
      }

      var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: '/templates/builder/settings.html',
          controller: 'ModalInstanceCtrl',
          size: null,
          resolve: {
              thing: $scope.site,
              settings: settings
          }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.site.put();
      }, function () {

      });
  }
} );
