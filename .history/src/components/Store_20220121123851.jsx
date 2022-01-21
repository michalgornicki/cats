import React, {useEffect} from "react";
import Firebase from "firebase";
import db from "../firebase.config.js";
import { createStore } from "redux";

const Store = (store) => {
    
      store.subscribe(() => {
        console.log("current state", store.getState());
      });
    
      store.dispatch({
        type: "INCREMENT",
      });
    
      useEffect(() => {
        getUserData();
      }, []);


    
      const writeUserData = () => {
        Firebase.database().ref("/").set(store.getState());
        console.log("DATA SAVED");
      };

  return (
    ""
  );
};

export default Store;
