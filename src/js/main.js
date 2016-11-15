import angular from 'angular';

import { ContactController } from './controller/main';

angular
  .module('app', [])
  .controller('ContactController',ContactController );