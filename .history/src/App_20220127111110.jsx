import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import Database from "./components/Database.jsx";
import Create from "./components/Create.jsx";
import Favourite from "./components/Favourite.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Cat from "./components/profiles/profile.jsx";
import { storage, firebase, db } from "./firebase.config.js";
import Firebase from "firebase";


const App = () => {

  const [data0, setData0] = useState([]);
  const [data1, setData1] = useState([]);
  const [childnum, setChildnum] = useState([]);
  const [usernum, setUsersnum] = useState([]);

  useEffect(() => {
    getCatsData();
    getUsersData();
  }, []);

  const getCatsData = () => {
    let ref = Firebase.database().ref("/cats");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      setData0(stateSnapshot);
      setChildnum(stateSnapshot.length);
    });
  };

  const getUsersData = () => {
    let ref = Firebase.database().ref("/users");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      setData1(stateSnapshot);
      setUsersnum(stateSnapshot.length);
    });
  };

  console.log(data0)
  console.log(data1)

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home data0={data0} />} />
          <Route path="/Database" element={<Database data0={data0} />} />
          <Route path="/Create" element={<Create data0={data0} childnum={childnum} usersnum={usernum} />} />
          <Route path="/Dashboard" element={<Dashboard data0={data0} />} />
          <Route path="/Favourite" element={<Favourite data0={data0} />} />
          <Route path="/profiles/:id" element={<Cat data0={data0} />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
