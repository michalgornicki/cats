import React, { useEffect } from "react";
import db from "../firebase.config.js";
import { createStore } from "redux";

const Store = () => {
  const reducer = (state = 0, action) => {
    if (action.type === "FETCH_STATE") {
      return (state = action.payload);
    }
  };

  const store = createStore(reducer);

  store.subscribe(() => {
    console.log("current state", store.getState());
  });

  useEffect(() => {
    getUserData();
  }, []);


  const writeUserData = () => {
    Firebase.database().ref("/").set(store.getState());
    console.log("DATA SAVED");
  };

  return "";
};

export default Store;
