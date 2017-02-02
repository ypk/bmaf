import template from './top-header.html';
import controller from './top-header.controller';
import './top-header.scss';

let topHeaderComponent = {
  restrict: 'E',
  bindings: {
    headerData: '<'
  },
  template,
  controller
};

export default topHeaderComponent;
