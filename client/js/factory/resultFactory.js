myApp.factory('resultFactory', function($http){
    
    var teste = function(org,langDatas,maxStarsGazers,minStarsGazers,maxForks,minForks,checkbox1,checkbox2,checkbox3){
        var arrayOfHeaders = [];
        var pageSubstring = '';
        var number = '';
        var url = '';
        var text = document.getElementById('formText');
        var formCheck = document.getElementById('formCheck');  
        var textVal = "";
        $http.get('https://api.github.com/orgs/'+ org + '/repos').success(function(data, status, headers, config) {
            arrayOfHeaders.push(headers()["link"]);
            var id = data[0].owner.id;
            pageSubstring =  arrayOfHeaders[0].match(/\?[A-Za-z]*\=\d/g);
            number = parseInt(pageSubstring[1].match(/\d/g)); //matches the number of the last link
            number = number + 1;
            
            for(var x =1; x<number;x++){
                $http.get("https://api.github.com/organizations/" + id +"/repos?page=" + x).success(function(datas) {
                    for(var i =0; i<datas.length;i++){
                        var resultWrapper = document.getElementById("resultWrapper");
                        var divChilds = document.createElement("div");
                        var divLanguage = document.createElement("div");
                        var h5 = document.createElement("h5");
                        var text = String(datas[i].name);
                        var language = String(datas[i].language);
                        var stargazers = String(datas[i].stargazers_count);
                        var forks = String(datas[i].forks);
                        var textnode = document.createTextNode(text + 'name');         
                        
                        
                        var testLanguage = langDatas.length > 0 && datas[i].language != langDatas;
                        var testminStarsGazers = datas[i].stargazers_count < Number(minStarsGazers);
                        var testmaxforks = Number(maxForks) > 0 && datas[i].forks > Number(maxForks);
                        var testminforks = datas[i].forks < Number(minForks);
                        
                        //Se colocar linguagem e as checkbox de starfazers e forks forem selecionadas
                        if(checkbox1.length == undefined && checkbox2.length == undefined && checkbox3.length == undefined){
                            if( datas[i].language.toLowerCase() != langDatas.toLowerCase() || datas[i].stargazers_count > Number(maxStarsGazers) 
                            || datas[i].stargazers_count < Number(minStarsGazers) && datas[i].forks > Number(maxForks)
                            || datas[i].forks < Number(minForks)){
                                resultWrapper.innerHTML += 
                                "<div style='display:none'></div>"
                                
                            }else{
                                resultWrapper.innerHTML += 
                                "<div class='"+language + "'" +  "><h5><a href='#' class='repoNameA' data-org='" + org + "'>" + text + "</a></h5><small>" 
                                + language + "</small><small><span class='glyphicon glyphicon-star'></span>" + stargazers 
                                + "</small><small><img src='../imgs/octicon.png'></img>" 
                                + forks + "</small></div>"
                            }
                        }
                        //Se colocar linguagem e a checkbox de stargazers for selecionada
                        else if(checkbox1.length == undefined && checkbox2.length == undefined && langDatas.length > 0 ){
                            if(datas[i].language.toLowerCase() != langDatas.toLowerCase() || datas[i].stargazers_count > Number(maxStarsGazers) 
                            || datas[i].stargazers_count < Number(minStarsGazers)){
                                resultWrapper.innerHTML += 
                                "<div style='display:none'></div>"
                                
                            }else{
                                resultWrapper.innerHTML += 
                                "<div class='"+language + "'" +  "><h5><a href='#' class='repoNameA' data-org='" + org + "'>" + text + "</a></h5><small>" 
                                + language + "</small><small><span class='glyphicon glyphicon-star'></span>" + stargazers 
                                + "</small><small><img src='../imgs/octicon.png'></img>" 
                                + forks + "</small></div>"
                            }
                        }
                        //Se colocar linguagem e a checkbox de forks for selecionada
                        else if(checkbox1.length == undefined && checkbox3.length == undefined ){
                            if( datas[i].language.toLowerCase() != langDatas.toLowerCase() ||  datas[i].forks > Number(maxForks) || datas[i].forks < Number(minForks)){
                                resultWrapper.innerHTML += 
                                "<div style='display:none'></div>"
                                
                            }else{
                                resultWrapper.innerHTML += 
                                "<div class='"+language + "'" +  "><h5><a href='#' class='repoNameA' data-org='" + org + "'>" + text + "</a></h5><small>" 
                                + language + "</small><small><span class='glyphicon glyphicon-star'></span>" + stargazers 
                                + "</small><small><img src='../imgs/octicon.png'></img>" 
                                + forks + "</small></div>"
                            }
                        }
                        //Se a checkbox de stargazers e forks forem selecionadas
                        else if(checkbox2.length == undefined && checkbox3.length == undefined ){
                            if(Number(maxStarsGazers) > 0 && datas[i].stargazers_count > Number(maxStarsGazers) || datas[i].stargazers_count < Number(minStarsGazers) &&
                            datas[i].forks > Number(maxForks) || datas[i].forks < Number(minForks)){
                                resultWrapper.innerHTML += 
                                "<div style='display:none'></div>"
                                
                            }else{
                                resultWrapper.innerHTML += 
                                "<div class='"+language + "'" +  "><h5><a href='#' class='repoNameA' data-org='" + org + "'>" + text + "</a></h5><small>" 
                                + language + "</small><small><span class='glyphicon glyphicon-star'></span>" + stargazers 
                                + "</small><small><img src='../imgs/octicon.png'></img>" 
                                + forks + "</small></div>"
                            }
                        }
                        //Se escrever programa de linguagem
                        else if(checkbox1.length == undefined && langDatas.length > 0){
                            if(datas[i].language.toLowerCase() != langDatas.toLowerCase()){
                                resultWrapper.innerHTML += 
                                "<div style='display:none'></div>"
                                
                            }else{
                                resultWrapper.innerHTML += 
                                "<div class='"+language + "'" +  "><h5><a href='#' class='repoNameA'data-org='" + org + "'>" + text + "</a></h5><small>" 
                                + language + "</small><small><span class='glyphicon glyphicon-star'></span>" + stargazers 
                                + "</small><small><img src='../imgs/octicon.png'></img>" 
                                + forks + "</small></div>"
                            }
                        }else{
                                resultWrapper.innerHTML += 
                                "<div class='"+language + "'" +  " ><h5><a href='#' ng-click='listUsers($event)' class='repoNameA' ng-model='" + org + "'>" + text + "</a></h5><small>" 
                                + language + "</small><small><span class='glyphicon glyphicon-star'></span>" + stargazers 
                                + "</small><small><img src='../imgs/octicon.png'></img>" 
                                + forks + "</small></div>"
                            }
                        
                    }
                    
                });
                
            }
            
        }).error(function(data, status, headers, config) {
            console.log("error");
            
        });
    
        
    }
  
  return {
      teste: teste
  };
});
