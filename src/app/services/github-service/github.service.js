export class GithubService {
  constructor ($log, $http, stringService) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.stringService = stringService;
    this.apiHost = '';
    this.token = '';
    this.getResource();


    
  }

  getResource(){
    this.stringService.getResource().then((response)=>{
      this.apiHost = response.data.API_BASE;
      this.token = response.data.API_TOKEN;
    }, ()=>{})
  }

  getDevelopers(username, limit=30) {
    this.$log.info(username);
    let options = {
      url: this.apiHost + '/users' + (angular.isUndefined(username) ? '' : '/' + username ),
      method: 'GET',
      params: {
        'per_page': limit
      },
      headers: {
        'Authorization': "Bearer " + this.token
      }
    }
    return this.$http(options);
  }

  searchDevelopers(username){
    let options = {
      url: this.apiHost + '/search/users',
      method: 'GET',
      params: {
        'q': username
      },
      headers: {
        'Authorization': "Bearer " + this.token
      }
    }
    return this.$http(options);
  }
}
