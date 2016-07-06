(function () {

    'use strict';

    angular
        .module("VMLTest")
        .factory("githubApi", githubApi);

    githubApi.$inject = ['$http'];

    function githubApi($http) {

        var service = {};
        service.getAllProjects = getAllProjects;
        service.getProjectDetails = getProjectDetails;
        service.getContributors = getContributors;
        service.getCommits = getCommits;

        return service;

        function getAllProjects() {
            return $http.get("https://api.github.com/search/repositories?q=user:globocom&sort=stars&order=desc&per_page=200").then(handleSuccess, handleError('Erro ao tentar carregar listagem de projetos.'))
        }

        function getProjectDetails(name_project) {
            return $http.get("https://api.github.com/repos/globocom/" + name_project + "?client_id=fb2d7e47d7daf8864ef4&client_secret=e80450626cb66e348f70cf7c9ce7f19c05174b15").then(handleSuccess, handleError('Erro ao tentar carregar detalhes do projeto.'))
        }

        function getContributors(name_project) {
            return $http.get("https://api.github.com/repos/globocom/" + name_project + "/contributors?client_id=fb2d7e47d7daf8864ef4&client_secret=e80450626cb66e348f70cf7c9ce7f19c05174b15").then(handleSuccess, handleError('Erro ao tentar carregar detalhes do projeto.'))
        }

        function getCommits(name_project, page) {
            return $http.get("https://api.github.com/repos/globocom/" + name_project + "/commits?page=" + page + "&per_page=20&client_id=fb2d7e47d7daf8864ef4&client_secret=e80450626cb66e348f70cf7c9ce7f19c05174b15").then(handleSuccess, handleError('Erro ao tentar carregar detalhes do projeto.'))
        }

        // Private functions

        function handleSuccess(res) {
            return {data: res.data, status: res.status};
        }

        function handleError(error) {
            return {success: false, message: error};
        }

    }
})();