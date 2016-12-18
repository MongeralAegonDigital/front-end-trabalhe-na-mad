export class DeveloperListController {
  
  constructor ($scope, $log) {
    'ngInject';

    this.$scope = $scope;
    this.$log = $log;
    this.show = false;
    this.$scope.$on('error', _ => this.show = true)

  }

  


}
