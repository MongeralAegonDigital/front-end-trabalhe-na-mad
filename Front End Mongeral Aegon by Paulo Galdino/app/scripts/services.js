'use strict';

//angular.module("appGitHub", [])
myAPP.factory('gitService', function() {
      var gitService = {};

      gitService.showPanel = function(){
         $('.hiddenpanel').animate({
            width: "100%",
            'height': "100%",
            opacity: 1.0
          }, 1500 ); 
      }
      
      gitService.hidePanel = function(){
          $('.hiddenpanel').animate({
            'width': "0%",
            'min-height': "0px",
            'opacity': 0
          }, 1500 );
      }
      
      gitService.jumbotronShake = function(){
          $(".jumbotron").effect( 
              "shake", 
              {
                  times:4 , 
                  distance: 100
              }, 
              {
                  duration: 1500,
                  queue: false
              } 
          );
      }
      
      gitService.appendListenerEvent = function(){
          $(".panel").mouseover(function(event){
              $(this).css("background-color","#ddd");
              $(this).children().css("background-color","#ddd");
              $(this).children('.panel-heading').addClass('custom-heading');
              $(this).addClass('transition');
          });
          
          $(".panel").mouseout(function(){
              $(this).children().css("background-color","white");
              $(this).css("background-color","white");
              $(this).children('.panel-heading').removeClass('custom-heading');
              $(this).removeClass('transition');
          });
      }

      return gitService;
});