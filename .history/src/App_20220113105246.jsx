import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/"



function App() {
  return (
    <Router>
      <div>
        <TopNavbar />

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