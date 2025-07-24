import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'How much does it cost to build a mobile app?',
    answer:
      'The mobile app development cost varies depending on the complexity, platform, and features of your app. Basic mobile apps generally cost between $20,000 to $40,000. However, if your app includes advanced functionalities such as real-time data syncing, AI-powered features, or custom integrations, the price could range from $50,000 to $100,000 or more.',
  },
  {
    question: 'How long does it take to build a mobile app?',
    answer:
      'Development time depends on the app’s scope. Basic apps can take 2–4 months, while complex apps may take 6+ months.',
  },
  {
    question: 'What factors affect mobile app development costs?',
    answer:
      'Platform choice, features, UI/UX design, backend complexity, and developer location all impact costs.',
  },
  {
    question: 'Should I choose native or cross-platform development?',
    answer:
      'Native offers best performance but higher cost; cross-platform saves time and money with trade-offs in performance.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-5 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl p-5 transition-all duration-300 ${
                isOpen ? 'bg-red-600 text-white' : 'bg-gray-100 text-black'
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {isOpen ? (
                  <Minus className="text-white bg-black/20 rounded-full p-1" size={28} />
                ) : (
                  <Plus className="text-red-600 bg-white rounded-full p-1" size={28} />
                )}
              </div>

              {isOpen && (
                <p className="mt-4 text-sm text-white leading-relaxed">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-sm tracking-wider uppercase transition duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
