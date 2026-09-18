"use client";

import React from "react";
import { 
  ShieldCheck, 
  Scale, 
  Sparkles, 
  Gem, 
  Award, 
  RefreshCw, 
  HeartHandshake,
  Clock
} from "lucide-react";

export default function TrustHeritageSection({ onOpenCalculator }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% BIS Hallmarked Purity",
      desc: "Every gold ornament carries official Government BIS Hallmarking with 6-digit HUID code laser engraving."
    },
    {
      icon: Scale,
      title: "Transparent Electronic Weighing",
      desc: "Live zero-tare gross & net weight verification right before your eyes. Clear separate billing for stones & gold."
    },
    {
      icon: Gem,
      title: "Certified Natural Diamonds",
      desc: "100% genuine conflict-free natural diamonds with international IGI & SGL authenticity certifications."
    },
    {
      icon: RefreshCw,
      title: "Lifetime Exchange & Buyback",
      desc: "Guaranteed transparent market-rate buyback & upgrade value on all gold and diamond jewellery purchased from us."
    }
  ];

  return (
    <section className="py-16 bg-[#0D1624] text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#DFBA54]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#DFBA54]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#DFBA54] mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>THE LALCHAND SARAF PLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#F3E5AB] tracking-tight">
            Why Ratnagiri Trusts J. Lalchand Saraf
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Since 1994, our four pillars of integrity and pure craftsmanship have defined luxury jewellery in Kokan.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DFBA54]/60 hover:bg-white/10 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#DFBA54]/15 border border-[#DFBA54]/40 flex items-center justify-center text-[#DFBA54] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif-luxury font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1C283C] to-[#121A28] border border-[#DFBA54]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#DFBA54]/20 border border-[#DFBA54] flex items-center justify-center text-[#DFBA54] shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif-luxury font-bold text-[#F3E5AB]">
                Have Custom Jewellery in Mind?
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Our in-house master karigars bring your dream bridal designs and heirloom recreations to life.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCalculator}
            className="gold-btn px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg"
          >
            Calculate Gold Price Now
          </button>
        </div>
      </div>
    </section>
  );
}
