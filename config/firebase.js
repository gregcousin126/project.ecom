// import firebase from "firebase";

// export var 

// export var firebaseApp = firebase.initializeApp(FBconfig);

import firebase from 'firebase'
import getters from '../src/store/getters';

var FBconfig = {
  apiKey: "AIzaSyDl6IXHrgNrWy_zgi3EHsC5iYYedp0EZuI",
    authDomain: "xotopolo-f6d40.firebaseapp.com",
    databaseURL: "https://xotopolo-f6d40.firebaseio.com",
    projectId: "xotopolo-f6d40",
    storageBucket: "xotopolo-f6d40.appspot.com",
    messagingSenderId: "96268976320",
    appId: "1:96268976320:web:00856da1431c3f2e3cad25",
    measurementId: "G-7X28W01DVH"
}

firebase.initializeApp(FBconfig);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User log success", user);
      
      func(true, user)
    } else  {
      console.log("User log failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
