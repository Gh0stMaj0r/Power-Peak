import React from "react";

import '../Policies.scss'
import Header from "../../../Components/Header/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Eula = () => {
    return (
        <>
        <Header/>

        <section className="policies">
            <h1>EULA</h1>
            <hr></hr>
            <div className="policies2">
                <h2>TÄRKEÄÄ: LUE TÄMÄ SOPIMUS HUOLELLISESTI ENNEN KUIN ASENNAT TAI KÄYTÄT OHJELMISTOA.</h2>
                <p>Tämä Loppukäyttäjän Käyttöoikeussopimus ("Sopimus") on oikeudellinen sopimus sinun (joko yksilön tai yhden oikeushenkilön) ja [Yrityksesi nimi] ("Myöntäjä") välillä ohjelmistotuotteesta, joka on yllä määritelty ja joka sisältää tietokoneohjelmiston sekä siihen liittyvät mediat, painetut materiaalit ja "online" tai sähköiset asiakirjat ("Ohjelmisto"). Asentamalla, kopioimalla tai muutoin käyttämällä Ohjelmistoa suostut sitoutumaan tämän Sopimuksen ehtoihin. 
                    Mikäli et hyväksy tämän Sopimuksen ehtoja, palauta käyttämätön Ohjelmisto siihen paikkaan, josta sait sen, ja saat täyden hyvityksen.</p>
            </div>

            <div className="policies2">
                <h2>KÄYTTÖOIKEUDEN MYÖNTÄMINEN</h2>
                <p>Tämän Sopimuksen ehtojen ja edellytysten mukaisesti Myöntäjä myöntää sinulle ei-yksinomaisen, siirrettävän käyttöoikeuden käyttää Ohjelmistoa yhdellä tietokoneella, edellyttäen, 
                    että Ohjelmistoa käytetään vain yhdellä tietokoneella kerrallaan.</p>
            </div>

            <div className="policies2">
                <h2>RAJOITUKSET</h2>
                <p>Et saa vuokrata, lisensoida, alilisensoida, jakaa, lainata tai siirtää Ohjelmistoa tai mitään oikeuksia käyttää Ohjelmistoa. 
                    Et saa muokata, purkaa, dekompiloida tai purkaa Ohjelmistoa tai luoda johdannaisteoksia Ohjelmistosta.</p>
            </div>

            <div className="policies2">
                <h2>TEKIJÄNOIKEUS</h2>
                <p>Ohjelmisto on Myöntäjän omaisuutta ja sitä suojaa tekijänoikeuslait ja kansainväliset sopimusmääräykset. 
                    Et saa poistaa tekijänoikeusilmoituksia Ohjelmistosta.</p>
            </div>

            <div className="policies2">
                <h2>RAJOITETTU TAKUU</h2>
                <p>Ohjelmisto tarjotaan "sellaisenaan" ilman mitään nimenomaista tai oletettua takuuta, 
                    mukaan lukien mutta ei rajoittuen kaikki välittömät tai välilliset takuut kaupallisesta soveltuvuudesta ja tietyn tarkoituksen sopivuudesta.</p>
            </div>

            <div className="policies2">
                <h2>VASTUUNRAJOITUS</h2>
                <p>Sovellettavan lain sallimassa laajuudessa ei Myöntäjä eikä sen toimittajat ole vastuussa mistään erityisistä, satunnaisista, 
                    välillisistä tai seuraamuksellisista vahingoista (mukaan lukien, ilman rajoitusta, liiketoiminnan voittojen menetys, liiketoiminnan keskeytyminen, liiketoimintatiedon menetys tai muu taloudellinen menetys), 
                    joka johtuu Ohjelmiston käytöstä tai kyvyttömyydestä käyttää Ohjelmistoa.</p>
            </div>

            <div className="policies2">
                <h2>SOPIMUKSEN PÄÄTTYMINEN</h2>
                <p>Ilman että muut oikeudet vaarantuvat, Myöntäjä voi päättää tämän Sopimuksen, jos et noudata tämän Sopimuksen ehtoja ja edellytyksiä. 
                    Tällöin sinun on tuhottava kaikki Ohjelmiston kopiot ja sen osat.</p>
            </div>

            <div className="policies2">
                <h2>SOVELLETTAVA LAKI</h2>
                <p>Tätä Sopimusta hallitsevat ja tulkitaan Suomen laista, ilman viittausta sen lainvalintaa koskeviin säännöksiin.</p>
            </div>

            <div className="policies2">
                <h2>KOKONAISUUDEN MUODOSTAVA SOPIMUS</h2>
                <p>Tämä Sopimus muodostaa osapuolten välillä koko sopimuksen ja korvaa kaikki aiemmat tai samanaikaiset suulliset tai kirjalliset sopimukset tai ymmärrykset Ohjelmistosta.</p>
            </div>

            <div className="policies2">
                <h2>Asentamalla tai käyttämällä Ohjelmistoa myönnät lukeneesi tämän Sopimuksen, ymmärtäneesi sen ja suostuneesi sitoutumaan sen ehtoihin ja edellytyksiin.</h2>
                <p>Power Peak<br></br>
                    Kotkantie 2a, 90250 Oulu<br></br>
                    20.12.2023</p>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Eula;