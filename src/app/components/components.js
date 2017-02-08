import angular from 'angular';
import Home from './home/home';
import Subscribe from './subscribe/subscribe';

let componentModule = angular.module('app.components', [
    Home,
    Subscribe
]).name;

export default componentModule;
