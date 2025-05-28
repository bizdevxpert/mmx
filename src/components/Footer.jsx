import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Mountain SPV FI</h3>
            <p className="text-gray-400 mb-4">
              Tailored high-growth investment opportunities, packaged for maximum returns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="hero" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="features" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="plans" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Investment Plans
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="opportunities" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Opportunities
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="leadership" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Leadership
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Portfolio Companies</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Xenter, Inc.
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Giv.care, Inc.
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Plansight, Inc.
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Volition, Inc.
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block text-white">Email:</span>
                <a href="mailto:vinh@vuonginc.com" className="hover:text-white transition-colors">
                  vinh@vuonginc.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-white">Phone:</span>
                <a href="tel:+16469462176" className="hover:text-white transition-colors">
                  +1 646-946-2176
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-4">
            Important Disclosure: This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Investment in Mountain SPV FI involves substantial risk, including the possible loss of principal. Prospective investors should carefully read the Private Placement Memorandum and consult with their financial, legal, and tax advisors.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Mountain SPV FI by Garrison Fathom & Mountain VC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
