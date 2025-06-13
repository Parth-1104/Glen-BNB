import React, { useEffect, useState } from 'react';
import heroImage from '../assets/heroImage.png'; // adjust path as needed

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