import React from 'react'

import './Massage.scss'
import { ArrowRight } from 'react-bootstrap-icons'
import Header from '../../../Components/Header/Navbar'
import Footer from '../../../Components/Footer/Footer'

const Massage = () => {
    return (
        <>
        <Header/>

        <section className='massage'>
            <div className='massage-info'>
                <h1>Hieronta</h1>
                <hr></hr>
                <div className='massage-text'>
                    <img className="image" src="./Images/Massage.png" loading="lazy" alt="" />
                    <p className='text-info'>
                        Rentoudu ja palauta lihaksesi Power Peak -salin hieronnassa. 
                        Kokeneet hierojamme tarjoavat räätälöityjä hierontapalveluita, jotka auttavat lieventämään lihasjännitystä, parantamaan liikkuvuutta ja edistämään kokonaisvaltaista hyvinvointia. 
                        Hierontamme on suunniteltu tukemaan harjoittelusi tuloksia ja varmistamaan, että kehosi pysyy huippukunnossa. 
                        Anna itsellesi ansaittu hemmotteluhetki ja nauti hieronnan tuomasta rentoutumisesta Power Peak -salilla.
                    </p>
                </div>
            </div>

            <div className='massage-benefits'>
                <h1>Hyödyt</h1>
                <hr></hr>
                <div className='benefits-text'>
                    <p>Hieronnalla on monia terveydellisiä etuja, ja se voi olla erityisen hyödyllistä aktiivisille henkilöille, kuten kuntosalin kävijöille. Hieronnan hyödyt voivat sisältää:<br></br><br></br>

                    1. Lihasjännityksen lieventäminen: Hieronta auttaa rentouttamaan lihaksia, mikä vähentää jännitystä ja parantaa liikkuvuutta.<br></br><br></br>

                    2. Palautuminen: Hieronta edistää nopeampaa palautumista rankan harjoittelun jälkeen, vähentäen lihasväsymystä ja -kipua.<br></br><br></br>

                    3. Verenkierron parantaminen: Hieronta stimuloi verenkiertoa, mikä voi auttaa ravinteiden ja hapen tehokkaammassa kuljettamisessa lihaksiin.<br></br><br></br>

                    4. Stressin lievittäminen: Rentouttava hieronta voi vähentää stressihormonien tasoa ja edistää kokonaisvaltaista hyvinvointia.<br></br><br></br>

                    5. Vammojen ennaltaehkäisy: Säännöllinen hieronta voi auttaa ehkäisemään loukkaantumisia parantamalla lihasten joustavuutta ja vähentämällä rasitusta.<br></br><br></br>

                    6. Immuunijärjestelmän tuki: Hieronta voi auttaa vahvistamaan immuunijärjestelmää, mikä tekee kehosta vastustuskykyisemmän sairauksille.<br></br><br></br>

                    Tämä kaikki yhdessä tekee hieronnasta tehokkaan lisän terveys- ja kunto-ohjelmaan, tarjoten monipuolisia etuja kehollesi.</p>
                    <img className='massage-image' src="./Images/Massage-background2.png" alt="" />
                </div>
            </div>

            <div className='service-prices'>
                <h1>Hinnat</h1>
                <hr></hr>
                <div className='prices-row'>
                    <p>25min</p>
                    <p>30€</p>
                </div>
                <div className='prices-row'>
                    <p>50min</p>
                    <p>50€</p>
                </div>
                <div className='prices-row'>
                    <p>75min</p>
                    <p>75€</p>
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

export default Massage;