import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'

import Capsules from './Capsules'
import CapsuleContent from '../components/CapsuleContent';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/capsules' element={<Capsules/>}></Route>
        {/* <Route path="/capsule/:prefix" component={CapsuleContent} /> */}
        <Route path="/capsule/:prefix" element={<CapsuleContent/>} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App