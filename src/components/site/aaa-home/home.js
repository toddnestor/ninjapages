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
              }
            }
        })
});

app.controller('HomeController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc, pages ) {
  if( !Herc.is_logged_in ) {
    $state.go('site.login');
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
} );
