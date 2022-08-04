import fetch from 'node-fetch';

class BaseAPI {
  createOptions(method, payload) {
    let options;
    switch (method) {
      case 'GET':
        options = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        };
        break;
      case 'POST':
        options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: payload,
        };
        break;
      default:
        break;
    }
    return options;
  }

  async getRequest(url) {
    const option = this.createOptions('GET');
    return await fetch(url, option);
  }

  async postRequest(url, payload) {
    const option = this.createOptions('POST', payload);
    return await fetch(url, option);
  }
}
export default new BaseAPI();
