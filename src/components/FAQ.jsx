import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Mountain SPV FI and how does it work?",
      answer: "Mountain SPV FI is a Special Purpose Vehicle established by Garrison Fathom and Mountain VC to provide select investors with exclusive access to four high-growth companies. The SPV pools capital from qualified investors and strategically invests in these companies at favorable terms, with the goal of maximizing returns through eventual exits via IPOs or acquisitions."
    },
    {
      question: "What is the minimum investment required?",
      answer: "The minimum investment in Mountain SPV FI is $250,000 for 250,000 Class A Units at $1.00 per Unit. This minimum may be adjusted at the discretion of the Manager for certain investors."
    },
    {
      question: "What are the target returns for this investment?",
      answer: "While specific returns cannot be guaranteed, our investment strategy targets annual returns ranging from 18-28% depending on the investment plan and risk profile. These projections are based on the growth trajectories of our portfolio companies, their current valuations, and anticipated exit strategies."
    },
    {
      question: "How are the four portfolio companies selected?",
      answer: "Our portfolio companies (Xenter, Giv.care, Plansight, and Volition) were selected based on rigorous criteria including: strong management teams, innovative technologies in high-growth sectors, clear paths to profitability, and significant competitive advantages. Our leadership team already has ownership stakes and influence in these companies, providing unique insights and strategic advantages."
    },
    {
      question: "What is the expected timeline for returns?",
      answer: "Mountain SPV FI is structured as a medium to long-term investment vehicle. While some liquidity events may occur earlier, investors should generally expect a 3-7 year horizon for significant returns, with the most advanced company (Xenter) planning an IPO by the end of 2026/early 2027."
    },
    {
      question: "How is this investment structured from a tax perspective?",
      answer: "Mountain SPV FI is structured as an LLC, which provides pass-through tax treatment. This means that profits, losses, deductions, and credits flow through to investors' individual tax returns. We recommend consulting with your tax advisor to understand the specific implications for your situation."
    },
    {
      question: "What kind of reporting and updates will investors receive?",
      answer: "Investors receive comprehensive quarterly reports detailing the performance and developments of each portfolio company. Additionally, we host semi-annual investor meetings and provide access to the management team for questions. Major developments are communicated promptly through special updates."
    },
    {
      question: "How is this investment different from traditional venture capital or private equity?",
      answer: "Unlike traditional VC or PE funds that invest across many companies with a portfolio approach, Mountain SPV FI provides focused exposure to four carefully selected high-growth companies. Our leadership team has direct involvement with each company, allowing for strategic influence to maximize value. Additionally, our structure provides physicians and other investors access to deals typically reserved for institutional investors."
    },
    {
      question: "What are the primary risk factors for this investment?",
      answer: "Key risks include: market and economic conditions affecting exit opportunities, execution risks at the portfolio company level, regulatory changes in healthcare and technology sectors, and the inherent illiquidity of private investments. Our offering documents provide a comprehensive discussion of all risk factors, which investors should review carefully."
    },
    {
      question: "How can I learn more or proceed with an investment?",
      answer: "To learn more about Mountain SPV FI or to begin the investment process, please contact our investor relations team through the form below. We will promptly provide you with the Private Placement Memorandum, Subscription Agreement, and schedule a personal consultation to answer any additional questions."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get answers to common questions about investing with Mountain SPV FI
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-6 text-left rounded-lg ${
                  activeIndex === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span>
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="bg-white border border-gray-200 border-t-0 rounded-b-lg p-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Have additional questions? Our team is ready to assist you.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
