(function(){
    var Herc = angular.module('restful-herc', ['restangular', 'ngStorage']);

    Herc.factory( 'Herc', [ 'Restangular', '$localStorage', '$http', '$location', function( Restangular, $localStorage, $http, $location )
    {
        //var api_url = 'http://homestead.app';
        var api_url = 'https://api.hercdev.io';
        var api_key = 'a62d34e343718057b0787e1b3f1d542abcab35fe3f942d886e666fab824c';

        var Herc = Restangular.withConfig( function( RestangularConfigurer )
        {
            RestangularConfigurer.setBaseUrl( api_url );
            RestangularConfigurer.setDefaultHeaders({'Content-Type': 'application/json','ApiKey': api_key});
        } );

        Herc.api_url = api_url;

        Herc.fb_login_url = api_url + '/connectFB?api_key=' + api_key;

        Herc.is_logged_in = $localStorage && $localStorage.herc_user && $localStorage.herc_user.access_token ? true : false;

        if( Herc.is_logged_in )
            $http.defaults.headers.common[ 'Authorization' ] = 'Basic ' + $localStorage.herc_user.access_token;

        Herc.logInWithAccessToken = function( access_token, redirect_url ) {
            Herc.all('loginWithAccessToken').post({access_token: access_token}).then(function(response) {
                if( response && response.id && response.access_token ) {
                    $localStorage.herc_user = response;

                    $http.defaults.headers.common[ 'Authorization' ] = "Basic " + response.access_token;

                    if( redirect_url )
                        location.href = redirect_url;
                }
            });
        }

        Herc.logInWithCredentials = function( email, password, success_callback, error_callback ) {
            Herc.all('auth/login').post({email: email, password: password}).then(function(response){
                    if( response && response.id && response.access_token ) {
                        $localStorage.herc_user = response;
                        Herc.is_logged_in = true;

                        $http.defaults.headers.common[ 'Authorization' ] = "Basic " + response.access_token;

                        if( typeof success_callback == 'function' ) {
                            success_callback( response );
                        }
                    }
                },
                function(response){
                    if( typeof error_callback == 'function' )
                        error_callback(response);
                });
        }

        Herc.registerUser = function( email, name, password, password_confirmation, success_callback, error_callback ) {
            Herc.all('auth/register').post({email: email, name: name, password: password, password_confirmation: password_confirmation}).then(function(response){
                    if( response && response.id && response.access_token ) {
                        $localStorage.herc_user = response;

                        $http.defaults.headers.common[ 'Authorization' ] = "Basic " + response.access_token;

                        if( typeof success_callback == 'function' ) {
                            success_callback( response );
                        }
                    }
                },
                function(response){
                    if( typeof error_callback == 'function' )
                        error_callback(response);
                });
        }

        Herc.uploadUrl = function() {
            var full_url = api_url + '/upload?api_key=' + api_key;

            return full_url;
        }

        Herc.metaDataCollection = function(items) {
            angular.forEach( items, function(value){
                value.meta_data = {};

                if( value.meta && value.meta.length > 0 ) {
                    angular.forEach( value.meta, function(value2){
                        value.meta_data[ value2.key ] = value2.value;
                    })
                }
            })
        }

        Herc.metaDataOne = function(item) {
            item.meta_data = {};

            if( item.meta && item.meta.length > 0 ) {
                angular.forEach( item.meta, function(value2){
                    item.meta_data[ value2.key ] = value2.value;

                    item[ 'field_' + value2.key ] = value2.value;
                })
            }
        }

        Herc.abstractDataCollection = function(items, incoming_data_param, outgoing_data_param) {
            angular.forEach( items, function(value){
                value[ outgoing_data_param ] = [];

                if( value[ incoming_data_param ] && value[ incoming_data_param ].length > 0 ) {
                    angular.forEach( value[ incoming_data_param ], function(value2){
                        Herc.metaDataOne( value2 );
                        value[ outgoing_data_param].push( value2 );
                    })
                }
            })
        }

        Herc.abstractDataOne = function(item, incoming_data_param, outgoing_data_param) {
            item[ outgoing_data_param ] = [];

            if( item[ incoming_data_param ] && item[ incoming_data_param ].length > 0 ) {
                angular.forEach( item[ incoming_data_param ], function(value2){
                    Herc.metaDataOne( value2 );
                    item[ outgoing_data_param ].push( value2 );
                })
            }
        }

        Herc.getQueryVariable = function(variable)
        {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
            }
            return(false);
        }

        if( Herc.getQueryVariable( 'access_token' ) )
            Herc.logInWithAccessToken( Herc.getQueryVariable( 'access_token' ), location.href.substr( 0, location.href.indexOf( '?' ) ) + 'dashboard' );

        return Herc;
    } ] );
})();
