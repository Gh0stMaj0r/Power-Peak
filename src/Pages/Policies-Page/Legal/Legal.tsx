import React from "react";

import '../Policies.scss'
import Header from "../../../Components/Header/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Legal = () => {
    return (
        <>
        <Header/>

        <section className="policies">
            <h1>Oikeudelliset tiedot</h1>
            <hr></hr>
            <div className="policies2">
                <h2>1. Yritystiedot</h2>
                <p>Yrityksen nimi: Power Peak <br></br>
                    Osoite: Kotkantie 2a, 90250 Oulu<br></br>
                    Y-tunnus: Y-123456<br></br>
                    Sähköposti: powerpeak@gmail.com<br></br>
                    Puhelin: 040-8527345</p>
            </div>

            <div className="policies2">
                <h2>2. Vastuuvapauslauseke</h2>
                <p>Kaikki verkkosivuillamme oleva tieto on tarkoitettu yleiseksi tiedoksi. 
                    Pyrimme varmistamaan, että tiedot ovat ajantasaisia ja oikeita, mutta emme takaa niiden täydellisyyttä tai virheettömyyttä. 
                    Power Peak ei ole vastuussa mahdollisista vahingoista, jotka johtuvat verkkosivuillamme olevien tietojen käytöstä.</p>
            </div>

            <div className="policies2">
                <h2>3. Immateriaalioikeudet</h2>
                <p>Kaikki oikeudet, kuten tekijänoikeudet, tavaramerkit ja muut immateriaalioikeudet, verkkosivuillamme olevaan materiaaliin kuuluvat Power Peakille tai sen lisenssinantajille. 
                    Materiaalia ei saa käyttää kaupallisiin tarkoituksiin ilman lupaa.</p>
            </div>

            <div className="policies2">
                <h2>4. Kolmansien osapuolten linkit</h2>
                <p>Verkkosivuillamme voi olla linkkejä kolmansien osapuolten sivuille. 
                    Emme ole vastuussa näiden sivustojen sisällöstä tai toiminnasta, ja linkit eivät tarkoita suositusta tai hyväksyntää niiden sisällöstä.</p>
            </div>

            <div className="policies2">
                <h2>5. Sovellettava laki ja riitojen ratkaisu</h2>
                <p>Näihin oikeudellisiin tietoihin sovelletaan Suomen lakia. Mahdolliset riidat pyritään ratkaisemaan ensisijaisesti neuvotteluteitse. 
                    Mikäli neuvottelut eivät johda sopimukseen, riidat ratkaistaan käräjäoikeuden toimesta.</p>
            </div>

            <div className="policies2">
                <h2>6. Muutokset oikeudellisiin tietoihin</h2>
                <p>Pidätämme oikeuden päivittää näitä oikeudellisia tietoja ilmoittamalla siitä verkkosivuillamme. 
                    Jatkamalla palvelumme käyttöä päivitysten jälkeen käyttäjä hyväksyy muutokset.</p>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Legal;