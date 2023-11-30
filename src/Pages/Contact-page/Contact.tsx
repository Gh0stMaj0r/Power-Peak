import './Contact.scss';
import Header from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import React, { useState, ChangeEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  comment: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    comment: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className='Fname'>First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName"className='Lname'>Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className='email'>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber" className='Pnum'>Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="comment" className='Comm'>Comment:</label>
        <textarea
          id="comment"
          name="comment"
          rows={4} // Convert to a number
          value={formData.comment}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className='Subm'>Submit</button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <div className='body'>
        <Header/>
        
        <h1>yhteystiedot</h1>
        <div className='underline'></div> 
        <p className='text'>
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
        <h1>Tule meidän <br></br>
        kanssa kohti terveellisempää tulevaisuutta</h1>
        <div className='underline'></div>   
        <div className='icons'>
          <div className='dmap'>
            <FaMapMarkerAlt className='map'/> <p className='tiedot'>osoite</p>
          </div>
          <div className='dmail'>
            <IoMdMail className='mail'/><p className='tiedot'>powerpeak@gmail.com</p>
          </div>
          <div className='dphone'>
            <FaSquarePhone className='phone'/><p className='tiedot'>040-8527345</p>
          </div>
        </div>
        <div className='forms'>
        <ContactForm />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
