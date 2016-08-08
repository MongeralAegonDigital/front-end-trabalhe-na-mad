myApp.controller('homeCtrl', ['$scope','$rootScope','$location', function($scope,$rootScope,$location){
    
    $scope.footer = '';
    
    $rootScope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
            if(window.innerHeight > 1000){
                if ($location.path() == "/search"){
                    $scope.footer ={
                        "margin-top": "387px"
                    }
                    
                }else if ($location.path() == "/result"){
                    $scope.footer = {
                        "margin-top": "500px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }else if(window.innerHeight < 600){
                if ($location.path() == "/search"){
                    $scope.footer ={
                        "margin-top": "0px"
                    }
                    
                }else if ($location.path() == "/result"){
                    $scope.footer = {
                        "margin-top": "600px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }else if(window.innerHeight < 800){
                if ($location.path() == "/search"){
                    $scope.footer ={
                        "margin-top": "100px"
                    }
                    
                }else if ($location.path() == "/result"){
                    $scope.footer = {
                        "margin-top": "600px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }else if(window.innerHeight < 1000){
                if ($location.path() == "/search"){
                    $scope.footer ={
                        "margin-top": "320px"
                    }
                    
                }else if ($location.path() == "/result"){
                    $scope.footer = {
                        "margin-top": "500px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }
        });
        


}]);