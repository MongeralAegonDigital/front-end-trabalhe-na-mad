myApp.controller('navCtrl', ['$scope','Data', 'langData', '$location', function($scope,Data,langData,$location){
    
    $scope.Data = Data;
    $scope.langData = langData;
    $scope.navStyle ='';
    $scope.navbarUl ='';
    $scope.toogle = '';
    $scope.resetForm = function(){
        $scope.Data.organization = '';

        if($scope.langData.checkbox1.length == undefined){
            $scope.langData.checkbox1 = '';
            $scope.langData.lang = '';
        }
        if($scope.langData.checkbox2.length == undefined){
            $scope.langData.checkbox2 = '';
            $scope.langData.maxStarsGazers = '';
            $scope.langData.minStarsGazers = '';
        }
        if($scope.langData.checkbox3.length == undefined){
            $scope.langData.checkbox3 = '';
            $scope.langData.maxForks = '';
            $scope.langData.minForks = '';
        }
    }
    
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
    
    $scope.clickResp = function(){
        var navbarUl = document.getElementById("navbarUl");
        var navbarUlLI = document.querySelector("#navbarUl li");

        if($scope.toogle == "false"){
            if(window.innerWidth < 481){
                $scope.navbarUl ={
                    "padding-bottom":  "100px"
                    
                }
                $scope.navStyle ={
                    "height": "170px",
                    "display":"inline-block"
                    
                }
                $scope.toogle = "true";
                
            }else if(window.innerWidth < 900){
                $scope.navbarUl ={
                    "padding-bottom":  "200px"
                    
                }
                $scope.navStyle ={
                    "height": "170px",
                    "display":"inline-block",
                    
                }
                $scope.toogle = "true";
            }
        }else if($scope.toogle == "true"){
            if(window.innerWidth < 481){
                $scope.navbarUl ={
                    "padding-bottom":  "0px"
                    
                }
                $scope.navStyle ={
                    "height": "55px",
                    "display":"none"
                    
                }
                $scope.toogle = "false";
            }else if(window.innerWidth < 900){
                $scope.navbarUl ={
                    "padding-bottom":  "0px"
                    
                }
                $scope.navStyle ={
                    "height": "55px",
                    "display":"none"
                    
                }
                $scope.toogle = "false";
            }
        }
        
    }
    
    $scope.leaveResp = function(){
        var navbarUl = document.getElementById("navbarUl");
        var navbarUlLI = document.querySelector("#navbarUl li");
        if(window.innerWidth < 481){
            $scope.navbarUl ={
                "padding-bottom":  "0px"
            }
            $scope.navStyle ={
                "height": "55px",
                "display":"none"
            }
            
        }
    }
    

    

   
}]);