import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll'

// --========== REMIX ICONS ==========--
import 'remixicon/fonts/remixicon.css'

// --========== CSS ==========--
// import './Home.css';
import './assets/css/Home.css';

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
    <div className='home-container'>
      {
        auth ?
        <div className='home'>
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
        </div>
        :
        <div className='home'>
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
        </div>
      }
    </div>
  );
}

export default Home	