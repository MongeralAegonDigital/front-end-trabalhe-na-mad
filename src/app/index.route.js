export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/pages/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('developers', {
      url: '/',
      templateUrl: 'app/pages/developers/list.html',
      controller: 'DeveloperListController',
      controllerAs: 'developerListCtrl'
    });

  $urlRouterProvider.otherwise('/');
}
