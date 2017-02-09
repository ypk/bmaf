class HowItWorksController {
  constructor(httpService) {
    this.name = 'How It Works Controller';
    this.hiwService = httpService;
    this.hiwData = {};
  }
  $onInit(){
    const hiwDataUrl = "/assets/data/how-it-works.json";
    this.hiwService.getData(hiwDataUrl).then((hiwResponse) => {
        angular.extend(this.hiwData, hiwResponse.data);
        console.log(hiwResponse.data);
    }, (error) => {
        throw error;
    });
  }
}

export default HowItWorksController;
