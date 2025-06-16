import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="py-20 px-6 bg-black text-white text-center">
      <div className="max-w-2xl mx-auto">
        <span className="text-4xl mb-6 block">🟡</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Ready to Transform Your Support Operations?
        </h2>
        
        <div className="space-y-4">
          
          
          
          
          <Button variant="outline" size="lg" className="border-[#1d87ae] text-[#1d87ae] hover:bg-[#1d87ae] hover:text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 w-full md:w-auto">
            Book the Free Fix Call
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            Stop losing customers to broken support ops. Let's fix this together.
          </p>
        </div>
      </div>
    </section>;
};
export default CallToAction;