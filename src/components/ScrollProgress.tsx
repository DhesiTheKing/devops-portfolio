import React, { useState, useEffect } from 'react';

interface ScrollProgressProps {
  stages: number;
  activeStage: number;
}

export default function ScrollProgress({ stages, activeStage }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 space-y-3">
        <div className="text-xs text-gray-400 font-mono">Pipeline Progress</div>
        
        <div className="relative">
          <div className="w-1 h-48 bg-gray-700 rounded-full">
            <div 
              className="w-1 bg-gradient-to-b from-red-500 to-green-500 rounded-full transition-all duration-300"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
          
          <div className="absolute -left-2 space-y-6 -top-1">
            {Array.from({ length: stages }, (_, i) => (
              <div
                key={i}
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  i <= activeStage
                    ? 'bg-green-500 border-green-500 shadow-lg shadow-green-500/50'
                    : 'bg-gray-700 border-gray-600'
                }`}
              >
                <div className="w-full h-full rounded-full animate-pulse bg-white/20" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-xs text-gray-400 font-mono">
          Stage {activeStage + 1}/{stages}
        </div>
      </div>
    </div>
  );
}