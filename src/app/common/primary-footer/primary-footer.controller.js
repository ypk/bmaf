class PrimaryFooterController {
  constructor(httpService) {
      this.name = 'PrimaryFooter';
      this.footerService = httpService;
      this.footerData = {};
  }
  $onInit() {
      const footerDataUrl = "/assets/data/footer.json";
      this.footerService.getData(footerDataUrl).then((footerResponse) => {
          angular.extend(this.footerData, footerResponse.data);
          console.log(this.footerData)
      }, (error) => {
          throw error;
      });
  }
}

export default PrimaryFooterController;
