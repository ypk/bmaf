import template from './nav-header.html';
import controller from './nav-header.controller';
import './nav-header.scss';

let navHeaderComponent = {
  restrict: 'E',
  bindings: {
    navData: '<'
  },
  require: 'Navbar',
  template,
  controller
};

export default navHeaderComponent;
