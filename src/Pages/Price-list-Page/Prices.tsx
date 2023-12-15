import React from 'react';
import './Prices.scss';
import { ArrowRight } from "react-bootstrap-icons";
import Header from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

const Hinnat = () => {
  return (
      <>
      <Header/>

    <div className='H-Body'>
      <header className="H_Header">
        <h1 className='Header-text'>Hinnasto</h1>
        <hr></hr>
      </header>
      <div className='Paikka'>
      <h1 className='otsikko'>JÄSENYYDET</h1>
      
      <div className="container">
  <div className="tuote">1kk</div>
  <div className="hinta1">40€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">12kk</div>
  <div className="hinta2">400€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">kertakäynti</div>
  <div className="hinta3">7€</div>
</div>
<br></br>
<br></br>

<div className='personaltrainer'>
<h1 className='otsikko'>PERSONALTRAINER</h1>

<div className="container">
  <div className="tuote">Tunti</div>
  <div className="hinta2">50€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">4h</div>
  <div className="PRhinta">175€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">6h</div>
  <div className="PRhinta2">250€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">10h</div>
  <div className="PRhinta3">425€</div>
</div>
<p className='PRp'>Kun ostat personaltrainer tunteja voit sopia valitsemasi trainerin
   kassa päivät jolloin haluat hänen avustusta</p>
   </div>
   <div className='personaltrainer'>
<h1 className='otsikko'>TREENIOHJELMA</h1>

<div className="container">
  <div className="tuote">HARDCORE DIET - <br></br>Ravinto- ja treeniohjelma
</div>
  <div className="TRhinta">39,90€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">GET SHREDDED - <br></br>treeniohjelma
</div>
  <div className="TRhinta2">39,90€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">GET HUGE - <br></br>treeniohjelma
</div>
  <div className="TRhinta3">39,90€</div>
</div>
</div>
<div className='personaltrainer'>
<h1 className='otsikko'>RAVITSEMUSOHJELMA</h1>

<div className="container">
  <div className="tuote">6 Kuukautta</div>
  <div className="RMhinta">39,90€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">12 Kuukautta</div>
  <div className="RMhinta2">39,90€</div>
</div>
<p className='RMp'>Ravitsemusohjelmaan sisältyy kolme tapaamista ja yksi koko kehonkoostumusmittaus per kuukausi
+ ruokapäiväkirja, analyysit ja seuranta</p>
</div>
<div className='personaltrainer'>
<h1 className='otsikko'>HIERONTA</h1>

<div className="container">
  <div className="tuote">25min</div>
  <div className="hinta2">30€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">50min</div>
  <div className="hinta2">50€</div>
</div>
<br></br>
<div className="container">
  <div className="tuote">75min</div>
  <div className="Hhinta">75€</div>
</div>
<div className='price-list'>
<div className="price-list-button">
  <p className='nt'>*Tarkemman hinnaston näet</p>
  <a className="button-link" href="/ostoskori">
  <button className="yellow-button">Täältä <ArrowRight></ArrowRight></button>
 </a>
</div>
</div>
      </div>
    </div>
    </div>

    <Footer/>
    </>
  );
}

export default Hinnat;
