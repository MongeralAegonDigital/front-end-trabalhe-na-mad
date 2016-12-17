export class GithubService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'https://api.github.com/users';
  }

  getDevelopers(limit=30) {
    this.$log.info("Catch data from api");
    return this.$http.get(this.apiHost + '?per_page=' + limit);
  }

}
