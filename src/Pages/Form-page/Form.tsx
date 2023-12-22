// Importing the styles for the form
import './Form.scss';
// Importing Header and Footer components
import Header from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

/* Membership form component */
const Form = () => {
  return (
    <>
      {/* Including the Header component */}
      <Header />
      {/* Header section for the form */}
      <header className='H-Header'>
        <br></br> {/* Subtitle */}
        <h1 className='form-otsikko'>jäsenyys lomake</h1> {/* Form title */}
        <hr></hr>
      </header>
      {/* Main form section */}
      <div className='lomake'>
        <form>{/* Form */}
          <div className='form-alaots'>
            <h1 className='otsikko'>sinun tiedot</h1> {/* Your details section title */}
          </div>
          <div className='form-nimet'>{/* First name and last name */}
            <div className='form-nimi'>
              <input type="text" name='etunimi' placeholder='etunimi' />
            </div>
            <div className='form-nimi2'>
              <input type="text" name='sukunimi' placeholder='sukunimi' />
            </div>
          </div>

          <label >Syntymäpäivä:</label>
          <input type="date" id="birthday" name="birthday" />
          <label >Sähköposti:</label>
          <input type="email" name='email' placeholder='email' />
          <label >Puhelinnumero:</label>
          <input type="phone" name='phone' placeholder='puhelinnumero' />
          <label >Osoite:</label>
          <input type="address" name='osoite' placeholder='osoite' />
          <label >Postinumero:</label>
          <input type="postinumer" name='postinumero' placeholder='Postinumero' />


          {/* Desired service section title */}
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


          {/* ... (Personal trainer, Training program, Nutrition program, Massage) */}

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

      {/* Including the Footer component */}
      <Footer />
    </>
  );
}

// Exporting the Form component
export default Form;
