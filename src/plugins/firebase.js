
import Firebase from 'firebase';

Firebase.initializeApp({
  apiKey: "AIzaSyBtbjTCvbgjYEfvPTuqCDdwFOT3zX7om-c",
  authDomain: "autentificacion-e2a2c.firebaseapp.com",
  projectId: "autentificacion-e2a2c",
  storageBucket: "autentificacion-e2a2c.appspot.com",
  messagingSenderId: "945833721761",
  appId: "1:945833721761:web:3ecfeac5a96866aa3f15e0"
});

export const DB = Firebase.firestore();
