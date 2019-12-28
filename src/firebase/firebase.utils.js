import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWEbYiDYb95IaCpeJReP4jd6RLZFF6nO8",
  authDomain: "cecom-db.firebaseapp.com",
  databaseURL: "https://cecom-db.firebaseio.com",
  projectId: "cecom-db",
  storageBucket: "cecom-db.appspot.com",
  messagingSenderId: "465793509766",
  appId: "1:465793509766:web:3d86477070354bed766407",
  measurementId: "G-G88D7PN31S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
