angular.module('app.signup', [
    'ui.router',
    'angular-storage'
])
    .config(function ($stateProvider) {
        $stateProvider.state('signup', {
            url: '/signup',
            controller: 'SignupCtrl',
            templateUrl: 'app/signup/signup.html',
            data: {
                pageTitle: 'Sign Up'
            }
        });
    })
    .controller('SignupCtrl', function () {

    });