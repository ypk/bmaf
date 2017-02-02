import axios from 'axios';

export class HttpService {
    constructor() {
        this.name = "HttpService";
    }
    getData(api_url){
      return axios.get(api_url)
        .then(
          (response) => response,
          (error) => error
        );
    }
}
