"use client";

import React from "react";
import { CATEGORIES } from "../data/jewelryData";
import { ChevronRight, Sparkles } from "lucide-react";

export default function CategorySparkleGrid({ onSelectCategory }) {
  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const catalogElem = document.getElementById("catalog");
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#FAF7F0] border-t border-[#EDE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#B38728] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER THE ARTISTRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1C1917] tracking-tight">
            How would you like to Sparkle?
          </h2>
          <div className="w-16 h-0.5 bg-[#DFBA54] mx-auto mt-3 rounded-full" />
        </div>

        {/* 6 Grid Cards matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E8DFC9] hover:border-[#DFBA54] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-[#F5EFE6]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Designs Count Pill */}
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-gray-800 px-2.5 py-1 rounded-full shadow-sm">
                  {cat.count}
                </span>
              </div>

              {/* Card Footer Content */}
              <div className="p-6 text-center flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#1C1917] group-hover:text-[#B38728] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-light italic">
                    "{cat.subtitle}"
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#F2ECE1] flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider text-[#996515] group-hover:text-[#DFBA54] transition-colors">
                  <span>Browse Designs</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
