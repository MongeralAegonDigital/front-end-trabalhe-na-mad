export function FormDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/form-component/form.html',
    controller: FormController,
    controllerAs: 'formCtrl',
    bindToController: true
  };

  return directive;
}

class FormController {
  constructor ($scope, $log, githubService) {
    'ngInject';

    this.githubService = githubService
    this.$log = $log;
    this.$scope = $scope;
    this.name = '';
    this.email = '';
    this.submited = false;
  }

  onSubmit(){
    this.$log.info("Submiting form");
    this.$log.info(this.name);
    this.$log.info(this.email);

    if (this.name !== '' && this.email !== '')
      this.submited = true;
      this.$scope.$broadcast('submited', {result: true})   
  }
}
