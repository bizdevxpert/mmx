import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-blue-800 bg-opacity-50 rounded-full text-blue-100 text-sm font-medium mb-2">
                By Garrison Fathom & Mountain VC
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Mountain SPV FI
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Tailored High-Growth Investment Opportunities, Packaged for Maximum Returns
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex-1">
                  <h3 className="text-2xl font-bold">$340M+</h3>
                  <p className="text-blue-100 text-sm">Projected combined revenues by 2026</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex-1">
                  <h3 className="text-2xl font-bold">$50M</h3>
                  <p className="text-blue-100 text-sm">Total capital raise for SPV</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-8">
                Exclusive access to four distinctive companies experiencing substantial growth, with strategically structured positions designed to maximize ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ScrollLink
                  to="opportunities"
                  smooth={true}
                  duration={500}
                  className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  Explore Opportunities
                  <FaArrowRight className="ml-2" />
                </ScrollLink>
                
                <ScrollLink
                  to="cta"
                  smooth={true}
                  duration={500}
                  className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  Request Information
                </ScrollLink>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-blue-800 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Investment Highlights</h3>
                  <p className="text-blue-100 text-sm">Q2 2025</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Strategic Positioning</h4>
                        <p className="text-gray-600 text-sm">Leadership already has ownership stakes in each company</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Growth Trajectory</h4>
                        <p className="text-gray-600 text-sm">Companies in high-growth industries with projected combined revenues of $340M+ in 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Optimal Timing</h4>
                        <p className="text-gray-600 text-sm">Positioned to invest in Series A and Series B rounds prior to significant valuation multiples growth</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Minimum Investment</h4>
                        <p className="text-gray-600 text-sm">$250,000 for 250,000 Class A Units at $1.00 per Unit</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      This is not an offer to sell securities. Investment involves risk. Please request formal offering documents for complete information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
