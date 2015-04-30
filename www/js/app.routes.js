angular.module('app.routes', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "tpls/login.html"
            })
            .state('signup', {
                url: "/signup",
                templateUrl: "tpls/signup.html"
            });
        $urlRouterProvider.otherwise("/signup");
    });