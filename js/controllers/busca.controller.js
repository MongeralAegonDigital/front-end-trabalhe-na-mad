(function () {
    'use strict';

    angular
        .module('app')
        .controller('Busca', BuscaController);

    BuscaController.$inject = ['BuscaFactory', 'App', '$mdToast', '$routeParams', '$location'];

    function BuscaController(BuscaFactory, App, toast, $routeParams, $location) {
        App.setUrl = 'https://api.github.com/';

        var bc = this;
        bc.user_orgs;
        bc.user_repos;
        bc.user;
        bc.toastPosition;
        bc.last;
        bc.busca;
        bc.buscar = buscar;

        init();

        function init() {
            if(!$routeParams.nome){
                $location.path('/');
            }
            bc.last = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };
            bc.toastPosition = angular.extend({}, bc.last);
            bc.user = '';
            bc.org = '';
            bc.user_orgs = [];
            bc.user_repos = [];
            buscar($routeParams.nome)

        }

        /** Limpando as variáveis */
        function limpar() {
            bc.user_orgs = [];
            bc.user_repos = [];
            bc.user = [];
        }

        /** Configurações para mostrar o Toast */
        function getToastPosition() {
            sanitizePosition();
            return Object.keys(bc.toastPosition)
                .filter(function (pos) {
                    return bc.toastPosition[pos];
                })
                .join(' ');
        };

        function sanitizePosition() {
            var current = bc.toastPosition;
            if (current.bottom && bc.last.top) current.top = false;
            if (current.top && bc.last.bottom) current.bottom = false;
            if (current.right && bc.last.left) current.left = false;
            if (current.left && bc.last.right) current.right = false;
            bc.last = angular.extend({}, current);
        }

        /** Busca pela API do GitHub para o usuário */
        function buscar(nome) {
            limpar();
            bc.busca = false;
            /**
             * Busca os Repositórios do usuário
             * */
            BuscaFactory
                .getUserRepos(nome)
                .then(function (response) {
                    if (response.length > 0) {
                        bc.user_repos = response;
                    }
                });
            /**
             * Busca as organizações do usuário
             * */
            BuscaFactory
                .getUserOrg(nome)
                .then(function (response) {
                    if (response.length > 0) {
                        bc.user_orgs = response;
                    }
                });
            /**
             Busca para os dados do Usuário
             */
            BuscaFactory
                .getUser(nome)
                .then(function (response) {
                    if (!response.message) {
                        var pinTo = getToastPosition();
                        toast.show(
                            toast.simple()
                                .textContent("Usuário encontrado!")
                                .position(pinTo)
                                .hideDelay(3000)
                        );
                        bc.user = response;
                    }
                });

            /**
             * Busca para os dados da organização
             */
            BuscaFactory
                .getOrg(nome)
                .then(function (response) {
                    if (!response.message) {
                        var pinTo = getToastPosition();
                        toast.show(
                            toast.simple()
                                .textContent("Organização encontrado!")
                                .position(pinTo)
                                .hideDelay(3000)
                        );
                        bc.org = response;
                    }
                })
        }
    }
})();