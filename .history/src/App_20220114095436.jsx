import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Database from "./components/Database.jsx"
import Create from "./components/Create.jsx"
import CatProfile from "./components/CatProfile.jsx"
import Login from "./components/Login.jsx"
import { initializeApp } from 'firebase/app';


const App = () => {

  const app = initializeApp(firebaseConfig);


  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Database" element={<Database />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/CatProfile" element={<CatProfile />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
