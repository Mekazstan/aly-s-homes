'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';

export default function AdminOtpPage() {
    const { verifyOtp } = useAuth();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(60);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const code = otp.join('');
        if (code.length === 6) {
            await verifyOtp(code);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#1414b8]/10 blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[450px] z-10 text-center">
                <div className="mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1414b8] to-[#d4af35] mb-6 shadow-[0_0_40px_rgba(20,20,184,0.3)] animate-pulse">
                        <ShieldCheck className="text-white w-10 h-10" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Security Override</h1>
                    <p className="text-slate-500 font-medium">Enter the 6-digit administrator code</p>
                </div>

                <div className="glass-effect-dark p-8 rounded-2xl border border-slate-200 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex justify-between gap-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-14 bg-slate-50 border border-slate-200 rounded-xl text-center text-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-slate-200"
                                    placeholder="•"
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            disabled={otp.some(d => d === '')}
                            className="w-full gold-gradient text-black font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(212,175,53,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,53,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                        >
                            <div className="flex items-center justify-center gap-2">
                                Verify Identity
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </form>

                    <div className="mt-8 flex flex-col items-center gap-4">
                        <p className="text-sm text-slate-500 font-medium">
                            Code expires in <span className="text-accent font-mono">{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</span>
                        </p>
                        <button
                            disabled={timer > 0}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af35] hover:text-[#f1d592] disabled:opacity-20 transition-colors"
                        >
                            <RefreshCw size={14} className={timer === 0 ? "animate-spin-slow" : ""} />
                            Resend Administrative Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
