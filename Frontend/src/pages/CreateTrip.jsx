import React, { useState } from "react";
import bgVideo from "../assets/videos/travel-bg.mp4";
import { motion, AnimatePresence } from "framer-motion";

function CreateTrip() {
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    // Form states
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [place, setPlace] = useState("");

    const handleGenerate = async () => {
        if (!place || !startDate || !endDate) {
            alert("Please fill all fields first.");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(
                "http://localhost:5001/api/trips/generate",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        place,
                        startDate,
                        endDate,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

            if (data.suggestions && data.suggestions.length > 0) {
                const updatedSuggestions = data.suggestions.map((p, index) => ({
                    name: p.name || `Place ${index + 1}`,
                    image: p.image || `https://source.unsplash.com/600x400/?travel,${p.name}`,
                    tagline: p.tagline || `Experience the beauty of ${p.name}`
                }));
                setSuggestions(updatedSuggestions);
            }
        } catch (error) {
            console.error(error);
            alert("Backend not connected yet. Showing demo suggestions.");
            // Fallback mock data if backend fails
            setSuggestions([
                { name: "Maldives", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd", tagline: "Crystal clear waters await." },
                { name: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf", tagline: "Where tradition meets future." },
                { name: "Santorini", image: "https://images.unsplash.com/photo-1613395877344-13d4a3217365", tagline: "A magical island sunset." },
                { name: "Kyoto", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", tagline: "Experience ancient traditions." }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans flex flex-col">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70 pointer-events-none"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90 backdrop-blur-sm pointer-events-none"></div>

            {/* Main Content */}
            <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto w-full flex-1 flex flex-col min-h-screen">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 flex-shrink-0 pt-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
                        Create A New Trip
                    </h1>
                    <button className="bg-white/10 border border-white/20 px-4 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl backdrop-blur-lg hover:bg-white/20 transition hover:scale-105 text-sm md:text-base font-medium shadow-xl">
                        Back To Dashboard
                    </button>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 flex-1 pb-10">
                    {/* Left Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col relative overflow-hidden h-fit"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#a3ff00]/5 to-transparent pointer-events-none"></div>

                        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2 relative z-10">
                            <svg className="w-6 h-6 text-[#a3ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Plan your journey
                        </h2>

                        <div className="space-y-6 relative z-10">
                            {/* Place */}
                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium text-white/80">
                                    Select Place
                                </label>
                                <input
                                    type="text"
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value)}
                                    placeholder="e.g. Paris, Tokyo, Bali"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-[#a3ff00]/50 focus:ring-1 focus:ring-[#a3ff00]/50 transition-all text-white placeholder-white/30"
                                />
                            </div>

                            {/* Start Date */}
                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium text-white/80">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-[#a3ff00]/50 focus:ring-1 focus:ring-[#a3ff00]/50 transition-all text-white [color-scheme:dark]"
                                />
                            </div>

                            {/* End Date */}
                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium text-white/80">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-[#a3ff00]/50 focus:ring-1 focus:ring-[#a3ff00]/50 transition-all text-white [color-scheme:dark]"
                                />
                            </div>
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={handleGenerate}
                            disabled={loading}
                            className="mt-8 w-full bg-[#a3ff00] hover:bg-[#b5ff33] text-black font-bold py-4 rounded-2xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(163,255,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 relative z-10 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </>
                            ) : (
                                "Generate AI Suggestions"
                            )}
                        </button>
                    </motion.div>

                    {/* Right Side - Suggestions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col h-[600px] lg:h-full min-h-[500px] overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-6 flex-shrink-0">
                            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#a3ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Suggested Places
                            </h2>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative">
                            {suggestions.length === 0 && !loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-white/10 rounded-[2rem] bg-white/5 min-h-[350px]"
                                >
                                    <div className="w-24 h-24 mb-6 relative">
                                        <div className="absolute inset-0 bg-[#a3ff00]/20 rounded-full animate-ping"></div>
                                        <div className="relative bg-black/50 border border-white/10 w-full h-full rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(163,255,0,0.2)]">
                                            <svg className="w-12 h-12 text-[#a3ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-3">Ready to explore?</h3>
                                    <p className="text-white/50 max-w-sm text-lg leading-relaxed">
                                        Fill in your trip details and let our AI curate the perfect destinations tailored just for you.
                                    </p>
                                </motion.div>
                            )}

                            {loading && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pb-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-56 md:h-64 rounded-3xl overflow-hidden relative bg-white/5 animate-pulse border border-white/5">
                                            <div className="absolute bottom-4 left-4 right-4 space-y-3">
                                                <div className="h-6 bg-white/20 rounded-lg w-1/2"></div>
                                                <div className="h-4 bg-white/10 rounded-lg w-3/4"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {suggestions.length > 0 && !loading && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pb-4">
                                    <AnimatePresence>
                                        {suggestions.map((place, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="h-56 md:h-64 rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl border border-white/10"
                                            >
                                                <img
                                                    src={place.image}
                                                    alt={place.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500"></div>

                                                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="font-bold text-2xl text-white mb-1 drop-shadow-md">
                                                        {place.name}
                                                    </h3>
                                                    <p className="text-white/80 text-sm font-medium drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                        {place.tagline || `Discover the wonders of ${place.name}`}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(163, 255, 0, 0.5);
                }
            `}} />
        </div>
    );
}

export default CreateTrip;