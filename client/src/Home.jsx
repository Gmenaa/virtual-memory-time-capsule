import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'

import axios from 'axios';

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
        <div>
          <h3>You are authorized --- {name}</h3>
          <button className='btn-logout' onClick={handleDelete}>Logout</button>
        </div>
        :
        <div>
          <h3>{message}</h3>
          <h3>Login now</h3>
          <Link to="/login" className='btn-login'>Login</Link>
        </div>
      }
    </div>
  )
}

export default Home