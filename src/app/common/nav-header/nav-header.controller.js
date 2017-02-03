class NavHeaderController {
  constructor() {
    this.name = 'NavHeader';
    this.navHeaderData = {};
    this.$onInit = function(){
      angular.extend(this.navHeaderData,this.navData);
    }
  }
}

export default NavHeaderController;
