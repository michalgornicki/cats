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
import Cat1 from "./components/profiles/1.jsx";
import Cat2 from "./components/profiles/2.jsx";
import Cat3 from "./components/profiles/3.jsx";
import Cat4 from "./components/profiles/4.jsx";
import Cat5 from "./components/profiles/5.jsx";
import Cat6 from "./components/profiles/6.jsx";
import Cat7 from "./components/profiles/7.jsx";
import Cat8 from "./components/profiles/8.jsx";
import Cat9 from "./components/profiles/9.jsx";
import Cat10 from "./components/profiles/10.jsx";
import Cat11 from "./components/profiles/11.jsx";
import Cat12 from "./components/profiles/12.jsx";
import Cat13 from "./components/profiles/13.jsx";
import Store from "./components/Store.jsx";
import db from "./firebase.config.js";
import Firebase from "firebase";

const App = () => {
  const [data0, setData0] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      setData0(stateSnapshot);
    });
  };

  const writeUserData = () => {
    Firebase.database().ref("/").child(25).set({
      id: "1",
      name: "Minerwa",
      age: 1,
      color: "szary",
      image: "https://i.postimg.cc/c1VV4ShW/1.jpg",
      sex: "kotka",
      region: "Mazowieckie",
      city: "Warszawa",
      phone: "662-848-252",
    });
    console.log("DATA SAVED");
    console.log(Firebase.database().ref("/").length)
  };

  window.onload = writeUserData

  console.log(data0.length)

  var arrayLength = data


  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home data0={data0} />} />
          <Route path="/Database" element={<Database data0={data0} />} />
          <Route path="/Create" element={<Create data0={data0} writeData={writeUserData} />} />
          <Route path="/Dashboard" element={<Dashboard data0={data0} />} />
          <Route path="/Favourite" element={<Favourite data0={data0} />} />
          <Route path="/profiles/1" element={<Cat1 data0={data0} />} />
          <Route path="/profiles/2" element={<Cat2 data0={data0} />} />
          <Route path="/profiles/3" element={<Cat3 data0={data0} />} />
          <Route path="/profiles/4" element={<Cat4 data0={data0} />} />
          <Route path="/profiles/5" element={<Cat5 data0={data0} />} />
          <Route path="/profiles/6" element={<Cat6 data0={data0} />} />
          <Route path="/profiles/7" element={<Cat7 data0={data0} />} />
          <Route path="/profiles/8" element={<Cat8 data0={data0} />} />
          <Route path="/profiles/9" element={<Cat9 data0={data0} />} />
          <Route path="/profiles/10" element={<Cat10 data0={data0} />} />
          <Route path="/profiles/11" element={<Cat11 data0={data0} />} />
          <Route path="/profiles/12" element={<Cat12 data0={data0} />} />
          <Route path="/profiles/13" element={<Cat13 data0={data0} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
