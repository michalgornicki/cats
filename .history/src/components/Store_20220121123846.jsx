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

      const getUserData = () => {
        let ref = Firebase.database().ref("/");
        ref.on("value", (snapshot) => {
          const stateSnapshot = snapshot.val();
          store.dispatch({
            type: "FETCH_STATE",
            payload: stateSnapshot,
          });
        });
      };
    
  

  return (
    ""
  );
};

export default Store;
