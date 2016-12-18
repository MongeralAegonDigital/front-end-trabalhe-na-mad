export function DeveloperDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/developer-component/developer.html',
    controller: DeveloperController,
    controllerAs: 'developerCtrl',
    bindToController: true,
  };

  return directive;
}

class DeveloperController {
  
  constructor ($log, $state, $timeout, $scope, githubService, stringService, paginationService) {
    'ngInject';

    //Initilizing some stuffs
    let developerCtrl = this;
    this.paginationService = paginationService;
    this.developersOnScreen = []
    this.paginatedList = [];
    this.currentPage = 1;
    this.totalItems = 0;
    this.itemsPerPage = 0;


    //Angular dependencies
    this.$log = $log;
    this.$state = $state
    this.$scope = $scope;
    this.$timeout = $timeout;
    
    //Custom dependencies
    this.stringService = stringService;
    this.githubService = githubService


    //String constants
    this.TITLE = '';
    this.REPOSITORIES = '';
    this.FOLLOWERS = '';
    this.FILTER = '';
    this.SEE_ON_GITHUB = ''

    this.getResource();

    //Waiting all dependecie of state be resolved
    this.$timeout(_ => developerCtrl.getDevelopers(), 3000)   

  }

  getResource(){
    this.stringService.getResource().then((response)=>{
      this.TITLE = response.data.DEVELOPERS_COMPONENT.TITLE;
      this.FOLLOWERS = response.data.DEVELOPERS_COMPONENT.FOLLOWERS;
      this.REPOSITORIES = response.data.DEVELOPERS_COMPONENT.REPOSITORIES;
      this.FILTER = response.data.DEVELOPERS_COMPONENT.FILTER;
      this.SEE_ON_GITHUB = response.data.DEVELOPERS_COMPONENT.SEE_ON_GITHUB; 
      
    }, ()=>{})
  } 

  getDevelopers(){
    if (angular.isDefined(this.$state.params.username) && this.$state.params.username !== ''){
      this.githubService.searchDevelopers(this.$state.params.username)
        .then(response => this.getInfoAboutDevelopers(response.data.items.map(item => item)))
        .catch(error => this.errorHandler(error));  
    } 
    else {
      this.githubService.getDevelopers()
        .then((response) => { if (response.data.length > 1) this.getInfoAboutDevelopers(response.data) })
        .catch(error => this.errorHandler(error));    
    } 
  }

  getInfoAboutDevelopers(devs){
    this.developers = [];
    let limit = 0;

    angular.forEach(devs, (dev) => {
      this.githubService.getDevelopers(dev['login'], 1)
        .then((response) => {
          dev['followers'] = response.data['followers'];
          dev['public_repos'] = response.data['public_repos'];
          dev['public_gists'] = response.data['public_gists'];
          dev['html_url'] = response.data['html_url'];
          dev['email'] = response.data['email'];
          dev['name'] = response.data['name'];
          this.developers.push(dev);
          limit++;
          if (devs.length === limit){
            this.paginatedList = this.paginationService.pageItems(this.developers);
            
            this.itemsPerPage = this.paginatedList[0].length;
            this.totalItems = this.paginatedList.map(item => item.length).reduce((x, y) => { return x + y }, 0);
            this.pageChanged();
          }
                      
        })
        .catch((error) => {
          this.errorHandler(error);

       });   
        
    });
  }

  setPage(page){
    this.developersOnScreen = this.paginatedList[page-1];
  }

  pageChanged(){
    this.setPage(this.currentPage)
  } 

  errorHandler(error){
    this.$log.error('XHR Failed for getUsers.\n' + angular.toJson(error.data, true));
    this.$scope.$emit('error', {"error": error.data});
  }


  
   
  
}
