 import firebase from 'firebase'
 import "firebase/firestore" 
 import 'firebase/database'

 var firebaseConfig = {
    apiKey: "AIzaSyDfRwM-eIINVaW4odXsWyBm4y48LUlbPow",
    authDomain: "project-login-1d8e3.firebaseapp.com",
    projectId: "project-login-1d8e3",
    storageBucket: "project-login-1d8e3.appspot.com",
    messagingSenderId: "724319303374",
    appId: "1:724319303374:web:b95d14842ea8626a21429f",
    measurementId: "G-C86TK5XCBG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore ()
  const bd = firebase.database()

  export default {
    firebase, db, bd
  }
    

  