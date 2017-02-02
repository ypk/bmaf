class NavbarController {
  constructor(httpService) {
    const dataUrl = "/assets/data/header.json";
    this.name = 'Navbar';
    this.headerData = {};
    this.getHeaderData(httpService, dataUrl);
  }

    getHeaderData(HttpService, dataUrl){
      HttpService.getData(dataUrl)
        .then(
          (response) => {
            let data = response.data;
            this.headerData = data;
          },
          (error) => { console.error(error); }
        );
    }
}

export default NavbarController;
