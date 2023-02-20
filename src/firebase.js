import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJXdxjbKsF-br0MmY1LKW1QU86sJu0Mg4",
  authDomain: "clone-28ce7.firebaseapp.com",
  projectId: "clone-28ce7",
  storageBucket: "clone-28ce7.appspot.com",
  messagingSenderId: "1040814734330",
  appId: "1:1040814734330:web:7c8b7a94c8e27523f48243",
  measurementId: "G-SB4HXWFVLB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };