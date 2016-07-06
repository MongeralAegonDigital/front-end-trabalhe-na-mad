(function () {

    'use strict';

    angular
        .module("VMLTest")
        .controller("projectDetailsCtrl", projectDetailsCtrl);

    projectDetailsCtrl.$inject = ['navService', 'githubApi', '$routeParams'];

    function projectDetailsCtrl(navService, githubApi, $routeParams) {

        let vm = this;
        vm.showListProjects = navService.showListProjects;
        vm.total_commits = 0;
        vm.total_pages = 1;
        vm.current_page = 1;
        vm.commits = [];

        vm.project_details = {};

        vm.loadMore = loadMore;

        function initController() {
            navService.setProjectActive();
            getProjectDetails();
        }

        initController();

        function getProjectDetails() {

            if ($routeParams.nameProject) {
                githubApi.getProjectDetails($routeParams.nameProject)
                    .then(function (response) {

                        if (response.success === false)
                            return;

                        vm.project_details = response.data;

                        getContributors();
                        getCommits();
                    })
            }

        }

        function getContributors() {
            githubApi.getContributors($routeParams.nameProject)
                .then(function (response) {

                    if (response.success === false)
                        return;

                    angular.forEach(response.data, function (value) {
                        vm.total_commits += value.contributions;
                    });

                    vm.total_pages = Math.ceil(vm.total_commits / 20);
                })

        }

        function getCommits() {
            githubApi.getCommits($routeParams.nameProject, vm.current_page)
                .then(function (response) {

                    if (response.success === false)
                        return;

                    vm.commits = vm.commits.concat(response.data);
                })
        }

        function loadMore() {
            vm.current_page += 1;

            getCommits();
        }

    }

})();