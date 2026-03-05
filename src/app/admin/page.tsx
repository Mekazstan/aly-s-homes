'use client';

import React from 'react';
import {
    Users,
    CreditCard,
    Wrench,
    ShieldAlert,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    AlertCircle,
    CheckCircle2,
    Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
    {
        label: 'Total Residents',
        value: '1,284',
        change: '+12%',
        trend: 'up',
        icon: Users,
        color: 'text-blue-400'
    },
    {
        label: 'Revenue (MTD)',
        value: '₦14.2M',
        change: '+8.4%',
        trend: 'up',
        icon: CreditCard,
        color: 'text-accent'
    },
    {
        label: 'Pending Tasks',
        value: '24',
        change: '-5%',
        trend: 'down',
        icon: Wrench,
        color: 'text-orange-400'
    },
    {
        label: 'Security Alerts',
        value: '02',
        change: 'Critical',
        trend: 'neutral',
        icon: ShieldAlert,
        color: 'text-red-400'
    },
];

const recentActivity = [
    { id: 1, type: 'registration', resident: 'Sarah Williams', unit: 'Unit 402-B', time: '2 mins ago', status: 'Pending Approval' },
    { id: 2, type: 'payment', resident: 'John Doe', unit: 'Unit 105-A', time: '15 mins ago', status: 'Confirmed' },
    { id: 3, type: 'maintenance', resident: 'Bolanle Alabi', unit: 'Penth 1', time: '1 hour ago', status: 'In Progress' },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-10">
            {/* Executive Summary */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Dashboard</h1>
                    <p className="text-slate-500 font-bold">Estate Control & Strategic Performance</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200 transition-all">
                        Download Report
                    </button>
                    <button className="px-5 py-2.5 gold-gradient text-black text-sm font-black rounded-xl shadow-lg shadow-gold-start/20 transition-all hover:scale-105 active:scale-95">
                        Broadcast Alert
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="glass-effect-dark p-6 rounded-3xl border border-slate-200 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-3 rounded-2xl bg-slate-50", stat.color)}>
                                <stat.icon size={24} />
                            </div>
                            <div className={cn(
                                "flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg",
                                stat.trend === 'up' ? "bg-emerald-500/10 text-emerald-500" :
                                    stat.trend === 'down' ? "bg-red-500/10 text-red-500" : "bg-orange-500/10 text-orange-500"
                            )}>
                                {stat.trend === 'up' ? <ArrowUpRight size={12} /> : stat.trend === 'down' ? <ArrowDownRight size={12} /> : <Activity size={12} />}
                                {stat.change}
                            </div>
                        </div>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                        <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>

                        {/* Decorative Gradient */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/5 blur-[40px] rounded-full group-hover:bg-accent/10 transition-colors" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Real-time Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Clock size={20} className="text-accent" />
                            Live Operational Feed
                        </h3>
                        <button className="text-accent text-xs font-black uppercase tracking-widest hover:underline">View All</button>
                    </div>

                    <div className="space-y-4">
                        {recentActivity.map((act) => (
                            <div key={act.id} className="glass-effect-dark p-5 rounded-2xl border border-slate-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-accent transition-colors">
                                            {act.type === 'registration' && <Users size={20} />}
                                            {act.type === 'payment' && <CreditCard size={20} />}
                                            {act.type === 'maintenance' && <Wrench size={20} />}
                                        </div>
                                        <div>
                                            <p className="text-slate-900 font-bold">{act.resident}</p>
                                            <p className="text-xs text-slate-400 font-bold">{act.unit} • {act.time}</p>
                                        </div>
                                    </div>
                                    <div className={cn(
                                        "px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest",
                                        act.status === 'Pending Approval' ? "bg-orange-500/10 text-orange-500 border border-orange-500/20" :
                                            act.status === 'Confirmed' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                                                "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                                    )}>
                                        {act.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Health */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Activity size={20} className="text-accent" />
                        Infrastructure Health
                    </h3>

                    <div className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                        <div className="space-y-4">
                            {[
                                { label: 'Security Systems', icon: CheckCircle2, status: 'Online', val: 100, color: 'text-emerald-500' },
                                { label: 'Utility Sensors', icon: CheckCircle2, status: 'Online', val: 98, color: 'text-emerald-500' },
                                { label: 'Payment Gateway', icon: CheckCircle2, status: 'Operational', val: 100, color: 'text-emerald-500' },
                                { label: 'Maintenance Network', icon: AlertCircle, status: 'Latency Detected', val: 72, color: 'text-orange-500' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <item.icon size={16} className={item.color} />
                                        <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{item.label}</span>
                                    </div>
                                    <span className={cn("text-[10px] font-black uppercase tracking-widest", item.color)}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-4">Storage Usage</p>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-accent w-[65%]" />
                            </div>
                            <p className="text-[10px] text-slate-400 font-black mt-2">685 GB of 1 TB used</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
