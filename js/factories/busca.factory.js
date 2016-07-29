(function () {
    'use strict';

    angular
        .module('app')
        .factory('BuscaFactory', HomeFactory);

    HomeFactory.$inject = ['$http', 'App'];

    function HomeFactory($http, App) {
        /*
        * /users/:username/orgs
        * /users/:username/
        * /users/:username/repos
        * /orgs/:org_name
        *
        * */
        var _url = App.urlBase;

        var factory = {
            getUser: getUser,
            getUserOrg: getUserOrg,
            getUserRepos: getUserRepos,
            getOrg: getOrg
        }

        return factory;

        function getUser(username) {
            return $http
                .get(_url + 'users/' + username)
                .then(function (response) {
                    return (response.data);
                })
        }
        function getUserOrg(username) {
            return $http
                .get(_url + 'users/' + username + '/orgs')
                .then(function (response) {
                    return (response.data);
                })
        }
        function getUserRepos(username) {
            return $http
                .get(_url + 'users/' + username + '/repos')
                .then(function (response) {
                    return (response.data);
                })
        }
        function getOrg(org) {
            return $http
                .get(_url + 'orgs/' + org)
                .then(function (response) {
                    return (response.data);
                })
        }
    }
})();