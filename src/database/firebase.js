import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDp4oOYXd-Xj4hkH03uC2CGWpGrWcTSc9U",
  authDomain: "goomovil-chat.firebaseapp.com",
  databaseURL: "https://goomovil-chat.firebaseio.com",
  projectId: "goomovil-chat",
  storageBucket: "goomovil-chat.appspot.com",
  messagingSenderId: "892409455742"
};

firebase.initializeApp(config);
export default firebase;
export const db = firebase.firestore();