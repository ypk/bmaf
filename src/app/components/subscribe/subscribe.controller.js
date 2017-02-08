class subscribeController {
    constructor(httpService) {
        this.name = 'Subscribe';
        this.socialService = httpService;
        this.subscriptionEmail = "";
        this.socialData = {};
    }
    $onInit(){
      const socialDataUrl = "/assets/data/subscribe.json";
      this.socialService.getData(socialDataUrl).then((socialResponse) => {
          angular.extend(this.socialData, socialResponse.data);
      }, (error) => {
          throw error;
      });
    }

    onSubmit(){
      console.log("on submit");
    }

    onChange(){
      console.log("on change");
    }
}

export default subscribeController;
