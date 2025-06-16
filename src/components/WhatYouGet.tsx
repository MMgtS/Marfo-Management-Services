
const WhatYouGet = () => {
  const benefits = [
    "Clear your inbox without breaking your team",
    "Create macros & triage rules that actually work", 
    "Set up AI tools that don't make things worse",
    "Spot churn levers hiding in your support logs",
    "Build systems so you're not hiring reactively every 3 months"
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🔧</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            What You Get
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            In 4 weeks, I'll help you:
          </p>
        </div>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-[#ffcf0d]/10 transition-colors duration-300"
            >
              <div className="w-3 h-3 bg-[#ffcf0d] rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <p className="text-lg text-gray-800 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
