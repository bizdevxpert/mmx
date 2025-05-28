import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const executives = [
    {
      name: "Richard Linder",
      title: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Richard is a seasoned executive with over 25 years of experience in healthcare and technology. Previously, he founded and led multiple successful ventures including Coherex Medical (acquired for $300M) and Xenter. His expertise spans medical devices, digital health, and venture capital."
    },
    {
      name: "Vinh Vuong",
      title: "Managing Partner",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Vinh brings extensive experience in investment banking, private equity, and venture capital. He has led numerous successful investments in healthcare and technology companies, with a track record of generating exceptional returns. Vinh holds an MBA from Harvard Business School."
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "Chief Medical Officer",
      image: "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Dr. Mitchell is a board-certified cardiologist with extensive clinical and research experience. She provides critical medical expertise in evaluating healthcare investments and serves as a liaison to the physician investor community. She completed her medical training at Johns Hopkins."
    },
    {
      name: "David Chen",
      title: "Chief Investment Officer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "David has over 15 years of experience in investment management, with a focus on alternative assets and private equity. He previously managed a $2B healthcare investment portfolio and has a proven track record of identifying high-growth opportunities. David holds an MBA from Wharton."
    }
  ];

  const advisors = [
    {
      name: "General James Mattis",
      expertise: "Defense & Strategy",
      image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. Robert Langer",
      expertise: "Biotech & Medical Devices",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Jennifer Harris",
      expertise: "Banking & Finance",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. Michael Thompson",
      expertise: "Healthcare Policy",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experienced professionals with proven track records in healthcare, technology, and investment management
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executives.map((executive, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={executive.image} 
                  alt={executive.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{executive.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{executive.title}</p>
                <p className="text-gray-600 text-sm">{executive.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advisory Network</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team is supported by a distinguished network of advisors with expertise across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src={advisor.image} 
                  alt={advisor.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{advisor.name}</h4>
                  <p className="text-gray-500 text-sm">{advisor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-xl p-8 text-white"
        >
          <div className="md:flex items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Our Investment Philosophy</h3>
              <p className="text-blue-100 mb-4">
                At Mountain SPV FI, we believe in a disciplined, strategic approach to investing. Our team conducts rigorous due diligence on every opportunity, focusing on companies with:
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Strong, experienced management teams with proven track records</li>
                <li>• Innovative technologies addressing significant market needs</li>
                <li>• Clear paths to profitability and defined exit strategies</li>
                <li>• Substantial competitive advantages and barriers to entry</li>
              </ul>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="bg-white inline-block p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
