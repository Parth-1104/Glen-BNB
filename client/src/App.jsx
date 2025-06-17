import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home'
import AllRooms from './pages/AllRooms';
import RoomDetail from './pages/RoomDetail';
import MyBookings from './pages/MyBookings';
import Hotelreg from './components/Hotelreg';
import Layout from './pages/hotelowner/Layout';
import Dashboard from './pages/hotelowner/Dashboard';
import AddRoom from './pages/hotelowner/AddRoom';
import ListRoom from './pages/hotelowner/ListRoom';

const App = () => {

const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}

      {false && <Hotelreg/>}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetail/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/owner' element={<Layout/>} >
          <Route index element= {<Dashboard/>}></Route>
          <Route path='add-room' element={<AddRoom/>}></Route>
          <Route path='list-room' element={<ListRoom/>}></Route>


          </Route>


                    

      </Routes>

      </div>
      
      
    </div>
  )
}

export default App
