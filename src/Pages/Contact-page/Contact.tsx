import './Contact.scss';
import Header from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { GeoAltFill, EnvelopeAtFill, PhoneFill } from 'react-bootstrap-icons';
import { ArrowRight } from "react-bootstrap-icons";


const Contact = () => {
  return (
    <>
      <Header/>

      <div className='body'>
      <header className="H_Header">
        <h1 className='Hinta-Header'>yhteystiedot</h1>
        </header>
        <hr></hr>
        <div className='con-tekst'>
        <p className='text'>{/*teksi jossa kerrotaan yrityksen taustasta */}
          Power Peak Fitness Center on innovatiivinen kuntosali, 
          joka tarjoaa monipuolisia palveluita 
          kaikenikäisille ja -tasoisille kuntoilijoille.
          <br></br><br></br>
          Sijaitessaan kaupungin keskustassa
          se tarjoaa huippuluokan kuntosalilaitteita,
          monipuolisia ryhmäliikuntatunteja 
          ja henkilökohtaista valmennusta.
          <br></br><br></br>
          Yhteisöllisyys on keskeistä Power Peakissa,
          ja se pyrkii tukemaan jäseniään heidän matkallaan kohti
          terveellisempää elämäntapaa.
        </p>
        <br></br><br></br><br></br>
        </div>
        <h1 className='otsikko'>Tule meidän <br></br>
        kanssa kohti terveellisempää tulevaisuutta</h1>
        <hr></hr>
        <div className='form-contact'>
        <div className='icons'>
          <div className='dmap'> {/*yhteystiedot */}
            <GeoAltFill className='map'></GeoAltFill> <p className='tiedot'>Kotkantie 2a, 90250 Oulu</p>
          </div>
          <div className='dmail'>
            <EnvelopeAtFill className='mail'></EnvelopeAtFill> <p className='tiedot'>powerpeak@gmail.com</p>
          </div>
          <div className='dphone'>
            <PhoneFill className='phone'></PhoneFill> <p className='tiedot'>040-8527345</p>
          </div>
        </div>
        <div className='forms'>
  <form>
    <h1 className='otsikko'>Ota meihin yhteyttä</h1>{/*palaute lomake */}
    <div className='form-nimet'>
      <div className='form-nimi'>
        <input type="text" name='etunimi' placeholder='etunimi' />
      </div>
      <div className='form-nimi2'>
        <input type="text" name='sukunimi' placeholder='sukunimi'/>
      </div>
    </div>
    <input type="email" name='email' placeholder='email'/>
    <input type="phone" name='phone' placeholder='puhelinnumero'/>
    <textarea name="message" id="message" cols={30} rows={10} placeholder='kirjoita viesti'></textarea>
    <div className='con-price-list'>
<div className="con-price-list-button">
  <a className="button-link" href="/ostoskori">
    <div className='form-napit'>
    <div className='tyhjennä'>
  <button type='submit' className="con-yellow-button">Tyhjennä</button>
  </div>
  <div className='lähetä'>
    <button type='reset' className="con-yellow-button">Lähetä</button>
    </div>
    </div>
 </a>
</div>
</div>
  </form>
</div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
