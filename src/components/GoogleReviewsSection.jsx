"use client";

import React, { useState } from "react";
import { STORE_INFO, REVIEWS } from "../data/jewelryData";
import { 
  Star, 
  Sparkles, 
  CheckCircle2, 
  Quote, 
  ThumbsUp, 
  Share2, 
  ExternalLink,
  MessageSquare,
  BadgeCheck
} from "lucide-react";

export default function GoogleReviewsSection() {
  const [activeTag, setActiveTag] = useState("all");

  const tags = [
    { id: "all", label: "All Reviews", count: "1,607" },
    { id: "gold designs", label: "Gold Designs", count: "15" },
    { id: "design", label: "Unique Design", count: "258" },
    { id: "mangalsutra", label: "Mangalsutra", count: "4" },
    { id: "buying gold", label: "Buying Gold", count: "9" }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#FBF9F5] border-t border-[#EDE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#B38728] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>30+ YEARS OF CUSTOMER TRUST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#1C1917] tracking-tight">
            Loved by 1,600+ Ratnagiri Families
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Real authentic experiences from our verified patrons who make us their lifetime jewellery partner.
          </p>
        </div>

        {/* Big Google Rating Summary Card (with Gemini AI Summary) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EAE0CD] shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Rating Score */}
            <div className="lg:col-span-4 text-center lg:text-left lg:border-r lg:border-[#EAE0CD] lg:pr-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-serif-luxury font-extrabold text-[#1C1917]">
                  4.9
                </span>
                <div>
                  <div className="flex items-center gap-1 text-[#DFBA54]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#DFBA54]" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mt-1">
                    Based on <strong>1,607 Google Reviews</strong>
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="mt-4 space-y-1 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span>5 ★</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#DFBA54] rounded-full" style={{ width: "94%" }} />
                  </div>
                  <span>94%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>4 ★</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#DFBA54]" style={{ width: "5%" }} />
                  </div>
                  <span>5%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>3 ★</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#DFBA54]" style={{ width: "1%" }} />
                  </div>
                  <span>1%</span>
                </div>
              </div>
            </div>

            {/* Gemini AI Summarized Box */}
            <div className="lg:col-span-8 bg-[#FFFBF0] rounded-2xl p-5 sm:p-6 border border-[#DFBA54]/40 relative">
              <div className="flex items-center justify-between mb-2.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6B1C] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#DFBA54]" />
                  <span>Google AI Review Summary</span>
                </div>
                <span className="text-[10px] bg-[#DFBA54]/20 text-[#8C6B1C] font-bold px-2 py-0.5 rounded">
                  +357 Mentions
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                "People say this jewelry store offers a wide variety of beautiful and unique designs, including traditional and modern collections. They also highlight the excellent service, with staff described as helpful, patient, and cooperative. Visitors appreciate the reasonable pricing and transparent transactions, ensuring a trustworthy shopping experience."
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                <BadgeCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified by Google Maps Local Guides & Ratnagiri Buyers</span>
              </div>
            </div>
          </div>

          {/* Popular Tag Filters */}
          <div className="mt-6 pt-6 border-t border-[#F0E9DC] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2">
              Popular Topics:
            </span>
            {tags.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTag(t.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
                  activeTag === t.id
                    ? "bg-[#0D1624] text-[#F3E5AB] shadow-sm"
                    : "bg-[#F8F5EE] text-gray-700 hover:bg-[#EFE9DC] border border-[#E7DECD]"
                }`}
              >
                <span>#{t.label}</span>
                <span className="text-[10px] opacity-75 font-normal">({t.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Real Customer Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE1D0] hover:border-[#DFBA54] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#0D1624] text-[#F3E5AB] font-serif-luxury font-bold text-base flex items-center justify-center border border-[#DFBA54]">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                        {rev.name}
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </h4>
                      <p className="text-[11px] text-gray-500">{rev.badge}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Star Rating & Highlight Pill */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-0.5 text-[#DFBA54]">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DFBA54]" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF9E6] text-[#8C6B1C] border border-[#DFBA54]/30">
                    {rev.highlight}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-[#F2EDE2] flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5 text-[#8C6B1C] font-semibold">
                  <ThumbsUp className="w-3.5 h-3.5" /> Verified Purchase
                </span>
                <span className="text-[11px] text-gray-400">Google Verified Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <div className="mt-10 text-center">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D1624] text-[#F3E5AB] hover:bg-[#1A283F] text-xs font-bold uppercase tracking-wider transition shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-[#DFBA54]" />
            <span>Write a Review on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>
        </div>
      </div>
    </section>
  );
}
