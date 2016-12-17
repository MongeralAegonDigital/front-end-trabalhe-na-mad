/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './pages/main/main.controller';
import { DeveloperListController } from './pages/developers/developer.controller'

import { GithubService } from '../app/services/github-service/github.service';
import { NavbarDirective } from '../app/components/navbar-component/navbar.directive';
import { DeveloperDirective} from '../app/components/developer-component/developer.directive';
import { FormDirective } from '../app/components/form-component/form.directive';

angular.module('frontEndTrabalheNaMad', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubService', GithubService)
  .controller('MainController', MainController)
  .controller('DeveloperListController', DeveloperListController)
  .directive('navbarComponent', NavbarDirective)
  .directive('developerComponent', DeveloperDirective)
  .directive('formComponent', FormDirective);
