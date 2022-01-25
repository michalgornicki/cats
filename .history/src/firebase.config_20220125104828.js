import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCzbm-cfG_WG1vXftwpXqcuYXuZ8Ifvsyk",
    authDomain: "cats-a081b.firebaseapp.com",
    databaseURL: "https://cats-a081b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cats-a081b",
    storageBucket: "cats-a081b.appspot.com",
    messagingSenderId: "639433979518",
    appId: "1:639433979518:web:d815f83bcc4097c1d14a2f"
  };
  
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const storage = firebase.storage()

  
export default db;