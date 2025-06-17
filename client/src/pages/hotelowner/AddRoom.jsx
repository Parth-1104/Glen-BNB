import React, { useState } from 'react';
import { assets, facilityIcons } from '../../assets/assets';

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    pricePerNight: '',
    amenities: [],
    images: [],
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newAmenities = checked
        ? [...formData.amenities, value]
        : formData.amenities.filter((a) => a !== value);
      setFormData({ ...formData, amenities: newAmenities });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Room Added:', formData);
    alert('Room successfully added!');
    // You can call your backend API here
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Room</h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md border">
        {/* Room Type */}
        <div>
          <label className="block font-medium mb-1">Room Type</label>
          <input
            type="text"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            placeholder="e.g., Deluxe, Double Bed"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price Per Night (INR)</label>
          <input
            type="number"
            name="pricePerNight"
            value={formData.pricePerNight}
            onChange={handleChange}
            placeholder="e.g., 2499"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* Amenities */}
        <div>
          <label className="block font-medium mb-1">Amenities</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Object.keys(facilityIcons).map((amenity) => (
              <label key={amenity} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value={amenity}
                  checked={formData.amenities.includes(amenity)}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <img src={facilityIcons[amenity]} alt={amenity} className="w-5 h-5" />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        {/* Images Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Room Images</label>
          <div className="border border-dashed p-6 rounded-md flex flex-col items-center gap-3 bg-gray-50">
            <img src={assets.uploadArea} alt="upload" className="w-12" />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="text-sm"
            />
            {formData.images.length > 0 && (
              <p className="text-green-600 text-sm">
                {formData.images.length} image(s) selected
              </p>
            )}
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-3">
          <label className="font-medium">Available:</label>
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
            className="accent-green-600"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
