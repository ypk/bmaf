class TopHeaderController {
  constructor() {
    this.name = 'TopHeader';
    this.topHeaderData = {};
    this.$onInit = function(){
      angular.extend(this.topHeaderData,this.topData);
      console.log(this.topData);
    }
  }
}

export default TopHeaderController;
