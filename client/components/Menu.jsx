import React, {useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'

import axios from 'axios'

const Menu = ({ closeMenu }) => {
    const [values, setValues] = useState({
        title: '',
        date: null,
        description: null
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/capsules', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/Capsules')
            } else {
                alert("Error")
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <span className='close-button' onClick={closeMenu}>&times;</span>
            <h2>Create Capsule</h2>
            <form onSubmit={handleSubmit}>
              {/* Your form elements go here */}
              <input type="text" placeholder="* Capsule Name: " name='title' onChange = {e => setValues({...values, title: e.target.value})} required/>
              <input type="date" name='opening_date' onChange = {e => setValues({...values, opening_date: e.target.value})} required />
              <input type="textarea" placeholder="Capsule Description" name='description' onChange = {e => setValues({...values, description: e.target.value})} />
              {/* <input type="search" placeholder='Add Contributors' />  */}
              {/* <input type="radio" /> */}
              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      );
}

export default Menu;