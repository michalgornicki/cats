import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxxxx"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;