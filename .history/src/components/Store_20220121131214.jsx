import React, { useEffect, useState } from "react";
import db from "../firebase.config.js";
import Firebase from "firebase";



const Store = () => {

  const [data, setData] = useState([])

  const reducer = (state = 0, action) => {
    if (action.type === "FETCH_STATE") {
      return (state = action.payload);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  
  const getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      setData(stateSnapshot)
    });
  };

  const writeUserData = () => {
    Firebase.database().ref("/").set(data);
    console.log("DATA SAVED");
  };

  return "";
};

export default Store;
