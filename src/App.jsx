import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home'

const App = () => {

const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

      </div>
      
      
    </div>
  )
}

export default App
