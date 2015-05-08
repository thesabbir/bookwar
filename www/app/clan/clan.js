angular.module('app.clan', [
    'ui.router',
    'angular-storage',
    'angular-jwt',
    'cawar'
])
    .config(function ($stateProvider) {
        $stateProvider.state('clan', {
            url: '/clan',
            controller: 'ClanCtrl',
            templateUrl: 'app/clan/clan.html',
            data: {
                requiresLogin: true,
                pageTitle: 'My Clan'
            }
        });
    })
    .controller('ClanCtrl', function ($scope, Api, store) {
        Api.clan.get({id : store.get('user').clan}).$promise.then(function (res) {

            $scope.members = res.members;
        });
    });