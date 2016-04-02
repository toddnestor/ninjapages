var app = angular.module( "app" );

app.directive('hercUpload', function ($uibModal, $parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            var model = attr.ngModel;
            element.on( 'click', function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: '/templates/common/media.html',
                    controller: 'MediaSelectorCtrl',
                    size: 'lg',
                    resolve: {

                    }
                });

                modalInstance.result.then(function (url) {
                    if( model )
                    {
                        var parsed_model = $parse( model );

                        parsed_model.assign( scope, url );

                        ctrl.$setViewValue( url );
                    }
                }, function () {

                });
            } );
        }
    }
} );

app.controller('MediaSelectorCtrl', function ($scope, $uibModalInstance, Upload, $timeout, Herc) {

    $scope.ok = function () {
        $uibModalInstance.close(  );
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.$error) {
                    Upload.upload({
                        url: Herc.uploadUrl(),
                        data: {
                            file: file
                        }
                    }).then(function (resp) {
                        $uibModalInstance.close( resp.data.file_name );
                        /*
                        $timeout(function() {
                            $scope.log = 'file: ' +
                                resp.config.data.file.file_name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + $scope.log;
                        });
                        */
                    }, null, function (evt) {
                        var progressPercentage = parseInt(100.0 *
                            evt.loaded / evt.total);
                        $scope.log = 'progress: ' + progressPercentage +
                            '% ' + evt.config.data.file.name + '\n' +
                            $scope.log;
                    });
                }
            }
        }
    };
});