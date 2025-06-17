import React, { useEffect, useState } from 'react';
import heroImage from '../assets/heroImage.png'; // adjust path as needed
import {assets, cities} from "../assets/assets"


const Hero = () => {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    // Trigger the image to slide up after a short delay
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 700); // Increased delay slightly for better flow

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden mt-[10vh]">
      {/* Introduction Text Section */}
      <div className='h-[40vh] flex flex-col items-center justify-center text-center p-4 bg-white'>
        <div className="text-4xl md:text-7xl font-my-custom-weight text-[#000000]  animate-fade-in-down">
          <h1 className='tracking-wide'>Welcome To</h1>
        </div>
        <div className="text-5xl md:text-7xl  text-blue-600 animate-fade-in-up mt-4">
          <h1>Luxe Escape</h1>
        </div>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in">
          Discover unparalleled luxury and breathtaking destinations. Your journey to relaxation begins here.
        </p>
        <form className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className='h-4' />
                   
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
                  {cities.map((city,index)=>(
                    <option value={city} key={index}/>
                  ))}
                </datalist>
            
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="" className='h-4'/>
                    
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
            <img src={assets.searchIcon} alt="" className='h-7'/>
               
                <span>Search</span>
            </button>
        </form>

        
      </div>

      {/* Hero Image Section with Slide-Up Effect */}
      <div
        className={`relative w-full flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center transition-transform duration-1000 ease-out ${
          imageVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Optional: Overlay content for the image section */}
        
      </div>
    </div>
  );
};

export default Hero;