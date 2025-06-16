import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home'
import AllRooms from './pages/AllRooms';
import RoomDetail from './pages/RoomDetail';
import MyBookings from './pages/MyBookings';

const App = () => {

const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetail/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />

                    

      </Routes>

      </div>
      
      
    </div>
  )
}

export default App
