import React from 'react';
import './App.css';

import Hero from "./Pages/Hero-Page/Hero";
import Massage from './Pages/Services-Pages/Massage-Page/Massage';
import Trainer from './Pages/Services-Pages/Trainer-Page/Trainer';
import Sauna from './Pages/Services-Pages/Sauna-Page/Sauna';
import Supplements from './Pages/Supplements-Page/Supplements';
import Prices from "./Pages/Price-list-Page/Prices";
import Contact from './Pages/Contact-page/Contact';
import ShoppingCart from './Pages/ShoppingCart-Page/Shoppingcart';

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
          path='/sauna'
          element={<Sauna/>}/>
        <Route
          path='/ravinteet'
          element={<Supplements/>}/>
        <Route
          path='/hinnasto'
          element={<Prices/>}/>
        <Route
          path='/yhteystiedot'
          element={<Contact/>}/>
        <Route
          path='/ostoskori'
          element={<ShoppingCart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
