import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomsDummyData, facilityIcons } from '../assets/assets';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const foundRoom = roomsDummyData.find((room) => room._id == id);
    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
  }, [id]);

  if (!room) {
    return <div className="text-center py-32 text-gray-500">Loading room details...</div>;
  }

  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-10">
      {/* Title and Location */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900">{room.hotel.name}</h1>
        <p className="text-gray-600 text-sm mt-1">{room.hotel.address}</p>
        <p className="text-gray-500 text-sm">City: {room.hotel.city}</p>
      </div>

      {/* Main Image and Thumbnails */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex-1">
          <img
            src={mainImage}
            alt="Main Room"
            className="w-full rounded-xl object-cover max-h-[480px] shadow-lg"
          />
        </div>
        <div className="flex md:flex-col gap-3 md:w-[120px] overflow-x-auto md:overflow-y-auto">
          {room.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Room ${i}`}
              onClick={() => setMainImage(img)}
              className={`w-24 h-20 md:w-full md:h-24 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-blue-600' : 'border-transparent'}`}
            />
          ))}
        </div>
      </div>

      {/* Description and Amenities */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Room Description</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {room.description || "Experience top-notch hospitality and comfort in this room. Enjoy all modern amenities, scenic views, and 24/7 service."}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
        <div className="flex flex-wrap gap-4">
          {room.amenities.map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm">
              <img src={facilityIcons[item]} alt={item} className="w-4 h-4" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price and Booking */}
      <div className="border-t pt-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div>
          <p className="text-2xl font-semibold text-gray-800">${room.pricePerNight}</p>
          <p className="text-sm text-gray-500">Per Night (incl. all taxes)</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetail;
