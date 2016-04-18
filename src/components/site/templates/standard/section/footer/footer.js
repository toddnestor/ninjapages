var app = angular.module("app");

app.controller("SiteTemplatesStandardSectionFooterController", function ($scope, $rootScope, $state, $stateParams, Herc) {
    $scope.removeMe = function( ctrl ) {
        $scope.section.settings.columns = _.without( $scope.section.settings.columns, ctrl.$modelValue );
    }

    $scope.removeItem = function( item, column ) {
        column.items = _.without( column.items, item );
    }

    $scope.itemSettings = function( ctrl ) {
        var settings = {
            title: 'Footer Item Settings',
            settings: [
                {
                    label: 'Type',
                    key: 'type',
                    type: 'select',
                    options: [
                        {
                            value: 'text',
                            label: 'Text'
                        },
                        {
                            value: 'link',
                            label: "Link"
                        }
                    ]
                },
                {
                    label: 'Url',
                    key: 'url',
                    type: 'text',
                    'if': function() {
                        return ctrl.$modelValue.type == 'link';
                    }
                }
            ]
        }

        $scope.settingsModal( ctrl.$modelValue, settings );
    }

    $scope.addColumn = function() {
        var new_column = {
            name: 'New Column',
            width: '4',
            offset: '0',
            items: [

            ]
        };

        $scope.addItem( new_column );

        $scope.section.settings.columns.push( new_column );
    }

    $scope.addItem = function( column ) {
        var new_item = {
            type: 'link',
            url: '#',
            content: 'New Item'
        }

        column.items.push( new_item );
    }

    $scope.columnSettings = function( ctrl ) {

        var number_options = [];

        for( var x = 1; x <= 12; x++ )
            number_options.push({value: x + '', label: x + ''});

        var offset_options = angular.copy( number_options );

        offset_options.unshift({value: '0', label: '0'});

        console.log(' here is what we have: ', ctrl.$modelValue );

        var settings = {
            title: 'Column Settings',
            settings: [
                {
                    label: 'Width',
                    key: 'width',
                    type: 'select',
                    options: number_options
                },
                {
                    label: 'Offset (space between column and column left of it)',
                    key: 'offset',
                    type: 'select',
                    options: offset_options,
                    'if': function() {
                        return ctrl.$modelValue.width != 12;;
                    }
                }
            ]
        }

        $scope.settingsModal( ctrl.$modelValue, settings );
    }
});