export function DeveloperDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/developer-component/developer.html',
    controller: DeveloperController,
    controllerAs: 'developerCtrl',
    bindToController: true
  };

  return directive;
}

class DeveloperController {
  
  constructor ($scope, $log, githubService) {
    'ngInject';

    this.githubService = githubService
    this.developers = [];
    this.$log = $log;

    $scope.$on('submited', (_, params) => {
      if (params.result){
        this.submited = true;  
        this.getDevelopers();
      }
    });
  }

  getDevelopers(){
    this.githubService.getDevelopers().then((response) => {
            this.developers = response.data;
         }).catch((error) => {
            this.$log.error('XHR Failed for getUsers.\n' + angular.toJson(error.data, true));
        });   
    }
  
}
