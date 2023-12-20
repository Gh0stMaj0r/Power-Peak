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
                    <a href='/palvelut'>Palvelut</a>
                    <a href='/ravinteet'>Lisäravinteet</a>
                    <a href='/hinnasto'>Hinnasto</a>
                    <a href='/yhteystiedot'>Palvelut</a>
                </div>
            </div>

            <div className='footer-links'>
                <h3>Ehdot</h3>
                <hr className='hr-footer'></hr>
                <div className='links'>
                    <a href='/käyttöehdot'>Käyttöehdot</a>
                    <a href='/tietosuoja'>Tietosuojakäytäntö</a>
                    <a href='/oikeustiedot'>Oikeudelliset tiedot</a>
                    <a href='/Eula'>EULA</a>
                </div>
            </div>

            <div className='footer-contact'>
                <h3>Yhteystiedot</h3>
                <hr className='hr-footer'></hr>
                <div className='maps-contact'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1686.1911784004526!2d25.511434178033685!3d64.99966574496885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd4527cadf05%3A0x57ddd24b8aaf0d3d!2sKotkantie%202a%2C%2090250%20Oulu!5e0!3m2!1sfi!2sfi!4v1701941094926!5m2!1sfi!2sfi" width="350" height="200" style={{border:0}} loading="lazy"></iframe>
                    <div className='contact-column'>
                        <p>📩 powerpeak@gmail.com</p>
                        <p>☎️ 040-8527345</p>
                        <p>📍 Kotkantie 2a, 90250 Oulu</p>
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