import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CheckBox = ({ label, selected = false, onchange = () => { } }) => {
  return (
    <label className='flex items-center gap-2 text-sm text-gray-700 mb-2'>
      <input type="checkbox" checked={selected} onChange={(e) => onchange(e.target.checked, label)} className="accent-blue-600" />
      <span>{label}</span>
    </label>
  )
}

const Radiobutton = ({ label, selected = false, onchange = () => { } }) => {
  return (
    <label className='flex items-center gap-2 text-sm text-gray-700 mb-2'>
      <input type="radio" name="sortOption" checked={selected} onChange={() => onchange(label)} className="accent-blue-600" />
      <span>{label}</span>
    </label>
  )
}

const AllRooms = () => {
  const navigate = useNavigate()
  const [openFilter, setOpenFilter] = useState(true)

  const roomType = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"]
  const priceRange = ["0 to 500", "500 to 1000", '1000 to 2000', "2000 to 3000"]
  const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest First"]

  const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedSort, setSelectedSort] = useState("Newest First")

  const handleRoomTypeChange = (checked, label) => {
    if (checked) {
      setSelectedRoomTypes([...selectedRoomTypes, label])
    } else {
      setSelectedRoomTypes(selectedRoomTypes.filter(item => item !== label))
    }
  }

  const handlePriceChange = (checked, label) => {
    if (checked) {
      setSelectedPrices([...selectedPrices, label])
    } else {
      setSelectedPrices(selectedPrices.filter(item => item !== label))
    }
  }

  const handleSortChange = (label) => {
    setSelectedSort(label)
  }

  const clearFilters = () => {
    setSelectedRoomTypes([])
    setSelectedPrices([])
    setSelectedSort("Newest First")
  }

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-20'>
      {/* Header */}
      <div className='mb-10'>
        <h1 className='font-playfair text-3xl md:text-4xl font-semibold text-gray-900'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-600 mt-2 max-w-xl'>
          Take advantage of our limited-time offer on premium stays. Explore comfort & class.
        </p>
      </div>

      {/* Main Content Wrapper */}
      <div className='flex flex-col lg:flex-row gap-10'>

        {/* Room Cards */}
        <div className='flex flex-col gap-12 flex-1'>
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className='flex flex-col md:flex-row items-start gap-6 border-b border-gray-300 pb-10 last:border-0'
            >
              {/* Room Image */}
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`)
                  scrollTo(0, 0)
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

                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} / Per Night</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Sidebar */}
        <div className='w-full lg:w-[280px] flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-sm p-6 h-fit'>
          <div className='flex items-center justify-between mb-4'>
            <p className='text-lg font-semibold text-gray-800'>FILTER</p>
            <div className='text-xs cursor-pointer space-x-3'>
              <span onClick={() => setOpenFilter(!openFilter)} className='lg:hidden'>
                {openFilter ? 'HIDE' : 'SHOW'}
              </span>
              <span onClick={clearFilters} className='hidden lg:inline text-blue-600 hover:underline'>
                CLEAR
              </span>
            </div>
          </div>

          <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-500`}>
            {/* Room Type */}
            <div className='pt-5'>
              <p className='font-medium mb-2'>Room Type</p>
              {roomType.map((room, index) => (
                <CheckBox
                  key={index}
                  label={room}
                  selected={selectedRoomTypes.includes(room)}
                  onchange={handleRoomTypeChange}
                />
              ))}
            </div>

            {/* Price Range */}
            <div className='pt-5'>
              <p className='font-medium mb-2'>Price Range</p>
              {priceRange.map((range, index) => (
                <CheckBox
                  key={index}
                  label={range}
                  selected={selectedPrices.includes(range)}
                  onchange={handlePriceChange}
                />
              ))}
            </div>

            {/* Sort Options */}
            <div className='pt-5'>
              <p className='font-medium mb-2'>Sort By</p>
              {sortOptions.map((option, index) => (
                <Radiobutton
                  key={index}
                  label={option}
                  selected={selectedSort === option}
                  onchange={handleSortChange}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AllRooms
