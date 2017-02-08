import angular from 'angular';

class NavbarController {
    constructor(httpService) {
        this.name = 'Navbar';
        this.headerService = httpService;
        this.headerData = {};
    }
    $onInit() {
        const headerDataUrl = "/assets/data/header.json";
        this.headerService.getData(headerDataUrl).then((headerResponse) => {
            angular.extend(this.headerData, headerResponse.data);
        }, (error) => {
            throw error;
        });
    }
}
export default NavbarController;
