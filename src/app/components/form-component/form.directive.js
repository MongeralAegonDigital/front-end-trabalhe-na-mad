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
  constructor ($scope, $log, $state, stringService) {
    'ngInject';

    //Initiliazing some stuffs
    this.$log = $log;
    this.$scope = $scope;
    this.username = '';
    this.submited = false;
    this.$state = $state;
    this.stringService = stringService;


    //Strings constants
    this.BTN_TEXT = '';
    this.USERNAME_STR = '';
    this.TITLE = '';

    //Getting strings
    this.getResource();
    
  }

  getResource(){
    this.stringService.getResource().then((response)=>{
      this.BTN_TEXT = response.data.FORM_COMPONENT.BTN_TEXT;
      this.USERNAME = response.data.FORM_COMPONENT.USERNAME_STR;
      this.TITLE = response.data.FORM_COMPONENT.TITLE;
      
    }, ()=>{})
  }
  

  onSubmit(){
    this.$state.go('developers', {username: this.username});
  }
}
