import Vue from 'vue';
import Vuex from 'vuex';

import beers from './beers/index';
import users from './users/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    beers: { ...beers, namespaced: true },
    users: { ...users, namespaced: true }
  },
  strict: true
});
