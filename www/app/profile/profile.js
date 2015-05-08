angular.module('app.profile', [
    'ui.router',
    'angular-storage'
])
    .config(function ($stateProvider) {
        $stateProvider.state('profile', {
            url: '/profile',
            controller: 'ProfileCtrl',
            templateUrl: 'app/profile/profile.html',
            data: {
                requiresLogin: true,
                pageTitle: 'My Profile'
            }
        });
    })
    .controller('ProfileCtrl', function ($scope, store) {
        console.log(store.get('user'));
        $scope.id = store.get('user').id;
    });