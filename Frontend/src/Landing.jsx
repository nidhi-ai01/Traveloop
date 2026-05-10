import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, User, Plus, Map as MapIcon, DollarSign, Share2, Copy, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
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
    { id: 1, name: 'Swiss Alps Retreat', dates: 'Jan 05 - Jan 12, 2024', destination: 'Switzerland', isActive: true },
    { id: 2, name: 'Kyoto Spring', dates: 'Apr 02 - Apr 14, 2024', destination: 'Japan', isActive: false },
    { id: 3, name: 'Patagonia Expedition', dates: 'Nov 10 - Nov 25, 2024', destination: 'Chile/Argentina', isActive: false }
  ];

  const handleTripClick = (id) => {
    setCurrentView('trip');
    setTripTab('itinerary');
  };

  const renderDashboard = () => (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Welcome {user?.name || 'Explorer'}! Let's plan your next adventure.
        </h1>
        <p className="text-gray-400">Manage your itineraries, budgets, and travel companions all in one place.</p>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-white tracking-wide">My Upcoming Trips</h2>
        <button 
          onClick={() => { setCurrentView('trip'); setTripTab('itinerary'); }}
          className="bg-[#749962] text-white px-5 py-2.5 rounded-md font-bold flex items-center gap-2 hover:bg-[#608250] transition-colors shadow-lg shadow-[#749962]/20"
        >
          <Plus size={18} /> Create New Trip
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map(trip => (
          <div 
            key={trip.id} 
            onClick={() => handleTripClick(trip.id)}
            className={`bg-[#1a1a1a] border ${trip.isActive ? 'border-[#749962]' : 'border-gray-800'} rounded-xl p-5 cursor-pointer hover:border-gray-600 transition-colors relative group shadow-sm hover:shadow-md`}
          >
            {trip.isActive && <div className="absolute -top-px -right-px bg-[#749962] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">ACTIVE</div>}
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#749962] transition-colors">{trip.name}</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3 mt-4">
              <Calendar size={14} className="text-gray-500" /> <span>{trip.dates}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
              <MapPin size={14} className="text-gray-500" /> <span>{trip.destination}</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-800 pt-4">
               <div className="w-8 h-8 rounded-full bg-[#222] border border-gray-700 flex items-center justify-center text-xs font-bold text-white">
                 {user?.name?.charAt(0).toUpperCase() || 'U'}
               </div>
               <span className="text-xs text-gray-500 font-bold uppercase tracking-wider group-hover:text-[#749962] transition-colors">View Details &rarr;</span>
            </div>
          </div>
        ))}
      </div>
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
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#749962] selection:text-white">
      {/* Top Navigation */}
      <header className="h-[80px] bg-[#1a1a1a] border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-50 shadow-sm">
         <div className="flex items-center gap-10">
            <div 
              className="text-2xl font-black tracking-tighter text-white cursor-pointer flex items-center gap-2"
              onClick={() => setCurrentView('dashboard')}
            >
               <div className="w-6 h-6 bg-[#749962] rounded-md"></div>
               TRAVELOOP
            </div>
            
            {currentView === 'trip' && (
              <div className="hidden md:flex bg-[#111] rounded-lg p-1 border border-gray-800">
                 <button 
                   onClick={() => setTripTab('itinerary')}
                   className={`px-6 py-2 text-sm font-bold rounded-md transition-colors ${tripTab === 'itinerary' ? 'bg-[#1a1a1a] border border-gray-700 text-[#749962] shadow-sm' : 'text-gray-400 hover:text-gray-200 border border-transparent'}`}
                 >Itinerary</button>
                 <button 
                   onClick={() => setTripTab('budget')}
                   className={`px-6 py-2 text-sm font-bold rounded-md transition-colors ${tripTab === 'budget' ? 'bg-[#1a1a1a] border border-gray-700 text-[#749962] shadow-sm' : 'text-gray-400 hover:text-gray-200 border border-transparent'}`}
                 >Budget</button>
                 <button 
                   onClick={() => setTripTab('share')}
                   className={`px-6 py-2 text-sm font-bold rounded-md transition-colors ${tripTab === 'share' ? 'bg-[#1a1a1a] border border-gray-700 text-[#749962] shadow-sm' : 'text-gray-400 hover:text-gray-200 border border-transparent'}`}
                 >Share</button>
              </div>
            )}
         </div>

         <div className="flex items-center gap-6">
            {currentView === 'trip' && (
               <button onClick={() => setCurrentView('dashboard')} className="hidden md:block text-xs font-bold text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600 px-4 py-2 rounded-lg transition">
                  Back to Dashboard
               </button>
            )}
            <div className="w-10 h-10 rounded-full bg-[#222] border-2 border-gray-700 flex items-center justify-center text-sm font-bold cursor-pointer group relative hover:border-[#749962] transition-colors">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
              {/* Dropdown menu */}
              <div 
                className="absolute top-12 right-0 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl py-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
              >
                <div className="px-4 py-2 text-xs font-bold text-gray-500 border-b border-gray-800 mb-1">{user?.email || 'user@example.com'}</div>
                <div 
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm text-red-400 hover:bg-[#222] cursor-pointer flex items-center gap-2"
                >
                  Sign Out
                </div>
              </div>
            </div>
         </div>
      </header>

      {/* Main Content Area */}
      <main>
        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'trip' && tripTab === 'itinerary' && renderItinerary()}
        {currentView === 'trip' && tripTab === 'budget' && renderBudget()}
        {currentView === 'trip' && tripTab === 'share' && renderShare()}
      </main>

    </div>
  );
}
