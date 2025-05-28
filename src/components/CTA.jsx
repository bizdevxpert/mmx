import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Secure Your Position in Mountain SPV FI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Limited availability: Only 50,000,000 Class A Units at $1.00 per Unit
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-gray-900 rounded-xl p-8 md:p-12 shadow-xl mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Request Investment Information</h3>
                <p className="text-gray-600 mb-6">
                  Complete the form to receive our Private Placement Memorandum and schedule a consultation with our investment team.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500">
                      <FaShieldAlt />
                    </span>
                    <span className="text-gray-700">
                      <strong>Confidential Process:</strong> Your information is protected by our strict privacy policy
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500">
                      <FaChartLine />
                    </span>
                    <span className="text-gray-700">
                      <strong>Qualified Investors:</strong> Open to accredited investors with a minimum investment of $250,000
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500">
                  By submitting this form, you certify that you meet the suitability standards for this investment opportunity.
                </p>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-1">Potential Investment Amount</label>
                    <select 
                      id="investmentAmount" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m-2m">$1,000,000 - $2,000,000</option>
                      <option value="2m+">$2,000,000+</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    Request Information
                    <FaArrowRight className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-blue-100 mb-6">
              Prefer to speak directly with our team? Contact us at:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="tel:+16469462176" className="text-white hover:text-blue-200 transition-colors">
                <span className="font-semibold">Phone:</span> +1 646-946-2176
              </a>
              <a href="mailto:vinh@vuonginc.com" className="text-white hover:text-blue-200 transition-colors">
                <span className="font-semibold">Email:</span> vinh@vuonginc.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
