import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Efficio HRMS ensure data security and compliance?",
      answer: "Efficio employs enterprise-grade security measures including AES-256 encryption, SOC 2 Type II compliance, regular third-party audits, and GDPR-ready data protection controls. All data is stored in secure, geographically redundant AWS data centers with 24/7 monitoring.",
      category: "Security"
    },
    {
      question: "What's the implementation timeline for Efficio HRMS?",
      answer: "Most implementations take 2-4 weeks depending on complexity. Our typical process: Week 1 - Discovery & planning; Week 2 - System configuration; Week 3 - Data migration; Week 4 - Testing & training. We offer accelerated onboarding for SMBs that can be completed in as little as 10 days.",
      category: "Implementation"
    },
    {
      question: "Can Efficio integrate with our existing HR tools?",
      answer: "Yes, our platform offers 150+ pre-built integrations with popular payroll, accounting, ATS, and productivity tools. Our open API also allows custom integrations. Common integrations include ADP, Workday, QuickBooks, Slack, and Microsoft Teams.",
      category: "Integrations"
    },
    {
      question: "How does pricing scale with employee count?",
      answer: "Our pricing follows a tiered model based on your organization size. For 1-50 employees: $5/user/month; 51-200: $4/user/month; 201-500: $3.50/user/month; 500+: Custom enterprise pricing. All plans include unlimited support and regular feature updates.",
      category: "Pricing"
    },
    {
      question: "What training and support options are available?",
      answer: "Every customer receives: 1) Dedicated onboarding specialist, 2) 24/5 live support via chat/email, 3) Monthly training webinars, 4) Comprehensive knowledge base, and 5) Optional premium support with SLAs for enterprise clients. We also offer customized training programs for your team.",
      category: "Support"
    },
    {
      question: "How often are new features released?",
      answer: "We release minor updates weekly and major feature updates quarterly. Our product roadmap is customer-driven and we regularly incorporate user feedback. All customers receive release notes and can vote on upcoming features in our customer portal.",
      category: "Product"
    }
  ];

  // Group FAQs by category
  const faqCategories = {};
  faqs.forEach(faq => {
    if (!faqCategories[faq.category]) {
      faqCategories[faq.category] = [];
    }
    faqCategories[faq.category].push(faq);
  });

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-4 py-2 mb-6 shadow-lg">
            Need Answers?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Frequently Asked
            </span> Questions
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about Efficio HRMS
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                onClick={() => {
                  const firstFaqIndex = faqs.findIndex(faq => faq.category === category);
                  setActiveIndex(firstFaqIndex);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300"
              >
                <button
                  className={`w-full flex justify-between items-center p-6 text-left focus:outline-none ${activeIndex === index ? 'bg-gray-50' : ''}`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`px-6 pb-6 pt-0 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
                  aria-hidden={activeIndex !== index}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our HR experts are ready to help you with any specific questions about Efficio HRMS.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;