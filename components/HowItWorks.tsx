import React, { useState, useRef, useEffect } from 'react';
import { UserType } from '../types';
import { ClipboardList, BarChart3, Receipt, FileText, Send, Award, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserType>(UserType.HOSPITAL);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const steps = {
    [UserType.HOSPITAL]: [
      {
        id: '01',
        title: 'Post Requirements',
        desc: 'Define your needs using our standardized digital RFQ templates.',
        icon: ClipboardList,
        color: 'primary'
      },
      {
        id: '02',
        title: 'Compare Bids',
        desc: 'Receive standardized quotes and compare them side-by-side on price.',
        icon: BarChart3,
        color: 'azure'
      },
      {
        id: '03',
        title: 'Auto-Generate PO',
        desc: 'Select the best offer and instantly generate a compliance-ready order.',
        icon: Receipt,
        color: 'skin'
      }
    ],
    [UserType.SUPPLIER]: [
      {
        id: '01',
        title: 'Receive Tenders',
        desc: 'Get notified immediately when hospitals post requirements matching you.',
        icon: FileText,
        color: 'primary'
      },
      {
        id: '02',
        title: 'Submit Digital Bids',
        desc: 'Submit quotes instantly through the platform. No more messy email attachments.',
        icon: Send,
        color: 'azure'
      },
      {
        id: '03',
        title: 'Build Reputation',
        desc: 'Deliver on time to earn trust badges and unlock exclusive enterprise contracts.',
        icon: Award,
        color: 'skin'
      }
    ]
  };

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Flow Line */}
      <div className="absolute top-1/2 left-0 w-full h-96 -translate-y-1/2 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 -skew-y-3 pointer-events-none -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6">
            A unified workflow <br/>
            <span className="font-serif-italic text-gray-400">for everyone.</span>
          </h2>
          
          {/* Custom Toggle */}
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full relative">
             {/* Slider Background */}
             <div 
                className={`absolute top-1.5 bottom-1.5 w-[140px] bg-white rounded-full shadow-sm transition-all duration-500 ease-out ${
                    activeTab === UserType.HOSPITAL ? 'left-1.5' : 'left-[148px]'
                }`}
             ></div>
             
             <button
                onClick={() => setActiveTab(UserType.HOSPITAL)}
                className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
                    activeTab === UserType.HOSPITAL ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
             >
                For Hospitals
             </button>
             <button
                onClick={() => setActiveTab(UserType.SUPPLIER)}
                className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
                    activeTab === UserType.SUPPLIER ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
             >
                For Suppliers
             </button>
          </div>
        </div>

        {/* Steps Container */}
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2">
                <div className={`h-full bg-gradient-to-r from-primary-400 via-azure-400 to-skin-400 transition-all duration-[2s] ease-out ${isVisible ? 'w-full' : 'w-0'}`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {steps[activeTab].map((step, index) => (
                    <div 
                        key={`${activeTab}-${index}`}
                        className={`
                           bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 
                           hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500 
                           group relative opacity-0 animate-slide-up-stagger
                        `}
                        style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                    >
                        {/* Number Watermark */}
                        <span className="absolute top-4 right-6 text-6xl font-display font-bold text-gray-50 group-hover:text-gray-100 transition-colors duration-500">
                            {step.id}
                        </span>

                        {/* Icon Circle */}
                        <div className={`
                            w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10
                            transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                            ${step.color === 'primary' ? 'bg-primary-50 text-primary-600' : 
                              step.color === 'azure' ? 'bg-azure-50 text-azure-600' : 'bg-skin-50 text-skin-500'}
                        `}>
                            <step.icon className="w-8 h-8" />
                        </div>

                        {/* Connector Arrow (Mobile only, or between cards) */}
                        {index < 2 && (
                            <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-300">
                                <ArrowRight className="rotate-90" />
                            </div>
                        )}

                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 relative z-10">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-light text-sm relative z-10">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <p className="text-gray-400 font-serif-italic text-lg mb-4">It's that simple.</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;