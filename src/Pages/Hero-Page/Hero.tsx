import React from "react";

import './Hero.scss';
import Header from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ArrowRight } from "react-bootstrap-icons";

const Hero = () => {
    return (
        <>
        <Header/>

        <section className="hero-home">
            <div className="landing">
                <h1>"No pain no gain"</h1>
                <p>Tervetuloa Power Peakille – Kuntosalille, jossa voima kukoistaa ja huippukunto saavutetaan yhdessä!</p>
                <a href="#services"><button className="landing-button">Tutustu!</button></a>
            </div>

            <div className="services" id="services">
                <h1>Palvelut</h1>
                <hr></hr>
                <div className="images">
                    <div className="container">
                        <img className="image" src="./Images/Massage.png" alt="" />
                        <div className="center"> Hieronta </div>
                    </div>
                    <div className="container">
                        <img className="image" src="./Images/Personaltrainer.png" alt="" />
                        <div className="center"> Personaltrainer </div>
                    </div>
                    <div className="container">
                        <img className="image" src="./Images/Sauna.png" alt="" />
                        <div className="center"> Sauna </div>
                    </div>
                </div>
            </div>

            <div className="supplements">
                <h1>Lisäravinteet</h1>
                <hr></hr>
                <div className="supp-text">
                    <p>
                    Tehosta treenisi ja saavuta huippusuorituskyky Leaderin, Supermass Nutritionin ja Sportlife Nutritionin laadukkailla lisäravinteilla! 
                    <br></br>
                    <br></br>
                    Tarjoamme valikoiman huippumerkkejä, jotka tukevat kehitystäsi ja auttavat sinua saavuttamaan fitness-tavoitteesi. 
                    Leaderin tinkimättömät tuotteet, Supermass Nutritionin tehokkaat lisäravinteet ja Sportlife Nutritionin laadukkaat ravintolisät ovat avain parempaan suorituskykyyn ja nopeampaan palautumiseen. 
                    Tutustu valikoimaamme ja vie harjoittelusi uudelle tasolle!
                    </p>
                </div>
                <div className="supp-logos">
                    <img src="./Images/Nutrition.png" alt="" />
                    <img src="./Images/Leader.png" alt="" />
                    <img src="./Images/Sportlife.png" alt="" />
                </div>
                <div className="supp-button">
                    <button className="yellow-button"> Valikoima <ArrowRight></ArrowRight></button>
                </div>
            </div>

            <div className="price-list">
                <h1>Hinnasto</h1>
                <hr></hr>
                <div className="prices">
                    <h2>Jäsenyys</h2>
                    <div className="prices-row">
                        <p>Alkaen</p>
                        <p>40€/kk</p>
                    </div>

                    <h2>Personaltrainer</h2>
                    <div className="prices-row">
                        <p>Alkaen</p>
                        <p>50€/tunti</p>
                    </div>

                    <h2>Ohjelmat</h2>
                    <div className="prices-row">
                        <p>Treeniohjelma Alkaen</p>
                        <p>29,90€</p>
                    </div>
                    <div className="prices-row">
                        <p>Ravitsemusohjelma Alkaen</p>
                        <p>25€/kk</p>
                    </div>

                    <h2>Hieronta</h2>
                    <div className="prices-row">
                        <p>Alkaen</p>
                        <p>30€</p>
                    </div>
                </div>

                <div className="price-list-button">
                    <p>*Tarkemman hinnaston näet</p>
                    <a className="button-link" href="/hinnasto">
                        <button className="yellow-button">Täältä <ArrowRight></ArrowRight></button>
                    </a>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Hero;