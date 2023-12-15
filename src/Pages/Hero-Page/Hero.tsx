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
                        <a href="/hieronta"><img className="image" src="./Images/Massage.png" loading="lazy" alt=""/></a>
                        <div className="center"> Hieronta </div>
                    </div>
                    <div className="container">
                        <a href="/trainer"><img className="image" src="./Images/Personaltrainer.png" loading="lazy" alt="" /></a>
                        <div className="center"> Personaltrainer </div>
                    </div>
                    <div className="container">
                        <a><img className="image" src="./Images/Sauna.png" loading="lazy" alt="" /></a>
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
                    <img className="logo" src="./Images/Nutrition.png" loading="lazy" alt="" />
                    <img className="logo" src="./Images/Leader.png" loading="lazy" alt="" />
                    <img className="logo" src="./Images/Sportlife.png" loading="lazy" alt="" />
                </div>
                <div className="supp-button">
                    <a className="button-link" href="/ravinteet">
                        <button className="yellow-button"> Valikoima <ArrowRight></ArrowRight></button>
                    </a>
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
                        <p className="program">Treeniohjelma Alkaen</p>
                        <p className="progg-price">29,90€</p>
                    </div>
                    <div className="prices-row">
                        <p className="program">Ravitsemusohjelma Alkaen</p>
                        <p className="progg-price">25€/kk</p>
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