import axios from 'axios';

export class HttpService {
    constructor() {
        this.name = "HttpService";
    }
    getData(){
      axios.get("//jsonplaceholder.typicode.com/posts/1").then(function(data) {
          console.log(data);
      }).catch(function(error) {
          console.log(error);
      });
    }
}
