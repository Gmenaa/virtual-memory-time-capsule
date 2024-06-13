import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Capsules from './Capsules'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/capsules' element={<Capsules/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App