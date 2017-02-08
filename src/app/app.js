import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import Common from './common/common';
import Services from './services/services';
import Components from './components/components';
import AppComponent from './app.component';

import 'bootstrap-sass';

angular.module('app', [
    uiRouter,
    ngSanitize,
    Common,
    Services,
    Components
]).config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
}).component('app', AppComponent);
