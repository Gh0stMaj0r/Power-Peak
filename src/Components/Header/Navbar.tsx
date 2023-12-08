import React, { useState } from 'react'

import { CartFill } from 'react-bootstrap-icons'
import './Navbar.scss'

const Header = () => {
    return (
        <div className="header">
            <a className='logo-link' href='/'><img className='logo' src="./Images/PowerPeak.png" alt="" /></a>
        <div className="header-right">
        <div className="dropdown">
            <a className="dropbtn">Palvelut</a>
        <div className="dropdown-content">
            <a href='/hieronta'>Hieronta</a>
            <a href='/trainer'>Personaltrainer</a>
            <a href='!#'>Sauna</a>
            </div>
        </div>
            <a href="/ravinteet">Lisäravinteet</a>
            <a href="/hinnasto">Hinnasto</a>
            <a href="/yhteystiedot">Yhteystiedot</a>
            <a href="/ostoskori"><CartFill></CartFill></a>
            </div>
        </div>
    )
}

export default Header;