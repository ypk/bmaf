class NavbarController {
    constructor(httpService) {
        this.name = 'Navbar';
        this.httpService = httpService;
        this.headerData = {};
    }
    $onInit() {
        const dataUrl = "/assets/data/header.json";
        this.httpService.getData(dataUrl).then((response) => {
            angular.extend(this.headerData, response.data);
        }, (error) => {
            throw error;
        });
    }
}
export default NavbarController;
