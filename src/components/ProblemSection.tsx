
const ProblemSection = () => {
  const problems = [
    "Constant firefighting in the inbox",
    "Hearing \"We'll get back to you shortly\" turn into \"...3 days later\"",
    "Support being the last to know about bugs, churn, or product gaps", 
    "Buying fancy tools that nobody uses right",
    "Losing customers because your ops can't keep up with growth"
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-4xl mb-6 block">📉</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          For Startups Who Are Tired Of:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#ffcf0d] transition-colors duration-300"
            >
              <p className="text-lg leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
