import template from './top-header.html';
import controller from './top-header.controller';
import './top-header.scss';

let topHeaderComponent = {
  bindings: {
    topData: '<'
  },
  template,
  controller
};

export default topHeaderComponent;
