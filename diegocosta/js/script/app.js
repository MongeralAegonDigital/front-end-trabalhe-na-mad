

angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $scope.username = "loiane";

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            });

        var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        };


        $scope.predicate = '-updated_at';
}]);