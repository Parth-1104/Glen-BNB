import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const HotelCard = ({room,index}) => {
  return (
    <Link to={'/rooms/'+ room._id} onClick={()=>{
        scrollTo(0,0)}} key={room._id}>
    <img src={room.images[0]} alt=""  className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-800'/>



    {index%2==0  &&  <p className='px-3 py-1 absolute top-3 bg-white text-gray-800 font-medium'>Best Seller</p>}
    <div className='p-4 pt-5'>
        <div className='flex items-center justify-between'>
            <p className='font-playfair text-xl font-medium text-gray-800'>
                {room.hotel.name}
            </p>

            <div className='flex items-center gap-1'>
                <img src={assets.starIconOutlined} alt="" />

            </div>

        </div>

        <div>
        <img src={assets.locationIcon} alt="" />

        <span>{room.hotel.address}</span>
        </div>
        <div>
            <p><span>${room.pricePerNight}</span>/night</p>
            <button>book Now</button>
        </div>
    </div>

    <div>
      
    </div>
    </Link>
    
  )
}

export default HotelCard
