import React from 'react';
import {
    Trees,
    Calendar,
    MapPin,
    Clock,
    ChevronRight,
    Star,
    Dumbbell,
    Waves,
    Coffee,
    Trophy
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AmenitiesPage() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Estate Amenities</h1>
                    <p className="text-slate-500 mt-2 font-medium">Book exclusive facilities at your convenience. Luxury at your doorstep.</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200">
                    {[
                        { label: 'Map', active: true },
                        { label: 'Grid', active: false }
                    ].map(view => (
                        <button key={view.label} className={cn(
                            "px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all",
                            view.active ? "bg-primary text-white" : "text-slate-500 hover:text-slate-900"
                        )}>
                            {view.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Clubhouse",
                        icon: Coffee,
                        desc: "Perfect for private events, business meetings, and social gatherings. Features a gourmet kitchen and lounge areas.",
                        stats: { capacity: "50-100 People", availability: "Booking Required" },
                        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                        title: "Swimming Pool",
                        icon: Waves,
                        desc: "Temperature controlled Olympic size pool with luxury sun loungers and professional lifeguards onsite.",
                        stats: { depth: "1.2m - 2.5m", type: "Infinite Pool" },
                        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                        title: "State Gym",
                        icon: Dumbbell,
                        desc: "High-end cardio and strength equipment with onsite trainers. Private lockers and steam shower facilities included.",
                        stats: { trainer: "Available", equipment: "TechnoGym" },
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                        title: "Tennis Court",
                        icon: Trophy,
                        desc: "Professional grade clay courts with floodlights for evening play. Equipment rental available at the clubhouse.",
                        stats: { surface: "Clay", lighting: "Floodlights" },
                        image: "https://images.unsplash.com/photo-1595435063134-8025232779f7?auto=format&fit=crop&q=80&w=800"
                    }
                ].map((amenity, i) => {
                    const Icon = amenity.icon;
                    return (
                        <div key={i} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden group hover:border-primary/20 transition-all shadow-sm">
                            <div className="h-60 overflow-hidden relative">
                                <img
                                    src={amenity.image}
                                    alt={amenity.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 right-6 px-4 py-2 glass-effect rounded-2xl flex items-center gap-1.5 text-xs font-black">
                                    <Star size={14} className="text-accent fill-accent" />
                                    Premium
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">{amenity.title}</h3>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{amenity.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex shrink-0 items-center justify-center text-primary">
                                        <Icon size={24} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(amenity.stats).map(([k, v]) => (
                                        <div key={k} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">{k}</p>
                                            <p className="text-xs font-black text-slate-800">{v}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-2">
                                    <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-primary transition-colors flex items-center justify-center gap-2 group/btn">
                                        Book Space
                                        <Calendar size={18} className="transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-black text-slate-900">My Bookings</h3>
                    <button className="text-sm font-bold text-primary hover:underline">View Policy</button>
                </div>
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                        <Calendar size={32} />
                    </div>
                    <p className="text-lg font-black text-slate-900">No active bookings</p>
                    <p className="text-sm text-slate-500 font-medium mt-1">You haven't scheduled any facilities yet.</p>
                </div>
            </div>
        </div>
    );
}
