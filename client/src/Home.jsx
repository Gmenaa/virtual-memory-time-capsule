import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll'

// --========== REMIX ICONS ==========--
import 'remixicon/fonts/remixicon.css'

// TODO:
// --========== SWIPER ==========--
// import './assets/css/swiper-bundle.min.css'
// import './assets/js/swiper-bundle.min.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// --========== CSS ==========--
import './assets/css/Home.css';

// --========== IMAGES ==========--
import image_1 from './assets/img/temp.png'
import image_2 from './assets/img/temp.png'

import image_3 from './assets/img/temp.png'
import image_4 from './assets/img/temp.png'

import image_5 from './assets/img/temp.png'
import image_6 from './assets/img/temp.png'

import video_1 from './assets/video/stock.mov'
// import image_7 from './assets/img/temp.png'
// import image_8 from './assets/img/temp.png'

// --========== MAIN JS ==========--
import './assets/js/Home.js'

function Home () {
  const [auth, setAuth] = useState(false);
  // const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      if(res.data.Status === "Success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        // setMessage(res.data.Error);
      }
    }).catch(err => console.log(err))
  }, [])

  const handleDelete = () => {
    axios.get('http://localhost:8081/logout')
    // eslint-disable-next-line no-unused-vars
    .then(res => {
      location.reload(true);
    }).catch(err => console.log(err))
  }

  return (

      
    <div className='parent-container'>
      {
        auth ?
        <>
          <header className='header' id='header'>
            <nav className='nav container'>
              <a href="#" className='nav__logo'>Capsules</a>

              <div className='nav__menu' id='nav-menu'>
                <ul className='nav__list'>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#home">Home</AnchorLink>
                  </li>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#about">About</AnchorLink>
                  </li>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#discover">Discover</AnchorLink>
                  </li>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#place">Place</AnchorLink>
                  </li>
                  <li className='nav__item'>
                      <Link to="/capsules" className='btn-capsules'>Capsules</Link>
                      <span>{name}</span>
                      <button className='btn-logout' onClick={handleDelete}>Logout</button>
                  </li>
                </ul>
                <i className='ri-close-line nav__close' id='nav-close'></i>
              </div>

              <div className='nav__toggle' id='nav-toggle'>
                <i className='ri-function-line'></i>
              </div>
            </nav>
          </header>

          <main>
            <section className='home' id='home'>
              <img src={image_1} alt="temporary image" className='home__img' />

              <div className='home__container container grid'>
                <div className='home__data'>
                  <span className='home__data-subtitle'>Rediscover the Forgotten</span>
                  <h1 className='home__data-title'>Remembering the <b>Bygone Memories</b></h1>
                  <AnchorLink className='button' href="#">Explore</AnchorLink>
                </div>

                <div className='home__social'>
                  <a target='_blank' className='home__social-link' href="https://www.facebook.com/">
                    <i className='ri-facebook-box-fill'></i>
                  </a>

                  <a target='_blank' className='home__social-link' href="https://www.instagram.com/">
                    <i className='ri-instagram-fill'></i>
                  </a>

                  <a target='_blank' className='home__social-link' href="https://www.twitter.com/">
                    <i className='ri-twitter-fill'></i>
                  </a>
                </div>

                <div className='home__info'>
                  <div>
                    <span className='home__info-title'>5 Media Forms</span>
                    <a href="#" className="button button--flex button--link home__info-button">More <i className='ri-arrow-right-line'></i></a>
                  </div>

                  <div className='home__info-overlay'>
                    <img src={image_2} alt="temporary image" className='home__info-img' />
                  </div>
                </div>
              </div>
            </section>


            <section className='about section' id='about'>
              <div className='about__container container grid'>
                <div className='about__data'>
                  <h2 className="section__title about__title">More Information on <b>Your Time Capsules</b></h2>
                  <p className="about__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a href="#" className="button">This a Button</a>
                </div>
              </div>

              <div className="about__img">
                <div className="about__img-overlay">
                  <img src={image_3} alt="" className="about__img-one" />
                </div>

                <div className="about__img-overlay">
                  <img src={image_4} alt="" className="about__img-two" /> 
                </div>
              </div>
            </section>

            <section className='discover section' id='discover'>
            <h2 className="section__title">Discover the most <b> Precious Memories</b></h2>
              <div className="discover__container container ">
                  <Swiper effect={'coverflow'} grabCursor={true} center edSlides={true} slidesPerView={'auto'} coverflowEffect={{rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,}} pagination={true} modules={[EffectCoverflow, Pagination]} className="mySwiper">
                      {/* <!--==================== DISCOVER 1 ====================--> */}
                      <SwiperSlide className="discover__card ">
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" className="discover__img" />
                          <div className="discover__data">
                              <h2 className="discover__title">Ants</h2>
                              <span className="discover__description">Lorem</span>
                          </div>
                      </SwiperSlide>

                      {/* <!--==================== DISCOVER 2 ====================--> */}
                      <SwiperSlide className="discover__card ">
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" className="discover__img" />
                          <div className="discover__data">
                              <h2 className="discover__title">Sun</h2>
                              <span className="discover__description">Lorem</span>
                          </div>
                      </SwiperSlide>

                      {/* <!--==================== DISCOVER 3 ====================--> */}
                      <SwiperSlide className="discover__card ">
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" className="discover__img" />
                          <div className="discover__data">
                              <h2 className="discover__title">Sea</h2>
                              <span className="discover__description">Lorem</span>
                          </div>
                      </SwiperSlide>

                      {/* <!--==================== DISCOVER 4 ====================--> */}
                      <SwiperSlide className="discover__card ">
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" className="discover__img" />
                          <div className="discover__data">
                              <h2 className="discover__title">Forest</h2>
                              <span className="discover__description">Lorem</span>
                          </div>
                      </SwiperSlide>
                  </Swiper>
              </div>
            </section>

            <section className="experience section">
              <h2 className="section__title">With Our Experience <b> We Will Serve You </b></h2>

              <div className="experience__container container grid">
                <div className="experience__content grid">
                  <div className="experience__data">
                    <h2 className="experience__number">20</h2>
                    <span className="experience__description">Year <b> Experience </b></span>
                  </div>

                  <div className="experience__data">
                    <h2 className="experience__number">75</h2>
                    <span className="experience__description">Complete <b> tours </b></span>
                  </div>

                  <div className="experience__data">
                    <h2 className="experience__number">650+</h2>
                    <span className="experience__description">Tourist <b> Destination </b></span>
                  </div>
                </div>

                <div className="experience__img grid">
                  <div className="experience__overlay">
                    <img src={image_5} alt="" className="experience__img-one" />
                  </div>
                    
                  <div className="experience__overlay">
                    <img src={image_6} alt="" className="experience__img-two" />
                  </div>
                </div>
              </div>
            </section>


            <section className="video section">
                <h2 className="section__title">Video Tour</h2>

                <div className="video__container container">
                    <p className="video__description">Find out more with our video of the most beautiful and 
                        pleasant places for you and your family.
                    </p>

                    <div className="video__content">
                        <video id="video-file">
                            <source src={video_1} type="video/mp4" />
                        </video>

                        <button className="button button--flex video__button" id="video-button">
                            <i className="ri-play-line video__button-icon" id="video-icon"></i>
                        </button>
                    </div>
                </div>
            </section>
          </main>
        </>

          

        :



        <>
          <header className='header' id='header'>
            <nav className='nav container'>
              <a href="#" className='nav__logo'>Capsules</a>

              <div className='nav__menu' id='nav-menu'>
                <ul className='nav__list'>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#home">Home</AnchorLink>
                  </li>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#about">About</AnchorLink>
                  </li>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#discover">Discover</AnchorLink>
                  </li>
                  <li className='nav__item'>
                    <AnchorLink className='nav__link' href="#place">Place</AnchorLink>
                  </li>
                  <li className='nav__item'>
                    <Link to="/login" className='btn-login'>Login</Link>
                    <Link to="/register" className='btn-register'>Register</Link>
                  </li>
                </ul>
                <i className='ri-close-line nav__close' id='nav-close'></i>
              </div>

              <div className='nav__toggle' id='nav-toggle'>
                <i className='ri-function-line'></i>
              </div>
            </nav>
          </header>

          <main>
            <section className='home' id='home'>
              <img src={image_1} alt="temporary image" className='home__img' />

              <div className='home__container container grid'>
                <div className='home__data'>
                  <span className='home__data-subtitle'>Rediscover the Forgotten</span>
                  <h1 className='home__data-title'>Remembering the <b>Bygone Memories</b></h1>
                  <AnchorLink className='button' href="#">Explore</AnchorLink>
                </div>

                <div className='home__social'>
                  <a target='_blank' className='home__social-link' href="https://www.facebook.com/">
                    <i className='ri-facebook-box-fill'></i>
                  </a>

                  <a target='_blank' className='home__social-link' href="https://www.instagram.com/">
                    <i className='ri-instagram-fill'></i>
                  </a>

                  <a target='_blank' className='home__social-link' href="https://www.twitter.com/">
                    <i className='ri-twitter-fill'></i>
                  </a>
                </div>

                <div className='home__info'>
                  <div>
                    <span className='home__info-title'>5 Media Forms</span>
                    <a href="#" className="button button--flex button--link home__info-button">More <i className='ri-arrow-right-line'></i></a>
                  </div>

                  <div className='home__info-overlay'>
                    <img src={image_2} alt="temporary image" className='home__info-img' />
                  </div>
                </div>
              </div>
            </section>


            <section className='about section' id='about'>
              <div className='about__container container grid'>
                <div className='about__data'>
                  <h2 className="section__title about__title">More Information on <b>Your Time Capsules</b></h2>
                  <p className="about__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a href="#" className="button">This a Button</a>
                </div>
              </div>

              <div className="about__img">
                <div className="about__img-overlay">
                  <img src={image_3} alt="" className="about__img-one" />
                </div>

                <div className="about__img-overlay">
                  <img src={image_4} alt="" className="about__img-two" /> 
                </div>
              </div>
            </section>


            <section className='discover section' id='discover'>
              
            </section>

            <section>
              
            </section>
          </main>
        </>
      }
    </div>
  );
}

export default Home	