'use client';

import React from 'react';
import {
    Palmtree,
    Calendar,
    Clock,
    Users,
    DollarSign,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Power,
    ShieldCheck,
    BarChart3,
    ArrowUpRight,
    Search,
    Filter,
    Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const facilities = [
    { name: 'Estate Clubhouse', status: 'Available', bookings: 12, revenue: '₦240,000', color: 'bg-emerald-500' },
    { name: 'Premium Gym', status: 'Maintenance', bookings: 0, revenue: '₦0', color: 'bg-orange-500' },
    { name: 'Tennis Courts', status: 'Available', bookings: 8, revenue: '₦45,000', color: 'bg-emerald-500' },
    { name: 'Swimming Pool', status: 'Occupied', bookings: 1, revenue: '₦15,000', color: 'bg-blue-500' },
];

const upcomingBookings = [
    { id: 'BK-001', facility: 'Clubhouse', resident: 'Sarah Williams', date: 'Mar 20, 2024', time: '10:00 AM - 4:00 PM', status: 'Confirmed' },
    { id: 'BK-002', facility: 'Tennis Court 1', resident: 'John Doe', date: 'Mar 20, 2024', time: '6:00 PM - 7:00 PM', status: 'Pending Approval' },
    { id: 'BK-003', facility: 'Swimming Pool', resident: 'Alice Smith', date: 'Mar 21, 2024', time: '12:00 PM - 2:00 PM', status: 'Confirmed' },
];

export default function AdminAmenities() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Facility Management</h1>
                    <p className="text-slate-500 font-bold">Amenities status, bookings, and operations</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200 transition-all">
                        <BarChart3 size={18} className="text-accent" />
                        Usage Analytics
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 gold-gradient text-black text-sm font-black rounded-xl shadow-lg shadow-gold-start/20 transition-all hover:scale-105 active:scale-95">
                        <Plus size={18} />
                        New Facility
                    </button>
                </div>
            </div>

            {/* Facility Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilities.map((fac, i) => (
                    <div key={i} className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm group hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <Palmtree size={28} />
                            </div>
                            <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                                <MoreVertical size={20} />
                            </button>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4">{fac.name}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Status</span>
                                <div className="flex items-center gap-1.5">
                                    <div className={cn("w-1.5 h-1.5 rounded-full", fac.color)} />
                                    <span className={cn("text-[10px] font-black uppercase tracking-widest", fac.status === 'Available' ? "text-emerald-500" : fac.status === 'Maintenance' ? "text-orange-500" : "text-blue-500")}>
                                        {fac.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bookings (MTD)</span>
                                <span className="text-xs font-bold text-slate-900">{fac.bookings}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Revenue (MTD)</span>
                                <span className="text-xs font-black text-accent">{fac.revenue}</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                            <button className="flex-1 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[9px] font-black uppercase tracking-widest text-slate-900 transition-all shadow-sm">
                                Edit Rules
                            </button>
                            <button className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-white border border-slate-200 text-slate-300 transition-all shadow-sm">
                                <Power size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Bookings Queue */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Calendar size={22} className="text-accent" />
                            Booking Requests
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search Resident..."
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
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Amenity</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Resident</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Schedule</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {upcomingBookings.map((bk) => (
                                        <tr key={bk.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="text-sm font-bold text-slate-900">{bk.facility}</div>
                                                <div className="text-[9px] font-mono text-slate-300 tracking-tight font-bold">{bk.id}</div>
                                            </td>
                                            <td className="px-6 py-5 underline decoration-accent/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">
                                                <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900">{bk.resident}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="text-xs text-slate-900 font-bold">{bk.date}</div>
                                                <div className="text-[10px] text-slate-400 font-black">{bk.time}</div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className={cn(
                                                    "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest w-fit border",
                                                    bk.status === 'Confirmed' ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" : "bg-orange-500/5 text-orange-500 border-orange-500/20"
                                                )}>
                                                    {bk.status}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
                                                        <CheckCircle2 size={16} />
                                                    </button>
                                                    <button className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                                                        <XCircle size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Operations */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <ShieldCheck size={22} className="text-accent" />
                        Facility Oversight
                    </h3>

                    <div className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-4">Quick Access Toggles</p>
                            <div className="space-y-4">
                                {[
                                    { name: 'Public Access', status: 'Restricted' },
                                    { name: 'Guest Policy', status: 'Moderate' },
                                    { name: 'Night Use', status: 'Disabled' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between group">
                                        <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{item.name}</span>
                                        <div className="w-10 h-5 bg-accent/20 rounded-full relative cursor-pointer group-hover:bg-accent/30 transition-all">
                                            <div className="absolute right-1 top-1 w-3 h-3 bg-accent rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Service Revenue</p>
                                <span className="text-[10px] font-black text-emerald-500">+18% YoY</span>
                            </div>
                            <div className="flex items-end gap-1 mb-4">
                                <span className="text-2xl font-black text-slate-900">₦3.4M</span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase pb-1">Total MTD</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-accent w-[72%]" />
                            </div>
                            <p className="text-[10px] text-slate-400 font-black mt-2 italic">Reflects club memberships and facility rentals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
