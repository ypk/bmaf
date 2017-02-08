import angular from 'angular';
import uiRouter from 'angular-ui-router';
import subscribeComponent from './subscribe.component';

let subscribeModule = angular.module('subscribe', [
    uiRouter
]).config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home.subscribe', {
            url: '/',
            component: 'subscribe'
        });
}).component('subscribe', subscribeComponent).name;

export default subscribeModule;
