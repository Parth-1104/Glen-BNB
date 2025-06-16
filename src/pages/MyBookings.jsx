import React, { useState } from 'react';
import { roomsDummyData, userBookingsDummyData } from '../assets/assets';
import moment from 'moment'; // optional: for date formatting

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="px-4 mt-20 md:px-16 lg:px-24 xl:px-32 py-12">
      <h1 className="text-3xl font-bold font-playfair mb-8 text-gray-900">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="space-y-8">
          {bookings.map((booking) => {
            const room = booking.room;
            const hotel = booking.hotel;

            return (
              <div
                key={booking._id}
                className="border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {/* Room Image */}
                <img
                  src={room.images[0]}
                  alt={room.roomType}
                  className="w-full md:w-48 h-32 object-cover rounded-md"
                />

                {/* Booking Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {hotel.name} – {room.roomType}
                  </h2>
                  <p className="text-sm text-gray-600">{hotel.address}</p>

                  <div className="mt-3 text-sm text-gray-700 space-y-1">
                    <p><span className="font-medium">Booking ID:</span> {booking._id}</p>
                    <p><span className="font-medium">Check-In:</span> {moment(booking.checkInDate).format('MMM D, YYYY')}</p>
                    <p><span className="font-medium">Check-Out:</span> {moment(booking.checkOutDate).format('MMM D, YYYY')}</p>
                    <p><span className="font-medium">Guests:</span> {booking.guests}</p>
                    <p><span className="font-medium">Payment Method:</span> {booking.paymentMethod}</p>
                    <p>
                      <span className="font-medium">Payment Status:</span>{' '}
                      <span
                        className={`font-semibold ${
                          booking.isPaid ? 'text-green-600' : 'text-yellow-600'
                        }`}
                      >
                        {booking.isPaid ? 'Paid' : 'Unpaid'}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Booking Status:</span>{' '}
                      <span className="capitalize">{booking.status}</span>
                    </p>
                    <p><span className="font-medium">Total Price:</span> ${booking.totalPrice}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
