import React, { useState } from 'react';
import { FileX, AlertCircle, Calculator, FileSpreadsheet, CheckCircle, Zap, Shield, FileCheck, ArrowRight } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  // Simple state for a hover interaction across the section
  const [hoveredSide, setHoveredSide] = useState<'problem' | 'solution' | null>(null);

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 relative">
          
          {/* Arrow visual in the middle for large screens */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border border-gray-100 items-center justify-center w-12 h-12">
             <ArrowRight className="text-gray-400" />
          </div>

          {/* Problem Side */}
          <div 
            className={`bg-gray-50 p-12 rounded-[3rem] border border-gray-100 transition-all duration-500 ${hoveredSide === 'solution' ? 'opacity-50 blur-[1px]' : 'opacity-100'}`}
            onMouseEnter={() => setHoveredSide('problem')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="inline-block px-4 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              The Old Way
            </div>
            <h2 className="text-4xl font-display font-medium text-gray-900 mb-10 tracking-tight">
              Procurement is <br/><span className="text-gray-400 italic font-serif">complicated.</span>
            </h2>
            <div className="space-y-4">
              {[
                { icon: FileX, title: "Manual RFQs via Email", desc: "Endless email chains and lost attachments." },
                { icon: AlertCircle, title: "No Price Transparency", desc: "Overpaying due to lack of market visibility." },
                { icon: FileSpreadsheet, title: "Excel Hell", desc: "Comparing complex quotes manually in spreadsheets." },
                { icon: Calculator, title: "Hidden Costs", desc: "Unexpected delivery fees and compliance risks." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 rounded-3xl hover:bg-white transition-colors group cursor-default border border-transparent hover:border-gray-100 hover:shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                     <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div 
             className={`bg-primary-50 p-12 rounded-[3rem] relative overflow-hidden group border border-primary-100 transition-all duration-500 ${hoveredSide === 'problem' ? 'opacity-80' : 'opacity-100 scale-[1.01] shadow-xl shadow-primary-100'}`}
             onMouseEnter={() => setHoveredSide('solution')}
             onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="inline-block px-4 py-1.5 bg-primary-200 text-primary-900 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              The Easemed Way
            </div>
            <h2 className="text-4xl font-display font-medium text-gray-900 mb-10 tracking-tight relative z-10">
              Procurement, <br/><span className="text-primary-600 italic font-serif">reimagined.</span>
            </h2>
            <div className="space-y-4 relative z-10">
              {[
                { icon: Zap, title: "Structured Digital RFQs", desc: "Create standardized requests in seconds." },
                { icon: FileCheck, title: "Instant Bid Comparison", desc: "Side-by-side analysis, automatically ranked." },
                { icon: Shield, title: "Verified Suppliers", desc: "Access a pre-vetted network of top distributors." },
                { icon: CheckCircle, title: "Automated Compliance", desc: "Digital audit trails and auto-generated POs." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 rounded-3xl bg-white/60 border border-white hover:bg-white hover:scale-105 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-5 flex-shrink-0 text-primary-600">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decor */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary-200 to-azure-200 rounded-full blur-[80px] opacity-60 pointer-events-none animate-pulse-slow"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;