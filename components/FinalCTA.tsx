import React from 'react';
import Button from './ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto bg-gray-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center group">
         {/* Decor gradients */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] group-hover:bg-primary-500/30 transition-colors duration-1000"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-azure-500/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
           <div className="absolute top-0 left-0 w-64 h-64 bg-skin-500/20 rounded-full blur-[80px]"></div>
         </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Ready to modernise <br/> procurement?
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Join 500+ leading hospitals and suppliers who have switched to the intelligent, transparent way of doing business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" withArrow className="bg-primary-400 text-gray-900 hover:bg-primary-300 shadow-glow-green px-12 rounded-full border-0">
              Start Free
            </Button>
            <Button size="lg" className="bg-transparent border border-gray-700 text-white hover:bg-white/10 hover:border-white rounded-full px-12 backdrop-blur-sm">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;