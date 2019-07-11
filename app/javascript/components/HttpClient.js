import axios from 'axios';

class HttpClient {
  post(path, data) {
    return axios.post(path, data);
  }
}

export default HttpClient;
