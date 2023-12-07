import React from 'react'

import './Trainer.scss'
import { ArrowRight } from 'react-bootstrap-icons';
import Header from '../../../Components/Header/Navbar';
import Footer from '../../../Components/Footer/Footer';

const Trainer = () => {
    return (
        <>
        <Header/>
        
        <section className='personaltrainer'>
            <div className='trainer-info'>
                <h1>Personaltrainer</h1>
                <hr></hr>
                <div className='info-text'>
                    <p className='trainer-text'>Power Peak -salin personal trainer -palvelu tarjoaa sinulle henkilökohtaista ohjausta ja tukea matkallasi kohti parempaa kuntoa. Palvelumme kattaa laajan valikoiman tavoitteisiisi soveltuvia harjoitusohjelmia ja antaa sinulle yksilöllistä neuvontaa:<br></br><br></br>

                        1. Henkilökohtainen suunnitelma: Personal trainer laatii juuri sinulle räätälöidyn harjoitusohjelman, ottaen huomioon tavoitteesi, kunto-tasosi ja mahdolliset rajoitteet.<br></br><br></br>

                        2. Oikea tekniikka: Personal trainer opastaa sinua oikeanlaisessa tekniikassa, mikä vähentää loukkaantumisriskiä ja tehostaa harjoittelua.<br></br><br></br>

                        3. Motivaatio ja tuki: Personal trainer toimii motivaattorina ja tukena, auttaen sinua ylittämään esteet ja pysymään sitoutuneena tavoitteisiisi.<br></br><br></br>

                        4. Muuntojoustavuus: Ohjelmaa voidaan muokata matkan varrella, varmistaen, että se pysyy sopivana kehittyvälle kunto-tasollesi.<br></br><br></br>

                        5. Kokonaisvaltainen hyvinvointi: Personal trainer voi tarjota myös ravitsemusneuvontaa ja elämäntapavinkkejä, jotta voit saavuttaa kokonaisvaltaisen hyvinvoinnin.<br></br><br></br>

                        Power Peak -salin personal trainer -palvelu on investointi terveyteesi ja kuntoosi, tarjoten yksilöllistä ohjausta ja asiantuntijatukea matkallasi kohti parasta versiotasi.</p>
                </div>
            </div>

            <div className='trainer-image'>
                <img className="image" src="./Images/Personaltrainer.png" loading="lazy" alt="" />
            </div>

            <div className='service-prices2'>
                <h1>Hinnat</h1>
                <hr></hr>
                <div className='prices-row'>
                    <p>Tunti</p>
                    <p>50€</p>
                </div>
                <div className='prices-row'>
                    <p>Treeniohjelma Alkaen</p>
                    <p>29,90€</p>
                </div>
                <div className='prices-row'>
                    <p>Ravitsemusohjelma Alkaen</p>
                    <p>160€/kk</p>
                </div>
                <div className='trainer-shop'>
                    <p className='trainer-shop-text'>Kun ostat personaltrainer tunteja voit sopia valitsemasi trainerin kassa päivät jolloin haluat hänen avustusta</p>
                </div>
                <div className='price-button'>
                    <p>*Tarkemman hinnaston näet</p>
                    <a className='button-link' href='/hinnasto'>
                        <button className='yellow-button'>Täältä<ArrowRight></ArrowRight></button>
                    </a>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Trainer;