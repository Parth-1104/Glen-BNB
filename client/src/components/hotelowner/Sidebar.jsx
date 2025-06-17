import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, ListOrdered } from 'lucide-react'; // Optional icons

const Sidebar1 = () => {
  const links = [
    { name: 'Dashboard', path: '/owner', icon: <LayoutDashboard size={18} /> },
    { name: 'Add Room', path: '/owner/add-room', icon: <PlusCircle size={18} /> },
    { name: 'List Room', path: '/owner/list-room', icon: <ListOrdered size={18} /> },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-md border-r fixed top-0 left-0 p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Hotel Panel</h2>
      
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar1;
