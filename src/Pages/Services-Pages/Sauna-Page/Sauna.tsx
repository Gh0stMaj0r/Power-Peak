import React from "react";

import { ArrowRight } from "react-bootstrap-icons";
import Header from "../../../Components/Header/Navbar";
import Footer from "../../../Components/Footer/Footer";
import './Sauna.scss'

const Sauna = () => {
    return (
        <>
        <Header/>
        {/* Sauna */}
        <section className="sauna">
            <div className="sauna-info">
                <h1>Sauna</h1>
                <hr></hr>
                <div className="sauna-text">
                    <p className="sauna-info-text"> {/* info text about sauna */}
                    Tervetuloa Power Peak -salin ainutlaatuiseen saunaelämykseen! 
                    Luomme rentouttavan ympäristön, jossa voit huoletta irrottautua arjen kiireistä ja antautua täydelliseen rentoutumiseen. 
                    Tutustu tilaviin ja mukavasti varusteltuihin saunatiloihimme, ja anna kehosi levätä rankan treenin jälkeen. 
                    Sauna tarjoaa paikan yhdessäoloon ja rauhoittumiseen – tervetuloa nauttimaan saunaelämyksestä Power Peak -jäsenenä!
                    <br></br><br></br>
                    Jäsenemme voivat nauttia seuraavista saunaeduista:
                    </p>
                    <img className="image-sauna" src="./Images/Sauna.png" alt="" />
                </div>
            </div>

            {/* Sauna benefits */}
            <div className="sauna-benefits">
                <h1>Hyödyt</h1>
                <hr></hr>
                <div className="sauna-benefits-text">
                    <p>
                    1. Palautuminen: Saunominen voi auttaa lieventämään lihasjännitystä ja nopeuttamaan kehon palautumista harjoittelusta.<br></br><br></br>

                    2. Stressin lievitys: Saunassa rentoutuminen on erinomainen tapa vähentää päivittäistä stressiä ja parantaa henkistä hyvinvointia.<br></br><br></br>

                    3. Ihon puhdistus: Saunassa hikoilu auttaa avaamaan ihohuokosia ja poistamaan epäpuhtauksia, mikä voi parantaa ihon kuntoa.<br></br><br></br>

                    4. Sosiaalinen ympäristö: Sauna tarjoaa rennon ympäristön, jossa jäsenet voivat rentoutua yhdessä ja jakaa kokemuksiaan.<br></br><br></br>

                    5. Kokonaisvaltainen hyvinvointi: Saunominen voi tukea yleistä terveyttä ja hyvinvointia, edistäen parempaa unen laatua ja verenkiertoa.
                    </p>
                </div>
                <h3 className="benefits-quote"> {/* Quote */}
                    Tule nauttimaan saunaelämyksestä osana Power Peak -jäsenyyttäsi ja antamaan kehollesi tilaisuus palautua parhaalla mahdollisella tavalla.
                </h3>
            </div>

            {/* Prices */}
            <div className='service-prices'>
                <h1>Hinnat</h1>
                <hr></hr>
                <h3 className="price-list">
                    Sauna mahdollisuus vain salijäsenille, ei mahdollisuutta kertakäyntiin.<br></br><br></br>
                    Pääset nauttimaan saunan lämmöstä liittymällä meidän jäseneksi<br></br>
                    Nyt vain 40€ kuukausihintaan.
                </h3>
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

export default Sauna;