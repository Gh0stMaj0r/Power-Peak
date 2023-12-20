import React from "react";

import '../Policies.scss'
import Header from "../../../Components/Header/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Privacy = () => {
    return (
        <>
        <Header/>

        <section className="policies">
            <h1>Tietosuojakäytäntö</h1>
            <hr></hr>
            <div className="policies2">
                <h2>1. Henkilötietojen kerääminen ja käsittely</h2>
                <p>Power Peak kerää ja käsittelee käyttäjien henkilötietoja seuraavasti:</p>
                <h4>1.1. Rekisteröitymistiedot:</h4><p>Keräämme tiedot, jotka annat meille rekisteröityessäsi palveluumme, kuten nimi, sähköpostiosoite ja käyttäjätunnus.</p>
                <h4>1.2. Palvelun käyttötiedot:</h4><p> Keräämme tietoja siitä, miten käytät palveluamme, mukaan lukien IP-osoitteet, selaimen tiedot, käyttöaika ja muut vastaavat tiedot.</p>
                <h4>1.3. Maksutiedot:</h4><p>Mikäli käytät maksullisia palveluitamme, keräämme tarvittavat maksutiedot suorittaaksemme maksutapahtuman.</p>
            </div>

            <div className="policies2">
                <h2>2. Henkilötietojen käyttötarkoitukset</h2>
                <p>Käytämme kerättyjä henkilötietoja seuraaviin tarkoituksiin:</p>
                <h4>2.1. Palvelun tarjoaminen:</h4><p>Henkilötietoja käytetään palvelumme tarjoamiseen ja ylläpitoon.</p>
                <h4>2.2. Asiakaspalvelu:</h4><p> Henkilötietoja käytetään asiakaspalvelutarkoituksiin ja käyttäjien tukemiseen.</p>
                <h4>2.3. Markkinointi:</h4><p>Voimme käyttää henkilötietoja markkinointitarkoituksiin, kuten lähettämään sinulle ajankohtaista tietoa palveluistamme. 
                    Voit milloin tahansa kieltää markkinointiviestien vastaanoton.</p>
                <h4>2.4. Analytiikka:</h4><p> Keräämme tietoja palvelumme käytöstä analytiikka- ja parannustarkoituksiin.</p>
            </div>

            <div className="policies2">
                <h2>3. Tietojen luovutus kolmansille osapuolille</h2>
                <p>Emme luovuta henkilötietoja kolmansille osapuolille ilman suostumustasi, paitsi mikäli se on laissa sallittua tai vaadittua.</p>
            </div>

            <div className="policies2">
                <h2>4. Tietoturva</h2>
                <p>Power Peak toteuttaa asianmukaisia teknisiä ja organisatorisia toimenpiteitä henkilötietojen suojaamiseksi luvattomalta pääsyltä, paljastumiselta, muuttamiselta ja tuhoamiselta.</p>
            </div>

            <div className="policies2">
                <h2>5. Käyttäjän oikeudet</h2>
                <p>Käyttäjällä on oikeus pyytää pääsyä omiin henkilötietoihinsa, niiden oikaisemista tai poistamista. Käyttäjällä on myös oikeus vastustaa tietojensa käsittelyä tietyissä tilanteissa.</p>
            </div>

            <div className="policies2">
                <h2>6. Muutokset tietosuojakäytäntöön</h2>
                <p>Tämä tietosuojakäytäntö saattaa muuttua aika ajoin. Mahdolliset muutokset julkaistaan verkkosivuillamme, ja jatkamalla palvelumme käyttöä hyväksyt muutokset.</p>
            </div>

            <div className="policies2">
                <h2>7. Tuki</h2>
                <p>Mikäli sinulla on kysyttävää tai huomautettavaa tietosuojakäytännöistämme, ota yhteyttä asiakaspalveluumme yhteydenottolomakkeen kautta josta
                    sinuun otetaan yhteyttä mahdollisimman pian.</p>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Privacy;