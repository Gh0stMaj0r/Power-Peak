import './Form.scss';
import Header from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";


const Form = () => {
    return (
      <>
      <Header/>
      <header className='H-Header'>
        <br></br>
      <h1 className='form-otsikko'>jäsenyys lomake</h1>
              <hr></hr>
      </header>
      <div className='lomake'>
      <form>
        <div className='form-alaots'>
    <h1 className='otsikko'>sinun tiedot</h1>
    </div>
    <div className='form-nimet'>
      <div className='form-nimi'>
        <input type="text" name='etunimi' placeholder='etunimi' />
      </div>
      <div className='form-nimi2'>
        <input type="text" name='sukunimi' placeholder='sukunimi'/>
      </div>

    </div>

    <label >Syntymäpäivä:</label>
  <input type="date" id="birthday" name="birthday"/>
  <label >Sähköposti:</label>
    <input type="email" name='email' placeholder='email'/>
    <label >Puhelinnumero:</label>
    <input type="phone" name='phone' placeholder='puhelinnumero'/>
    <label >Osoite:</label>
    <input type="address" name='osoite' placeholder='osoite'/>
    <label >Postinumero:</label>
    <input type="postinumer" name='postinumero' placeholder='Postinumero'/>

    <h1 className='otsikko'>haluamasi palvelu</h1>
    <div className='valikko'>
    <label>jäsenyys</label>
  <select id="valikkot" name="jäsenyys">
    <option value="valitse-jäsenyys">jäsenyys</option>
  <option value="kertakäynti">kertakäynti/7€</option>
    <option value="1kk">1kk/40€</option>
    <option value="12kk">12kk/400€</option>
    <option value="js-on">olen jo jäsen</option>
  </select>
  </div>

  <div className='valikko'>
  <label>Personaltrainer</label>
  <select id="valikkot" name="jäsenyys">
  <option value="js-on">personaltrainer</option>
    <option value="tunti">tunti/50€</option>
    <option value="12kk">4h/175€</option>
    <option value="js-on">6h/250€</option>
    <option value="no">en halua personaltraineriä</option>
  </select>
  </div>

  <div className='valikko'>
  <label>treeniohjelma</label>
  <select id="valikkot" name="jäsenyys">
  <option value="js-on">treeniohjelma</option>
    <option value="tunti">HARDCORE DIET Ravinto- ja treeniohjelma/39,90€</option>
    <option value="12kk">GET SHREDDED treeniohjelma/39,90€</option>
    <option value="js-on">GET HUGE treeniohjelma/39,90€</option>
    <option value="no">en halua treeniohjelmaa</option>
  </select>
  </div>

  <div className='valikko'>
  <label>Ravitsemusohjelma</label>
  <select id="valikkot" name="jäsenyys">
  <option value="js-on">Ravitsemusohjelma</option>
    <option value="tunti">6 kuukautta/25€/kk</option>
    <option value="12kk">12 kuukautta/20€</option>
    <option value="no">en halua Ravitsemusohjelmaa</option>
  </select>
  </div>

<div className='valikko'>
  <label>Hieronta</label>
  <select id="valikkot" name="jäsenyys">
  <option value="js-on">Hieronta</option>
    <option value="tunti">25min/30€</option>
    <option value="12kk">50min/50€</option>
    <option value="js-on">75min/75€</option>
    <option value="no">en halua hierontaa</option>
  </select>
  </div>
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

      <Footer/>
      </>
    )
}

export default Form;