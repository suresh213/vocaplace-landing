import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Do I need prior coding experience?",
    a: "No, our programs are designed for beginners. We start from the fundamentals and gradually move to advanced concepts. However, dedication and consistent practice are required."
  },
  {
    q: "How does the placement support work?",
    a: "We have a dedicated placement team that helps you with resume building, portfolio creation, and mock interviews. We also connect you with our network of hiring partners once you clear the final assessment."
  },
  {
    q: "What is the role of the AI Mentor?",
    a: "Your AI Mentor is available 24/7 to answer your doubts, review your code, and provide personalized feedback. It acts as a teaching assistant to ensure you never get stuck."
  },
  {
    q: "Are the classes live or recorded?",
    a: "We offer a hybrid model. You get access to high-quality recorded lectures for self-paced learning, along with regular live sessions for doubt clearing, project discussions, and mentorship."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 uppercase tracking-tighter text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 bg-slate-50">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
              >
                <span className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-tight pr-8">
                  {faq.q}
                </span>
                {openIndex === index ? <Minus size={20} className="text-slate-900" /> : <Plus size={20} className="text-slate-900" />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4 animate-fade-in font-mono">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;