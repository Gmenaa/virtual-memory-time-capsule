import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

// import logo from './assets/logo.png'
import photo_feature from './assets/photo_feature.png'

import './Home.css';

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
        <div className='hero-container'>
            <header className='hero'>
                <nav className='navbar'>
                    <div className='left-nav'>
                        <span>LOGO</span>
                        <span>Home</span>
                        <span>Features</span>
                        <span>How it Works</span>
                        <span>About us</span>
                        <span>Contact</span>
                    </div>
                    <div className='right-nav'>
                        <Link to="/capsules" className='btn-capsules'>Capsules</Link>
                        <span>{name}</span>
                        <button className='btn-logout' onClick={handleDelete}>Logout</button>
                    </div>
                </nav>
                <div className= 'hero-text'>
                    <h1>PRESERVE FOR THE FUTURE</h1>
                    <h3>Create personal or shared time capsules, fill them with multimedia content, and unlock them on your chosen date</h3>
                </div>
            </header>
        </div>
        :
        <div className='hero-container'>
            <header className='hero'>
                <nav className='navbar'>
                    <div className='left-nav'>
                        <span>Logo</span>
                        <span>Home</span>
                        <span>Features</span>
                        <span>How it Works</span>
                        <span>About us</span>
                        <span>Contact</span>
                    </div>
                    <div className='right-nav'>
                        <Link to="/login" className='btn-login'>Login</Link>
                        <Link to="/register" className='btn-register'>Register</Link>
                    </div>
                </nav>
                <div className= 'hero-text'>
                    <h1>PRESERVE FOR THE FUTURE</h1>
                    <h3>Create personal or shared time capsules, fill them with multimedia content, and unlock them on your chosen date</h3>
                </div>
            </header>

            <div className='features-container'>
                <h1>Features</h1>
                <div className='feature-1'>
                    <div className='feature-text'>
                        <h3>Photos and Videos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero sed commodi obcaecati, enim delectus fuga fugiat ad ab! Repudiandae, atque eaque esse ipsa accusamus doloribus error. Culpa, incidunt debitis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero sed commodi obcaecati, enim delectus fuga fugiat ad ab! Repudiandae, atque eaque esse ipsa accusamus doloribus error. Culpa, incidunt debitis.</p>
                    </div>
                    
                    <img src={photo_feature} alt="" />
                </div>  
                <div className='feature-2'>
                    
                </div>
                <div className='feature-3'>
                    
                </div>
                <div className='feature-4'>
                    
                </div>
            </div>
        </div>

      }
    </div>
  );
}

export default Home	