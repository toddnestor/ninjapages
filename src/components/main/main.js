var app = angular.module( "app" );

app.controller('MainController', function ($scope, $stateParams, $rootScope, $state, $localStorage, Herc, $uibModal ) {
    $scope.setTitle = function( title ) {
        $scope.title = title;
    }

    $scope.fb_login_url = Herc.fb_login_url;

    $scope.domains = [
        'ysn.dev',
        'ysn.rocks'
    ];

    $scope.onSite = function() {
        var onSite = true;

        angular.forEach( $scope.domains, function( value ) {
            var regex = new RegExp( '^' + value + '$' );

            if( location.host.match( regex ) )
                onSite = false;
        } );

        return onSite;
    }

    $scope.msgModal = function(size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/common/messages.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {

            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }

    $scope.growl = function( string, class_name ) {

        if( !class_name )
            class_name = 'dark';

        if( !string )
            string = 'Click the x on the upper right to dismiss this little thing. Or click growl again to show more growls.';
        $('#app-growl').append(
            '<div class="alert alert-' + class_name + ' alert-dismissible fade in" role="alert">'+
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
            '<span aria-hidden="true">&times;</span>'+
            '</button>'+
            '<p>' + string + '</p>'+
            '</div>'
        )
    }
} );

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close('nothing');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});