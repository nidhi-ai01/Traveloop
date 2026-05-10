import React from 'react';
import { Search, Image as ImageIcon, User, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#f0f5ec] text-[#2c3d28] font-sans selection:bg-[#86b99b] selection:text-white pb-20">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Traveloop</div>
        <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-300 transition">
          <User size={16} className="text-gray-500" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-8">
        
        {/* Banner Section */}
        <section className="w-full h-[350px] md:h-[450px] bg-gray-300 rounded-[24px] flex items-center justify-center mb-8 relative overflow-hidden shadow-inner">
          {/* Noise texture overlay to match wireframe style slightly */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          <div className="flex flex-col items-center gap-4 relative z-10 text-gray-500">
             <ImageIcon size={64} strokeWidth={1} />
             <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">Banner Image</h1>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="flex flex-col md:flex-row gap-4 items-center mb-12">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search destinations or trips..." 
              className="w-full bg-[#e3ecd9] border border-transparent rounded-full py-3.5 pl-12 pr-6 text-sm text-[#2c3d28] placeholder-gray-500 outline-none focus:border-[#86b99b] transition"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <button className="whitespace-nowrap px-5 py-3 rounded-full border border-gray-300 bg-transparent hover:bg-white/50 transition text-sm font-medium text-[#2c3d28]">
              Group by
            </button>
            <button className="whitespace-nowrap px-5 py-3 rounded-full border border-gray-300 bg-transparent hover:bg-white/50 transition text-sm font-medium text-[#2c3d28]">
              Filter
            </button>
            <button className="whitespace-nowrap px-5 py-3 rounded-full border border-gray-300 bg-transparent hover:bg-white/50 transition text-sm font-medium text-[#2c3d28]">
              Sort by...
            </button>
          </div>
        </section>

        {/* Top Regional Selections */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold mb-4 text-[#4a5e45]">Top Regional Selections</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Tokyo', 'New York', 'London', 'Paris', 'Rome'].map((city, i) => (
              <div key={city} className="aspect-[4/5] rounded-2xl bg-gray-100 flex items-center justify-center relative overflow-hidden shadow-sm group cursor-pointer border border-white">
                <ImageIcon size={24} className="text-gray-300 absolute" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-sm font-bold text-white">{city}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous Trips */}
        <section>
          <h2 className="text-sm font-semibold mb-4 text-[#4a5e45]">Previous Trips</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Trip 1 */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col cursor-pointer group hover:shadow-md transition">
              <div className="w-full h-48 bg-gray-100 rounded-2xl mb-4 relative flex items-center justify-center overflow-hidden">
                 <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm text-gray-700">Completed</div>
                 <ImageIcon size={32} className="text-gray-300" />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-sm font-bold mb-1">Bali Expedition</h3>
                <p className="text-[11px] text-gray-500">Oct 12 - Oct 24, 2023</p>
              </div>
            </div>

            {/* Trip 2 */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col cursor-pointer group hover:shadow-md transition">
              <div className="w-full h-48 bg-gray-100 rounded-2xl mb-4 relative flex items-center justify-center overflow-hidden">
                 <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm text-gray-700">Planning</div>
                 <ImageIcon size={32} className="text-gray-300" />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-sm font-bold mb-1">Swiss Alps Retreat</h3>
                <p className="text-[11px] text-gray-500">Jan 05 - Jan 12, 2024</p>
              </div>
            </div>

            {/* Trip 3 */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col cursor-pointer group hover:shadow-md transition relative">
              <div className="w-full h-48 bg-[#e8f1df] rounded-2xl mb-4 relative flex items-center justify-center overflow-hidden border border-[#d2e2c4]">
                 <ImageIcon size={32} className="text-[#a4c591]" />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-sm font-bold mb-1">Kyoto Spring</h3>
                <p className="text-[11px] text-gray-500">Apr 02 - Apr 14, 2024</p>
              </div>
              
              {/* Plan a trip button overlaid at bottom right */}
              <button className="absolute bottom-6 right-6 bg-white border border-gray-200 shadow-sm hover:shadow hover:bg-gray-50 transition px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-gray-700">
                <Plus size={14} /> Plan a trip
              </button>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
