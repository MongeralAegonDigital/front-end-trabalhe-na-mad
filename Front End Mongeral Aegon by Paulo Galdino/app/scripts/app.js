'use strict';


var myAPP = angular.module('appGitHub',['ui.router' , 'ngAnimate'])

myAPP.config(function($stateProvider, $urlRouterProvider) {
    
    console.log("in app.js config");
  
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                'header': { 
                    templateUrl: 'views/header.html' 
                },
                'content': { 
                    templateUrl: 'views/content.html',
                    controller: 'GitController'
                },
                'footer': { 
                    templateUrl: 'views/footer.html'
                }
            }
        });
    
    $urlRouterProvider.otherwise('/');
});