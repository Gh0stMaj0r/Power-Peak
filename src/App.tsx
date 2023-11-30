import React from 'react';
import './App.css';

import Hero from "./Pages/Hero-Page/Hero";
import Massage from './Pages/Services-Pages/Massage-Page/Massage';
import Trainer from './Pages/Services-Pages/Trainer-Page/Trainer';
import Supplements from './Pages/Supplements-Page/Supplements';
import Prices from "./Pages/Price-list-Page/Prices";

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
          path='/hieronta'
          element={<Massage/>}/>
          <Route
          path='/trainer'
          element={<Trainer/>}/>
        <Route
          path='/ravinteet'
          element={<Supplements/>}/>
        <Route
          path='/hinnasto'
          element={<Prices/>}/>
      </Routes>
    </Router>
  );
}

export default App;
