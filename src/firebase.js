import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN8Iywy5g6qkrf3drLMa87o8JsbTyu28U",
  authDomain: "clone-f4d65.firebaseapp.com",
  projectId: "clone-f4d65",
  storageBucket: "clone-f4d65.appspot.com",
  messagingSenderId: "323199958141",
  appId: "1:323199958141:web:8b95ef445b920e7c2c8514",
  measurementId: "G-WNLTGJ53HV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
