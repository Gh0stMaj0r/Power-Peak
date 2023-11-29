import React from 'react'

import './Navbar.scss'

const Header = () => {
    return (
        <div className="header">
            <a className='logo-link' href='/'><img className='logo' src="./Images/PowerPeak.png" alt="" /></a>
        <div className="header-right">
            <a href="/palvelut">Palvelut</a>
            <a href="/ravinteet">Lisäravinteet</a>
            <a href="/hinnasto">Hinnasto</a>
            <a href="/yhteystiedot">Yhteystiedot</a>
            </div>
        </div>
    )
}

export default Header;