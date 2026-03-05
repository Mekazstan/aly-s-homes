'use client';

import React from 'react';
import {
    Shield,
    Video,
    UserX,
    AlertTriangle,
    Smartphone,
    Radio,
    History,
    Search,
    Filter,
    ArrowUpRight,
    Megaphone,
    X,
    Lock,
    Eye,
    Cctv,
    Map,
    Link
} from 'lucide-react';
import { cn } from '@/lib/utils';

const gateLogs = [
    { id: 'LOG-451', resident: 'Unit 402-B', guest: 'Michael Smith', type: 'Visitor', time: '10:45 AM', status: 'Entered' },
    { id: 'LOG-452', resident: 'Penth 1', guest: 'DHL Express', type: 'Contractor', time: '10:32 AM', status: 'Entry Denied' },
    { id: 'LOG-453', resident: 'Unit 112-D', guest: 'Private Party (12)', type: 'Event', time: '10:15 AM', status: 'Pre-Authorized' },
    { id: 'LOG-454', resident: 'Unit 204-A', guest: 'Alice Johnson', type: 'Visitor', time: '09:50 AM', status: 'Exited' },
];

export default function AdminSecurity() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 underline decoration-red-500/10 underline-offset-8 tracking-tight">Security Command</h1>
                    <p className="text-slate-500 font-bold">Estate surveillance and emergency protocols</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200 transition-all">
                        <Map size={18} className="text-accent" />
                        GIS View
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-black rounded-xl shadow-lg shadow-red-600/20 transition-all hover:scale-105 active:scale-95 animate-pulse">
                        <Megaphone size={18} />
                        Emergency Broadcast
                    </button>
                </div>
            </div>

            {/* Live Monitoring Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Gate Status', val: 'Operational', icon: Link, color: 'text-emerald-500' },
                    { label: 'CCTV Network', val: '84/84 Online', icon: Cctv, color: 'text-blue-500' },
                    { label: 'Active Alerts', val: '00', icon: Shield, color: 'text-slate-200' },
                ].map((stat, i) => (
                    <div key={i} className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between group transition-all hover:shadow-md">
                        <div>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-black text-slate-900">{stat.val}</h3>
                        </div>
                        <div className={cn("p-4 rounded-2xl bg-slate-50 group-hover:bg-slate-100 transition-colors shadow-inner", stat.color)}>
                            {i === 0 ? <Smartphone size={24} /> : i === 1 ? <Cctv size={24} /> : <AlertTriangle size={24} />}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Real-time Gate Log */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <History size={22} className="text-accent" />
                            Live Entry/Exit Log
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                <input
                                    type="text"
                                    placeholder="Plate / Name..."
                                    className="bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-accent/20 w-40 font-bold"
                                />
                            </div>
                            <button className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="glass-effect-dark rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Guest</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Host Unit</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Category</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {gateLogs.map((log) => (
                                        <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="text-sm font-bold text-slate-900">{log.guest}</div>
                                                <div className="text-[10px] text-slate-300 font-black uppercase tracking-widest mt-0.5">{log.time}</div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-sm text-slate-500 font-bold group-hover:text-slate-900">{log.resident}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className={cn(
                                                    "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest w-fit border",
                                                    log.status === 'Entered' ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" :
                                                        log.status === 'Entry Denied' ? "bg-red-500/5 text-red-500 border-red-500/20" : "bg-blue-500/5 text-blue-500 border-blue-500/20"
                                                )}>
                                                    {log.status}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                                                    <Eye size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Security Protocols */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Lock size={22} className="text-accent" />
                        System Protocols
                    </h3>

                    <div className="space-y-4">
                        {[
                            { title: 'Blocklisted Persons', count: '14 Blacklisted', icon: UserX, color: 'text-red-500' },
                            { title: 'Pre-Auth Override', count: 'Executive Only', icon: Shield, color: 'text-accent' },
                            { title: 'External Patrol', icon: Radio, count: 'Enabled', color: 'text-emerald-500' },
                            { title: 'Surveillance Feed', icon: Video, count: 'Live Viewing', color: 'text-blue-500' },
                        ].map((item, i) => (
                            <button key={i} className="w-full glass-effect-dark p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-accent/30 hover:scale-[1.02] transition-all text-left flex items-start gap-4 group">
                                <div className={cn("p-2.5 rounded-xl bg-slate-50 group-hover:bg-accent/10 transition-colors shadow-inner", item.color)}>
                                    <item.icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</p>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{item.count}</p>
                                </div>
                                <ArrowUpRight size={14} className="text-slate-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </button>
                        ))}
                    </div>

                    <div className="glass-effect-dark p-6 rounded-3xl border border-slate-200 mt-10 shadow-sm relative overflow-hidden group">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-300 mb-4">Security Shift</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent font-black shadow-inner">S1</div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Main Entrance Team</p>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Supervisor: Sgt. Bashir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
