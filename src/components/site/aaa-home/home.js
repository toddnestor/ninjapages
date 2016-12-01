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
      thumbnail: 'https://herc.objects.cdn.dream.io/uploads/a05a5b067e8a99376bfd73d3b228160a/bg1.jpg'
    },
    // {
    //   name: 'Minimal Profile',
    //   slug: 'profile1',
    //   thumbnail: ''
    // },
  ];

  $scope.newPage = function(template) {
    $state.go('builder', {id: template});
  }

  $scope.deletePage = function(page) {
    page.remove();
    $scope.pages = _.without($scope.pages, page);
  }
} );
