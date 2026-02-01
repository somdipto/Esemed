import React, { useEffect, useState, useRef } from 'react';

// Simple hook for counting up animation
const useCountUp = (end: number, duration: number = 2000, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const ease = (x: number) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      
      setCount(Math.floor(ease(percentage) * end));
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, trigger]);

  return count;
};

const Metrics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const countVolume = useCountUp(10, 2000, isVisible);
  const countFulfillment = useCountUp(98, 2000, isVisible);
  const countTurnaround = useCountUp(48, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="text-center md:text-left group cursor-default">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-400 group-hover:animate-pulse"></span>
                Volume
            </h3>
            <p className="text-6xl lg:text-8xl font-display font-medium text-gray-900 tracking-tight transition-all duration-300 group-hover:text-primary-600">
              {countVolume}M+
            </p>
            <p className="text-gray-500 mt-2 font-light">
              Medical Supplies Traded
            </p>
          </div>

          <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

          <div className="text-center md:text-left group cursor-default">
            <h3 className="text-xs font-bold uppercase tracking-widest text-azure-600 mb-2 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-azure-400 group-hover:animate-pulse"></span>
                Speed
            </h3>
            <p className="text-6xl lg:text-8xl font-display font-medium text-gray-900 tracking-tight transition-all duration-300 group-hover:text-azure-600">
              {countFulfillment}%
            </p>
            <p className="text-gray-500 mt-2 font-light">
              Fulfillment Rate
            </p>
          </div>

          <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

          <div className="text-center md:text-left group cursor-default">
            <h3 className="text-xs font-bold uppercase tracking-widest text-skin-500 mb-2 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-skin-400 group-hover:animate-pulse"></span>
                Efficiency
            </h3>
            <p className="text-6xl lg:text-8xl font-display font-medium text-gray-900 tracking-tight transition-all duration-300 group-hover:text-skin-500">
              {countTurnaround}<span className="text-4xl">h</span>
            </p>
            <p className="text-gray-500 mt-2 font-light">
              Average Turnaround
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;