import firebase from 'firebase';
import { fbApp } from '../firebase/FirebaseInit';

// Holding collection name for Firebase
const BEER_COLLECTION = 'beers';

export default {
  /**
   * Sign in user with firebase api with provided username and password
   * @param email : string
   * @param pass : string
   * @returns {Promise<firebase.auth.UserCredential>}
   * @constructor
   */
  // TODO: refactor name of function
  SignInUser (email, pass) {
    return firebase.auth().signInWithEmailAndPassword(email, pass);
  },

  /**
   * As firebase set() method doesnt return anything, we'll return true so we can act from that value
   * @param userId
   * @param beerList
   * @returns {Promise<boolean | never>}
   */
  saveBeer (userId, beer) {
    return fbApp.collection(BEER_COLLECTION).doc(userId).collection(BEER_COLLECTION).add(beer).then(() => {
      return true;
    }).catch((error) => {
      return error;
    });
  },

  /**
   * Get all beers from user
   * @param userId
   * @returns {Promise<firebase.firestore.QuerySnapshot>}
   */
  getBeersFromUserID (userId) {
    return fbApp.collection(BEER_COLLECTION).doc(userId).collection(BEER_COLLECTION).get();
  },

  /**
   * Remove beer from user
   * @param userId
   * @param document
   * @returns {Promise<void>}
   */
  removeBeersFromUser (userId, document) {
    return fbApp.collection(BEER_COLLECTION).doc(userId).collection(BEER_COLLECTION).doc(document).delete();
  },

  /**
   * Get all users from Firebase
   * @returns {Promise<firebase.firestore.QuerySnapshot>}
   */
  getUsers () {
    return fbApp.collection('users').get();
  }

};
