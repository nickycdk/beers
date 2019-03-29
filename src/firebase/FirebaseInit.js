import firebase from 'firebase'
import 'firebase/firestore'
import FirebaseConfig from './FirebaseConfig'

const firebaseApp = firebase.initializeApp(FirebaseConfig)

console.log("firebase", firebaseApp)

export const app = firebaseApp.firestore()