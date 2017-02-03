import angular from 'angular';
import uiRouter from 'angular-ui-router';
import primaryFooterComponent from './primary-footer.component';

let primaryFooterModule = angular.module('primaryFooter', [
  uiRouter
]).component('primaryFooter', primaryFooterComponent).name;

export default primaryFooterModule;
