import React, { useState } from 'react'

import {Link, useNavigate} from 'react-router-dom'

import axios from 'axios'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/')
            } else {
                alert(res.data.Error)
            }
        })
        .then(err => console.log(err));
    }

    return (
        <div className='login-container'>
            <div className='login-form-container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-field'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' onChange = {e => setValues({...values, email: e.target.value})} className='form-input' />
                    </div>
                    <div className='form-field'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password' onChange = {e => setValues({...values, password: e.target.value})} className='form-input' />
                    </div>
                    <button type='submit' className='submit-btn'>Log in</button>
                    <Link to="/register">Register</Link>
                </form>
            </div>
        </div>
    )
}

export default Login