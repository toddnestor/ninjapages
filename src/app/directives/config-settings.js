var app = angular.module( "app" );

app.directive('configSettings', function ($rootScope, $timeout, $parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            var settings = {};
            var model = {};
            var delete_function = function(){};
            var show_function = function(){};
            var settings_function = function(){};

            if( attrs['settings'] ) {
                settings = scope.$eval( attrs['settings'] );
            }

            if( attrs['deleteFunction'] ) {
                delete_function = scope.$eval(attrs['deleteFunction']);
            }

            if( attrs['showFunction'] ) {
                show_function = scope.$eval(attrs['showFunction']);
            }

            if( attrs['settingsFunction'] ) {
                settings_function = scope.$eval(attrs['settingsFunction']);
            }

            if( attrs['ngModel'] ) {
                model = $parse( attrs['ngModel'] );
            }

            if( settings['single-element'] ) {
                $timeout(function () {
                    var original_positions = $(element[0]).position();
                    var original_width = $(element[0]).width();
                    var original_height = $(element[0]).height();

                    element.wrap(
                        $('<span>')
                            .addClass('configurable-section')
                            .addClass('absolute-position')
                            .width(original_width)
                            .height(original_height)
                            .css('position', 'absolute')
                            .css('top', original_positions.top)
                            .css('left', original_positions.left)
                    );

                    $(element[0]).parent().prepend(
                        $('<div>').addClass('config-buttons')
                            .css('right', '0')
                            .css('border-top-right-radius', '0')
                            .css('border-top-left-radius', '10px')
                            .append(
                            $('<span>').addClass('fa').addClass('fa-gear').click(function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                settings_function( ctrl );
                            })
                        ).append(
                            $('<span>').addClass('fa').addClass('fa-trash').click(function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                delete_function( ctrl );
                                $timeout(function(){
                                    scope.$apply();
                                })
                                if( !settings['no-show'] ) {
                                    $(e.currentTarget).hide();
                                    $(e.currentTarget).closest('.config-buttons').find('.fa-eye').show();
                                }
                            })
                        ).append(
                            $('<span>').addClass('fa').addClass('fa-eye').hide().click(function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                show_function( ctrl );
                                $timeout(function(){
                                    scope.$apply();
                                })
                                $(e.currentTarget).hide();
                                $(e.currentTarget).closest('.config-buttons').find('.fa-trash').show();
                            })
                        )
                    );
                }, 1000);
            } else {
                element.addClass('configurable-section').prepend(
                    $('<div>').addClass('config-buttons').append(
                        $('<span>').addClass('fa').addClass('fa-gear').click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            settings_function( ctrl );
                            scope.$apply();
                        })
                    ).append(
                        $('<span>').addClass('fa').addClass('fa-trash').click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            delete_function( ctrl );

                            $timeout(function(){
                                scope.$apply();
                            })
                            if( !settings['no-show'] ) {
                                $(e.currentTarget).hide();
                                $(e.currentTarget).closest('.config-buttons').find('.fa-eye').show();
                            }
                        })
                    ).append(
                        $('<span>').addClass('fa').addClass('fa-eye').hide().click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            show_function( ctrl );

                            $timeout(function(){
                                scope.$apply();
                            })

                            $(e.currentTarget).hide();
                            $(e.currentTarget).closest('.config-buttons').find('.fa-trash').show();
                        })
                    )
                );
            }
        }
    }
} );