import template from './nav-header.html';
import controller from './nav-header.controller';
import './nav-header.scss';

let navHeaderComponent = {
  bindings: {
    navData: '<'
  },
  template,
  controller
};

export default navHeaderComponent;
