import firebase from "firebase/app";
import "firebase/auth";

const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyCzbm-cfG_WG1vXftwpXqcuYXuZ8Ifvsyk",
    authDomain: "cats-a081b.firebaseapp.com",
    projectId: "cats-a081b",
    storageBucket: "cats-a081b.appspot.com",
    messagingSenderId: "639433979518",
    appId: "1:639433979518:web:d815f83bcc4097c1d14a2f"
});

export default Firebase;