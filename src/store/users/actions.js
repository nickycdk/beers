import FirebaseService from '../../services/Firebase';

export default {
  /**
   * Action that will get all beers from the Beers API
   * @param commit
   * @returns {Promise<void>}
   */
  async signInUser ({ commit }, payload) {
    try {
      const user = await FirebaseService.SignInUser(payload.email, payload.password);
      if (user) {
        const currentUser = {
          uid: user.user.uid,
          email: user.user.email
        };
        commit('setUser', currentUser);
        return user;
      }
    } catch (err) {
      console.log('error', err);
      throw new Error(err);
    }
  },

  /**
   * Get all users from firebase from users collection
   * @param commit
   * @returns {Promise<void>}
   */
  async getUsers ({ commit }) {
    try {
      let usersArr = [];
      await FirebaseService.getUsers().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          usersArr.push(doc.data());
        });
        commit('setPublicUsers', usersArr);
      });
    } catch (err) {
      console.log('cant get users', err);
    }
  }

};
