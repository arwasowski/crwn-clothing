import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCeKQT8SiFk5OukUTQcdis6GMOPhY6-cqY",
  authDomain: "crwn-db-f4f73.firebaseapp.com",
  databaseURL: "https://crwn-db-f4f73.firebaseio.com",
  projectId: "crwn-db-f4f73",
  storageBucket: "",
  messagingSenderId: "660841801252",
  appId: "1:660841801252:web:6b872133c967b969"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
