import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      title: "Exclusive Access",
      description: "Gain access to high-growth private companies typically reserved for institutional investors and venture capital firms.",
      points: [
        "Participate in critical Series A and Series B funding rounds",
        "Benefit from favorable terms negotiated by our experienced team",
        "Invest alongside industry leaders with proven track records"
      ]
    },
    {
      title: "Portfolio Diversification",
      description: "Diversify your investment portfolio with exposure to innovative companies across multiple high-growth sectors.",
      points: [
        "Balance your traditional investments with alternative assets",
        "Spread risk across different industries and growth stages",
        "Access non-correlated returns to public markets"
      ]
    },
    {
      title: "Professional Management",
      description: "Benefit from our team's extensive experience in venture capital, private equity, and strategic growth.",
      points: [
        "Leadership with proven track record of successful exits",
        "Active involvement in portfolio companies' strategic decisions",
        "Regular reporting and transparent communication"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Benefits for Physician Investors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Designed specifically to meet the unique investment needs of medical professionals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              
              <ul className="space-y-3">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500">
                      <FaCheck />
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">Tailored for Physicians' Unique Financial Needs</h3>
              <p className="text-blue-100 mb-6">
                As a physician, your financial situation presents unique challenges and opportunities. Mountain SPV FI is specifically designed to address these needs:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-white bg-blue-500 rounded-full p-1">
                    <FaCheck size={10} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">High Income, High Tax Burden</h4>
                    <p className="text-blue-100 text-sm">
                      Our investment structure provides tax-efficient growth opportunities to help mitigate your substantial tax obligations.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-white bg-blue-500 rounded-full p-1">
                    <FaCheck size={10} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Late Start to Investing</h4>
                    <p className="text-blue-100 text-sm">
                      After years of medical training, our high-growth opportunities help accelerate your wealth accumulation timeline.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-white bg-blue-500 rounded-full p-1">
                    <FaCheck size={10} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Limited Time for Investment Management</h4>
                    <p className="text-blue-100 text-sm">
                      Our professional management team handles all aspects of the investment, freeing you to focus on your practice and patients.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-white bg-blue-500 rounded-full p-1">
                    <FaCheck size={10} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Healthcare Industry Insights</h4>
                    <p className="text-blue-100 text-sm">
                      Leverage your medical expertise by investing in healthcare innovations you understand and can evaluate professionally.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-blue-700 p-8 md:p-12 flex flex-col justify-center">
              <div className="bg-white rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Physician Investor Testimonial</h3>
                <blockquote className="text-gray-600 mb-6 italic">
                  "As a cardiologist with limited time to manage my investments, Mountain SPV FI has been the perfect solution. Their healthcare-focused portfolio aligns with my expertise, and the professional management gives me peace of mind. The returns have significantly outperformed my traditional investments."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. James Mitchell</p>
                    <p className="text-gray-500 text-sm">Interventional Cardiologist, Boston</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
