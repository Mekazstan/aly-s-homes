'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, ArrowRight, RefreshCw, KeyRound } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';
import { cn } from '@/lib/utils';

export default function OtpPage() {
    const { verifyOtp } = useAuth();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(59);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) value = value[value.length - 1];
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await verifyOtp(otp.join(''));
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#d4af35]/5 blur-[150px] pointer-events-none" />

            <div className="w-full max-w-[450px] z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af35]/10 mb-8 border border-[#d4af35]/20">
                    <KeyRound className="text-[#d4af35] w-10 h-10" />
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-3">
                    Security Check
                </h1>
                <p className="text-slate-500 mb-10 max-w-[320px] mx-auto text-sm font-medium">
                    We've sent a 6-digit verification code to your registered device.
                </p>

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
                                    className="w-12 h-16 bg-slate-50 border border-slate-200 rounded-xl text-center text-2xl font-bold text-slate-900 focus:border-[#d4af35] focus:ring-1 focus:ring-[#d4af35] outline-none transition-all"
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            disabled={otp.some(d => !d)}
                            className="w-full gold-gradient text-black font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(212,175,53,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,53,0.4)] disabled:opacity-50 disabled:shadow-none transition-all group"
                        >
                            <div className="flex items-center justify-center gap-2">
                                Verify & Continue
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <p className="text-slate-500 text-sm mb-4">Didn't receive code?</p>
                        <button
                            className={cn(
                                "flex items-center gap-2 mx-auto text-sm font-medium transition-all",
                                timer > 0 ? "text-slate-300 cursor-not-allowed" : "text-[#d4af35] hover:underline"
                            )}
                            disabled={timer > 0}
                        >
                            <RefreshCw className={cn("w-4 h-4", timer > 0 && "animate-spin-slow")} />
                            {timer > 0 ? `Resend in ${timer}s` : "Resend New Code"}
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => window.history.back()}
                    className="mt-10 text-slate-400 hover:text-slate-900 text-sm font-medium transition-colors"
                >
                    Use a different method
                </button>
            </div>
        </div>
    );
}
