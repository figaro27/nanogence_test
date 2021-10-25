import firebase from "firebase";

let config = {
  apiKey: "AIzaSyAkUTvNWK68pwQggkLaIqLlwTkaY-zm2Lw",
  authDomain: "nanogence.firebaseapp.com",
  databaseURL: "https://nanogence-default-rtdb.firebaseio.com",
  projectId: "nanogence",
  storageBucket: "nanogence.appspot.com",
  messagingSenderId: "657731175308",
  appId: "1:657731175308:web:0184cf50b2fa1a2001cca9",
  measurementId: "G-G8250DTGL4"
};

firebase.initializeApp(config);

export default firebase;