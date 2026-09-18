"use client";

import React, { useState, useEffect } from "react";
import { HERO_SLIDES } from "../data/jewelryData";
import { ChevronLeft, ChevronRight, Sparkles, Calendar, ArrowRight } from "lucide-react";

export default function HeroCarousel({ onExploreClick, onOpenAppointment }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex items-center bg-[#0B0F17] text-white overflow-hidden">
      {/* Background Slides with Smooth Fade & Cinematic Position */}
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(9, 13, 21, 0.94) 0%, rgba(9, 13, 21, 0.78) 40%, rgba(9, 13, 21, 0.25) 75%, rgba(9, 13, 21, 0.6) 100%), url('${s.bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
      ))}

      {/* Ambient Gold Halo Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C59B27]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFBA54]/15 border border-[#DFBA54]/40 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBA54] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#F3E5AB] uppercase">
              {slide.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif-luxury font-bold tracking-tight text-white leading-[1.12]">
            {slide.title}
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#DCD4C5] font-light leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="gold-btn px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 shadow-xl hover:scale-105 transition-all"
            >
              <span>{slide.cta1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAppointment}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F3E5AB] border border-[#DFBA54]/60 hover:bg-[#DFBA54]/15 hover:border-[#DFBA54] transition duration-300 backdrop-blur-md flex items-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#DFBA54]" />
              <span>{slide.cta2}</span>
            </button>
          </div>

          {/* Trust Badges Bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-[#CFC4B2]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DFBA54] shadow-[0_0_8px_#DFBA54]" />
              <span className="font-medium">100% 916 BIS Hallmark</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DFBA54] shadow-[0_0_8px_#DFBA54]" />
              <span className="font-medium">Transparent Electronic Weighing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DFBA54] shadow-[0_0_8px_#DFBA54]" />
              <span className="font-medium">IGI Certified Diamonds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/70 border border-white/20 backdrop-blur-sm transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/70 border border-white/20 backdrop-blur-sm transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-8 bg-[#DFBA54]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
