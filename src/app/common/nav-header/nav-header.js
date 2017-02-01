import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navHeaderComponent from './nav-header.component';

let navHeaderModule = angular.module('navheader', [
  uiRouter
]).component('navheader', navHeaderComponent).name;

export default navHeaderModule;
