

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
        
        {/* Main Pricing Card */}
        <div className="bg-white border-2 border-[#ffcf0d] rounded-2xl p-8 shadow-lg mb-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl mr-3">🟡</span>
            <h3 className="text-2xl md:text-3xl font-bold text-black">The Support Ops Reset Sprint</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Best for:</p>
              <p className="text-gray-800">Startups drowning in tickets, running on duct-taped systems</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Duration:</p>
              <p className="text-gray-800">4 weeks</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Investment:</p>
              <p className="text-3xl font-bold text-black">$1,500</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-black mb-4">What's included:</h4>
            <div className="grid md:grid-cols-2 gap-3 text-left">
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
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <p className="text-gray-800">Spot churn and bug insights hiding in your support logs</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <p className="text-gray-800">One training handoff to get your team set up and scaling</p>
              </div>
            </div>
          </div>
          
          {/* Guarantee Section - Made to Stand Out */}
          <div className="bg-gradient-to-r from-[#ffcf0d] to-[#e6b800] text-black p-6 rounded-xl border-2 border-black shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">💥</span>
              <h4 className="text-xl font-bold">Guarantee:</h4>
            </div>
            <p className="text-lg font-semibold leading-relaxed">
              If we don't fix one core issue in Week 1, you get a full refund. No fluff. No risk. Just real support that moves the needle.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-[#ffcf0d] p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-black mb-4">
            ✅ Ready to Stop Support from Breaking Everything Else?
          </h3>
          <p className="text-lg text-black mb-6">
            Book a quick discovery call or DM me on LinkedIn/X.
          </p>
          <p className="text-xl font-semibold text-black">
            Let's turn your backlog into breathing room—and your support ops into a growth advantage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;

