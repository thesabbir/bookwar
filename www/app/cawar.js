angular.module('cawar', ['ngResource'])
.factory('Api', function ($resource) {
        var base = 'http://localhost:1337';
        return {
            clan : $resource(base + '/clans/:id'),
            login : $resource(base + '/auth', { 'post' : {method : 'POST'}})
        }
    });