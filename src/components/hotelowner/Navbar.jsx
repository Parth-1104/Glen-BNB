import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { UserButton } from '@clerk/clerk-react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // using lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Bookings', path: '/bookings' },
    { name: 'Properties', path: '/properties' },
    { name: 'Reports', path: '/reports' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="HotelApp Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl text-gray-800">HotelOwner</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-blue-600 transition ${
                  isActive ? 'text-blue-600' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
