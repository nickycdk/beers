import { ALL_BEERS } from './ApiURLs';
import axios from 'axios';
export default {

  /**
   * Get all beers from beers API
   * @returns {AxiosPromise}
   */
  getAllBeers () {
    return axios({
      method: 'GET',
      url: ALL_BEERS
    });
  },

  /**
   * Get specific beer from beers API  (Currently not in use)
   * @param id
   * @returns {AxiosPromise}
   */
  getBeerByID (id) {
    return axios({
      method: 'GET',
      url: ALL_BEERS + '/' + `${id}`
    });
  }

};
