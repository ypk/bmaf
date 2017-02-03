import angular from 'angular';
import Navbar from './navbar/navbar';
import TopHeader from './top-header/top-header';
import NavHeader from './nav-header/nav-header';
import MainFooter from './main-footer/main-footer';
import PrimaryFooter from './primary-footer/primary-footer';
import SecondaryFooter from './secondary-footer/secondary-footer';

let commonModule = angular.module('app.commonModule', [
  TopHeader,
  NavHeader,
  Navbar,
  PrimaryFooter,
  SecondaryFooter,
  MainFooter
]).name;

export default commonModule;
