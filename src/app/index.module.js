/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubService } from '../app/services/github-service/github.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('frontEndTrabalheNaMad', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubService', GithubService)
  .controller('MainController', MainController)
  .directive('navbarComponent', NavbarDirective)
