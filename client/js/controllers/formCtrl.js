myApp.controller('formCtrl', ['$scope' ,'Data','$location','resultFactory','$rootScope','langData', function($scope,Data,$location,resultFactory,$rootScope,langData){
    $scope.toggle = true;
    $scope.extras = true;
    $scope.Data = Data;
    $scope.langData = langData;
    $scope.resultFactory = resultFactory;
    $scope.executed = false;
    $scope.fork = true;
    $scope.stargazers = true;
    

    $scope.searchSub = function(){

        var formCheck = document.getElementById("formCheck");
        if ($scope.formAuthentication() == false){
            event.preventDefault();
        }else{

            $location.path( '/result' );
            $rootScope.$on('$stateChangeSuccess', 
            function(event, toState, toParams, fromState, fromParams){
                if ($scope.executed == false){
                    $scope.resultFactory.teste($scope.Data.organization,$scope.langData.lang,$scope.langData.maxStarsGazers,
                    $scope.langData.minStarsGazers,$scope.langData.maxForks,$scope.langData.minForks,$scope.langData.checkbox1,
                    $scope.langData.checkbox2,$scope.langData.checkbox3);
                    $scope.executed = true;
                    
                }else{
                    event.preventDefault(); 
                    
                }
                
            });
        }
        
    }
    
    $scope.formAuthentication = function(){
        var formCheck = document.getElementById("formCheck");
        var formCheck2 = document.getElementById("formCheck2");
        var formCheck3 = document.getElementById("formCheck3");
        console.log(formCheck2.checked);
        if(formCheck.checked == true && isNaN($scope.langData.lang) == false){
            tempAlert("Adicione uma linguagem",5000);
            return false;

        }else if(formCheck2.checked == true && ($scope.langData.maxStarsGazers.length < 1 || $scope.langData.minStarsGazers.length < 1)){
            tempAlert("Adicione um valor maximo e minimo para Stargazers",5000);
            return false;
        }else if(formCheck3.checked == true && ($scope.langData.maxForks.length < 1 || $scope.langData.minForks.length < 1)){
            tempAlert("Adicione um valor maximo e minimo para Forks",5000);
            return false;

        }else{
            return true;
        }
    }
    
    function tempAlert(msg,duration){
        var pMessage = document.createElement("p");
        var formContainer = document.getElementById("formContainer");
        pMessage.innerHTML = msg;
        setTimeout(function(){
            pMessage.parentNode.removeChild(pMessage);
        },duration);
        formContainer.appendChild(pMessage);
    }
    
    
    $scope.extraCheckbox = function(){
        $scope.extras = !$scope.extras;
        $scope.langData.lang = '';
    }

    

    
    
}]);

