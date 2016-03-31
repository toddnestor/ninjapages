var app = angular.module("app");

app.config(function($stateProvider){
	$stateProvider
		.state("builder",{
			url: "/builder",
			data: { pageTitle: 'Builder ' },
			templateUrl: "/templates/builder/builder.html",
			controller: "BuilderController"
		})
}); 

app.controller("BuilderController", function ($scope, $rootScope, $state, $stateParams, Herc) {
	$scope.templates = {
            'standard': [
                {type: 'header'},
                {type: 'codeSample'},
                {type: 'features'},
                {type: 'footer'},
                {type: 'leftImage'},
                {type: 'logoStrip'},
                {type: 'pricing'},
                {type: 'quote'}
            ]
        };

    $scope.currentTemplate = 'standard';

    $scope.currentSectionOptions = [];

    $scope.setCurrentSectionOptions = function() {
        $scope.currentSectionOptions = $scope.templates[ $scope.currentTemplate ];
    }

    $scope.sections = [];

    $scope.addSection = function( section ) {
        $scope.sections.push( section );
        console.log('what are our sections now? ', $scope.sections );
    }

    $scope.setCurrentSectionOptions();

    $scope.stopFunction = function() {
        console.log('do we get any arguments? ', arguments );
    }
});