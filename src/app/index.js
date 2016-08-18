'use strict';
angular.module('gitapi', []).controller('ApiController', function ($scope, $http) {

  $scope.Get = function () {

    $scope.github = 'https://api.github.com/users/';
    $scope.repos = '/repos';

    $scope.url = $scope.github + $scope.username;
    $scope.repositories = $scope.url + $scope.repos;

    $http.get($scope.url).then(function success(res) {
      $scope.datas = res.data;
    });
	 
	$http.get($scope.repositories).then(function success(res) {
	    $scope.repoData = res.data;
	});

  };
});