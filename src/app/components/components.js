import angular from 'angular';
import Home from './home/home';
import Subscribe from './subscribe/subscribe';
import HowItWorks from './how-it-works/how-it-works';

let componentModule = angular.module('app.components', [
    Home,
    Subscribe,
    HowItWorks
]).name;

export default componentModule;
