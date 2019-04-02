import BeersService from '../../services/Beers';
import FirebaseService from '../../services/Firebase';

export default {

  /**
   * Action that will get all beers from the Beers API
   * @param commit
   * @returns {Promise<void>}
   */
  async getBeers ({ commit }) {
    try {
      const beers = await BeersService.getAllBeers();
      // Set beers in mutation // See mutations.js
      commit('setBeers', beers);
    } catch (err) {
      console.log(err);
    }
  },
  /**
   * Save beer to firebase and store it in collection "beers", under the user
   * @param commit
   * @param payload
   * @returns {Promise<boolean|never>}
   */
  async saveBeer ({ commit, rootState }, payload) {
    try {
      let beers = await FirebaseService.saveBeer(rootState.users.user.uid, payload);
      return beers;
    } catch (err) {
      console.log('error saving beer list', err);
    }
  },
  async removeBeer ({ commit, dispatch, rootState }, payload) {
    try {
      await FirebaseService.getBeersFromUserID().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let docData = doc.data();
          if (docData.id === payload) {
            FirebaseService.removeBeersFromUser(rootState.users.user.uid, doc.id).then(() => {
              dispatch('getBeersFromUserID');
            });
          }
        });
      });
    } catch (err) {
      console.log('error removing beer', err);
    }
  },
  /**
   * Get users beers saved from firebase and then set data in store with commit()
   * @param commit
   * @returns {Promise<void>}
   */
  async getBeersFromUserID ({ commit, rootState }, payload) {
    console.log('Payload', payload);
    try {
      let beersFromUser = [];
      await FirebaseService.getBeersFromUserID(payload).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          beersFromUser.push(doc.data());
        });
        commit('setBeersFromUser', beersFromUser);
      });
    } catch (err) {
      console.log(err);
    }
  }

};
