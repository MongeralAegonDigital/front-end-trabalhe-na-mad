angular.module('app', [
        'ngRoute', 'ngSanitize' 
    ])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'src/views/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });
    })