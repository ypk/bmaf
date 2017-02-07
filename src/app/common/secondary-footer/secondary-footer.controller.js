import moment from "moment";

class SecondaryFooterController {
  constructor() {
    this.name = 'SecondaryFooter';
    this.companyName = "Yabbadabbadoo";
    this.currentYear = moment().format("YYYY");
  }
}

export default SecondaryFooterController;
