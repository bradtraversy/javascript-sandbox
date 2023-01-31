import axios from 'axios';

class IdeasApi {
  constructor() {
    this._apiUrl = 'http://localhost:5000/api/ideas';
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }
}

export default new IdeasApi();
