import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUserMd, FaShieldAlt, FaRegLightbulb, FaRegChartBar, FaRegClock } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "High-Growth Potential",
      description: "Access to four carefully selected companies with projected combined revenues of $340M+ by 2026, positioned in rapidly expanding markets."
    },
    {
      icon: <FaUserMd className="text-blue-600 text-3xl" />,
      title: "Healthcare Focus",
      description: "Portfolio includes innovative healthcare and medical technology companies that align with physicians' professional expertise and interests."
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      title: "Strategic Positioning",
      description: "Our leadership team has existing ownership stakes and influence in each company, providing unique advantages and risk mitigation."
    },
    {
      icon: <FaRegLightbulb className="text-blue-600 text-3xl" />,
      title: "Innovative Technologies",
      description: "Exposure to cutting-edge innovations in medical devices, caregiving solutions, insurance technology, and renewable energy infrastructure."
    },
    {
      icon: <FaRegChartBar className="text-blue-600 text-3xl" />,
      title: "Clear Exit Strategies",
      description: "Well-defined paths to liquidity through planned IPOs and strategic acquisitions, with the most advanced company targeting IPO by 2026/2027."
    },
    {
      icon: <FaRegClock className="text-blue-600 text-3xl" />,
      title: "Optimal Timing",
      description: "Investment at critical Series A and Series B rounds before significant valuation multiple expansion, maximizing potential returns."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Invest with Mountain SPV FI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our unique investment approach combines exclusive access, strategic positioning, and exceptional growth potential
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="md:flex items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Principled Approach to Investing</h3>
              <p className="text-gray-600 mb-4">
                At Mountain SPV FI, we position ourselves as the low-risk, high-return fund that your portfolio not only needs, but can depend on. Our principled approach is rooted in discipline, transparency, and a steadfast commitment to delivering consistent value.
              </p>
              <p className="text-gray-600">
                We treat our investors like family, fostering trust and prioritizing their long-term success. We would be honored to earn your confidence and demonstrate the exceptional value we bring to your investments.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-3">Target Close Date</h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">May 31, 2025</p>
                <p className="text-gray-600 text-sm">Limited availability: 50,000,000 Class A Units</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
