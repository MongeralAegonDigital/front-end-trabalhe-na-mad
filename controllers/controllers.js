app.controller('navController', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
       return viewLocation === $location.path();
   };
});
app.controller('reposSearchCtrl', function($scope, $http) {
    $http.get("https://api.github.com/orgs/frontendbr/repos")
    .success(function(data) {
        $scope.data = data;
    });
});
app.controller('memberSearchCtrl', function($scope, $http) {
    $http.get("https://api.github.com/orgs/frontendbr/members")
    .success(function(data) {
        $scope.data = data;
    });
});
