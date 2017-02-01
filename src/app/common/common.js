import angular from 'angular';
import Navbar from './navbar/navbar';
import TopHeader from './top-header/top-header';
import NavHeader from './nav-header/nav-header';

let commonModule = angular.module('app.commonModule', [
  TopHeader,
  NavHeader,
  Navbar
]).name;

export default commonModule;
