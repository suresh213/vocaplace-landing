import React from 'react';

const AIMentorPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">AI Mentor for Personalized Learning</h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Our AI mentor provides personalized support throughout the learning journey by analyzing progress, identifying weaknesses, and guiding students toward improvement.
        </p>
        <button className="h-14 px-10 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-none sharp-shadow-hover transition-transform duration-200">
          Try AI Mentor
        </button>
      </section>

      {/* Features & Benefits */}
      <section className="px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight border-b border-white/20 pb-4">Features</h2>
          <div className="space-y-6">
            {[
              { title: "Concept explanations", desc: "Get step-by-step breakdowns of difficult technical concepts." },
              { title: "Code reviews", desc: "Receive instant feedback on your code quality, bugs, and best practices." },
              { title: "Personalized learning recommendations", desc: "Get tailored exercises based on your current skill level and weaknesses." },
              { title: "Interview simulations", desc: "Practice technical interviews with real-time feedback and hints." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold">
                  {i+1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-white/10 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Benefits</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Students receive continuous feedback and guidance, making learning faster and more effective.
          </p>
          <div className="p-6 border border-white/20 bg-black relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-white"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-white"></div>
            <p className="font-mono text-sm text-gray-400 italic">
              "The AI mentor helped me practice interview questions and identify areas where I needed improvement. It felt like having a senior developer available 24/7."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMentorPage;
