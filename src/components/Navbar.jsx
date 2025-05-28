import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Features', to: 'features' },
    { name: 'Investment Plans', to: 'plans' },
    { name: 'Opportunities', to: 'opportunities' },
    { name: 'Leadership', to: 'leadership' },
    { name: 'FAQ', to: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>Mountain SPV FI</span>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer font-medium hover:text-blue-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="cta"
              smooth={true}
              duration={500}
              className={`cursor-pointer px-6 py-2 rounded-md font-medium transition-colors ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
            >
              Invest Now
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink
                to="cta"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors text-center"
              >
                Invest Now
              </ScrollLink>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
