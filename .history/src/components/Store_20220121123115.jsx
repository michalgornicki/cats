import React, {useEffect} from "react";
import Firebase from "firebase";
import db from "../firebase.config.js";
import { createStore } from "redux";

const Store = () => {
    
      this.props.store.subscribe(() => {
        console.log("current state", this.props.store.getState());
      });
    
      this.props.store.dispatch({
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
    
      const writeUserData = () => {
        Firebase.database().ref("/").set(store.getState());
        console.log("DATA SAVED");
      };

  return (
    ""
  );
};

export default Store;