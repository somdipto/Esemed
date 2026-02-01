import React from 'react';
import { Search, ShieldCheck, Truck, Star, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="features">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-azure-200 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-skin-200 rounded-full blur-[120px]"></div>
       </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
              <span className="text-azure-600 font-bold tracking-wider uppercase text-sm mb-2 block">Powerful Tools</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-gray-900 leading-[1.1]">
                Everything you need <br className="hidden md:block"/> to procure with confidence.
              </h2>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 text-gray-500 hover:border-primary-400 hover:text-primary-600 transition-colors cursor-default">● Smart Analysis</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 text-gray-500 hover:border-azure-400 hover:text-azure-600 transition-colors cursor-default">● Global Scale</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card 1 - Main Feature - Comparison */}
          <div className="md:col-span-2 bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden group min-h-[450px] transition-all duration-500 hover:shadow-xl hover:border-primary-100">
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                        <Search className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-3xl font-display font-medium text-gray-900 mb-4">Smart Comparison</h3>
                    <p className="text-gray-500 text-lg font-light max-w-lg">
                        Our AI engine normalizes quotes from different vendors so you can compare apples to apples. Price, delivery date, and payment terms in a single view.
                    </p>
                </div>
                
                {/* Interactive UI Element */}
                <div className="mt-8 bg-gray-50 rounded-3xl p-6 max-w-md border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                    {/* Hover reveal gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Best Price Found</span>
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-[10px] font-bold shadow-sm animate-pulse">SAVING 15%</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-sm font-semibold text-gray-900">Surgical Gloves</p>
                                <p className="text-xs text-gray-500">Vendor A vs Vendor B</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-gray-900">₹120<span className="text-xs font-normal text-gray-400">/unit</span></p>
                                <p className="text-xs text-red-400 line-through decoration-red-400/50">₹142</p>
                            </div>
                        </div>
                        {/* Progress bar visual */}
                        <div className="mt-4 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-500 w-[85%] rounded-full group-hover:w-[100%] transition-all duration-1000 ease-out"></div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Background Decoration */}
             <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>

          {/* Tall Card 2 - Vertical - Verified Network */}
          <div className="md:col-span-1 md:row-span-2 bg-gray-900 rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-2">
             <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-azure-950 to-gray-900 z-0"></div>
             
             <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm group-hover:bg-azure-500/20 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-azure-300" />
                </div>
                <h3 className="text-3xl font-display font-medium mb-4">Verified <br/>Network</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                    Access 2,000+ pre-vetted medical suppliers. Every vendor undergoes a strict 5-point verification process.
                </p>
             </div>
             
             <div className="mt-12 relative z-10">
                 <div className="flex -space-x-4 mb-6 pl-2">
                     {[1,2,3,4].map(i => (
                         <div 
                            key={i} 
                            className="w-12 h-12 rounded-full border-4 border-gray-900 bg-gray-800 flex items-center justify-center text-xs overflow-hidden transition-transform duration-300 hover:scale-125 hover:z-20 hover:border-azure-500"
                            style={{ transitionDelay: `${i * 50}ms` }}
                         >
                             <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                               <circle cx="50" cy="40" r="20" fill="#e2e8f0" />
                               <path d="M30,80 C30,70 40,60 50,60 C60,60 70,70 70,80 L60,80 C60,75 55,70 50,70 C45,70 40,75 40,80 Z" fill="#e2e8f0" />
                             </svg>
                         </div>
                     ))}
                     <div className="w-12 h-12 rounded-full border-4 border-gray-900 bg-azure-600 flex items-center justify-center text-xs font-bold z-10">
                         +2k
                     </div>
                 </div>
                 <Button variant="primary" className="w-full justify-between group-hover:bg-azure-500 group-hover:text-white border-0">
                    Join Network <ArrowUpRight className="w-4 h-4" />
                 </Button>
             </div>

             {/* Animated shapes in background */}
             <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 border border-white/5 rounded-full animate-spin-slow"></div>
             <div className="absolute bottom-[-30px] right-[-30px] w-48 h-48 border border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>

          {/* Medium Card 3 - Tracking */}
          <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-skin-50 rounded-bl-[100px] transition-transform group-hover:scale-125"></div>
             
             <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 bg-skin-50 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Truck className="w-6 h-6 text-skin-500" />
                </div>
                <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live
                </div>
             </div>
             <h3 className="text-2xl font-display font-medium text-gray-900 mb-2 relative z-10">Real-Time Tracking</h3>
             <p className="text-gray-500 font-light text-sm relative z-10 mb-4">Track shipments from warehouse to delivery dock.</p>
             
             {/* Map/Track Visual */}
             <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative">
                 <div className="absolute top-0 left-0 h-full bg-gray-200 w-full"></div>
                 {/* Moving dot */}
                 <div className="absolute top-0 left-0 h-full w-1/3 bg-skin-400 rounded-full animate-[slideRight_3s_ease-in-out_infinite]"></div>
             </div>
          </div>

          {/* Medium Card 4 - Reputation */}
          <div className="bg-azure-50 rounded-[3rem] p-10 relative overflow-hidden group border border-azure-100 transition-colors hover:bg-azure-100">
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full opacity-50 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
             
             <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <Star className="w-6 h-6 text-azure-500 fill-azure-500" />
                </div>
                <div className="flex">
                    {[1,2,3,4,5].map(star => (
                        <Star key={star} className="w-4 h-4 text-azure-400 fill-azure-400" />
                    ))}
                </div>
             </div>
             <h3 className="text-2xl font-display font-medium text-gray-900 mb-2 relative z-10">Reputation Engine</h3>
             <p className="text-gray-600 font-light text-sm relative z-10">Community-driven ratings ensure accountability.</p>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes slideRight {
            0% { left: -30%; width: 10%; }
            50% { width: 30%; }
            100% { left: 100%; width: 10%; }
        }
      `}</style>
    </section>
  );
};

export default Features;