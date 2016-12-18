export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/pages/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('developers', {
      url: '/developers?username',
      templateUrl: 'app/pages/developers/list.html',
      controller: 'DeveloperListController',
      controllerAs: 'developerListCtrl'
    });

  $urlRouterProvider.otherwise('/home');
}
