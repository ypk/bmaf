import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HowItWorksComponent from './how-it-works.component';

let HowItWorksModule = angular.module('howItWorks', [
    uiRouter
]).config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home.howItWorks', {
            url: '/',
            component: 'howItWorks'
        });
}).component('howItWorks', HowItWorksComponent).name;

export default HowItWorksModule;
