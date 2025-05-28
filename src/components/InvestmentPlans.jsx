import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const InvestmentPlans = () => {
  const [activeTab, setActiveTab] = useState('early');

  const plans = {
    early: [
      {
        title: "Growth Starter",
        minInvestment: "$250,000",
        targetReturn: "18-22%",
        riskLevel: "Moderate",
        description: "Ideal for early-career physicians looking to establish a strong investment foundation.",
        features: [
          "Diversified portfolio across multiple high-growth companies",
          "Quarterly performance reviews and updates",
          "Access to educational resources and investment webinars",
          "Annual one-on-one consultation with fund managers"
        ]
      },
      {
        title: "Opportunity Accelerator",
        minInvestment: "$500,000",
        targetReturn: "20-24%",
        riskLevel: "Moderate-High",
        description: "Designed for physicians ready to make a more substantial commitment to alternative investments.",
        features: [
          "Strategic allocation to higher-yield opportunities",
          "Priority access to follow-on investment rounds",
          "Tax-efficient investment structure",
          "Bi-annual strategy sessions with leadership team",
          "Networking opportunities with portfolio company executives"
        ]
      }
    ],
    mid: [
      {
        title: "Wealth Maximizer",
        minInvestment: "$750,000",
        targetReturn: "22-26%",
        riskLevel: "Balanced",
        description: "Optimized for mid-career physicians with established practices and growing wealth.",
        features: [
          "Customized portfolio based on risk tolerance and timeline",
          "Enhanced allocation to highest-potential companies",
          "Quarterly strategy reviews with dedicated advisor",
          "Tax optimization strategies",
          "Early access to future investment vehicles"
        ]
      },
      {
        title: "Practice Growth",
        minInvestment: "$1,000,000",
        targetReturn: "24-28%",
        riskLevel: "Moderate-High",
        description: "Dual-purpose investment strategy that supports both personal wealth and practice expansion.",
        features: [
          "Specialized healthcare sector investments",
          "Potential board observer rights in select portfolio companies",
          "Monthly strategy sessions with investment committee",
          "Comprehensive tax planning",
          "Exclusive networking events with industry leaders"
        ]
      }
    ],
    late: [
      {
        title: "Legacy Builder",
        minInvestment: "$1,500,000",
        targetReturn: "20-24%",
        riskLevel: "Moderate",
        description: "Focused on wealth preservation and generational transfer for established physicians.",
        features: [
          "Conservative growth with significant upside potential",
          "Comprehensive estate and succession planning",
          "Philanthropic integration options",
          "Quarterly family wealth meetings",
          "Dedicated family office services"
        ]
      },
      {
        title: "Retirement Maximizer",
        minInvestment: "$2,000,000+",
        targetReturn: "18-22%",
        riskLevel: "Low-Moderate",
        description: "Designed for physicians approaching retirement with emphasis on capital preservation with growth.",
        features: [
          "Balanced investment strategy with liquidity planning",
          "Retirement distribution coordination",
          "Healthcare cost projection and planning",
          "Monthly portfolio reviews",
          "Concierge wealth management services",
          "Legacy and charitable giving strategies"
        ]
      }
    ]
  };

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Investment Plans for Every Career Stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tailored investment strategies that evolve with your medical career, from early practice to retirement.
          </motion.p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('early')}
              className={`px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                activeTab === 'early'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Early Career
            </button>
            <button
              onClick={() => setActiveTab('mid')}
              className={`px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                activeTab === 'mid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Mid Career
            </button>
            <button
              onClick={() => setActiveTab('late')}
              className={`px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                activeTab === 'late'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Late Career
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans[activeTab].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="opacity-90">{plan.description}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Minimum Investment</p>
                    <p className="text-gray-900 font-bold text-xl">{plan.minInvestment}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Target Annual Return</p>
                    <p className="text-gray-900 font-bold text-xl">{plan.targetReturn}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Risk Level</p>
                    <p className="text-gray-900 font-bold text-xl">{plan.riskLevel}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Liquidity</p>
                    <p className="text-gray-900 font-bold text-xl">Quarterly</p>
                  </div>
                </div>
                
                <h4 className="font-bold text-lg mb-4">Key Features</h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1 text-blue-500">
                        <FaCheck />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Request Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Physicians Choose Mountain SPV FI</h3>
            <p className="text-gray-600">Our investment approach is specifically designed to meet the unique needs of medical professionals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Tax Efficiency</h4>
              <p className="text-gray-600">Structured to optimize tax outcomes for high-income professionals, with strategies to minimize current tax burden while maximizing long-term wealth creation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Risk Management</h4>
              <p className="text-gray-600">Sophisticated approach to balancing growth potential with capital preservation, designed for physicians who understand both risk and reward in their professional lives.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Exclusive Access</h4>
              <p className="text-gray-600">Provides physicians with access to high-growth private investments typically reserved for institutional investors, leveraging our network and expertise to create unique opportunities.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
