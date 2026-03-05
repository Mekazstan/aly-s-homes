'use client';

import React, { useState } from 'react';
import {
    Users,
    Search,
    Filter,
    UserPlus,
    Check,
    X,
    MoreVertical,
    Mail,
    Phone,
    Home,
    Clock,
    UserCheck,
    UserX,
    ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

const pendingResidents = [
    { id: 1, name: 'Deborah Adeyemi', email: 'deborah.a@gmail.com', unit: 'Unit 402-B', type: 'Resident', date: 'Just now' },
    { id: 2, name: 'Chinedu Okafor', email: 'c.okafor@outlook.com', unit: 'Unit 102-A', type: 'Owner', date: '2 hours ago' },
];

const allResidents = [
    { id: 101, name: 'John Doe', unit: 'Penth 1', status: 'Active', type: 'Owner', lastSeen: 'Today, 10:24 AM' },
    { id: 102, name: 'Alice Smith', unit: 'Unit 204-C', status: 'Active', type: 'Tenant', lastSeen: 'Yesterday' },
    { id: 103, name: 'Robert Wilson', unit: 'Unit 310-B', status: 'Inactive', type: 'Resident', lastSeen: '3 days ago' },
    { id: 104, name: 'Sarah Johnson', unit: 'Unit 112-D', status: 'Active', type: 'Owner', lastSeen: 'Today, 8:15 AM' },
];

export default function ResidentsManagement() {
    const [view, setView] = useState<'all' | 'pending'>('pending');

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Resident Directory</h1>
                    <p className="text-slate-500 font-bold">Manage occupancy and application approvals</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200 transition-all">
                        <Filter size={18} className="text-accent" />
                        Filters
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 gold-gradient text-black text-sm font-black rounded-xl shadow-lg shadow-gold-start/20 transition-all hover:scale-105 active:scale-95">
                        <UserPlus size={18} />
                        Add Resident
                    </button>
                </div>
            </div>

            {/* View Switcher */}
            <div className="flex items-center p-1.5 glass-effect-dark border border-slate-200 shadow-sm rounded-2xl w-fit">
                <button
                    onClick={() => setView('pending')}
                    className={cn(
                        "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                        view === 'pending' ? "bg-accent text-black shadow-lg shadow-accent/10" : "text-slate-400 hover:text-slate-900"
                    )}
                >
                    Pending Approvals ({pendingResidents.length})
                </button>
                <button
                    onClick={() => setView('all')}
                    className={cn(
                        "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                        view === 'all' ? "bg-accent text-black shadow-lg shadow-accent/10" : "text-slate-400 hover:text-slate-900"
                    )}
                >
                    All Residents ({allResidents.length})
                </button>
            </div>

            {/* Search Bar */}
            <div className="max-w-md w-full relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text"
                    placeholder="Search name, unit, or email..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-bold"
                />
            </div>

            {/* Main Content Area */}
            <div className="space-y-6">
                {view === 'pending' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pendingResidents.map((res) => (
                            <div key={res.id} className="glass-effect-dark rounded-3xl border border-slate-200 shadow-sm overflow-hidden group hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all">
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                                            <Users size={28} className="text-slate-300 group-hover:text-accent transition-colors" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
                                                <Check size={20} />
                                            </button>
                                            <button className="p-2.5 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                                                <X size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{res.name}</h3>
                                        <p className="text-accent text-[10px] uppercase tracking-widest font-black mt-1">{res.type} • Application</p>
                                    </div>
                                    <div className="space-y-2.5 pt-2">
                                        <div className="flex items-center gap-3 text-sm text-slate-500 font-bold">
                                            <Home size={16} className="text-slate-400" />
                                            {res.unit}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 font-bold">
                                            <Mail size={16} className="text-slate-400" />
                                            {res.email}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 font-bold">
                                            <Clock size={16} className="text-slate-400" />
                                            Applied {res.date}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-4 flex items-center justify-center border-t border-slate-100">
                                    <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                                        View Full Profile <ExternalLink size={12} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="glass-effect-dark rounded-3xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Resident</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Unit</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Role</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Activity</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {allResidents.map((res) => (
                                    <tr key={res.id} className="hover:bg-slate-50/50 transition-colors group border-b border-slate-100 last:border-0">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold">
                                                    {res.name.charAt(0)}
                                                </div>
                                                <div className="font-bold text-slate-900 group-hover:text-accent transition-colors">{res.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-slate-500 font-bold">{res.unit}</td>
                                        <td className="px-8 py-6">
                                            <div className={cn(
                                                "px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest w-fit",
                                                res.status === 'Active' ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-100 text-slate-400"
                                            )}>
                                                {res.status}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-slate-500 font-bold">{res.type}</td>
                                        <td className="px-8 py-6 text-sm text-slate-400 font-medium">{res.lastSeen}</td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                                                <MoreVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
