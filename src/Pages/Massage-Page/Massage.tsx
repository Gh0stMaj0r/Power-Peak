import React from 'react'

import './Massage.scss'
import Header from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer/Footer'

const Massage = () => {
    return (
        <>
        <Header/>

        <section className='massage'>
            <div className='massage-background'>
            </div>

            <div className='massage-info'>
                <h1>Hieronta</h1>
                <hr></hr>
                <div className='massage-text'>
                    <img className="image" src="./Images/Massage.png" alt="" />
                    <p className='text-info'>
                        Rentoudu ja palauta lihaksesi Power Peak -salin hieronnassa. 
                        Kokeneet hierojamme tarjoavat räätälöityjä hierontapalveluita, jotka auttavat lieventämään lihasjännitystä, parantamaan liikkuvuutta ja edistämään kokonaisvaltaista hyvinvointia. 
                        Hierontamme on suunniteltu tukemaan harjoittelusi tuloksia ja varmistamaan, että kehosi pysyy huippukunnossa. 
                        Anna itsellesi ansaittu hemmotteluhetki ja nauti hieronnan tuomasta rentoutumisesta Power Peak -salilla.
                    </p>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Massage;