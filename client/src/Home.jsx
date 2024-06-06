import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

import './Home.css';

function Home () {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
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
        setMessage(res.data.Error);
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
                        <span>Capsules</span>
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
                        <span>LOGO</span>
                        <span>Home</span>
                        <span>Features</span>
                        <span>How it Works</span>
                        <span>About us</span>
                        <span>Contact</span>
                    </div>
                    <div className='right-nav'>
                        <Link to="/login" className='btn-login'>Login</Link>
                        <Link to="/register" className='btn-register'>Register</Link>
                        <span>Capsules</span>
                    </div>
                </nav>
                <div className= 'hero-text'>
                    <h1>PRESERVE FOR THE FUTURE</h1>
                    <h3>Create personal or shared time capsules, fill them with multimedia content, and unlock them on your chosen date</h3>
                </div>
            </header>
        </div>

      }
    </div>
  );
}

export default Home	