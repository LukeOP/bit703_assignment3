import Axios from 'axios'

class ApiRequest {
  /**
   * Create a new APIRequest instance.
   *
   * @param {object} data
   */
  constructor (data = false) {
    this.Axios = Axios
    this.url = 'bit703/Assignment3/api/v1/'
    this.data = data

    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  /**
   * Send a GET request to the given URL.
   * @param {string} url
   */
  get (url) {
    return this.submit('get', url)
  }

  post (url) {
    return this.submit('post', url)
  }

  /**
   * Adds a Vuex store to our class
   */
   addStore(store) {
    this.store = store;
  }

  /**
   * Adds a Vuex store to our class
   */
   addAuth() {
    this.headers.Authorization = `Bearer  ${this.store.getters.getToken}`;
  }

  /**
   * Submit the APIRequest.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit (requestType, url) {
    return new Promise((resolve, reject) => {
      this.Axios({
        method: requestType,
        url: this.url + url,
        data: this.data
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error.message)
        })
    })
  }

  storeToken(bearerHeader) {
    const parts = bearerHeader.split(' ');
    if (parts.length === 2) {
      const scheme = parts[0];
      const token = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        this.store.dispatch('login', token);
      }
    }
  }
}

export default ApiRequest
