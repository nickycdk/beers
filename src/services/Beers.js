import { ALL_BEERS } from './ApiURLs';
import axios from 'vue-cli-plugin-axios'

export default {

  getAllBeers () {
    return axios({
      method: 'GET',
      url: ALL_BEERS
    })
  },


  getBeerByID(id) {
    return axios({
      method: 'GET',
			url: ALL_BEERS + '/' + `${id}`
		})
	}


}
