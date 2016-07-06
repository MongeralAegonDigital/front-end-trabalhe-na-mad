(function () {

    'use strict';

    angular
        .module('VMLTest')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'projectDetailsCtrl',
                templateUrl: 'js/views/no_project.html'
            })

            .when('/:nameProject', {
                controller: 'projectDetailsCtrl',
                controllerAs: 'vm',
                templateUrl: 'js/views/project_details.html'
            })
    }
})();