import angular from 'angular';
import uiRouter from 'angular-ui-router';
import secondaryFooterComponent from './secondary-footer.component';

let secondaryFooterModule = angular.module('secondaryFooter', [
  uiRouter
]).component('secondaryFooter', secondaryFooterComponent).name;

export default secondaryFooterModule;
