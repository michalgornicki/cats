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
import Firebase from "firebase";

const App = () => {

  const [catsData, setCatsData] = useState([]);
  const [childnum, setChildnum] = useState([]);

  useEffect(() => {
    getCatsData();
  }, []);

  const getCatsData = () => {
    let ref = Firebase.database().ref("/cats");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      setCatsData(stateSnapshot);
      setChildnum(stateSnapshot.length);
    });
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home data0={data0} />} />
          <Route path="/Database" element={<Database data0={data0} />} />
          <Route path="/Create" element={<Create data0={data0} childnum={childnum} />} />
          <Route path="/Dashboard" element={<Dashboard data0={data0} />} />
          <Route path="/Favourite" element={<Favourite data0={data0} />} />
          <Route path="/profiles/:id" element={<Cat data0={data0} />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
