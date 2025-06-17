import React from 'react'
import Navbar from '../../components/hotelowner/Navbar'
import { Sidebar } from 'lucide-react'
import Sidebar1 from '../../components/hotelowner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <div>
        <Sidebar1/>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout
