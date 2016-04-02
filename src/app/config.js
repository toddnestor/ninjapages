var app = angular.module('app', [
    'ui.router',
    'ngStorage',
    'restangular',
    'restful-herc',
    'xeditable',
    'ui.bootstrap',
    'ngDragDrop',
    'cgNotify',
    'angularSpectrumColorpicker'
]);

app.config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
});

app.config(function($httpProvider,$urlRouterProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');
});

app.factory('httpRequestInterceptor', function ($localStorage, $location, $q) {

    return {
        request: function (config) {
            if ($localStorage && $localStorage.herc_user && $localStorage.herc_user.access_token)
                config.headers['Authorization'] = 'Basic ' + $localStorage.herc_user.access_token;
            return config;
        },
        response: function(response){
            if (response.status === 401) {
                $location.path("/");
            }

            return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status === 401) {
                $location.path("/login");
            }
            return $q.reject(rejection);
        }
    };
});

app.run(function(editableOptions) {
    editableOptions.theme = 'bs2'; // bootstrap3 theme. Can be also 'bs2', 'default'
    editableOptions.mode = 'inline';
    editableOptions.onblur = 'submit';
    editableOptions.showbuttons = false;
});

app.config(function($httpProvider,$urlRouterProvider){
    $httpProvider.interceptors.push('httpInterceptor');
});

app.factory('httpInterceptor', function ($q, $rootScope, $injector, $location) {

    return {
        'request': function (config) {
            return config || $q.when(config);
        },
        'response': function(response) {
            return response;
        },
        'requestError': function (rejection) {
            return $q.reject(rejection);
        },
        'responseError': function (rejection) {
            $rootScope.loaded = true;
            if(rejection.status == 405){
                return [];
            }
            if(rejection.status == 406){
                return [];
            }
            if (rejection.status == 401 && $location.path() != '/login'){
                $location.path("/login");
                return [];
            } else {

            }

            return $q.reject(rejection);
        }
    };
});

app.run(function($rootScope, $state, $http, Herc, $localStorage) {
    $rootScope.$state = $state;
    $rootScope.$storage = $localStorage;
    $rootScope.moment = moment;

    $rootScope.$watch("$storage.herc_user.access_token", function () {
        if($localStorage.herc_user && $localStorage.herc_user.access_token)
            $http.defaults.headers.common['Authorization'] = "Basic " + $localStorage.herc_user.access_token;
    });

    $rootScope.strip_tags = function(input, allowed) {
        allowed = (((allowed || '') + '')
            .toLowerCase()
            .match(/<[a-z][a-z0-9]*>/g) || [])
            .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        return input.replace(commentsAndPhpTags, '')
            .replace(tags, function($0, $1) {
                return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
    }

    $rootScope.excerpt = function(newString, maxLength){
        if( !maxLength )
            maxLength = 20;

        var trimmedString = newString.substr(0, maxLength);

        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));

        return trimmedString;
    }
});