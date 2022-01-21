import React, { useEffect, useState } from "react";




const Store = () => {

  const [data, setData] = useState([])



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
