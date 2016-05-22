var app = angular.module('app', []);
app.controller('appController',['$scope','$http','$location', function($scope, $http, $location){

    // MSG DE ERRO
    $scope.msg = {
        orgError: 'Empresa não localizada. Verifique o campo e digite novamente.',
        userError: 'Usuário não localizado. Verifique o campo e digite novamente.',
        viewOrgError: '',
        viewUserError: ''
    };
    // inputs
    $scope.search = {
        orgname: '',
        username: '',
        filterOrg: ''
    };

    //// MOSTRA OU ESCONDE BLOCO
    //// QUANDO RETORNADO O OBJETO COM LISTA DE REPOSITORIOS
    // LISTA EMPRESA
    $scope.infoRepOrg = {
        show: false
    };
    // LISTA USUARIO
    $scope.infoRepUser = {
        show: false
    };

    // LISTA REPOSITORIOS
    $scope.reposit = {
        listOrg: '',
        listUser: '',
    };

    // BUSCA REPOSITORIO EMPRESA
    $scope.buscaRepositorioEmpresas = function() {
        $http ({
            method: 'GET',
            url: 'https://api.github.com/orgs/'+$scope.search.orgname+'/repos'
        }).then(function (response){
            // mostra html da lista informacoes de repositorios
            $scope.infoRepOrg.show = true;
            // passa dados da requisicao para variavel
            $scope.reposit.listOrg = [];
            $scope.reposit.listOrg = response.data;
            if(response.data == 0){
                $scope.msg.viewOrgError = 'Não há repositórios para esta empresa';
            } else {
                // remove msg de erro
                $scope.msg.viewOrgError = '';
            }
        }).catch (function (response){
            // esconde html da lista de informacao de repositorios
            $scope.infoRepOrg.show  = false;
            // limpa variavel - lista de repositorios
            $scope.reposit.listOrg = '';
            // mensagem de erro
            if(response.status == 404){
                $scope.infoRepOrg.show = true;
                $scope.msg.viewOrgError = $scope.msg.orgError;
            }
        });
    };

    // BUSCA REPOSITORIO USUARIOS
    $scope.buscaRepositorioUsuarios = function() {
        $http ({
            method: 'GET',
            url: 'https://api.github.com/users/'+$scope.search.username+'/repos'
        }).then(function (response){
            // mostra html da lista informacoes de repositorios
            $scope.infoRepUser.show = true;
            // passa dados da requisicao para variavel
            $scope.reposit.listUser = [];
            $scope.reposit.listUser = response.data;
            if(response.data == 0){
                $scope.msg.viewUserError = 'Não há repositórios para este usuário';
            } else {
                // remove msg de erro
                $scope.msg.viewUserError = '';
            }
        }).catch (function (response){
            // esconde html da lista de informacao de repositorios
            $scope.infoRepUser.show = false;
            // limpa variavel - lista de repositorios
            $scope.reposit.listUser = '';
            if(response.status == 404){
                $scope.infoRepUser.show = true;
                $scope.msg.viewUserError = $scope.msg.userError;
            }
        });
    };


}]);
