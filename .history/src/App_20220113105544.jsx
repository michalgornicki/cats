import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Database from "./components/Database.jsx"
import Create from "./components/Create.jsx"



const App = {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Database />} />
          <Route path="/Office" element={<Create />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
