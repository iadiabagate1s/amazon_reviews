
import firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGmts4l2yTWA7SDzJF4ONlkG-1BREAK08",
  authDomain: "dosefinal-assignment.firebaseapp.com",
  databaseURL: "https://dosefinal-assignment.firebaseio.com",
  projectId: "dosefinal-assignment",
  storageBucket: "dosefinal-assignment.appspot.com",
  messagingSenderId: "729168629840",
  appId: "1:729168629840:web:a3180fc7d96b4124e20155",
  measurementId: "G-QJS7J453LC"
  };

  firebase.initializeApp(firebaseConfig);
 

export default firebase