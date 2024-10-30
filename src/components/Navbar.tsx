import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="hidden sm:block font-semibold text-gray-900">AI Hub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/research"
              className={`flex items-center ${isActive('/research') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Research <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <Link
              to="/publications"
              className={isActive('/publications') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
            >
              Publications
            </Link>
            <Link
              to="/events"
              className={isActive('/events') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
            >
              Events
            </Link>
            <Link
              to="/team"
              className={isActive('/team') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
            >
              Team
            </Link>
            <button className="text-gray-700 hover:text-blue-600">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              to="/research"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link
              to="/publications"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Publications
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/team"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;