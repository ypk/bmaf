class NavbarController {
  constructor(httpService) {
    const dataUrl = "/assets/data/header.json";

    this.name = 'Navbar';
    this.headerData = {};

    httpService.getData(dataUrl)
      .then(
        (response) => {
          this.headerData = response.data;
        },
        (error) => { throw error; }
      );
  }
}

export default NavbarController;
