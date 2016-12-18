export function DeveloperDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/developer-component/developer.html',
    controller: DeveloperController,
    controllerAs: 'developerCtrl',
    bindToController: true,
    scope: {
        developers: '='
    }
  };

  return directive;
}

class DeveloperController {
  
  constructor ($scope, $log, githubService, stringService) {
    'ngInject';

    //Initilizing some stuffs
    this.githubService = githubService
    this.$scope = $scope;
    this.developers = this.$scope.developers;
    this.$log = $log;
    this.stringService = stringService;


    //String constants
    this.TITLE = '';
    this.REPOSITORIES = '';
    this.FOLLOWERS = '';
    this.FILTER = '';

    this.getResource();
       
  }

  getResource(){
    this.stringService.getResource().then((response)=>{
      this.TITLE = response.data.DEVELOPERS_COMPONENT.TITLE;
      this.FOLLOWERS = response.data.DEVELOPERS_COMPONENT.FOLLOWERS;
      this.REPOSITORIES = response.data.DEVELOPERS_COMPONENT.REPOSITORIES;
      this.FILTER = response.data.DEVELOPERS_COMPONENT.FILTER;
      
    }, ()=>{})
  }



  
   
  
}
