(function () {

    'use strict';

    angular
        .module("VMLTest")
        .factory("navService", navService);

    navService.$inject = ['$routeParams'];

    function navService($routeParams) {

        var service = {};
        service.setProjectActive = setProjectActive;
        service.showListProjects = showListProjects;
        service.hideListProjects = hideListProjects;

        return service;

        function setProjectActive() {
            var name_project = $routeParams.nameProject;
            var count_projects = document.querySelectorAll('.list-projects__item').length;

            if (name_project !== undefined) {
                if (count_projects >= 1) {
                    document.getElementsByClassName("nav")[0].classList.remove('active');

                    clearProjectActive();

                    document.getElementById(name_project).classList.add('active');
                }
            } else {
                document.getElementsByClassName("nav")[0].classList.add('active');
                clearProjectActive();
            }
        }

        function showListProjects() {
            document.getElementsByClassName("nav")[0].classList.remove('active');
        }

        function hideListProjects() {
            document.getElementsByClassName("nav")[0].classList.add('active');
        }

        function clearProjectActive() {
            var project_active = document.querySelector(".list-projects__item.active");

            if (project_active !== null)
                project_active.classList.remove('active');
        }
    }

})();