import React from "react";

import '../Policies.scss'
import Header from "../../../Components/Header/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Terms = () => {
    return (
        <>
        <Header/>

        <section className="policies">
            <h1>Käyttöehdot</h1>
            <hr></hr>
            <div className="policies2">
                <h2>1. Yleistä</h2>
                <p>Tervetuloa Power Peak palveluun! Näillä käyttöehdoilla määritellään osapuolten oikeudet ja velvollisuudet palvelun käytössä. 
                    Käyttämällä palveluamme hyväksyt nämä ehdot kokonaisuudessaan. Mikäli et hyväksy näitä ehtoja, pyydämme sinua pidättäytymään palvelumme käytöstä.</p>
            </div>

            <div className="policies2">
                <h2>2. Palvelun kuvaus</h2>
                <p>Power Peak tarjoaa kuntosalipalveluita kuten personaltrainer ja hieronta sekä lisäravinteita laadukkailta merkeiltä. 
                    Palvelun tai tuotteen tarkemmat tiedot ovat nähtävissä verkkosivuillamme.</p>
            </div>

            <div className="policies2">
                <h2>3. Käyttäjän velvollisuudet</h2>
                <p>Käyttäjä sitoutuu käyttämään palvelua lain ja hyvien tapojen mukaisesti. 
                    Käyttäjä vastaa antamiensa tietojen oikeellisuudesta ja on velvollinen säilyttämään salasanansa turvallisesti.</p>
            </div>

            <div className="policies2">
                <h2>4. Tietosuoja ja GDPR</h2>
                <p>Power Peak noudattaa EU:n yleistä tietosuoja-asetusta (GDPR). 
                    Käyttäjän antamia henkilötietoja käsitellään tietosuojaselosteemme mukaisesti. Käyttäjällä on oikeus pyytää tietojensa tarkastusta, korjausta tai poistoa.</p>
            </div>

            <div className="policies2">
                <h2>5. Evästeet</h2>
                <p>Käytämme evästeitä parantaaksemme palvelumme laatua. Käyttäjä hyväksyy evästeiden käytön jatkamalla palvelun käyttöä.</p>
            </div>

            <div className="policies2">
                <h2>6. Hinnat ja maksuehdot</h2>
                <p>Palvelun hinnat ilmoitetaan verkkosivuillamme. Maksuehdot, kuten maksutavat ja mahdolliset maksurajoitukset, määritellään erillisissä sopimuksissa tai kassalla.</p>
            </div>

            <div className="policies2">
                <h2>7. Vastuunrajoitukset</h2>
                <p>Power Peak ei ole vastuussa välittömistä tai välillisistä vahingoista, jotka johtuvat palvelumme käytöstä tai siitä, ettei palvelu ole käytettävissä.</p>
            </div>

            <div className="policies2">
                <h2>8. Sopimuksen purkaminen</h2>
                <p>Käyttäjällä on oikeus lopettaa palvelun käyttö milloin tahansa. Power Peak voi irtisanoa palvelun käyttöoikeuden, mikäli käyttäjä rikkoo näitä käyttöehtoja.</p>
            </div>

            <div className="policies2">
                <h2>9. Sovellettava laki ja riitojen ratkaisu</h2>
                <p>Näihin käyttöehtoihin sovelletaan Suomen lakia. Mahdolliset riidat pyritään ratkaisemaan ensisijaisesti neuvotteluteitse. 
                    Mikäli neuvottelut eivät johda sopimukseen, riidat ratkaistaan käräjäoikeuden toimesta.</p>
            </div>

            <div className="policies2">
                <h2>10. Muut ehdot</h2>
                <p>Pidätämme oikeuden päivittää näitä käyttöehtoja ilmoittamalla siitä verkkosivuillamme. 
                    Jatkamalla palvelumme käyttöä päivitysten jälkeen käyttäjä hyväksyy muutokset.</p>
            </div>

            <div className="policies2">
                <h2>11. Tuki</h2>
                <p>Mikäli sinulla on kysyttävää tai huomautettavaa, ota yhteyttä asiakaspalveluumme yhteydenottolomakkeen kautta josta
                    sinuun otetaan yhteyttä mahdollisimman pian.</p>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Terms;