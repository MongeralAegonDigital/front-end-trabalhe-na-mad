'use strict';

//angular.module("appGitHub", [])
myAPP.controller('GitController', [ '$scope' , '$http', 'gitService' , '$timeout',  function ($scope , $http , gitService , $timeout ){

    $scope.user_info = {user:{}};
    $scope.user_repo = {};
    $scope.user_follow = {};

    $scope.selected = 1;

    $scope.setSelected = function (selection){
        $scope.selected = selection;
    };

    $scope.isSelected = function (selection){
        return $scope.selected === selection;
    };

    $scope.submit = function(user){
        console.log(user);

        var request_user = "https://api.github.com/users/" + user;
        var request_repos = "https://api.github.com/users/" + user + "/repos";
        var request_following = "https://api.github.com/users/" + user + "/following";
        
        //exec effects
        gitService.jumbotronShake();
        gitService.hidePanel();
        
        //request user information
        makeRequest($scope, $http, $timeout , 'user' , gitService , request_user);
        
        //request user repository
        makeRequest($scope, $http, $timeout , 'repo', gitService , request_repos);
        
        //request user repository
        makeRequest($scope, $http, $timeout , 'follow', gitService , request_following);
        
    };
    
}]);

function makeRequest($scope, $http, $timeout, dataType , gitService , url ){
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        getData($scope, response.data, dataType);
        gitService.showPanel();

        $timeout(function(){
            gitService.appendListenerEvent();
        }, 1000);
    }, function errorCallback(response) {

    });
}

function getData($scope, data, type){
    switch(type){
        case 'repo':
            $scope.user_repo = data;
            break;
        case 'user':
            $scope.user_info.user = data;
            break;
        case 'follow':
            $scope.user_follow = data;
            break;      
    }
}