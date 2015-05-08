var app = angular.module('App', [
    'ngMaterial',
    'app.auth',
    'app.login',
    'app.clan',
    'app.profile',
    'app.wars',
    'app.signup',
    'ui.router'
    ]);

app.config(function ($mdThemingProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/clan');
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
});

app.run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (e, nextstate) {
        if(nextstate.data && nextstate.data.pageTitle) {
            $rootScope.pageTitle = nextstate.data.pageTitle;
        }
    })
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.pageTitile = "bookWAR";
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };
    $scope.showSidenav = function (menuId) {
        $mdSidenav(menuId).open()
    };
    $scope.hideSidenav = function (menuId) {
        $mdSidenav(menuId).close()
    };
}]);