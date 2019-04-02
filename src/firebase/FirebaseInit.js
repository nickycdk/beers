import firebase from 'firebase';
import 'firebase/firestore';
import FirebaseConfig from './FirebaseConfig';

// Init firebase with our config file
const firebaseApp = firebase.initializeApp(FirebaseConfig);

export const fbApp = firebaseApp.firestore();
