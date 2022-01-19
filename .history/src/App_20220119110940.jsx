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
import Cat4 from "./components/profiles/4.jsx"
import Cat5 from "./components/profiles/5.jsx"
import Cat6 from "./components/profiles/6.jsx"
import Cat7 from "./components/profiles/7.jsx"
import Cat8 from "./components/profiles/8.jsx"
import Cat9 from "./components/profiles/9.jsx"
import Cat10 from "./components/profiles/10.jsx"
import Cat11 from "./components/profiles/11.jsx"
import Cat12 from "./components/profiles/12.jsx"
import Cat13 from "./components/profiles/13.jsx"



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
          <Route path="/profiles/4" element={<Cat4 />} />
          <Route path="/profiles/5" element={<Cat5 />} />
          <Route path="/profiles/6" element={<Cat6 />} />
          <Route path="/profiles/7" element={<Cat7 />} />
          <Route path="/profiles/8" element={<Cat7 />} />
          <Route path="/profiles/9" element={<Cat7 />} />
          <Route path="/profiles/10" element={<Cat10 />} />
          <Route path="/profiles/11" element={<Cat11 />} />
          <Route path="/profiles/12" element={<Cat12 />} />
          <Route path="/profiles/13" element={<Cat13 />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
