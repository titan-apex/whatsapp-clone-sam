import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeiQ6bqNWTQ8qfymlAx_2uRh9K1dWI38A",
  authDomain: "whatsapp-stripped-348aa.firebaseapp.com",
  projectId: "whatsapp-stripped-348aa",
  storageBucket: "whatsapp-stripped-348aa.appspot.com",
  messagingSenderId: "563230176189",
  appId: "1:563230176189:web:da0dc6d8811386c4b1d8d4",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
