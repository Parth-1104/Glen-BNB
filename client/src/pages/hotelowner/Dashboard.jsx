import React from 'react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Rooms', value: 32 },
    { label: 'Total Bookings', value: 128 },
    { label: 'Monthly Revenue', value: '₹85,000' },
  ];

  const recentBookings = [
    { id: 'BK001', customer: 'Amit Kumar', room: 'Deluxe Suite', date: '2025-06-15', amount: '₹4,000' },
    { id: 'BK002', customer: 'Saanvi Sharma', room: 'Standard Room', date: '2025-06-14', amount: '₹2,200' },
    { id: 'BK003', customer: 'Rahul Mehra', room: 'Executive Suite', date: '2025-06-13', amount: '₹6,500' },
  ];

  return (
    <div className="ml-67 mt-23">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome Back, Owner!</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-2xl font-bold text-blue-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500 border-b">
                <th className="py-2 px-4">Booking ID</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Room</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="text-sm text-gray-700 border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{booking.id}</td>
                  <td className="py-2 px-4">{booking.customer}</td>
                  <td className="py-2 px-4">{booking.room}</td>
                  <td className="py-2 px-4">{booking.date}</td>
                  <td className="py-2 px-4">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
