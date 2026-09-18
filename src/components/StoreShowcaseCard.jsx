"use client";

import React from "react";
import { STORE_INFO } from "../data/jewelryData";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building2
} from "lucide-react";

export default function StoreShowcaseCard({ onOpenDirections }) {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello J. Lalchand Saraf, Ratnagiri. I am interested in visiting your store and exploring your gold & diamond jewellery collection."
  )}`;

  return (
    <section id="store-showcase" className="py-12 sm:py-16 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flagship Store Card Container */}
        <div className="bg-white rounded-2xl border border-[#E9E1D0] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Store Details & Action Buttons */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Rating Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#DFBA54]/50">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#996515]">
                    FLAGSHIP STORE
                  </span>
                  <div className="flex items-center gap-1 text-[#DFBA54]">
                    <Star className="w-3.5 h-3.5 fill-[#DFBA54]" />
                    <span className="text-xs font-bold text-gray-900">{STORE_INFO.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({STORE_INFO.reviewsCount.toLocaleString()} Google reviews)
                  </span>
                </div>

                {/* Store Title */}
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-[#1C1917] tracking-tight">
                    {STORE_INFO.name}
                  </h2>
                  <p className="text-base sm:text-lg text-[#8C6B1C] font-semibold mt-1 flex items-center gap-2">
                    <span>{STORE_INFO.marathiName}</span>
                    <span className="text-xs font-normal text-gray-500">• Ratnagiri, Maharashtra</span>
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 text-sm text-gray-700 pt-1">
                  <MapPin className="w-5 h-5 text-[#B38728] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 leading-snug">
                      {STORE_INFO.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Landmark: Opposite Janata Bank, Near Police Head Quarters (Plus Code: {STORE_INFO.plusCode})
                    </p>
                  </div>
                </div>

                {/* Timings & Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F5EE] border border-[#ECE5D8]">
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#B38728]" />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-500 font-semibold uppercase">Open Hours</div>
                      <div className="text-xs font-bold text-gray-900">{STORE_INFO.timing}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F5EE] border border-[#ECE5D8]">
                    <Phone className="w-4 h-4 text-[#B38728]" />
                    <div>
                      <div className="text-[11px] text-gray-500 font-semibold uppercase">Direct Helpline</div>
                      <a 
                        href={`tel:${STORE_INFO.phoneRaw}`} 
                        className="text-xs font-bold text-gray-900 hover:text-[#B38728] transition"
                      >
                        {STORE_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Available Store Services */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Available In-Store & Remote Services:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {STORE_INFO.services.map((service, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF7F0] border border-[#E7DECD] text-[11px] font-medium text-gray-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#B38728]" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-[#EAE3D2] grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Directions Button */}
                <button
                  onClick={onOpenDirections}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0D1624] text-[#F3E5AB] hover:bg-[#1A283F] font-semibold text-xs uppercase tracking-wider transition shadow-md group"
                >
                  <Navigation className="w-4 h-4 text-[#DFBA54] group-hover:rotate-45 transition-transform" />
                  <span>Get Directions</span>
                </button>

                {/* Call Store Button */}
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-[#D4AF37] text-[#8C6B1C] hover:bg-[#FFF9E6] font-semibold text-xs uppercase tracking-wider transition shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#B38728]" />
                  <span>Call Store</span>
                </a>

                {/* WhatsApp Enquiry Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Column: Luxury Jewellery Box Presentation */}
            <div className="lg:col-span-5 relative bg-[#121824] min-h-[320px] lg:min-h-full overflow-hidden flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(13, 22, 36, 0.8) 0%, rgba(13, 22, 36, 0.2) 60%, rgba(13, 22, 36, 0.4) 100%), url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop')`
                }}
              />

              {/* Gold Crest Overlay */}
              <div className="relative z-10 text-center p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-[#DFBA54]/40 max-w-xs mx-4 text-white shadow-2xl">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#DFBA54]" />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[#F3E5AB] font-bold mb-1">
                  100% BIS HALLMARK CERTIFIED
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
                  Ratnagiri's Pride Since 1994
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Crafting pure gold ornaments, traditional Kolhapuri Saaj, and certified natural diamonds for generations.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-center gap-1 text-[11px] text-[#DFBA54] font-semibold">
                  <ShieldCheck className="w-4 h-4" /> 100% Purity & Buyback Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
