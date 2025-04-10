'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "How accurate is the information provided?",
      answer: "HealixAI provides information based on peer-reviewed medical research and clinical guidelines. All responses include citations to the original sources, allowing you to verify the information."
    },
    {
      question: "What sources does HealixAI use?",
      answer: "We access PubMed, clinical practice guidelines, medical textbooks, and other trusted medical databases to provide comprehensive, evidence-based information."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we take data security and privacy seriously. All data is encrypted, and we do not share your queries or information with third parties."
    },
    {
      question: "How do credits work?",
      answer: "Each query consumes one credit. More complex queries that require extensive research may use additional credits. You'll always be informed before additional credits are used."
    },
    {
      question: "Can I use HealixAI for patient care?",
      answer: "HealixAI is designed as an educational and research tool for healthcare professionals. While it provides evidence-based information, clinical decisions should always be made by qualified healthcare providers using their professional judgment."
    },
    {
      question: "Can we use HealixAI on our medical or healthcare website?",
      answer: "Yes! HealixAI can be integrated into your medical or healthcare website to provide evidence-based information to your visitors. Get in touch with our team to discuss integration options and how we can customize the solution for your specific needs."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isFAQSectionOpen, setIsFAQSectionOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFAQSection = () => {
    setIsFAQSectionOpen(!isFAQSectionOpen);
  };

  return (
    <section id="faq" className="py-16 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-white text-stroke-cyan">Frequently Asked</span> <span className="text-cyan-500">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about HealixAI and how it can support your medical practice.
          </p>
          <button 
            onClick={toggleFAQSection}
            className="flex items-center justify-center mx-auto space-x-2 focus:outline-none group mt-6"
            aria-expanded={isFAQSectionOpen}
            aria-controls="faq-content"
          >
            <span className="text-cyan-500 font-medium">
              {isFAQSectionOpen ? 'Hide Questions' : 'Show Questions'}
            </span>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-500 transition-transform duration-200 ml-2 ${isFAQSectionOpen ? 'transform rotate-180' : ''}`}>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
        </div>
        
        <div 
          id="faq-content"
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isFAQSectionOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
          aria-hidden={!isFAQSectionOpen}
        >
          <div className="max-w-3xl mx-auto space-y-4 mt-8">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-800 bg-gray-950/50 shadow-sm">
                <button
                  className="flex justify-between items-center w-full p-5 text-left transition-colors hover:bg-gray-900/50"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`}>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="p-5 border-t border-gray-800 bg-gray-900/30">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
