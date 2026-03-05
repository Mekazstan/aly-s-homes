import React from 'react';
import {
    Wrench,
    Plus,
    Clock,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    Upload,
    User,
    MapPin,
    Tag
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MaintenancePage() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Maintenance Requests</h1>
                    <p className="text-slate-500 mt-2 font-medium">Service operations for Phase 1 & 2. Track and report issues.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                    <Plus size={20} />
                    Report New Issue
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                            <Clock size={22} className="text-primary" />
                            Recent Requests
                        </h3>
                        <button className="text-primary text-sm font-bold hover:underline">View All Tickets</button>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Main Water Pump Failure",
                                ref: "MNT-2024-081",
                                location: "Phase 1 Central Unit",
                                status: "In Progress",
                                desc: "Technician dispatched for emergency repairs.",
                                color: "amber"
                            },
                            {
                                title: "Street Lighting Flickering",
                                ref: "MNT-2024-079",
                                location: "West Wing Boulevard",
                                status: "Pending",
                                desc: "Reviewing contractor availability for bulb replacement.",
                                color: "blue"
                            },
                            {
                                title: "Trimming Perimeter Hedges",
                                ref: "MNT-2024-072",
                                location: "North Gate Entrance",
                                status: "Finalized",
                                desc: "Job finalized by Landscape Team. Area cleared.",
                                color: "emerald"
                            }
                        ].map((ticket, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 transition-all group">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <span className={cn(
                                                "text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md",
                                                ticket.color === 'amber' ? "bg-amber-50 text-amber-600" :
                                                    ticket.color === 'blue' ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"
                                            )}>
                                                {ticket.status}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ref: #{ticket.ref}</span>
                                        </div>
                                        <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{ticket.title}</h4>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 font-bold">
                                            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-400" /> {ticket.location}</span>
                                            <span className="flex items-center gap-1.5"><Tag size={14} className="text-slate-400" /> Maintenance</span>
                                        </div>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed pt-2">{ticket.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-black text-slate-900">Upload Issue Photo</h3>
                    <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group hover:border-primary/40 hover:bg-primary/[0.02] transition-all cursor-pointer">
                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 mb-6 group-hover:scale-110 group-hover:text-primary transition-all">
                            <Upload size={32} />
                        </div>
                        <p className="text-lg font-black text-slate-900">Drop files here</p>
                        <p className="text-sm text-slate-500 font-medium mt-2">Upload or drag and drop<br />PNG, JPG up to 10MB</p>
                        <button className="mt-8 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-primary transition-colors">Select Photos</button>
                    </div>

                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden mt-6">
                        <h4 className="text-lg font-black text-white flex items-center gap-2">
                            <AlertCircle size={20} className="text-accent" />
                            Emergency Support
                        </h4>
                        <p className="text-sm text-slate-400 mt-3 font-medium leading-relaxed">For life-threatening emergencies or urgent flooding/gas issues, contact our 24/7 hotline.</p>
                        <div className="mt-8">
                            <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">Rapid Response</p>
                            <h3 className="text-2xl font-black text-gold-start mt-1">0800-ALYS-911</h3>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
