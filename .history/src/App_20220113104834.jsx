import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <TopNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Office" element={<Office />} />
          <Route path="/News" element={<News />} />
        </Routes>

        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
