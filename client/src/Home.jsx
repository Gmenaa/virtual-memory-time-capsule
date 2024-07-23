import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll'

// --========== REMIX ICONS ==========--
import 'remixicon/fonts/remixicon.css'

// --========== CSS ==========--
import './assets/css/Home.css';

// --========== IMAGES ==========--
import image_1 from './assets/img/temp.png'
import image_2 from './assets/img/temp.png'

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
    // TODO: add parent-container-2
    <div className='parent-container'>
      {
        auth ?
        <div className='parent-container-2'>
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
                  <span className='home__data-subtitle'>Discover the Forgotten</span>
                  {/* <h1 className='home__data-title'>Explore the <br> Best <b>Beautiful  <br> Beaches</b></h1> */}
                  <h1 className='home__data-title'>Remember Those we Respect</h1>
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
              
            </section>

            <section className='discover section' id='discover'>
              
            </section>

            <section>
              
            </section>
          </main>
        </div>

          

        :



        <div className='parent-container-2'>
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
                  <span className='home__data-subtitle'>Discover the Forgotten</span>
                  {/* <h1 className='home__data-title'>Explore the <br> Best <b>Beautiful  <br> Beaches</b></h1> */}
                  <h1 className='home__data-title'>Remember Those we Respect</h1>
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
              
            </section>

            <section className='discover section' id='discover'>
              
            </section>

            <section>
              
            </section>
          </main>
        </div>
      }
    </div>
  );
}

export default Home	