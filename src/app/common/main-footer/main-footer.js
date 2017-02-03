import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainFooterComponent from './main-footer.component';

let mainFooterModule = angular.module('mainFooter', [
  uiRouter
]).component('mainFooter', mainFooterComponent).name;

export default mainFooterModule;
