"use client";

import React from "react";
import { STORE_INFO, LIVE_RATES } from "../data/jewelryData";
import { 
  X, 
  Heart, 
  MessageCircle, 
  ShieldCheck, 
  Scale, 
  Sparkles, 
  Check, 
  MapPin, 
  Clock, 
  Share2 
} from "lucide-react";

export default function ProductQuickViewModal({ 
  product, 
  onClose, 
  isWishlisted, 
  onToggleWishlist 
}) {
  if (!product) return null;

  const whatsappMsg = `Hello J. Lalchand Saraf, I am interested in ordering/viewing "${product.name}" (${product.karat}, Net Weight: ${product.netWeight}g, Approx: ₹${product.estimatedPrice.toLocaleString()}). Please confirm availability at your Ratnagiri store.`;
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#DFBA54]/40 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-black shadow-md transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image */}
          <div className="relative bg-[#F8F5EE] min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 bg-[#0D1624] text-[#F3E5AB] text-xs font-bold uppercase rounded-lg shadow-md">
                {product.badge}
              </span>
              <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#8C6B1C] text-xs font-bold rounded-lg border border-[#DFBA54]/40 shadow-sm">
                {product.purity}
              </span>
            </div>
          </div>

          {/* Right Column: Specs & Valuation */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#B38728]">
                  {product.karat} BIS Hallmarked Jewellery
                </div>
                <h2 className="text-2xl font-serif-luxury font-bold text-gray-900 mt-1">
                  {product.name}
                </h2>
                <div className="text-sm font-semibold text-[#8C6B1C] mt-0.5">
                  {product.marathiName}
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Weight & Purity Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-[#FBF9F5] border border-[#ECE5D8] text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Gross Weight</span>
                  <span className="font-bold text-gray-900">{product.grossWeight} Grams</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Net Gold Weight</span>
                  <span className="font-bold text-gray-900">{product.netWeight} Grams</span>
                </div>
                {product.diamondWeight && (
                  <div className="col-span-2">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Diamond Details</span>
                    <span className="font-bold text-[#8C6B1C]">{product.diamondWeight}</span>
                  </div>
                )}
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Purity Guarantee</span>
                  <span className="font-bold text-gray-900">{product.purity}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Making Charges</span>
                  <span className="font-bold text-emerald-700">{product.makingChargePercent} (Direct Karigar)</span>
                </div>
              </div>

              {/* Transparent Price Estimation Breakdown */}
              <div className="p-4 rounded-2xl bg-[#FFF9E6] border border-[#DFBA54]/40 space-y-2 text-xs">
                <div className="font-bold uppercase tracking-wider text-[#785912] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFBA54]" /> Transparent Store Estimation
                </div>
                <div className="space-y-1 text-gray-700">
                  <div className="flex justify-between">
                    <span>Authenticity Standard</span>
                    <span className="font-medium">100% BIS Hallmarked with HUID</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Making Charge</span>
                    <span className="font-medium text-emerald-700">{product.makingChargePercent}</span>
                  </div>
                  <div className="pt-2 border-t border-[#DFBA54]/30 flex justify-between items-baseline text-sm">
                    <span className="font-bold text-gray-900">Approximate Value:</span>
                    <span className="font-serif-luxury text-xl font-bold text-[#8C6B1C]">
                      ₹{product.estimatedPrice.toLocaleString()}*
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 italic mt-1">
                  *Final price is confirmed on the exact electronic weighing machine at our Ratnagiri counter.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-3 text-[11px] text-gray-600">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#B38728]" /> 100% BIS Hallmarked
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-4 h-4 text-[#B38728]" /> In-Store Pickup Today
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-4 border-t border-[#EDE4D5]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider border transition flex items-center justify-center gap-2 shadow-sm ${
                    isWishlisted
                      ? "bg-rose-50 border-rose-300 text-rose-600"
                      : "bg-white border-[#D4AF37] text-[#8C6B1C] hover:bg-[#FFF9E6]"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-600" : ""}`} />
                  <span>{isWishlisted ? "Saved to Wishlist" : "Save to Wishlist"}</span>
                </button>
              </div>

              <div className="text-center">
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="text-xs font-semibold text-gray-600 hover:text-[#B38728] transition"
                >
                  Prefer to call? Speak directly with our Ratnagiri jewellery expert at <strong>{STORE_INFO.phone}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
