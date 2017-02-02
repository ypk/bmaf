class NavHeaderController {
  constructor(httpService) {
    this.name = 'NavHeader';
    this.httpService = httpService;
    this.headerData = {};
  }

  getHeaderData(httpService, dataUrl){
    httpService.getData(dataUrl)
      .then(
        (response) => { let data = response.data;
        this.headerData = data;},
        (error) => { console.error(error); }
      );
  }

  $onInit(){
    console.log("nav geader init");
    const dataUrl = "/assets/data/header.json";
    this.getHeaderData(this.httpService, dataUrl);
  }
}

export default NavHeaderController;
