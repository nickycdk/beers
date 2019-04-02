import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state: {
    publicUsers: null,
    user: null,
    showBeersFromUserId: 'gRlqBjPmHUcDpgvP9MVtY7BNtz12'
  },
  getters,
  mutations,
  actions
};
