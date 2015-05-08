angular.module('app.auth', ['angular-jwt', 'angular-storage', 'ui.router'])
    .config( function myAppConfig (jwtInterceptorProvider, $httpProvider) {
        jwtInterceptorProvider.tokenGetter = function(store) {
            return store.get('jwt');
        };

        $httpProvider.interceptors.push('jwtInterceptor');
    })
    .run(function($rootScope, $state, store, jwtHelper) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            if (to.data && to.data.requiresLogin) {
                if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
                    e.preventDefault();
                    $state.go('login');
                }
            }
        });
    });