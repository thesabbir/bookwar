angular.module('app.login', [
    'ui.router',
    'angular-storage',
    'cawar'
])
    .config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'LoginCtrl',
            templateUrl: 'app/login/login.html',
            data: {
                pageTitle: 'Login'
            }
        }).state('logout', {
                controller: 'LogoutCtrl'
            });
    })
    .controller('LoginCtrl', function ($scope, $http, store, $state, Api) {

        $scope.user = {
            "username": "sabbir",
            "password": "demo"
        };

        $scope.login = function () {
            Api.login.save($scope.user).$promise.then(function (response) {
                store.set('jwt', response.token);
                store.set('user', response.user);
                $state.go('clan')
            }, console.error);
        }
    })
    .controller('LogoutCtrl', function (store, $state) {
        store.remove('jwt');
        $state.go('login');
    });
