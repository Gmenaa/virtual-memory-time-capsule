import React, { useState } from 'react'

import {Link, useNavigate} from 'react-router-dom'

import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/login')
            } else {
                alert("Error")
            }
        }).catch(err => console.log(err))
    }

  return (
    <div className='register-container'>
        <div className='register-form-container'>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder='Enter Name' name='name' onChange = {e => setValues({...values, name: e.target.value})} className='form-input' />
                </div>
                <div className='form-field'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' onChange = {e => setValues({...values, email: e.target.value})} className='form-input' />
                </div>
                <div className='form-field'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password' onChange = {e => setValues({...values, password: e.target.value})} className='form-input' />
                </div>
                <button type='submit' className='submit-btn'>Sign up</button>
                <p>You agree to our terms of service.</p>
                <button className='tos-agree-btn'>Agree</button>
                <Link to="/login">Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Register