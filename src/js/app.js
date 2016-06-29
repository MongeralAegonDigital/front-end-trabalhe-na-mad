const searchApp = angular.module('searchApp', []);


searchApp.controller('MainCtrl', ['$scope', '$http', ($scope, $http) => {
  $scope.searchInput;

  $scope.results;


  $scope.search = (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) {
      let url = `https://api.github.com/search/repositories?q=${$scope.searchInput}&sort=stars`;
      $http({method: 'GET', url}).then(successSearch, errorSearch);
    }

  }

  const successSearch = response => {
    console.log(response);
    $scope.results = response.data.items;
  };

  const errorSearch = response => {
    console.log(response);
  };

}]);
