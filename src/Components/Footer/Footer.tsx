import React from 'react'

import './Footer.scss';
import { Instagram, Facebook, Linkedin, Tiktok } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-links'>
                <h3>Linkit</h3>
                <hr className='hr-footer'></hr>
                <div className='links'>
                    <a href='#palvelut'>Palvelut</a>
                    <a href='#ravinteet'>Lisäravinteet</a>
                    <a href='#hinnasto'>Hinnasto</a>
                    <a href='#yhteystiedot'>Palvelut</a>
                </div>
            </div>

            <div className='footer-contact'>
                <h3>Yhteystiedot</h3>
                <hr className='hr-footer'></hr>
                <div className='maps-contact'>
                    <iframe width={200} src='https://www.w3schools.com' title="W3Schools Free Online Web Tutorials"></iframe>
                    <div className='contact-column'>
                        <p>📩 powerpeak@gmail.com</p>
                        <p>☎️ 040-8527345</p>
                        <p>📍 Osoite</p>
                    </div>
                </div>
            </div>

            <div className='footer-social'>
                <h3>Sosiaalinen media</h3>
                <hr className='hr-footer'></hr>
                <div className='social-links'>
                    <Instagram></Instagram>
                    <Facebook></Facebook>
                    <Linkedin></Linkedin>
                    <Tiktok></Tiktok>
                </div>
                <p>© 2023 Power Peak</p>
                <p>All Rights Reserved</p>
            </div>
        </section>
    )
}

export default Footer;