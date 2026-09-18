"use client";

import React from "react";
import { STORE_INFO, INSTAGRAM_POSTS } from "../data/jewelryData";
import { 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Sparkles 
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

export default function InstagramFeedSection() {
  return (
    <section className="py-16 bg-[#FAF7F0] border-t border-[#EDE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#B38728] mb-1">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>STAY CONNECTED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1C1917] tracking-tight">
              Follow Our Journey on Instagram
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Explore latest daily arrivals, bridal shoot reels & behind-the-scenes karigar craft.
            </p>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{STORE_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Image Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md bg-black block border border-[#EAE1D0]"
            >
              <img
                src={post.imageUrl}
                alt="Instagram jewellery post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              
              {/* Dark Hover Overlay with Likes/Comments and Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <InstagramIcon className="w-4 h-4 text-[#F3E5AB]" />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs line-clamp-3 text-gray-200 font-light leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-semibold text-[#F3E5AB]">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#F3E5AB]" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
