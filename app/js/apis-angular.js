var app = angular.module("App", []);

app.controller("listCtrl", ['$scope', '$http', function($scope, $http) {

    $scope.encontrado = true;
    $scope.repositorio = false;

    $scope.listar = function() {

        $http.get('https://api.github.com/users/'+$scope.userName+'/repos').success(function(data) {
            $scope.list = data;
            $scope.encontrado = true;
            $scope.repositorio = true;

        }).error(function(data) {
            $scope.encontrado = false;
            $scope.repositorio = false;
            $scope.list = {};
        });
    }


}]);