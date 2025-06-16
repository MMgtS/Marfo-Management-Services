
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
        <div className="bg-white border-2 border-[#ffcf0d] rounded-2xl p-8 shadow-lg mb-8 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-black mb-2">$1,500</div>
            <div className="text-lg text-gray-600">4-Week Sprint</div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mr-4">🗓️</span>
              <p className="text-lg text-gray-800">One 4-week sprint</p>
            </div>
            
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mr-4">🧰</span>
              <p className="text-lg text-gray-800">Done-for-you execution + async check-ins</p>
            </div>
            
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mr-4">🧪</span>
              <p className="text-lg text-gray-800">No risk: if we're not a match after the first call, we don't move forward</p>
            </div>
          </div>
          
          <div className="bg-[#1d87ae] text-white p-4 rounded-xl mb-6">
            <p className="text-sm font-medium">💵 Price increases per client slot - Book now to lock in this rate</p>
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
