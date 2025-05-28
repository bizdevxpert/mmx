import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mountain SPV FI has transformed my investment portfolio. The access to high-growth companies in the healthcare sector has provided returns I couldn't achieve elsewhere, while the team's expertise gives me confidence my capital is well-managed.",
      name: "Dr. Sarah Johnson",
      title: "Orthopedic Surgeon, Chicago",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "As a physician with limited time to research investments, Mountain SPV FI has been invaluable. Their deep understanding of healthcare innovation and thorough due diligence process gives me peace of mind, while the returns have exceeded my expectations.",
      name: "Dr. Michael Chen",
      title: "Cardiologist, San Francisco",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The team at Mountain SPV FI understands the unique financial needs of physicians. Their investment approach aligns perfectly with my goals for wealth preservation and growth. The regular updates and transparent communication keep me informed without requiring my constant attention.",
      name: "Dr. Emily Rodriguez",
      title: "Neurologist, Miami",
      image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Physician Investors Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hear from medical professionals who have partnered with Mountain SPV FI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <FaQuoteLeft className="text-blue-100 text-4xl mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 rounded-xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Join a Community of Successful Physician Investors</h3>
          <p className="text-blue-100 max-w-3xl mx-auto mb-8">
            Mountain SPV FI has helped hundreds of medical professionals achieve their financial goals through strategic investments in high-growth companies. Our physician investors appreciate our healthcare focus, professional management, and exceptional returns.
          </p>
          
          <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
