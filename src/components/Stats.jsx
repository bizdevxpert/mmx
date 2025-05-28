import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaRegClock, FaShieldAlt } from 'react-icons/fa';

const Stats = () => {
  return (
    <section id="stats" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 text-center"
          >
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChartLine size={24} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">$340M+</h3>
            <p className="text-gray-600">Projected Combined Revenue by 2026</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 text-center"
          >
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers size={24} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">$50M</h3>
            <p className="text-gray-600">Total Capital Raise for SPV</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 text-center"
          >
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRegClock size={24} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">Q2 2025</h3>
            <p className="text-gray-600">Target Close Date</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 text-center"
          >
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt size={24} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">4</h3>
            <p className="text-gray-600">High-Growth Portfolio Companies</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 text-white p-8 rounded-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Strategic Investment Positioning</h3>
            <p className="opacity-90">Mountain SPV FI is uniquely positioned to capitalize on high-growth opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4">Exclusive Access</h4>
              <p className="text-blue-100">
                Our leadership team already has ownership stakes in each portfolio company, providing unique access and influence to maximize shareholder value.
              </p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4">Critical Funding Rounds</h4>
              <p className="text-blue-100">
                Positioned to invest in Series A and Series B rounds prior to significant valuation multiple growth, capturing maximum upside potential.
              </p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4">Industry Disruption</h4>
              <p className="text-blue-100">
                Portfolio companies are standouts in high-growth industries including medtech, healthcare, AI, energy, and manufacturing, each disrupting their respective markets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
