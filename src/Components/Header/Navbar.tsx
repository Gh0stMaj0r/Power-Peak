import React from 'react'

import { slide as Menu } from 'react-burger-menu'
import './Navbar.scss'

const Header = () => {
    return (
        //Navbar
        <div className="header">
            <a className='logo-link' href='/'><img className='logo' src="./Images/PowerPeak.png" alt="" /></a>
        <div className="header-right">
            <div className='right-navlinks'>
                <div className="dropdown">
                    <a className="dropbtn">Palvelut</a>
                <div className="dropdown-content">
                    <a href='/hieronta'>Hieronta</a>
                    <a href='/trainer'>Personaltrainer</a>
                    <a href='/sauna'>Sauna</a>
                </div>
            </div>
                <a href="/ravinteet">Lisäravinteet</a>
                <a href="/hinnasto">Hinnasto</a>
                <a href="/yhteystiedot">Yhteystiedot</a>
            </div>
            {/* Hamburgerbutton */}
            <Menu isOpen={false} width={ '300px' } right>
                <a id="massage" className="menu-item" href="/hieronta">Hieronta</a>
                <a id="trainer" className="menu-item" href="/trainer">Personaltrainer</a>
                <a id="sauna" className="menu-item" href="/sauna">Sauna</a>
                <a id="supp" className="menu-item" href="/ravinteet">Lisäravinteet</a>
                <a id="price" className="menu-item" href="/hinnasto">Hinnasto</a>
                <a id="contact" className="menu-item" href="/yhteystiedot">Yhteystiedot</a>
            </Menu>
            </div>
        </div>
    )
}

export default Header;