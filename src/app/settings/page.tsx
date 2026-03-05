"use client";

import React, { useState } from 'react';
import {
    User,
    Lock,
    Bell,
    Shield,
    ChevronRight,
    Camera,
    Smartphone,
    Mail,
    MapPin,
    Save,
    Moon,
    Sun
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
    ];

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Account Settings</h1>
                <p className="text-slate-500 mt-2 font-medium">Manage your personal profile, security protocols, and estate notifications.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                <div className="space-y-4">
                    <div className="bg-white p-3 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col gap-1">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-200 font-bold text-sm",
                                        activeTab === tab.id
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <Icon size={18} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                                <img src="https://i.pravatar.cc/150?u=chima" alt="profile" className="w-full h-full object-cover" />
                            </div>
                            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center border-2 border-white shadow-lg hover:scale-110 transition-transform">
                                <Camera size={18} />
                            </button>
                        </div>
                        <h3 className="mt-6 font-black text-slate-900 text-lg">Chima Okafor</h3>
                        <p className="text-[10px] uppercase tracking-widest font-black text-primary bg-primary/5 px-3 py-1 rounded-full mt-2">Resident • 402-B</p>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    {activeTab === 'profile' && (
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-xl font-black text-slate-900">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1">Full Name</label>
                                    <input type="text" defaultValue="Chima Okafor" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-700 font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1">Email Address</label>
                                    <input type="email" defaultValue="chima.o@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-700 font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1">Phone Number</label>
                                    <input type="tel" defaultValue="+234 801 234 5678" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-700 font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1">Unit Assignment</label>
                                    <div className="w-full px-5 py-4 bg-slate-100 border border-slate-200 rounded-2xl text-slate-400 select-none flex items-center gap-2 cursor-not-allowed">
                                        <MapPin size={16} /> Unit 402, Block B (Phase 1)
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-slate-100 flex justify-end">
                                <button className="flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-2xl font-black hover:scale-[1.05] transition-transform shadow-lg shadow-primary/20">
                                    <Save size={20} />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-xl font-black text-slate-900">Security Protocols</h3>

                            <div className="space-y-6">
                                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex shrink-0 items-center justify-center text-primary shadow-sm border border-slate-100">
                                            <Smartphone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900">Two-Factor Auth</h4>
                                            <p className="text-sm text-slate-500 font-medium">Add an extra layer of security using mobile verification.</p>
                                        </div>
                                    </div>
                                    <div className="w-14 h-8 bg-emerald-100 rounded-full relative cursor-pointer border-2 border-emerald-50 focus-within:ring-2 ring-primary ring-offset-2">
                                        <div className="w-6 h-6 bg-emerald-600 rounded-full absolute right-1 top-0.5" />
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex shrink-0 items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                                            <Lock size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900">Change Password</h4>
                                            <p className="text-sm text-slate-500 font-medium">Last updated 3 months ago.</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-black uppercase tracking-widest rounded-xl transition-all">Update</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div>
                                <h3 className="text-xl font-black text-slate-900">Notification Preferences</h3>
                                <p className="text-sm text-slate-500 font-medium mt-1">Control how you receive alerts from the estate.</p>
                            </div>

                            <div className="space-y-2">
                                {[
                                    { title: "Visitor Arrival", desc: "Receive alerts when visitors reach the gate" },
                                    { title: "New Estate Notice", desc: "Important announcements from management" },
                                    { title: "Utility Bill Reminders", desc: "Payment deadlines and consumption alerts" },
                                    { title: "Maintenance Updates", desc: "Status changes on your service requests" }
                                ].map((pref, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 border-b border-slate-50 last:border-0 group">
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{pref.title}</h4>
                                            <p className="text-sm text-slate-500 font-medium">{pref.desc}</p>
                                        </div>
                                        <div className="w-14 h-8 bg-slate-200 rounded-full relative cursor-pointer border-2 border-white">
                                            <div className="w-6 h-6 bg-white rounded-full absolute left-1 top-0.5 shadow-sm" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
