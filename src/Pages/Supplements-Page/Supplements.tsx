import React from 'react'

import Header from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Supplements.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CartFill } from 'react-bootstrap-icons';

const responsive = {
  //Carousel responsive screen sizes
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
      items: 1
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
        {/* Supplements */}
        <section className='supplements-shop'>
            <div className='supp-landing'>
                <h1>"Abs are made in the kitchen"</h1>
                <p>Lisäravinteet auttavat kehoa ja lihaksia kasvamaan</p>
            </div>
            {/* Supplement brands */}
            <div className='supplements-logos'>
                <img className="logo" src="./Images/Nutrition.png" loading="lazy" alt="" />
                <img className="logo" src="./Images/Leader.png" loading="lazy" alt="" />
                <img className="logo" src="./Images/Sportlife.png" loading="lazy" alt="" />
            </div>

            {/* Pre-workouts with carousel component */}
            <div className='all-supp'>
                <h1>Pre-workout</h1> 
                <hr></hr>
                <div>
                <Carousel containerClass='carousel' responsive={responsive}>
                    <div>
                      <img className='carousel-images' src="./Images/Supplements/Pre-workout/Pre1.png" loading="lazy" alt="" />
                      <h3>SportLife Nutrition® Pre Workout,<br></br>Cola, 250 g</h3>
                      <p>19.90€</p>
                        <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                    </div>

                    <div>
                      <img className='carousel-images' src="./Images/Supplements/Pre-workout/Pre2.png" loading="lazy" alt="" />
                      <h3>Supermass Nutrition PreZone <br></br>Metsämarja, 525 g</h3>
                      <p>39.90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                    </div>

                    <div>
                      <img className='carousel-images' src="./Images/Supplements/Pre-workout/Pre3.png" loading="lazy" alt="" />
                      <h3>Leader Performance <br></br>Pre-Workout, Appelsiini, 300 g</h3>
                      <p>16,99€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                    </div>

                    <div>
                      <img className='carousel-images' src="./Images/Supplements/Pre-workout/Pre4.png" loading="lazy" alt="" />
                      <h3>SportLife Nutrition® Pre Workout, <br></br>Vesimeloni, 250g</h3>
                      <p>16,99€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                    </div>

                    <div>
                      <img className='carousel-images' src="./Images/Supplements/Pre-workout/Pre5.png" loading="lazy" alt="" />
                      <h3>Supermass Nutrition PreZone <br></br>Appelsiini, 625g</h3>
                      <p>16,99€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                    </div>

                    <div>
                      <img className='carousel-images' src="./Images/Supplements/Pre-workout/Pre6.png" loading="lazy" alt="" />
                      <h3>Leader Performance <br></br>Pre-Workout, 300 g, Aminohappo</h3>
                      <p>16,99€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                    </div>
                </Carousel>
                </div>
            </div>

            {/* Creatine with carousel component */}
            <div className='all-supp'>
              <h1>Creatiini ja muut ravintolisät</h1>
              <hr></hr>
              <div>
                <Carousel containerClass='carousel' responsive={responsive}>
                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Creatine/Creatine1.png" loading="lazy" alt="" />
                      <h3>SportLife Nutrition® Creatine, <br></br>Kreatiinimonohydraattijauhe, 200 g</h3>
                      <p>9,29€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Creatine/Creatine2.png" loading="lazy" alt="" />
                      <h3>Leader Performance <br></br>Creatine Monohydrate, 300 g</h3>
                      <p>17,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Creatine/Creatine3.png" loading="lazy" alt="" />
                      <h3>M-Nutrition <br></br>Pure Creatine, 300 g</h3>
                      <p>19,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Creatine/Bcaa1.png" loading="lazy" alt="" />
                      <h3>SportLife Nutrition® Bcaa transport <br></br>Vesimeloni & Vadelma, 300 g</h3>
                      <p>19,95€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Creatine/Eaa+bcaa.png" loading="lazy" alt="" />
                      <h3>Leader Performance Eaa+Bcaa <br></br>Appelsiini ja Mandariini, 300 g</h3>
                      <p>16,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Creatine/Bcaa411.png" loading="lazy" alt="" />
                      <h3>M-Nutrition Bcaa 411 <br></br>Persikka, 500 g</h3>
                      <p>35,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>
                </Carousel>
              </div>
            </div>

            {/* Protein with carousel component */}
            <div className='all-supp'>
              <h1>Proteiinijauhe</h1>
              <hr></hr>
              <div>
                <Carousel containerClass='carousel' responsive={responsive}>
                <div>
                      <img className='carousel-images' src="./Images/Supplements/Protein/Protein1.png" loading="lazy" alt="" />
                      <h3>SportLife Nutrition® Whey 80 <br></br>Suklaa, 500 g</h3>
                      <p>19,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Protein/Protein2.png" loading="lazy" alt="" />
                      <h3>Leader Performance Whey Protein <br></br>Suklaa, 500 g</h3>
                      <p>12,45€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Protein/Protein3.png" loading="lazy" alt="" />
                      <h3>Supermass Nutrition Super Whey Isolate <br></br>Mustikkapirtelö, 1300 g</h3>
                      <p>44,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Protein/Protein4.png" loading="lazy" alt="" />
                      <h3>SportLife Nutrition® Whey 100 <br></br>Mansikka & Valkosuklaa, 700 g</h3>
                      <p>44,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Protein/Protein5.png" loading="lazy" alt="" />
                      <h3>Leader Performance Whey Protein <br></br>Mansikka, 500 g</h3>
                      <p>12,45€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>

                  <div>
                      <img className='carousel-images' src="./Images/Supplements/Protein/Protein6.png" loading="lazy" alt="" />
                      <h3>Supermass Nutrition Super Whey Isolate <br></br>Appelsiini & Suklaa, 1300 g</h3>
                      <p>34,90€</p>
                      <a href='#!'><button className='shop-button'><CartFill></CartFill></button></a>
                  </div>
                </Carousel>
              </div>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Supplements;