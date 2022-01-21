import React, { useEffect } from "react";
import Firebase from "firebase";
import db from "../firebase.config.js";
import { createStore } from "redux";

const Store = () => {

  this.store.subscribe(() => {
    console.log("current state", this.store.getState());
  });

  this.store.dispatch({
    type: "INCREMENT",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      this.store.dispatch({
        type: "FETCH_STATE",
        payload: stateSnapshot,
      });
    });
  };

  const writeUserData = () => {
    Firebase.database().ref("/").set(this.store.getState());
    console.log("DATA SAVED");
  };

  return ("");
};

export default Store;
