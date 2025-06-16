
const HowToWork = () => {
  const workDetails = [
    { icon: "🗓️", text: "One 4-week sprint" },
    { icon: "💵", text: "Starts at $1,350 (increases per client slot)" },
    { icon: "🧰", text: "Done-for-you execution + async check-ins" },
    { icon: "🧪", text: "No risk: if we're not a match after the first call, we don't move forward" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-4xl mb-6 block">💬</span>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          How to Work With Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {workDetails.map((detail, index) => (
            <div 
              key={index}
              className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-[#ffcf0d]/10 transition-colors duration-300"
            >
              <span className="text-2xl mr-4">{detail.icon}</span>
              <p className="text-lg text-gray-800 text-left">{detail.text}</p>
            </div>
          ))}
        </div>
        
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
