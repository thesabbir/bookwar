var app = angular.module('App', ['ngMaterial', 'app.routes']);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    $scope.showSidenav = function (menuId) {
        $mdSidenav(menuId).open()
    }
    $scope.hideSidenav = function (menuId) {
        $mdSidenav(menuId).close()
    }

}]);