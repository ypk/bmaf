import angular from 'angular';
import uiRouter from 'angular-ui-router';
import topHeaderComponent from './top-header.component';

let topHeaderModule = angular.module('topheader', [
  uiRouter
]).component('topheader', topHeaderComponent).name;

export default topHeaderModule;
