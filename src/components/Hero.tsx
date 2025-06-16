import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-6xl">🪧</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Buried in tickets? Losing customers before they even hit{' '}
          <span className="bg-[#ffcf0d] px-2 py-1 rounded">'Reply'</span>?
        </h1>
        
        
        
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8">
          Your support inbox is not the problem. It's the system behind it.
        </h2>
        
        <div className="flex items-center justify-center mb-8">
          <span className="text-2xl mr-3">✨</span>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">In 4 weeks, we’ll fix your broken support ops, reduce churn, and give your team breathing room, without adding headcount.</p>
        </div>
        
        <div className="bg-[#1d87ae] text-white p-8 rounded-2xl mb-12 max-w-3xl mx-auto">
          <div className="flex items-start">
            <span className="text-3xl mr-4">👋</span>
            <div className="text-left">
              <p className="text-lg leading-relaxed">
                I help fast-moving SaaS & AI startups clear their backlog, speed up response times, 
                and build support systems that don't collapse under pressure.
              </p>
              <p className="mt-4 text-lg font-semibold">This isn't just about tickets, it's about protecting revenue and customer trust.</p>
            </div>
          </div>
        </div>
        
        <Button size="lg" className="bg-[#ffcf0d] hover:bg-[#e6b800] text-black font-bold text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Let's Fix Your Support Ops
        </Button>
      </div>
    </section>;
};
export default Hero;