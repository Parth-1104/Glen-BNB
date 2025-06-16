import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const AllRooms = () => {
  const navigate = useNavigate();

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-20'>
      {/* Header */}
      <div className='mb-10'>
        <h1 className='font-playfair text-3xl md:text-4xl font-semibold text-gray-900'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-600 mt-2 max-w-xl'>
          Take advantage of our limited-time offer on premium stays. Explore comfort & class.
        </p>
      </div>

      {/* Room Cards */}
      <div className='flex flex-col gap-12'>
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className='flex flex-col md:flex-row items-start gap-6 border-b border-gray-300 pb-10 last:border-0'
          >
            {/* Room Image */}
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt={room.hotel.name}
              title='View Room Details'
              className='w-full md:w-1/2 max-h-80 object-cover rounded-xl shadow-md cursor-pointer transition-transform hover:scale-[1.02]'
            />

            {/* Room Details */}
            <div className='w-full md:w-1/2 flex flex-col justify-between gap-4'>
              <div>
                <h2 className='text-2xl md:text-3xl font-playfair font-semibold text-gray-800 cursor-pointer'>
                  {room.hotel.city}
                </h2>
                <p className='text-gray-700 text-sm'>{room.hotel.name}</p>
              </div>

              {/* Review & Address */}
              <div className='text-sm text-gray-500 flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <img src={assets.locationIcon} alt="location" className='w-4 h-4' />
                  <span>{room.hotel.address}</span>
                </div>
                <p className='text-gray-500'>200+ Reviews</p>
              </div>

              {/* Amenities */}
              <div className='flex flex-wrap gap-3 mt-2'>
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 px-3 py-2 rounded-full bg-[#F5F5FF]/80 shadow-sm'
                  >
                    <img src={facilityIcons[item]} alt={item} className='w-4 h-4' />
                    <p className='text-xs text-gray-700'>{item}</p>
                  </div>
                ))}
                
              </div>
              <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}/Per Night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRooms;
