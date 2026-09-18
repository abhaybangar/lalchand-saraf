"use client";

import React, { useState } from "react";
import { STORE_INFO, LIVE_RATES } from "../data/jewelryData";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  Check, 
  ExternalLink,
  Heart
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function LuxuryFooter({ onOpenCalculator, onOpenAppointment, onOpenDirections }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#090D15] text-[#C5BDB0] pt-16 pb-8 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Legacy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F3E5AB] tracking-wider">
                J. LALCHAND SARAF
              </span>
              <span className="text-xs text-[#DFBA54] font-semibold tracking-widest uppercase mt-0.5">
                {STORE_INFO.marathiName} • RATNAGIRI
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-light pr-4">
              Ratnagiri's premier destination for pure 22KT & 24KT BIS Hallmarked gold, traditional Maharashtrian bridal ornaments, certified natural diamonds, and pure silver articles since 1994.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DFBA54] hover:text-[#0D1624] flex items-center justify-center transition"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello J. Lalchand Saraf Jewellers")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DFBA54] hover:text-[#0D1624] flex items-center justify-center transition"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalog" className="hover:text-[#DFBA54] transition block">
                  All Collections
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#DFBA54] transition block">
                  Bridal Harams & Chokers
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#DFBA54] transition block">
                  Kolhapuri Saaj & Thushi
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#DFBA54] transition block">
                  Diamond Solitaire Rings
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#DFBA54] transition block">
                  Gold Kadas & Patlya
                </a>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#DFBA54] transition text-left">
                  Live Gold Rate Calc
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Flagship Store Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wider">
              Ratnagiri Store
            </h4>
            <div className="space-y-2.5 text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFBA54] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {STORE_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#DFBA54] shrink-0" />
                <span>{STORE_INFO.timing}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFBA54] shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className="hover:text-[#DFBA54] font-semibold text-white">
                  {STORE_INFO.phone}
                </a>
              </div>

              <button
                onClick={onOpenDirections}
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#DFBA54] hover:underline"
              >
                <span>View on Interactive Map</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Col 4: VIP Newsletter & Rate Alerts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wider">
              Exclusive VIP Club
            </h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Subscribe for daily WhatsApp gold rate updates and private invitations to our festive jewellery exhibitions.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you! You are subscribed to VIP updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-white/20 focus-within:border-[#DFBA54]">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email / phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white/10 text-white placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#DFBA54] text-[#0D1624] px-3.5 py-2 font-bold text-xs hover:bg-[#F3E5AB] transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 flex items-center gap-2 text-[10px] text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#DFBA54]" />
              <span>100% Certified Hallmark Jewellers • Ratnagiri</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Hallmark Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong>J. Lalchand Saraf Jewellers</strong> (जे. लालचंद सराफ). All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>100% BIS Hallmarked</span>
            <span>•</span>
            <span>IGI & SGL Certified</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#DFBA54]">
              Crafted with <Heart className="w-3 h-3 fill-[#DFBA54]" /> in Ratnagiri
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
