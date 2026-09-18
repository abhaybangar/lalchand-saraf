"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Gem } from "lucide-react";

export default function CuratedKaratFilter({ onFilterSelect }) {
  const [activeTab, setActiveTab] = useState("karat"); // 'karat' or 'occasion'

  const karatCards = [
    {
      badge: "18KT",
      title: "18KT Fine Jewellery",
      marathi: "१८ कॅरेट डायमंड",
      purity: "75% Pure Gold + Diamonds",
      desc: "Chic, durable & modern designs featuring certified IGI natural diamonds for everyday sophistication.",
      filterKey: "karat",
      filterVal: "18KT"
    },
    {
      badge: "20KT",
      title: "20KT Antique & Heritage",
      marathi: "२० कॅरेट पारंपारिक",
      purity: "83.3% Pure Gold",
      desc: "Traditional handcrafted heirloom pieces with deep cultural motifs and rich golden warmth.",
      filterKey: "karat",
      filterVal: "20KT"
    },
    {
      badge: "22KT",
      title: "22KT 916 BIS Hallmark",
      marathi: "२२ कॅरेट ९१६ हॉलमार्क",
      purity: "91.6% Pure Gold",
      desc: "The quintessential Indian bridal gold standard with Government BIS Hallmark stamp of trust.",
      filterKey: "karat",
      filterVal: "22KT"
    },
    {
      badge: "24KT",
      title: "24KT 999.9 Investment Gold",
      marathi: "२४ कॅरेट शुद्ध सुवर्ण",
      purity: "99.99% Ultra-Pure Gold",
      desc: "Government certified tamper-proof gold bars & auspicious Laxmi coins with zero making loss.",
      filterKey: "karat",
      filterVal: "24KT"
    }
  ];

  const occasionCards = [
    {
      badge: "BRIDAL",
      title: "Royal Bridal Trousseau",
      marathi: "शाही विवाह संग्रह",
      purity: "Chokers • Kolhapuri Saaj • Tode",
      desc: "Magnificent bridal sets, uncut polki, kundan, and traditional Maharashtrian ornaments.",
      filterKey: "occasion",
      filterVal: "Bridal"
    },
    {
      badge: "DAILY",
      title: "Elevated Daily Wear",
      marathi: "दैनंदिन फॅशन",
      purity: "Lightweight • Studs • Pendants",
      desc: "Comfortable, featherlight gold and diamond essentials designed for daily elegance.",
      filterKey: "occasion",
      filterVal: "Daily Wear"
    },
    {
      badge: "FESTIVE",
      title: "Festive & Cultural Pride",
      marathi: "सण आणि उत्सव",
      purity: "Thushi • Bangles • Mangalsutra",
      desc: "Celebrate Gudi Padwa, Diwali, and Akshay Tritiya with authentic Kokan craft.",
      filterKey: "occasion",
      filterVal: "Festive"
    },
    {
      badge: "GIFTING",
      title: "Auspicious Gifting",
      marathi: "शुभ भेटवस्तू",
      purity: "Gold Coins • Silver Articles",
      desc: "Blessed silver pooja thalis, baby kadas, and 24KT gold coins for milestone moments.",
      filterKey: "occasion",
      filterVal: "Gifting"
    }
  ];

  const items = activeTab === "karat" ? karatCards : occasionCards;

  const handleCardClick = (key, val) => {
    if (onFilterSelect) {
      onFilterSelect(key, val);
    }
    const catalogElem = document.getElementById("catalog");
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#F8F5EE] border-t border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#B38728] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HANDPICKED SELECTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1C1917] tracking-tight">
            Explore Curated Categories
          </h2>

          {/* Toggle Buttons */}
          <div className="mt-6 inline-flex p-1.5 rounded-full bg-[#EFE9DC] border border-[#DDD3BF]">
            <button
              onClick={() => setActiveTab("karat")}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "karat"
                  ? "bg-[#0D1624] text-[#F3E5AB] shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Shop By Karat
            </button>
            <button
              onClick={() => setActiveTab("occasion")}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "occasion"
                  ? "bg-[#0D1624] text-[#F3E5AB] shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Shop By Occasion
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E9E0CD] hover:border-[#DFBA54] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF8E7] text-[#996515] border border-[#DFBA54]/40">
                    {item.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#DFBA54]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif-luxury font-bold text-[#1C1917] group-hover:text-[#AA771C] transition-colors">
                  {item.title}
                </h3>
                <div className="text-[11px] font-semibold text-[#8C6B1C] mt-0.5">
                  {item.marathi}
                </div>

                <div className="text-xs font-medium text-gray-500 mt-2 bg-[#FAF7F0] p-2 rounded-lg border border-[#EDE4D5]">
                  {item.purity}
                </div>

                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-[#F2EDE2]">
                <button
                  onClick={() => handleCardClick(item.filterKey, item.filterVal)}
                  className="w-full py-2.5 rounded-xl bg-[#0D1624] text-[#F3E5AB] group-hover:bg-[#DFBA54] group-hover:text-[#0D1624] text-xs font-bold uppercase tracking-wider transition duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Browse Shop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
