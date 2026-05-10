import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, User, Plus, Map as MapIcon, DollarSign, Share2, Copy, Send, ChevronDown, CheckCircle2, Layers, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'trip'
  const [tripTab, setTripTab] = useState('itinerary'); // 'itinerary' | 'budget' | 'share'
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/auth');
  };

  const trips = [
    {
      id: 1,
      name: 'Swiss Alps Retreat',
      dates: 'Jan 05 - Jan 12, 2024',
      destination: 'Switzerland',
      isActive: true,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200'
    },
    {
      id: 2,
      name: 'Kyoto Spring',
      dates: 'Apr 02 - Apr 14, 2024',
      destination: 'Japan',
      isActive: false,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200'
    },
    {
      id: 3,
      name: 'Patagonia Expedition',
      dates: 'Nov 10 - Nov 25, 2024',
      destination: 'Chile/Argentina',
      isActive: false,
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200'
    },
    {
      id: 4,
      name: 'Santorini Escape',
      dates: 'Jun 08 - Jun 15, 2024',
      destination: 'Greece',
      isActive: false,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200'
    },
    {
      id: 5,
      name: 'Bali Wellness',
      dates: 'Aug 21 - Aug 29, 2024',
      destination: 'Indonesia',
      isActive: false,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200'
    }
  ];

  const suggestedTrips = [
    {
      id: 101,
      name: 'Bali Paradise',
      type: 'Tropical',
      duration: '7 Days',
      price: '$850',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000',
      highlights: [
        { name: 'Ubud Rice Terrace', image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800' },
        { name: 'Ulun Danu Temple', image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800' },
        { name: 'Nusa Penida', image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=800' }
      ]
    },
    {
      id: 102,
      name: 'Tokyo Lights',
      type: 'City',
      duration: '5 Days',
      price: '$1200',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000',
      highlights: [
        { name: 'Shibuya Crossing', image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=800' },
        { name: 'Senso-ji Temple', image: 'https://images.unsplash.com/photo-1526481280695-3c4691d8d69e?q=80&w=800' },
        { name: 'Tokyo Tower', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800' }
      ]
    },
    {
      id: 103,
      name: 'Santorini Escape',
      type: 'Coastal',
      duration: '6 Days',
      price: '$1500',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?q=80&w=1000',
      highlights: [
        { name: 'Oia Sunset', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800' },
        { name: 'Blue Domes', image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=800' },
        { name: 'Red Beach', image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=800' }
      ]
    },
    {
      id: 104,
      name: 'Machu Picchu',
      type: 'Adventure',
      duration: '10 Days',
      price: '$950',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000',
      highlights: [
        { name: 'Sun Gate', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800' },
        { name: 'Temple of Sun', image: 'https://images.unsplash.com/photo-1622396488040-23ea2f7033f1?q=80&w=800' },
        { name: 'Huayna Peak', image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=800' }
      ]
    },
    {
      id: 105,
      name: 'Northern Lights',
      type: 'Winter',
      duration: '4 Days',
      price: '$1100',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1000',
      highlights: [
        { name: 'Aurora Camp', image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=800' },
        { name: 'Ice Cave', image: 'https://images.unsplash.com/photo-1517329782449-810562a4ec2f?q=80&w=800' },
        { name: 'Frozen Lake', image: 'https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?q=80&w=800' }
      ]
    }
  ];

  const previousTrips = [
    {
      id: 201,
      name: 'Paris Getaway',
      dates: 'Sep 12 - Sep 18, 2023',
      destination: 'France',
      isActive: false,
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200'
    },
    {
      id: 202,
      name: 'Kerala Backwaters',
      dates: 'Dec 05 - Dec 10, 2023',
      destination: 'India',
      isActive: false,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200'
    },
    {
      id: 203,
      name: 'New York Winter',
      dates: 'Dec 20 - Dec 28, 2022',
      destination: 'USA',
      isActive: false,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200'
    }
  ];

  const handleTripClick = (id) => {
    setCurrentView('trip');
    setTripTab('itinerary');
  };

  const renderDashboard = () => (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Search and Filter Row */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
         {/* Search Bar */}
         <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#749962] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search bar ......" 
              className="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-12 pr-6 text-sm text-gray-800 outline-none focus:border-[#749962] focus:ring-2 focus:ring-[#749962]/20 transition-all shadow-sm" 
            />
         </div>
         {/* Filter Buttons */}
         <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar shrink-0">
            <button className="whitespace-nowrap px-6 py-3.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-[#749962] hover:text-[#749962] transition-all shadow-sm flex items-center gap-2">
               <Layers size={16} /> Group by
            </button>
            <button className="whitespace-nowrap px-6 py-3.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-[#749962] hover:text-[#749962] transition-all shadow-sm flex items-center gap-2">
               <SlidersHorizontal size={16} /> Filter
            </button>
            <button className="whitespace-nowrap px-6 py-3.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-[#749962] hover:text-[#749962] transition-all shadow-sm flex items-center gap-2">
               <ArrowUpDown size={16} /> Sort by...
            </button>
         </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-black text-[#152010] tracking-tight">My Upcoming Trips</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {trips.map(trip => (
          <div 
            key={trip.id} 
            onClick={() => handleTripClick(trip.id)}
            className={`bg-[#152010] aspect-[9/16] rounded-2xl p-6 cursor-pointer relative group shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border ${trip.isActive ? 'border-[#749962]' : 'border-white/10'}`}
          >
            <img
              src={trip.image}
              alt={trip.name}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/20 via-black/35 to-black/85"></div>

            {/* Top Section */}
            <div className="relative z-10">
              {trip.isActive && (
                <div className="inline-block bg-[#749962] text-white text-[10px] font-black px-3 py-1 rounded-full mb-4">
                  ACTIVE
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#749962] transition-colors">{trip.name}</h3>
            </div>

            {/* Bottom Section */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#c6e3b6] text-sm mb-3">
                <Calendar size={14} className="text-[#749962]" /> <span>{trip.dates}</span>
              </div>
              <div className="flex items-center gap-2 text-[#c6e3b6] text-sm mb-6">
                <MapPin size={14} className="text-[#749962]" /> <span>{trip.destination}</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                 <button
                   onClick={(e) => {
                     e.stopPropagation();
                     handleTripClick(trip.id);
                   }}
                   className="text-sm font-bold text-[#c6e3b6] hover:text-white transition-colors"
                 >
                   Explore
                 </button>
                 <div className="w-8 h-8 rounded-full bg-[#749962] flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   <span className="font-bold">&rarr;</span>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Trips Section (Slider) */}
      <div className="mt-20 mb-8 w-[100vw] relative left-1/2 -translate-x-1/2">
        <div className="max-w-6xl mx-auto px-6 w-full">
           <h2 className="text-2xl font-black text-[#152010] tracking-tight mb-8">Suggested Trips For You</h2>
        </div>
        
        {/* Slider Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {suggestedTrips.map(trip => (
            <div 
              key={trip.id}
              className="w-[100vw] min-w-[100vw] h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden group cursor-pointer snap-center shrink-0"
            >
              <img src={trip.image} alt={trip.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152010] via-[#152010]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute top-6 right-6 w-[260px] max-w-[70vw] bg-black/35 backdrop-blur-md border border-white/20 rounded-2xl p-3 z-20">
                 <p className="text-[11px] uppercase tracking-wider text-[#c6e3b6] font-bold mb-2">Best Spots</p>
                 <div className="grid grid-cols-3 gap-2">
                    {trip.highlights.map((spot) => (
                      <div key={spot.name} className="group/spot">
                        <div className="h-16 rounded-lg overflow-hidden border border-white/15">
                          <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover/spot:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-[10px] text-white/90 mt-1 truncate">{spot.name}</p>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end h-full">
                 <div className="max-w-6xl mx-auto px-6 w-full pb-12">
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                          <span className="text-xs font-black bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-4 inline-block uppercase tracking-wider text-[#a3ff00]">{trip.type}</span>
                          <h3 className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-[#a3ff00] transition-colors">{trip.name}</h3>
                          <div className="flex items-center gap-4 text-lg text-[#c6e3b6]">
                             <span className="flex items-center gap-2"><Calendar size={20}/> {trip.duration}</span>
                          </div>
                        </div>
                        <div className="text-left md:text-right">
                           <p className="text-sm text-[#c6e3b6] mb-1">Starting from</p>
                           <p className="text-3xl lg:text-4xl font-black text-[#a3ff00]">{trip.price}</p>
                        </div>
                     </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Trips Section */}
      <div className="max-w-6xl mx-auto px-6 w-full mb-12">
        <h2 className="text-2xl font-black text-[#152010] tracking-tight mb-8">My Previous Trips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {previousTrips.map(trip => (
            <div 
              key={trip.id} 
              onClick={() => handleTripClick(trip.id)}
              className="bg-[#152010] aspect-[3/4] rounded-2xl p-6 cursor-pointer relative group shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white/10"
            >
              <img
                src={trip.image}
                alt={trip.name}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/20 via-black/35 to-black/85"></div>

              {/* Top Section */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#749962] transition-colors">{trip.name}</h3>
              </div>

              {/* Bottom Section */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#c6e3b6] text-sm mb-3">
                  <Calendar size={14} className="text-[#749962]" /> <span>{trip.dates}</span>
                </div>
                <div className="flex items-center gap-2 text-[#c6e3b6] text-sm mb-6">
                  <MapPin size={14} className="text-[#749962]" /> <span>{trip.destination}</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                   <button
                     onClick={(e) => {
                       e.stopPropagation();
                       handleTripClick(trip.id);
                     }}
                     className="text-sm font-bold text-[#c6e3b6] hover:text-white transition-colors"
                   >
                     History
                   </button>
                   <div className="w-8 h-8 rounded-full bg-[#749962] flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                     <span className="font-bold">&rarr;</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => { setCurrentView('trip'); setTripTab('itinerary'); }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#152010] text-[#c6e3b6] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-[#152010]/30"
        aria-label="Create New Trip"
        title="Create New Trip"
      >
        <Plus size={24} strokeWidth={3} />
      </button>
    </div>
  );

  const renderItinerary = () => (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 md:min-w-[400px] border-r border-gray-800 overflow-y-auto p-6 bg-[#111111]">
        <h2 className="text-2xl font-bold text-white mb-6">Itinerary Builder</h2>
        
        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Search destinations, hotels, activities..." 
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none focus:border-[#749962] transition shadow-inner"
          />
        </div>

        {/* Days Accordion */}
        {[1, 2, 3].map(day => (
          <div key={day} className="mb-4 bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-sm">
             <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#222] transition-colors">
               <h3 className="text-white font-bold text-sm">Day {day} <span className="text-gray-500 font-medium ml-2">Jan 0{day+4}, 2024</span></h3>
               <ChevronDown size={16} className="text-gray-500" />
             </div>
             {day === 1 && (
               <div className="p-4 border-t border-gray-800 bg-[#111]">
                 <div className="relative pl-6 border-l-2 border-gray-800 space-y-5 py-2">
                   {/* Stop 1 */}
                   <div className="relative">
                     <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-[#749962] rounded-full border-[3px] border-[#111]"></div>
                     <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition">
                       <h4 className="text-white text-sm font-bold">Arrive at Zurich Airport</h4>
                       <p className="text-[#749962] text-xs font-bold mt-1.5">10:00 AM <span className="text-gray-500 font-normal ml-1">• Flight LX 38</span></p>
                     </div>
                   </div>
                   {/* Stop 2 */}
                   <div className="relative">
                     <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-gray-600 rounded-full border-[3px] border-[#111]"></div>
                     <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition">
                       <h4 className="text-white text-sm font-bold">Check-in at Hotel Alpine</h4>
                       <p className="text-[#749962] text-xs font-bold mt-1.5">1:00 PM <span className="text-gray-500 font-normal ml-1">• Accommodation</span></p>
                     </div>
                   </div>
                 </div>
                 <button className="mt-6 w-full border border-dashed border-gray-700 text-gray-400 hover:text-[#749962] hover:border-[#749962] hover:bg-[#749962]/5 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2">
                   <Plus size={16} /> Add Stop
                 </button>
               </div>
             )}
          </div>
        ))}
      </div>

      {/* Right Panel: Map & Timeline */}
      <div className="flex-1 bg-[#0a0a0a] hidden md:flex flex-col relative overflow-hidden">
         <div className="flex-1 w-full relative flex items-center justify-center">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="text-gray-700 flex flex-col items-center gap-3">
               <MapIcon size={48} strokeWidth={1} />
               <p className="font-bold text-sm tracking-widest uppercase">Interactive Route Map</p>
            </div>
            
            {/* Custom Map Markers (Simulated) */}
            <div className="absolute top-[40%] left-[45%] flex flex-col items-center z-10 group cursor-pointer">
               <div className="w-8 h-8 bg-[#749962] text-white rounded-full flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(116,153,98,0.5)] group-hover:scale-110 transition-transform">1</div>
               <div className="w-0.5 h-6 bg-[#749962]"></div>
               <div className="w-2 h-2 bg-white rounded-full shadow-md"></div>
               {/* Line connecting to marker 2 */}
               <svg className="absolute top-4 left-4 w-32 h-24 pointer-events-none -z-10 overflow-visible">
                 <path d="M 0 0 Q 50 20 80 80" fill="none" stroke="#749962" strokeWidth="2" strokeDasharray="4 4" />
               </svg>
            </div>
            <div className="absolute top-[55%] left-[53%] flex flex-col items-center z-10 group cursor-pointer">
               <div className="w-8 h-8 bg-[#111] text-white border-2 border-[#749962] rounded-full flex items-center justify-center font-bold text-xs shadow-lg group-hover:bg-[#749962] transition-colors">2</div>
            </div>
         </div>
         
         {/* Horizontal Timeline Block */}
         <div className="h-[140px] bg-[#111] border-t border-gray-800 p-5 overflow-x-auto whitespace-nowrap">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Day 1 Timeline</h4>
            <div className="flex items-center gap-4 relative">
               <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-800 -z-10"></div>
               
               <div className="bg-[#1a1a1a] border border-[#749962] px-5 py-3 rounded-lg text-sm font-bold text-[#749962] shadow-sm flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#749962]"></div>
                 10:00 AM - Arrival
               </div>
               
               <div className="bg-[#1a1a1a] border border-gray-800 px-5 py-3 rounded-lg text-sm text-gray-300 font-medium hover:border-gray-600 transition cursor-pointer flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                 1:00 PM - Hotel
               </div>
               
               <button className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition shadow-sm">
                 <Plus size={16}/>
               </button>
            </div>
         </div>
      </div>
    </div>
  );

  const renderBudget = () => (
    <div className="max-w-5xl mx-auto px-6 py-12">
       {/* Main Total Card */}
       <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-10 mb-10 text-center relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#749962]"></div>
          <h2 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-3">Total Estimated Cost</h2>
          <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">$4,250<span className="text-3xl text-gray-600 font-medium">.00</span></div>
       </div>

       {/* Category Breakdown */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition">
             <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6 flex items-center justify-between">
               Flights/Transport
               <DollarSign size={16} className="text-gray-500" />
             </h3>
             <div className="text-4xl font-bold text-[#749962] mb-6">$1,200</div>
             <div className="w-full bg-[#111] h-2.5 rounded-full overflow-hidden mb-6">
                <div className="bg-[#749962] h-full rounded-full" style={{ width: '60%' }}></div>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-gray-800 pb-3">
                   <span className="text-gray-400">Flight LX38</span>
                   <span className="text-white font-bold">$850</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-800 pb-3">
                   <span className="text-gray-400">Train Pass</span>
                   <span className="text-white font-bold">$350</span>
                </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition">
             <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6 flex items-center justify-between">
               Accommodation
               <DollarSign size={16} className="text-gray-500" />
             </h3>
             <div className="text-4xl font-bold text-[#a3ff00] mb-6">$1,800</div> {/* Neon green highlight */}
             <div className="w-full bg-[#111] h-2.5 rounded-full overflow-hidden mb-6">
                <div className="bg-[#a3ff00] h-full rounded-full shadow-[0_0_10px_rgba(163,255,0,0.3)]" style={{ width: '80%' }}></div>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-gray-800 pb-3">
                   <span className="text-gray-400">Hotel Alpine (5n)</span>
                   <span className="text-white font-bold">$1500</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-800 pb-3">
                   <span className="text-gray-400">Cabin Stay (1n)</span>
                   <span className="text-white font-bold">$300</span>
                </div>
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition">
             <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6 flex items-center justify-between">
               Activities & Meals
               <DollarSign size={16} className="text-gray-500" />
             </h3>
             <div className="text-4xl font-bold text-[#e6b333] mb-6">$1,250</div> {/* Golden highlight */}
             <div className="w-full bg-[#111] h-2.5 rounded-full overflow-hidden mb-6">
                <div className="bg-[#e6b333] h-full rounded-full" style={{ width: '45%' }}></div>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-gray-800 pb-3">
                   <span className="text-gray-400">Ski Pass</span>
                   <span className="text-white font-bold">$400</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-800 pb-3">
                   <span className="text-gray-400">Fine Dining</span>
                   <span className="text-white font-bold">$250</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );

  const renderShare = () => (
    <div className="max-w-xl mx-auto px-6 py-24 text-center">
       <div className="bg-[#1a1a1a] border border-gray-800 p-12 rounded-3xl flex flex-col items-center shadow-xl">
          <div className="w-20 h-20 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-8 relative">
             <div className="absolute inset-0 bg-[#749962] rounded-full opacity-10 animate-pulse"></div>
             <Share2 size={32} className="text-[#749962]" />
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Share the Journey</h2>
          <p className="text-gray-400 text-sm mb-10 leading-relaxed">Generate a unique link to share your itinerary and budget with friends, family, or travel companions. They will have read-only access.</p>
          
          <div className="w-full bg-[#111] border border-gray-700 rounded-xl p-2.5 flex items-center gap-3 mb-8">
             <input 
               type="text" 
               readOnly 
               value="https://traveloop.app/t/swiss-alps-x9y2z" 
               className="flex-1 bg-transparent text-gray-300 text-sm outline-none px-3 font-mono"
             />
             <button className="bg-[#749962] hover:bg-[#608250] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition flex items-center gap-2 shadow-sm">
                <Copy size={16} /> Copy
             </button>
          </div>

          <button className="w-full border-2 border-[#749962] text-[#749962] hover:bg-[#749962] hover:text-white transition-colors py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
             <Send size={18} /> Share to WhatsApp / Email
          </button>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#E5F0E0] text-gray-900 font-sans selection:bg-[#749962] selection:text-white relative">
      
      {/* Fixed Profile Circle with high z-index */}
      <div className="fixed top-6 right-6 z-[100] w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-lg font-bold text-gray-700 cursor-pointer group hover:border-[#749962] transition-colors">
        {user?.name?.charAt(0).toUpperCase() || 'U'}
        {/* Dropdown menu */}
        <div 
          className="absolute top-14 right-0 bg-white border border-gray-200 rounded-xl shadow-xl py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
        >
          <div className="px-4 py-2 text-xs font-bold text-gray-500 border-b border-gray-100 mb-1 truncate">{user?.email || 'user@example.com'}</div>
          <div 
            onClick={handleLogout}
            className="px-4 py-3 text-sm text-red-500 hover:bg-gray-50 cursor-pointer flex items-center gap-2 font-medium"
          >
            Sign Out
          </div>
        </div>
      </div>

      {/* Navbar - Centered Logo, No Border */}
      <header className="h-[80px] bg-[#E5F0E0] flex items-center justify-center px-8 sticky top-0 z-40">
         <div 
           className="text-3xl font-black tracking-tighter text-[#1a1a1a] cursor-pointer flex items-center gap-2"
           onClick={() => setCurrentView('dashboard')}
         >
            <div className="w-8 h-8 bg-[#749962] rounded-md shadow-sm"></div>
            TRAVELOOP
         </div>
      </header>

      {/* Main Content Area */}
      <main>
        {/* Banner Image 50vh */}
        {/* Banner Image 55vh with Skewed Masonry Layout */}
        {currentView === 'dashboard' && (
          <div className="w-full h-[55vh] bg-[#E5F0E0] relative overflow-hidden flex items-center justify-center">
             
             {/* Skewed Grid Container */}
             <div className="flex gap-4 w-[120%] md:w-[110%] max-w-[1600px] h-[90%] mt-[-5%]" style={{ transform: 'skewX(-15deg)' }}>
                
                {/* Column 1 (Left) */}
                <div className="flex flex-col gap-4 w-[22%] h-full justify-start pt-8">
                   <div className="relative h-[45%] w-full overflow-hidden shadow-sm bg-gray-200">
                      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800" alt="Mountains" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'skewX(15deg) scale(1.25)' }} />
                   </div>
                   <div className="relative h-[45%] w-[85%] ml-auto overflow-hidden shadow-sm bg-gray-200">
                      <img src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=800" alt="Japan Night" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'skewX(15deg) scale(1.25)' }} />
                   </div>
                </div>

                {/* Column 2 (Center Large) */}
                <div className="relative w-[32%] h-full overflow-hidden shadow-sm mt-4 bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800" alt="Kerala Backwaters" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'skewX(15deg) scale(1.25)' }} />
                </div>

                {/* Column 3 (Right) */}
                <div className="flex flex-col gap-4 w-[26%] h-full justify-start">
                   <div className="relative h-[48%] w-[95%] overflow-hidden shadow-sm bg-gray-200">
                      <img src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=800" alt="Cinque Terre" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'skewX(15deg) scale(1.25)' }} />
                   </div>
                   <div className="relative h-[45%] w-[80%] overflow-hidden shadow-sm mr-auto bg-gray-200">
                      <img src="https://images.unsplash.com/photo-1548661710-7f540c9c56d6?q=80&w=800" alt="Market" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'skewX(15deg) scale(1.25)' }} />
                   </div>
                </div>

                {/* Column 4 (Far Right) */}
                <div className="relative w-[16%] h-[35%] overflow-hidden shadow-sm mt-[20%] bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800" alt="Paris" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'skewX(15deg) scale(1.25)' }} />
                </div>
                
             </div>

             {/* Strong Gradient Overlay for bottom fade */}
             <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#E5F0E0] via-[#E5F0E0]/90 to-transparent pointer-events-none z-10"></div>
          </div>
        )}

        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'trip' && tripTab === 'itinerary' && renderItinerary()}
        {currentView === 'trip' && tripTab === 'budget' && renderBudget()}
        {currentView === 'trip' && tripTab === 'share' && renderShare()}
      </main>

      <footer className="bg-[#111111] border-t border-[#1f1f1f] mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <p className="text-[#c6e3b6] text-2xl md:text-3xl font-black tracking-wider">TRAVELOOP</p>
            <p className="text-sm text-gray-400 mt-1">Plan smarter trips with itinerary, budget, and sharing in one place.</p>
          </div>
          <div className="flex items-center gap-5 text-sm text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">About</span>
            <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
