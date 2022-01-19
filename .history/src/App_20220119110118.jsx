import React, { useState } from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation.jsx"
import Home from "./components/Home.jsx"
import Database from "./components/Database.jsx"
import Create from "./components/Create.jsx"
import CatProfile from "./components/CatProfile.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Cat1 from "./components/profiles/1.jsx"
import Cat2 from "./components/profiles/2.jsx"
import Cat3 from "./components/profiles/3.jsx"
import Cat3 from "./components/profiles/3.jsx"
import Cat3 from "./components/profiles/3.jsx"
import Cat3 from "./components/profiles/3.jsx"
import Cat3 from "./components/profiles/3.jsx"



const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Database" element={<Database />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CatProfile" element={<CatProfile />} />
          <Route path="/profiles/1" element={<Cat1 />} />
          <Route path="/profiles/2" element={<Cat2 />} />
          <Route path="/profiles/3" element={<Cat3 />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
