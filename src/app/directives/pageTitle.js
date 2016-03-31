var app = angular.module( "app" );

app.directive('pageTitle', function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'Ninja Pages | Build like a Ninja';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'Ninja Pages | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };

            $rootScope.$on('$stateChangeStart', listener);
        }
    }
} );