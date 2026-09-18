"use client";

import React, { useState } from "react";
import { STORE_INFO, LIVE_RATES } from "../data/jewelryData";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Heart, 
  Search, 
  Calculator, 
  Calendar, 
  Menu, 
  X,
  ShieldCheck,
  MessageCircle
} from "lucide-react";

export default function Navbar({ 
  onOpenAppointment, 
  onOpenWishlist, 
  wishlistCount = 0,
  onSearchChange,
  searchQuery = "",
  onSelectCategory
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleNavClick = (sectionId, categoryFilter = null) => {
    setMobileMenuOpen(false);
    if (categoryFilter && onSelectCategory) {
      onSelectCategory(categoryFilter);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF6]/95 backdrop-blur-md border-b border-[#EAE2D0] shadow-sm transition-all">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#0A0E17] text-[#EDE4D4] text-xs py-2 px-4 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none text-[11px]">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#DFBA54]/25 to-[#AA771C]/25 text-[#F3E5AB] font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest border border-[#DFBA54]/40 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#DFBA54]" /> Since 1994
            </span>
            <span className="text-[#F3E5AB] font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFBA54]" /> 100% BIS Hallmarked Pure Gold & Certified Diamonds
            </span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="text-gray-300 hidden sm:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#DFBA54]" /> Flagship Store: Ratnagiri, Maharashtra
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[11px] text-gray-300 font-medium">
            <span className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#DFBA54]" /> {STORE_INFO.timing}
            </span>
            <a 
              href={`tel:${STORE_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#DFBA54] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFBA54]" /> {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo & Royal Crest */}
          <div 
            onClick={() => handleNavClick("hero")}
            className="cursor-pointer group flex items-center gap-3 select-none"
          >
            {/* Ornate Gold Emblem Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D1624] to-[#1F2B3E] border border-[#DFBA54]/60 flex items-center justify-center text-[#DFBA54] shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl lg:text-[26px] font-serif-luxury font-bold tracking-[0.06em] text-[#141210] group-hover:text-[#996515] transition-colors">
                  J. LALCHAND SARAF
                </span>
                <span className="text-[9px] bg-gradient-to-r from-[#DFBA54] to-[#B38728] text-black font-extrabold px-1.5 py-0.5 rounded tracking-widest uppercase hidden sm:inline-block shadow-xs">
                  ESTD 1994
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6B6355] font-semibold">
                <span className="text-[#8C6B1C]">{STORE_INFO.marathiName}</span>
                <span>•</span>
                <span>RATNAGIRI FLAGSHIP</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[12px] font-bold uppercase tracking-[0.12em] text-[#2C2925]">
            <button 
              onClick={() => handleNavClick("catalog")} 
              className="relative py-1 hover:text-[#996515] transition group"
            >
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DFBA54] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "necklaces")} 
              className="relative py-1 hover:text-[#996515] transition group"
            >
              Bridal & Heritage
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DFBA54] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "earrings")} 
              className="relative py-1 hover:text-[#996515] transition group"
            >
              Earrings
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DFBA54] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "bangles")} 
              className="relative py-1 hover:text-[#996515] transition group"
            >
              Bangles & Kadas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DFBA54] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "rings")} 
              className="relative py-1 hover:text-[#996515] transition group"
            >
              Diamonds & Rings
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DFBA54] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => handleNavClick("store-showcase")} 
              className="relative py-1 hover:text-[#996515] transition group"
            >
              Store Info
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DFBA54] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => handleNavClick("reviews")} 
              className="relative py-1 hover:text-[#996515] transition group flex items-center gap-1.5"
            >
              Reviews <span className="text-[10px] bg-[#FFF8E7] text-[#996515] border border-[#DFBA54]/50 px-1.5 py-0.2 rounded-full font-bold">4.9★</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DFBA54] group-hover:w-full transition-all duration-300" />
            </button>
          </nav>

          {/* Right Action Icons & CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Input Box */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-white border border-[#DFBA54] rounded-full px-3 py-1.5 shadow-md">
                  <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search gold, necklace, ring..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="text-xs bg-transparent focus:outline-none w-36 sm:w-48 text-gray-800 font-medium"
                    autoFocus
                  />
                  <button 
                    onClick={() => { setShowSearchInput(false); onSearchChange(""); }}
                    className="text-gray-400 hover:text-gray-600 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2.5 rounded-full text-gray-700 hover:text-[#996515] hover:bg-[#F3ECE0] border border-transparent hover:border-[#E8DFCE] transition"
                  title="Search Jewellery"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Wishlist Button with Counter */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full text-gray-700 hover:text-[#996515] hover:bg-[#F3ECE0] border border-transparent hover:border-[#E8DFCE] transition"
              title="View Shortlisted Jewellery"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#DFBA54] to-[#AA771C] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* VIP Consultation CTA */}
            <button
              onClick={onOpenAppointment}
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#0D1624] text-[#F3E5AB] hover:bg-[#1A263B] border border-[#DFBA54]/40 transition shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#DFBA54]" />
              <span>Book VIP Visit</span>
            </button>

            {/* WhatsApp Quick CTA */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello J. Lalchand Saraf Jewellers, I would like to inquire about your jewellery designs.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full gold-btn shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-[#F3ECE0] transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAE3D2] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button 
              onClick={() => handleNavClick("catalog")}
              className="p-2.5 rounded bg-[#FCFAF6] border border-[#EAE3D2] text-left hover:border-[#D4AF37]"
            >
              ✨ All Collections
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "necklaces")}
              className="p-2.5 rounded bg-[#FCFAF6] border border-[#EAE3D2] text-left hover:border-[#D4AF37]"
            >
              👑 Bridal & Heritage
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "earrings")}
              className="p-2.5 rounded bg-[#FCFAF6] border border-[#EAE3D2] text-left hover:border-[#D4AF37]"
            >
              💎 Earrings & Studs
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "bangles")}
              className="p-2.5 rounded bg-[#FCFAF6] border border-[#EAE3D2] text-left hover:border-[#D4AF37]"
            >
              💫 Bangles & Patlya
            </button>
            <button 
              onClick={() => handleNavClick("catalog", "rings")}
              className="p-2.5 rounded bg-[#FCFAF6] border border-[#EAE3D2] text-left hover:border-[#D4AF37]"
            >
              💍 Diamond Rings
            </button>
            <button 
              onClick={() => handleNavClick("store-showcase")}
              className="p-2.5 rounded bg-[#FCFAF6] border border-[#EAE3D2] text-left hover:border-[#D4AF37]"
            >
              📍 Store Location
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1C1917] text-[#F3E5AB] text-xs font-bold"
            >
              <Calendar className="w-4 h-4 text-[#DFBA54]" /> Book VIP In-Store Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
