var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionCodeSampleController", function ($scope, $rootScope, $state, $stateParams, Herc, $sce) {
	$scope.codeSample = function( code ) {
        var final_code = "";
        var line_count = 1;

        angular.forEach( code.split("\n"), function( value ) {
            final_code += ( line_count > 1 ? "\n" : '' ) + "<span>" + line_count + "</span> " + value;
            line_count++;
        } );

        return $sce.trustAsHtml( final_code );
    }
});