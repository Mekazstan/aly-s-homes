'use client';

import React from 'react';
import {
    Wrench,
    Clock,
    AlertCircle,
    CheckCircle2,
    MapPin,
    User,
    Calendar,
    ChevronRight,
    Search,
    Filter,
    ClipboardList,
    Briefcase,
    Activity,
    Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const workOrders = [
    { id: 'WO-2401', issue: 'AC Unit Repair', unit: 'Penth 1', priority: 'High', status: 'In Progress', assigned: 'Engr. Mike', time: 'Started 2h ago' },
    { id: 'WO-2402', issue: 'Pipe Leakage', unit: '402-B', priority: 'Medium', status: 'Pending', assigned: 'Tunde Plumbs', time: 'Reported 5h ago' },
    { id: 'WO-2403', issue: 'Generator Service', unit: 'Common Area', priority: 'Critical', status: 'Scheduled', assigned: 'External: Cummins', time: 'Tomorrow 9AM' },
    { id: 'WO-2404', issue: 'Door Lock Change', unit: '112-D', priority: 'Low', status: 'Completed', assigned: 'Internal Staff', time: 'Just now' },
];

const artisans = [
    { name: 'Mike Johnson', trade: 'HVAC Specialist', status: 'On-Site', jobs: 2 },
    { name: 'Tunde Okoro', trade: 'Plumbing', status: 'Available', jobs: 0 },
    { name: 'Suleiman Ali', trade: 'Electrician', status: 'Busy', jobs: 4 },
];

export default function AdminMaintenance() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Resource Management</h1>
                    <p className="text-slate-500 font-bold">Workforce dispatch and maintenance oversight</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200 transition-all">
                        <Briefcase size={18} className="text-accent" />
                        Manage Workforce
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 gold-gradient text-black text-sm font-black rounded-xl shadow-lg shadow-gold-start/20 transition-all hover:scale-105 active:scale-95">
                        <Plus size={18} />
                        New Work Order
                    </button>
                </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Active Tickets', val: '24', icon: ClipboardList, color: 'text-blue-500' },
                    { label: 'Average Resolution', val: '4.2h', icon: Clock, color: 'text-emerald-500' },
                    { label: 'Artisans on Field', val: '08', icon: Activity, color: 'text-accent' },
                ].map((stat, i) => (
                    <div key={i} className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between group">
                        <div>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900">{stat.val}</h3>
                        </div>
                        <div className={cn("p-4 rounded-2xl bg-slate-50 group-hover:bg-slate-100 transition-colors shadow-inner", stat.color)}>
                            <stat.icon size={28} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Work Order Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Wrench size={22} className="text-accent" />
                            Global Work Queue
                        </h3>
                        <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-1 bg-slate-50">
                            <button className="px-4 py-1.5 rounded-lg bg-accent text-black text-[10px] font-black uppercase tracking-widest shadow-sm">Active</button>
                            <button className="px-4 py-1.5 rounded-lg text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest transition-all">Closed</button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {workOrders.map((order) => (
                            <div key={order.id} className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group relative overflow-hidden">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className={cn(
                                            "w-2 h-12 rounded-full",
                                            order.priority === 'Critical' ? "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" :
                                                order.priority === 'High' ? "bg-orange-500" : "bg-blue-500"
                                        )} />
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-[10px] font-black font-mono text-accent uppercase tracking-widest">{order.id}</span>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md">{order.priority}</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">{order.issue}</h4>
                                            <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                                                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent" /> {order.unit}</span>
                                                <span className="flex items-center gap-1.5"><User size={14} className="text-accent" /> {order.assigned}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:flex-col md:items-end gap-3">
                                        <div className={cn(
                                            "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border",
                                            order.status === 'Completed' ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" :
                                                order.status === 'In Progress' ? "bg-blue-500/5 text-blue-500 border-blue-500/20" :
                                                    "bg-orange-500/5 text-orange-500 border-orange-500/20"
                                        )}>
                                            {order.status}
                                        </div>
                                        <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-1">
                                            <Clock size={12} className="text-slate-400" /> {order.time}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Activity size={60} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Artisan Registry */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <User size={22} className="text-accent" />
                        Staff Registry
                    </h3>

                    <div className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                        {artisans.map((art, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-accent transition-colors font-bold shadow-inner">
                                        {art.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors">{art.name}</p>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{art.trade}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className={cn(
                                        "text-[9px] font-black uppercase tracking-widest mb-1",
                                        art.status === 'Available' ? "text-emerald-500" : art.status === 'On-Site' ? "text-blue-500" : "text-orange-500"
                                    )}>
                                        {art.status}
                                    </div>
                                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">{art.jobs} active jobs</p>
                                </div>
                            </div>
                        ))}

                        <button className="w-full py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                            View Contractor Network
                        </button>
                    </div>

                    {/* Quick Analytics */}
                    <div className="glass-effect-dark p-6 rounded-3xl border border-accent/20 shadow-sm relative overflow-hidden group">
                        <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Uptime & Reliability</h4>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl font-black text-slate-900">96.8%</span>
                            <div className="h-10 w-px bg-slate-100" />
                            <div className="text-[10px] font-bold text-emerald-500 uppercase leading-tight">
                                Systemic<br />Efficiency
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[96.8%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
