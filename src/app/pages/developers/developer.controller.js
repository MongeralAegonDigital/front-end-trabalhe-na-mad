export class DeveloperListController {
  
  constructor ($scope, $state, $log, githubService) {
    'ngInject';

    this.$scope = $scope;
    this.githubService = githubService;
    this.$log = $log;
    this.$log.info("Contruct")

  }


  getDevelopers(){
    if (angular.isDefined(this.$state.params.username) && this.$state.params.username !== ''){
      this.githubService.searchDevelopers(this.$state.params.username)
        .then((response) => {
          this.getInfoAboutDevelopers(response.data.items.map(item => item));
        })
        .catch((error) => {
          this.$log.error('XHR Failed for getUsers.\n' + angular.toJson(error.data, true));
        });  
    
    } else {
      this.githubService.getDevelopers()
        .then((response) => {
          if (response.data.length > 1)
            this.getInfoAboutDevelopers(response.data);
          
        })
        .catch((error) => {
          this.$log.error('XHR Failed for getUsers.\n' + angular.toJson(error.data, true));
        });  
    } 
  }

  getInfoAboutDevelopers(devs){
    this.developers = [];
    let limit = 0
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
                      
        })
        .catch((error) => {
          this.$log.error('XHR Failed for getUsers.\n' + angular.toJson(error.data, true));
      });   
        
    });
  }
}
