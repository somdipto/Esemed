import React, { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { ArrowUpRight, ShieldCheck, Activity, Search, CheckCircle2, TrendingUp, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center bg-gray-50/50"
    >
      {/* 1. Background Elements (Tech/Healthcare Theme) */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Molecular Grid SVG Pattern */}
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03] text-primary-900" viewBox="0 0 100 100" fill="currentColor">
           <pattern id="hex-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
             <path d="M10 0 L20 5 L20 15 L10 20 L0 15 L0 5 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           </pattern>
           <rect width="100" height="100" fill="url(#hex-grid)" />
        </svg>

        {/* Ambient Glows */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"
          style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-azure-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"
          style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`, animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Typography & Action */}
          <div className="flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-10 hover:border-primary-200 transition-colors cursor-default hover:scale-105 duration-300">
               <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-tr from-primary-400 to-azure-400">
                  <CheckCircle2 className="w-3 h-3 text-white" />
               </div>
               <span className="text-xs font-bold tracking-wide text-gray-600 uppercase">
                 AI-Powered Compliance Engine 2.0
               </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-medium text-gray-900 leading-[1.05] tracking-tight mb-8">
              Procurement, <br/>
              <span className="font-serif-italic text-gray-900 animate-fade-in relative">
                Perfected
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-skin-200/50 rounded-full -rotate-1 skew-x-12"></span>
              </span>
              <span className="text-gray-900">.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg mb-12 font-light">
              The intelligent operating system for modern hospitals. Connect with verified suppliers, automate compliance, and cut procurement time by 70%.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
              <Button size="lg" className="px-10 h-14 text-lg shadow-glow-green hover:shadow-glow-green/80 hover:-translate-y-1">
                Start Free Procurement
              </Button>
              <Button size="lg" variant="white" className="h-14 text-lg border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300">
                <Play className="w-4 h-4 mr-2 fill-current" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 border-t border-gray-200/60 pt-8 group cursor-pointer">
               <div className="flex -space-x-3 transition-all duration-300 group-hover:space-x-1">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm hover:scale-110 hover:z-10 transition-transform">
                       <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                         <circle cx="50" cy="40" r="20" fill="#cbd5e1" />
                         <path d="M30,80 C30,70 40,60 50,60 C60,60 70,70 70,80 L60,80 C60,75 55,70 50,70 C45,70 40,75 40,80 Z" fill="#cbd5e1" />
                       </svg>
                    </div>
                  ))}
               </div>
               <div>
                  <div className="flex items-center gap-1 mb-1">
                     <div className="flex text-amber-400">
                        {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                     </div>
                     <span className="text-sm font-bold text-gray-900">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">Trusted by 500+ clinics & hospitals</p>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Interactive Composition */}
          <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
             
             {/* Main Dashboard Card (3D Tilt) */}
             <div 
               className="relative w-full max-w-lg aspect-[4/5] md:aspect-square bg-white rounded-[2.5rem] shadow-2xl shadow-primary-900/10 border border-white/50 z-20 transition-transform duration-100 ease-out"
               style={{ 
                 transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg) scale(1.02)`,
                 backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f8fafc)'
               }}
             >
                {/* Header of Dashboard */}
                <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600">
                         <Activity className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="font-display font-semibold text-gray-900">Live Activity</h3>
                         <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            System Operational
                         </p>
                      </div>
                   </div>
                   <div className="p-2 rounded-full bg-gray-50 border border-gray-200">
                      <Search className="w-4 h-4 text-gray-400" />
                   </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-8 space-y-6">
                   {/* Row 1 */}
                   <div className="p-4 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-lg hover:shadow-primary-900/5 transition-all cursor-default">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center text-lg">🧤</div>
                         <div>
                            <p className="text-sm font-bold text-gray-900">Nitrile Gloves</p>
                            <p className="text-xs text-gray-500">20,000 units • Vendor A</p>
                         </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">-15%</span>
                   </div>

                   {/* Row 2 */}
                   <div className="p-4 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-skin-100 flex items-center justify-center text-lg">💉</div>
                         <div>
                            <p className="text-sm font-bold text-gray-900">Syringes 5ml</p>
                            <p className="text-xs text-gray-500">5,000 units • Pending</p>
                         </div>
                      </div>
                      <div className="flex -space-x-2">
                         <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                         <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                      </div>
                   </div>

                   {/* Graph Area */}
                   <div className="h-32 w-full mt-4 flex items-end justify-between gap-2 px-2">
                      {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                         <div 
                           key={i} 
                           className="w-full bg-gradient-to-t from-primary-100 to-primary-300 rounded-t-lg transition-all duration-1000 ease-out group hover:from-azure-200 hover:to-azure-400"
                           style={{ height: `${h}%`, opacity: 0.5 + (i * 0.1) }}
                         ></div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Floating Element 1: Verified Badge (Top Right) */}
             <div className="absolute top-[10%] -right-[5%] md:right-[-10%] z-30 animate-float">
                <div className="glass-panel p-4 rounded-3xl flex items-center gap-4 shadow-xl shadow-azure-900/10 border-white/60">
                   <div className="w-12 h-12 rounded-full bg-azure-500 flex items-center justify-center text-white shadow-glow-blue">
                      <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-gray-900">Verified</p>
                      <p className="text-xs text-gray-500">MedTech Global Inc.</p>
                   </div>
                </div>
             </div>

             {/* Floating Element 2: Savings (Bottom Left) */}
             <div className="absolute bottom-[15%] -left-[5%] md:left-[-10%] z-30 animate-float-delayed">
                <div className="glass-panel p-5 rounded-[2rem] shadow-xl shadow-primary-900/10 border-white/60 w-48">
                   <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-skin-100 rounded-xl text-skin-600">
                         <TrendingUp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+24%</span>
                   </div>
                   <p className="text-2xl font-display font-bold text-gray-900">₹4.2M</p>
                   <p className="text-xs text-gray-500">Yearly Savings</p>
                </div>
             </div>

             {/* Background Glow for Card */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-azure-200 rounded-full blur-[100px] opacity-40 -z-10 scale-90"></div>

          </div>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero;