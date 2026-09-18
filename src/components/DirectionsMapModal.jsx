"use client";

import React from "react";
import { STORE_INFO } from "../data/jewelryData";
import { 
  X, 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink,
  Car,
  Compass
} from "lucide-react";

export default function DirectionsMapModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DFBA54]/40 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0D1624] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DFBA54]/20 text-[#DFBA54] text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" /> Store Locator
          </div>
          <h3 className="text-2xl font-serif-luxury font-bold text-[#F3E5AB]">
            Visit J. Lalchand Saraf, Ratnagiri
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Located in the heart of Ratnagiri city with valet & dedicated customer parking.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Map Preview Embed / Visual */}
          <div className="relative w-full h-64 bg-[#EBE4D5] rounded-2xl overflow-hidden border border-[#D8CDBC]">
            <iframe
              title="J Lalchand Saraf Ratnagiri Location"
              src="https://maps.google.com/maps?q=J+Lalchand+Saraf+Ratnagiri+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Location Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E9E0CD] space-y-1.5">
              <div className="font-bold text-gray-900 flex items-center gap-1.5 text-sm">
                <MapPin className="w-4 h-4 text-[#B38728]" /> Full Address
              </div>
              <p className="text-gray-700 leading-relaxed">
                {STORE_INFO.address}
              </p>
              <div className="text-[11px] text-[#8C6B1C] font-semibold pt-1">
                Opposite Janata Bank, Police Head Quarters Lane
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E9E0CD] space-y-2">
              <div className="font-bold text-gray-900 flex items-center gap-1.5 text-sm">
                <Compass className="w-4 h-4 text-[#B38728]" /> Quick Landmarks
              </div>
              <div className="text-gray-600 space-y-1">
                <div>• Plus Code: <strong>{STORE_INFO.plusCode}</strong></div>
                <div>• Ratnagiri Railway Station: <strong>~12 mins</strong></div>
                <div>• Bus Stand: <strong>~5 mins</strong></div>
                <div>• Open Hours: <strong>{STORE_INFO.timing}</strong></div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#0D1624] text-[#F3E5AB] hover:bg-[#1C283C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
            >
              <Navigation className="w-4 h-4 text-[#DFBA54]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="py-3 px-4 rounded-xl bg-white border border-[#D4AF37] text-[#8C6B1C] hover:bg-[#FFF9E6] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition"
            >
              <Phone className="w-4 h-4 text-[#B38728]" />
              <span>Call For Directions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
