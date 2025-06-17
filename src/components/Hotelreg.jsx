import React from 'react';
import { assets } from '../assets/assets';

const Hotelreg = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="relative bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Image */}
        <img
          src={assets.regImage}
          alt="Hotel"
          className="hidden md:block md:w-1/2 object-cover"
        />

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 relative">
          <img
            src={assets.closeIcon}
            alt="Close"
            className="absolute top-4 right-4 h-5 w-5 cursor-pointer"
          />
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Register your Hotel
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Hotel Name</label>
              <input
              id='name'
                type="text"
                placeholder="e.g. Paradise Inn"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
              id='city'
                type="text"
                placeholder="City, Country"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows="3"
                placeholder="Tell us about your hotel..."
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Image</label>
              <input
                type="file"
                className="mt-1 w-full text-gray-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hotelreg;
