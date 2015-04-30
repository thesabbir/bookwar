angular.module('app.routes', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "tpls/login.html",
                controller: function ($rootScope) {
                    $rootScope.pageTitle = "Login";
                }
            })
            .state('signup', {
                url: "/signup",
                templateUrl: "tpls/signup.html",
                controller: function ($rootScope) {
                    $rootScope.pageTitle = "Sign Up";
                }
            });
        $urlRouterProvider.otherwise("/login");
    });