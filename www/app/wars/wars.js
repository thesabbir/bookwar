angular.module('app.wars', [
    'ui.router',
    'angular-storage'
])
    .config(function ($stateProvider) {
        $stateProvider.state('wars', {
            url: '/wars',
            controller: 'WarsCtrl',
            templateUrl: 'app/wars/wars.html',
            data: {
                requiresLogin: true,
                pageTitle: 'Wars'
            }
        });
    })
    .controller('WarsCtrl', function () {

    });