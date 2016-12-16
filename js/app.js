angular.module('gitApp', [])
.controller('gitController', ['$scope', '$http', function($scope, $http){

	$scope.usuario = 'globocom';

	$http.get("https://api.github.com/users/" + $scope.usuario)
        .success(function (data) {
            $scope.usuarioData = data;
            
            //carregando repositorios function
    	      carregaRepositorio();
    });

        var carregaRepositorio = function() {

        	$http.get($scope.usuarioData.repos_url)
        .success(function (data) {
        		$scope.repoData = data;
        	});

        };



}]);