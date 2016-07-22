var app = angular.module('gitHubSearchApp', ['ngRoute']);

app.config(function($routeProvider) {
    var partials = 'partials/';

    $routeProvider
        .when('/repositorios',
        {
            controller: 'reposSearchCtrl',
            templateUrl: partials + 'repos-search.html'
        })
        .when('/membros',
        {
            controller: 'memberSearchCtrl',
            templateUrl: partials + 'member-search.html'
        })
        .otherwise({ redirectTo: '/membros' });
});
