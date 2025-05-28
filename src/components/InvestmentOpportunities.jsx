import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InvestmentOpportunities = () => {
  const [activeCompany, setActiveCompany] = useState('xenter');

  const companies = {
    xenter: {
      name: "Xenter, Inc.",
      logo: "https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tagline: "Physical Intelligence & Digital Medicine",
      description: "Xenter is pioneering the field of Physical Intelligence with its innovative medical devices and digital health platform. The company's breakthrough technology combines wireless sensors, AI, and advanced analytics to provide real-time physiological data for improved patient outcomes.",
      highlights: [
        "Proprietary wireless sensor technology for continuous monitoring",
        "AI-powered analytics platform for predictive healthcare insights",
        "FDA clearance pathway in progress with multiple patents",
        "Experienced leadership team with successful exits in medtech"
      ],
      metrics: {
        projectedRevenue: "$180M+",
        projectedYear: "2026",
        currentValuation: "$120M",
        targetExit: "IPO by 2026/2027",
        fundingStage: "Series B"
      }
    },
    givcare: {
      name: "Giv.care, Inc.",
      logo: "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tagline: "Revolutionizing Caregiving Solutions",
      description: "Giv.care is transforming the caregiving industry with its comprehensive platform that connects families with qualified caregivers, provides digital tools for care management, and offers innovative insurance products for long-term care needs.",
      highlights: [
        "Rapidly growing marketplace with 10,000+ registered caregivers",
        "Proprietary matching algorithm with 95% satisfaction rate",
        "Innovative insurance products for caregiving expenses",
        "Strategic partnerships with major healthcare providers"
      ],
      metrics: {
        projectedRevenue: "$75M+",
        projectedYear: "2026",
        currentValuation: "$45M",
        targetExit: "Strategic acquisition by 2027",
        fundingStage: "Series A"
      }
    },
    plansight: {
      name: "Plansight, Inc.",
      logo: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tagline: "AI-Powered Insurance Technology",
      description: "Plansight is disrupting the insurance industry with its AI-powered platform that streamlines underwriting, claims processing, and risk assessment. The company's technology enables insurers to offer more personalized products while reducing operational costs.",
      highlights: [
        "Proprietary AI algorithms reducing underwriting time by 80%",
        "Cloud-based platform processing 50,000+ claims monthly",
        "White-label solutions for major insurance providers",
        "Expanding into healthcare-specific insurance products"
      ],
      metrics: {
        projectedRevenue: "$55M+",
        projectedYear: "2026",
        currentValuation: "$30M",
        targetExit: "Strategic acquisition by 2028",
        fundingStage: "Series A"
      }
    },
    volition: {
      name: "Volition, Inc.",
      logo: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tagline: "Renewable Energy Infrastructure",
      description: "Volition is developing next-generation infrastructure for renewable energy storage and distribution. The company's innovative technology enables more efficient energy storage, smart grid integration, and improved reliability for renewable energy systems.",
      highlights: [
        "Patented energy storage technology with 40% higher efficiency",
        "Smart grid integration platform for optimized energy distribution",
        "Contracts with three major utility companies",
        "Expanding into healthcare facility energy solutions"
      ],
      metrics: {
        projectedRevenue: "$30M+",
        projectedYear: "2026",
        currentValuation: "$25M",
        targetExit: "Strategic acquisition by 2029",
        fundingStage: "Series A"
      }
    }
  };

  return (
    <section id="opportunities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Portfolio Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Mountain SPV FI provides exclusive access to these four high-growth companies
          </motion.p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(companies).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCompany(key)}
                className={`px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                  activeCompany === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {companies[key].name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeCompany}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100">
              <img 
                src={companies[activeCompany].logo} 
                alt={companies[activeCompany].name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{companies[activeCompany].name}</h3>
                <p className="text-blue-600 font-medium">{companies[activeCompany].tagline}</p>
              </div>
              
              <p className="text-gray-700 mb-6">
                {companies[activeCompany].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Projected Revenue</p>
                  <p className="text-gray-900 font-bold text-xl">{companies[activeCompany].metrics.projectedRevenue}</p>
                  <p className="text-gray-500 text-sm">by {companies[activeCompany].metrics.projectedYear}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Current Valuation</p>
                  <p className="text-gray-900 font-bold text-xl">{companies[activeCompany].metrics.currentValuation}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Funding Stage</p>
                  <p className="text-gray-900 font-bold text-xl">{companies[activeCompany].metrics.fundingStage}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {companies[activeCompany].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Exit Strategy</h4>
                <p className="text-gray-700">{companies[activeCompany].metrics.targetExit}</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Combined Projected Revenue</h3>
          <p className="text-5xl font-bold text-blue-600 mb-6">$340M+</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By 2026, our portfolio companies are projected to generate over $340 million in combined annual revenue, creating significant value for investors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
