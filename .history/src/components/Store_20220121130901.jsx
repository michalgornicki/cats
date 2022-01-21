import React, { useEffect } from "react";
import db from "../firebase.config.js";
import Firebase from "firebase";


const Store = () => {
  const reducer = (state = 0, action) => {
    if (action.type === "FETCH_STATE") {
      return (state = action.payload);
    }
  };

  store.subscribe(() => {
    console.log("current state", store.getState());
  });

  const store = createStore(reducer);

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

  return "";
};

export default Store;
