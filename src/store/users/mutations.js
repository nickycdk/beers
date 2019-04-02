export default {

  /**
   * Set user information to state
   * @param state
   * @param payload
   */
  setUser (state, payload) {
    if (payload) {
      state.user = payload;
    }
  },

  /**
   * Set users from firebase collection "users" to state in publicUsers
   * @param state
   * @param payload
   */
  setPublicUsers (state, payload) {
    if (payload) {
      state.publicUsers = payload;
    }
  }

};
