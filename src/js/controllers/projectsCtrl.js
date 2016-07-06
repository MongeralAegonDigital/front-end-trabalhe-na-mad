(function () {

    'use strict';

    angular
        .module("VMLTest")
        .controller("projectsCtrl", projectsCtrl);

    projectsCtrl.$inject = ['githubApi', 'navService', '$timeout'];

    function projectsCtrl(githubApi, navService, $timeout) {

        let vm = this;
        vm.list_projects = [];
        vm.hideListProjects = navService.hideListProjects;

        function initController() {
            getAllProjects();
        }

        initController();

        function getAllProjects() {
            githubApi.getAllProjects()
                .then(function (response) {
                    if (response.success === false) {
                        return;
                    }

                    vm.list_projects = response.data.items;

                    $timeout(function () {
                        navService.setProjectActive();
                    }, 100)
                })
        }
    }

})();