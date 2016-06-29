'use strict';

var searchApp = angular.module('searchApp', []);

searchApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.searchInput;

  $scope.results;

  $scope.search = function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      var url = 'https://api.github.com/search/repositories?q=' + $scope.searchInput + '&sort=stars';
      $http({ method: 'GET', url: url }).then(successSearch, errorSearch);
    }
  };

  var successSearch = function successSearch(response) {
    console.log(response);
    $scope.results = response.data.items;
  };

  var errorSearch = function errorSearch(response) {
    console.log(response);
  };
}]);