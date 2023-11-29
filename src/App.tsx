import React from 'react';
import './App.css';

import Hero from "./Pages/Hero-Page/Hero";
import Prices from "./Pages/Price-list-Page/Prices"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Hero/>}/>
        <Route
          path='/hinnasto'
          element={<Prices/>}/>
      </Routes>
    </Router>
  );
}

export default App;
