import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navHeaderComponent from './nav-header.component';

let navHeaderModule = angular.module('navHeader', [
  uiRouter
]).component('navHeader', navHeaderComponent).name;

export default navHeaderModule;
