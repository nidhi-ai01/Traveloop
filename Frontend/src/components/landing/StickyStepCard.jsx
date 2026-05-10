import React from 'react';

export const STEPS = [
  { 
    title: "Smart Itineraries", 
    description: "Map your journey, manage stops, and visualize timelines instantly.",
    graphic: (
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="w-48 md:w-64 h-48 md:h-64 rounded-full border-[16px] md:border-[20px] border-[#333] border-t-[#a3ff00] animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-24 md:w-40 h-10 md:h-16 bg-[#222] rounded-full border border-white/10 top-1/4 right-0 md:right-10"></div>
        <div className="absolute w-20 md:w-32 h-10 md:h-16 bg-[#222] rounded-full border border-white/10 bottom-1/4 left-0 md:left-10"></div>
      </div>
    )
  },
  { 
    title: "Discover & Explore", 
    description: "Find top cities and curate activities that match your exact vibe.",
    graphic: (
      <div className="flex justify-center items-center h-full w-full relative flex-col gap-3 md:gap-4">
        <div className="w-full max-w-[200px] md:max-w-sm h-16 md:h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center p-4"></div>
        <div className="w-full max-w-[200px] md:max-w-sm h-16 md:h-24 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center p-4 ml-8 md:ml-12"></div>
        <div className="w-full max-w-[200px] md:max-w-sm h-16 md:h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center p-4"></div>
      </div>
    )
  },
  { 
    title: "Auto-Budgeting", 
    description: "Get instant cost estimates and stay on track without doing the math.",
    graphic: (
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="w-24 md:w-40 h-32 md:h-48 bg-[#222] rounded-2xl absolute border border-white/10 rotate-[-15deg] left-4 md:left-10"></div>
        <div className="w-32 md:w-48 h-48 md:h-64 bg-[#2a2a2a] rounded-2xl absolute border border-white/10 rotate-[5deg] z-10 shadow-2xl"></div>
        <div className="w-24 md:w-40 h-32 md:h-48 bg-[#222] rounded-2xl absolute border border-white/10 rotate-[20deg] right-4 md:right-10 top-4 md:top-10"></div>
      </div>
    )
  },
  { 
    title: "Share the Journey", 
    description: "Generate public links to easily showcase and share your travel plans.",
    graphic: (
      <div className="flex justify-center items-center h-full w-full relative gap-4 md:gap-6">
        <div className="w-20 md:w-32 h-40 md:h-64 bg-[#222] rounded-full border border-[#a3ff00]/30 shadow-[0_0_30px_rgba(163,255,0,0.1)]"></div>
        <div className="w-20 md:w-32 h-40 md:h-64 bg-[#222] rounded-full border border-emerald-500/30"></div>
      </div>
    )
  }
];

export default function StickyStepCard({ step, index }) {
  const isLast = index === 3;

  return (
    <div 
      className={`flex items-start justify-center sticky ${isLast ? 'px-0' : 'px-4 md:px-8'} ${isLast ? 'h-screen' : 'h-[80vh]'}`}
      style={{ top: isLast ? '0' : `calc(5vh + ${index * 30}px)` }}
    >
      <div className={`bg-[#749962] ${isLast ? 'rounded-t-[40px] rounded-b-none' : 'rounded-[40px]'} p-8 md:p-24 flex flex-col md:flex-row items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.4)] w-full ${isLast ? 'h-[110vh]' : 'h-[90vh]'} overflow-hidden`}>
        
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12 text-left w-full -mt-8 md:-mt-16">
          <h2 className={`text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight text-white`}>
            {step.title}
          </h2>
          <p className={`text-lg md:text-3xl font-medium leading-relaxed text-[#e0e0e0]`}>
            {step.description}
          </p>
        </div>

        {/* Graphic Content */}
        <div className="md:w-1/2 h-full min-h-[200px] w-full relative flex items-center justify-center">
          {step.graphic}
        </div>

      </div>
    </div>
  );
}
