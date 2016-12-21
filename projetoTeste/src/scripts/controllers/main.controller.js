angular.module('app')
    .controller('MainController', ['$scope', '$http', function($scope, $http){
        
		$scope.searchRepo = function(username){
			var self = username;
			var url = "https://api.github.com/users/" + self + "/repos";
			var checkRepos = 0;
		
			$http.get(url)
				.then(
					function(response){
						$scope.repos = response.data;
						checkRepos = $scope.repos.length;
						if(checkRepos > 0){
							$('.errorSearch').hide();
						}else{
							$('.errorSearch').show();
						}
					},
					function(err){
						$scope.incorrectUsername = 'Username não encontrado!';
						$('ul').hide();
						$('.errorSearch').show();
					}
				);
		}
    }]);
