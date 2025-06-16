
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WhatYouGet from "@/components/WhatYouGet";
import WhyThisWorks from "@/components/WhyThisWorks";
import HowToWork from "@/components/HowToWork";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <WhatYouGet />
      <WhyThisWorks />
      <HowToWork />
      <CallToAction />
    </div>
  );
};

export default Index;
