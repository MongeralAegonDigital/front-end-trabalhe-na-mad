/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './pages/main/main.controller';
import { DeveloperListController } from './pages/developers/developer.controller'

import { GithubService } from '../app/providers/github-service/github.service';
import { StringService } from '../app/providers/string-service/string.service';
import { PaginationService } from '../app/providers/pagination-service/pagination.service';


import { NavbarDirective } from '../app/components/navbar-component/navbar.directive';
import { DeveloperDirective} from '../app/components/developer-component/developer.directive';
import { FormDirective } from '../app/components/form-component/form.directive';
import { FooterDirective } from '../app/components/footer-component/footer.directive';

angular.module('frontEndTrabalheNaMad', [
 'ngResource', 
 'ui.router', 
 'ui.bootstrap'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubService', GithubService)
  .service('stringService', StringService)
  .service('paginationService', PaginationService)
  .controller('MainController', MainController)
  .controller('DeveloperListController', DeveloperListController)
  .directive('navbarComponent', NavbarDirective)
  .directive('developerComponent', DeveloperDirective)
  .directive('formComponent', FormDirective)
  .directive('footerComponent', FooterDirective);
