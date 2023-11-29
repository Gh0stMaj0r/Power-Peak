import React from 'react';
import './Prices.scss';

import Header from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

const Hinnat = () => {
  return (
      <>
      <Header/>

    <div className='H-Body'>
      <header className="H_Header">
        <h1 className='Header-text'>Hinnasto</h1>
        <div className='underline'></div>
      </header>
      <div className='Paikka'>
      <h1 className='otsikko'>Jäsenyydet</h1>
      
      <div className="container">
  <div className="tuote">1kk</div>
  <div className="hinta1">40€</div>
</div>
<div className="container">
  <div className="tuote">12kk</div>
  <div className="hinta2">400€</div>
</div>
<div className="container">
  <div className="tuote">päivä</div>
  <div className="hinta3">7€</div>
</div>


      
      </div>
      
    </div>

    <Footer/>
    </>
  );
}

export default Hinnat;
