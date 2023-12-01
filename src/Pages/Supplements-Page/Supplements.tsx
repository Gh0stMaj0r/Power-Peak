import React from 'react'

import Header from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Supplements.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Supplements = () => {
    return (
        
        <>
        <Header/>
        
        <section className='supplements-shop'>
            <div className='supp-landing'>
                <h1>"Abs are made in the kitchen"</h1>
                <p>Lisäravinteet auttavat kehoa ja lihaksia kasvamaan</p>
            </div>

            <div className='supplements-logos'>
                <img className="logo" src="./Images/Nutrition.png" alt="" />
                <img className="logo" src="./Images/Leader.png" alt="" />
                <img className="logo" src="./Images/Sportlife.png" alt="" />
            </div>

            <div className='pre-supp'>
                <h1>Pre-workout</h1>
                <hr></hr>
                <div>
                <Carousel containerClass='carousel' responsive={responsive}>
                    <div>
                      <img className='carousel-images' src="./Images/Supplements/Pre1.png" alt="" />
                      <h3>SportLife Nutrition® Pre Workout, <br></br>Cola, 250 g</h3>
                      <p>19,90€</p>
                    </div>
                    <div>
                      <img src="./Images/Supplements/Pre2.png" alt="" />
                      <h3>Supermass PreZone <br></br>525 g</h3>
                      <p>39.90€</p>
                    </div>
                    <div>
                      <img src="./Images/Supplements/Pre3.png" alt="" />
                      <h3>Leader Performance <br></br>Pre-Workout, 300 g, Orange</h3>
                      <p>16,99€</p>
                    </div>
                    <div>Item 4</div>
                </Carousel>
                </div>
            </div>
        </section>
        </>
    )
}

export default Supplements;