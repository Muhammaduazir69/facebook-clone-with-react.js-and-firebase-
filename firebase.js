// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzRYSAD6jkSE8tNoPjMPiXIg3T-E3GlPc",
    authDomain: "facebook-clone-8872c.firebaseapp.com",
    projectId: "facebook-clone-8872c",
    storageBucket: "facebook-clone-8872c.appspot.com",
    messagingSenderId: "561127937884",
    appId: "1:561127937884:web:f088431d9de7d488231399",
    measurementId: "G-9ZBWG498XN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;


