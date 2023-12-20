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
      <div className="container2">
      <table>
  <tr>
    <td className="tuote-hinta">1kk</td>
    <td className='tuoteen-hinta'>40€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">12kk</td>
    <td className='tuoteen-hinta'>400€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">kertakäynti</td>
    <td className='tuoteen-hinta'>7€</td>
  </tr>
</table>
</div>
<br></br>
<br></br>

<div className='personaltrainer'>
<h1 className='otsikko'>PERSONALTRAINER</h1>

<div className="container2">
      <table>
  <tr>
    <td className="tuote-hinta">Tunti</td>
    <td className='tuoteen-hinta'>50€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">4h</td>
    <td className='tuoteen-hinta'>175€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">6h</td>
    <td className='tuoteen-hinta'>250€</td>
  </tr>
</table>
</div>
<div className='price-texts'>
<p className='PRp'>Kun ostat personaltrainer tunteja voit sopia valitsemasi trainerin
   kassa päivät jolloin haluat hänen avustusta</p>
   </div>
   </div>
   <div className='personaltrainer'>
<h1 className='otsikko'>TREENIOHJELMA</h1>

<div className="container2">
      <table>
  <tr>
    <td className="tuote-hinta">HARDCORE DIET - <br></br>Ravinto- ja treeniohjelma</td>
    <td className='tuoteen-hinta'>39,90€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">GET SHREDDED - <br></br>treeniohjelma</td>
    <td className='tuoteen-hinta'>39,90€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">GET HUGE - <br></br>treeniohjelma</td>
    <td className='tuoteen-hinta'>39,90€</td>
  </tr>
</table>
</div>
</div>
<div className='personaltrainer'>
<h1 className='otsikko'>RAVITSEMUSOHJELMA</h1>

<div className="container2">
      <table>
  <tr>
    <td className="tuote-hinta">6 Kuukautta</td>
    <td className='tuoteen-hinta'>25€/kk</td>
  </tr>
  <tr>
    <td className="tuote-hinta">12 Kuukautta</td>
    <td className='tuoteen-hinta'>20€/kk</td>
  </tr>
</table>
</div>
<div className='price-texts'>
<p className='RMp'>Ravitsemusohjelmaan sisältyy kolme tapaamista ja yksi koko kehonkoostumusmittaus per kuukausi
+ ruokapäiväkirja, analyysit ja seuranta</p>
</div>
</div>
<div className='personaltrainer'>
<h1 className='otsikko'>HIERONTA</h1>

<div className="container2">
      <table>
  <tr>
    <td className="tuote-hinta">25 min</td>
    <td className='tuoteen-hinta'>30€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">50min</td>
    <td className='tuoteen-hinta'>50€</td>
  </tr>
  <tr>
    <td className="tuote-hinta">75min</td>
    <td className='tuoteen-hinta'>75€</td>
  </tr>
</table>
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
