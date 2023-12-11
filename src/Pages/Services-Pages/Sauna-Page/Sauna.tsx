import React from "react";

import Header from "../../../Components/Header/Navbar";
import './Sauna.scss'

const Sauna = () => {
    return (
        <>
        <Header/>

        <section className="sauna">
            <div className="sauna-info">
                <h1>Sauna</h1>
                <hr></hr>
                <div className="sauna-text">
                    <p className="sauna-info-text">
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
                <h3 className="benefits-quote">
                    Tule nauttimaan saunaelämyksestä osana Power Peak -jäsenyyttäsi ja antamaan kehollesi tilaisuus palautua parhaalla mahdollisella tavalla.
                </h3>
            </div>
        </section>
        </>
    )
}

export default Sauna;