import React from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  CircleAlert,
  Clock,
  Calendar,
  ChevronRight,
  Zap,
  ShieldCheck,
  Droplets
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back, Resident</h1>
        <p className="text-slate-500 mt-2 font-medium">Here is what's happening in your estate today.</p>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Utility Balance</p>
          <div className="mt-4 flex items-end gap-2">
            <h3 className="text-3xl font-black text-slate-900">₦45,000.00</h3>
            <span className="text-red-500 text-sm font-bold flex items-center mb-1">
              <ArrowDownRight size={16} /> Low
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-4 flex items-center gap-1 font-medium">
            <Clock size={12} /> Last updated 5 mins ago
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Security Status</p>
          <div className="mt-4">
            <h3 className="text-3xl font-black text-emerald-600">Active</h3>
          </div>
          <p className="text-[11px] text-slate-400 mt-4 flex items-center gap-1 font-medium">
            <ShieldCheck size={12} className="text-emerald-500" /> Perimeter Secure
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">New Notices</p>
          <div className="mt-4">
            <h3 className="text-3xl font-black text-slate-900">03</h3>
          </div>
          <p className="text-[11px] text-slate-400 mt-4 flex items-center gap-1 font-medium">
            <CircleAlert size={12} className="text-accent" /> 1 High Priority
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Announcements */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Calendar size={22} className="text-primary" />
              Recent Announcements
            </h3>
            <button className="text-primary text-sm font-bold hover:underline">View all</button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Enhanced Perimeter Patrols",
                desc: "Starting this evening, we are increasing foot patrols near the North Gate entrance from 10 PM to 5 AM to ensure maximum resident safety.",
                tag: "Security",
                color: "emerald"
              },
              {
                title: "Water Maintenance Schedule",
                desc: "Scheduled cleaning of the central reservoir will take place this Saturday. Expect low pressure between 10 AM and 2 PM.",
                tag: "Utilities",
                color: "blue"
              }
            ].map((news, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-primary/20 transition-colors group cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md",
                      news.color === 'emerald' ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                    )}>
                      {news.tag}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{news.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-2">{news.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-black text-slate-900">Quick Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <button className="flex items-center gap-4 p-5 bg-primary text-white rounded-3xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold">Buy Electricity</p>
                <p className="text-xs text-white/70 font-medium">Recharge your unit instantly</p>
              </div>
            </button>

            <button className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-3xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <Droplets size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Request Water</p>
                <p className="text-xs text-slate-500 font-medium">Order emergency supply</p>
              </div>
            </button>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden mt-10">
            <div className="relative z-10">
              <h4 className="text-xl font-black">Community Portal</h4>
              <p className="text-sm text-slate-400 mt-2 font-medium leading-relaxed">Access all resident services, book amenities, and track your bills from one place.</p>
              <div className="mt-8 flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-primary flex items-center justify-center text-[10px] font-bold">
                  +2k
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
