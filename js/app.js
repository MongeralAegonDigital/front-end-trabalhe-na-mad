(function () {
    'use strict';

    angular
        .module('app', ['ngRoute','ngMaterial'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'Home',
                controllerAs: 'hc'
            })
            .when('/busca/:nome', {
                templateUrl: 'templates/busca.html',
                controller: 'Busca',
                controllerAs: 'bc'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();