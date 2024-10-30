import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wine, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600';
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wine className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Namibian Bar Masters</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className={`transition ${isActive('/courses')}`}>
              Courses
            </Link>
            <Link to="/community" className={`transition ${isActive('/community')}`}>
              Community
            </Link>
            <Link to="/events" className={`transition ${isActive('/events')}`}>
              Events
            </Link>
            <Link to="/about" className={`transition ${isActive('/about')}`}>
              About
            </Link>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
              Sign Up
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/courses"
              className="block px-3 py-2 text-gray-700 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/community"
              className="block px-3 py-2 text-gray-700 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-gray-700 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button className="w-full text-left px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;