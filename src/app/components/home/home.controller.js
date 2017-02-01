class HomeController {
  constructor(httpService) {
    this.name = 'home';

    httpService.getData();
  }
}

export default HomeController;
