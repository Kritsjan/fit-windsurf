import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Menu, X } from 'lucide-react';
import NavigationLinks from './NavigationLinks';
import MobileNavigationLinks from './MobileNavigationLinks';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="w-6 h-6" />
            <span className="font-bold text-xl">MyHealthCalculator.fit</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <NavigationLinks />
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <MobileNavigationLinks onLinkClick={handleMenuClose} />
      </div>
    </nav>
  );
};

export default Navigation;