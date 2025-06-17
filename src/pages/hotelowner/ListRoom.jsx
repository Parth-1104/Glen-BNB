import React from 'react';
import { roomsDummyData, assets, facilityIcons } from '../../assets/assets'; // Adjust the path if needed

const ListRoom = () => {
  return (
    <div className=" ml-70 mt-20 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Available Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomsDummyData.map((room) => (
          <div key={room._id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={room.images[0]}
              alt={`${room.roomType}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{room.roomType}</h2>
              <p className="text-gray-500 mb-1">{room.hotel.name}</p>
              <p className="text-sm text-gray-400 mb-2">{room.hotel.city}</p>

              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                  >
                    <img src={facilityIcons[amenity]} alt={amenity} className="w-4 h-4" />
                    {amenity}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold text-blue-600">${room.pricePerNight}/night</p>
                <p
                  className={`text-sm px-2 py-1 rounded ${
                    room.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {room.isAvailable ? 'Available' : 'Not Available'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRoom;
