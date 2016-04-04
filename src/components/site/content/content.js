var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("site.content",{
			url: "/:permalink",
			data: { pageTitle: 'Site Content ' },
			templateUrl: "/templates/site/content/content.html",
			controller: "SiteContentController",
            resolve: {
                content: function( $stateParams, Herc ) {
                    return Herc.one('Content/getByPermalink', $stateParams.permalink).get();
                }
            }
		})
}); 

app.controller("SiteContentController", function ($scope, $rootScope, $state, $stateParams, Herc, content, $sce) {
	$scope.content = content;

    $scope.getContent = function() {
        return $scope.content;
    }

    $scope.safeHtml = function( text ) {
        return $sce.trustAsHtml( text );
    }
});