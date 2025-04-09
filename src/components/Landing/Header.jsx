// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid'; // For mobile menu icons

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center text-xl font-bold text-cyan-700">
          <PlusIcon className="h-10 w-10 mr-2 text-blue-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
            Efficio HR
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('product-section')} className="text-gray-600 hover:text-cyan-700 transition duration-300">
            Product
          </button>
          <button onClick={() => scrollToSection('industries-section')} className="text-gray-600 hover:text-cyan-700 transition duration-300">
            Industries
          </button>
          <button onClick={() => scrollToSection('pricing-section')} className="text-gray-600 hover:text-cyan-700 transition duration-300">
            Pricing
          </button>
          <button onClick={() => scrollToSection('resources-section')} className="text-gray-600 hover:text-cyan-700 transition duration-300">
            Resources
          </button>
          <Link
            to="/dashboard"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-cyan-700 focus:outline-none">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <EllipsisVerticalIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items (Toggled) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md py-2 flex flex-col items-center space-y-2">
          <button onClick={() => scrollToSection('product-section')} className="block w-full text-center py-2 text-gray-600 hover:text-cyan-700">Product</button>
          <button onClick={() => scrollToSection('industries-section')} className="block w-full text-center py-2 text-gray-600 hover:text-cyan-700">Industries</button>
          <button onClick={() => scrollToSection('pricing-section')} className="block w-full text-center py-2 text-gray-600 hover:text-cyan-700">Pricing</button>
          <button onClick={() => scrollToSection('resources-section')} className="block w-full text-center py-2 text-gray-600 hover:text-cyan-700">Resources</button>
          <Link to="/dashboard" className="block w-full text-center py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600">Get Started</Link>
        </div>
      )}
    </header>
  );
}

export default Header;