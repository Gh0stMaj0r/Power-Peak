import React from 'react';

import './Cookies.scss'
import Cookies from 'js-cookie';
import { useState } from 'react';

const CookieBanner = () => {
    const [isCookieAccepted, setCookieAccepted] = useState(!Cookies.get('cookie_accepted'));
  
    const hideBanner = () => {
      setCookieAccepted(false);
    };
  
    const handleAccept = () => {
      console.log('Evästeet hyväksytty');
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  
      Cookies.set('cookie_accepted', 'true', { expires: oneYearFromNow });
      hideBanner();
    };
  
    const handleReject = () => {
      // Handle rejection logic, e.g., redirect or show a message
      console.log('Evästeet hylätty');
      hideBanner();
    };
  
    if (!isCookieAccepted) {
      return null; // Do not render the banner if the cookie is accepted
    }
  
    return (
      <div className="cookie-banner">
        <h4>Evästekäytäntö</h4>
        <p>Tämä sivusto käyttää evästeitä parantaakseen käyttökokemustasi. Evästeet ovat pieniä tekstitiedostoja, jotka auttavat meitä analysoimaan käyttäjien toimintaa ja tarjoamaan parempia palveluita. 
            Jatkamalla sivuston käyttöä hyväksyt evästeiden käytön. Voit hallita evästeitä selaimesi asetuksista. Lisätietoja tietosuojakäytännöstämme löydät täältä.</p>
        <div className='cookie-buttons'>
            <button className='cookie-accept' onClick={handleAccept}>Hyväksy</button>
            <button className='cookie-reject' onClick={handleReject}>Hylkää</button>
        </div>
      </div>
    );
  };
  
  export default CookieBanner;