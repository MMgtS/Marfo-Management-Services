

const HowToWork = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-4xl mb-6 block">💬</span>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          How to Work With Me
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Simple, transparent pricing for complex problems
        </p>
        
        {/* Simplified Pricing Card */}
        <div className="bg-white border-2 border-[#ffcf0d] rounded-2xl p-8 shadow-lg mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl mr-3">🟡</span>
            <h3 className="text-2xl md:text-3xl font-bold text-black">The Support Ops Reset Sprint</h3>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">4 weeks to fix your support chaos</p>
            <p className="text-4xl font-bold text-black mb-6">$1,500</p>
            
            <div className="text-left space-y-3 mb-8">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <p className="text-gray-800">Full inbox audit + backlog triage</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <p className="text-gray-800">AI + macro setup that actually works</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <p className="text-gray-800">Custom triage flows + tagging rules</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <p className="text-gray-800">Done-for-you execution + async check-ins</p>
              </div>
            </div>

            {/* Book a Call Button */}
            <a 
              href="#book-call" 
              className="inline-block bg-[#1d87ae] hover:bg-[#166a8a] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 mb-6"
            >
              Book a Call
            </a>
          </div>
          
          {/* Simplified Guarantee */}
          <div className="bg-[#ffcf0d] text-black p-4 rounded-xl">
            <div className="flex items-center justify-center">
              <span className="text-xl mr-2">💥</span>
              <p className="font-semibold">
                Week 1 guarantee: Fix one core issue or full refund
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;

