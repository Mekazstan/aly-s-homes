import React from 'react';
import {
    BellRing,
    MessageSquare,
    Search,
    Filter,
    ChevronRight,
    ArrowRight,
    ShieldCheck,
    AlertTriangle,
    Zap,
    Info,
    Trees,
    Star
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NoticesPage() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Estate Notices</h1>
                    <p className="text-slate-500 mt-2 font-medium">Official communications and community updates for all residents.</p>
                </div>
                <div className="flex items-center gap-2 p-1 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <button className="px-5 py-2.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all">Official</button>
                    <button className="px-5 py-2.5 text-slate-500 text-xs font-black uppercase tracking-widest rounded-xl transition-all hover:text-primary">Community</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3 space-y-8">
                    {/* Priority Notice */}
                    <div className="bg-red-50/50 border border-red-100 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 bg-red-100 rounded-3xl flex shrink-0 items-center justify-center text-red-600">
                                <AlertTriangle size={32} />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 bg-red-600 text-white rounded-md">High Priority</span>
                                    <span className="text-xs text-red-600/70 font-bold uppercase tracking-wider">Security Alert</span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">Scheduled Power Grid Upgrade</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Please be informed that there will be a brief power interruption scheduled for routine transformer maintenance and grid stabilization within the estate. This is to ensure optimal performance during peak hours.
                                </p>
                                <div className="pt-2 flex items-center gap-6 text-sm font-bold text-slate-500">
                                    <span className="flex items-center gap-2"><Zap size={16} className="text-amber-500" /> Oct 30, 2023</span>
                                    <span className="flex items-center gap-2"><ArrowRight size={16} className="text-red-400" /> Phase 1 & 2</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                            <MessageSquare size={22} className="text-primary" />
                            Community Board
                        </h3>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    title: "Visitor Pre-Registration Protocol",
                                    desc: "Effective from next Monday, all expected visitors must be pre-registered via the resident app to ensure faster processing at the main gate...",
                                    tag: "Security",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Annual Resident's Dinner: Save the Date",
                                    desc: "We are excited to announce our upcoming annual dinner. Join us for an evening of luxury networking and fine dining at the Clubhouse...",
                                    tag: "Event",
                                    icon: Star
                                },
                                {
                                    title: "Landscape Enhancement: West Wing",
                                    desc: "Our gardening team will be planting new exotic shrubs and trees around the West Wing park areas starting Tuesday. Please avoid the marked zones.",
                                    tag: "Maintenance",
                                    icon: Trees
                                }
                            ].map((notice, i) => {
                                const Icon = notice.icon || Info;
                                return (
                                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 transition-all group cursor-pointer relative overflow-hidden">
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="space-y-3">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-md">{notice.tag}</span>
                                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{notice.title}</h4>
                                                <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">{notice.desc}</p>
                                            </div>
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex shrink-0 items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                                <ChevronRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-black text-slate-900 mb-6">Search Notices</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500">
                                <Search size={18} />
                                <input type="text" placeholder="Type keywords..." className="bg-transparent border-none focus:outline-none text-sm w-full" />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Security', 'Billing', 'Event', 'Water', 'Power'].map(tag => (
                                    <button key={tag} className="px-3 py-1.5 bg-slate-50 text-[10px] font-bold text-slate-500 rounded-lg hover:bg-primary hover:text-white transition-colors">{tag}</button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <BellRing size={28} />
                            </div>
                            <h4 className="text-2xl font-black">Never miss an update</h4>
                            <p className="text-sm text-white/70 mt-3 font-medium leading-relaxed">Enable push notifications to receive real-time alerts from the Estate Management office.</p>
                            <button className="mt-8 px-8 py-3 bg-white text-primary rounded-2xl font-black hover:scale-[1.05] transition-transform">Enable Alerts</button>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                    </div>

                    <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-center">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Got something to share with the community?</p>
                        <button className="mt-4 text-primary font-black hover:underline">Submit a Board Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
