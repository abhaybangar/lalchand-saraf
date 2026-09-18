"use client";

import React from "react";
import { STORE_INFO } from "../data/jewelryData";
import { 
  X, 
  Trash2, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  Scale, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlist, 
  onRemoveItem, 
  onClearWishlist,
  onQuickView
}) {
  if (!isOpen) return null;

  const totalEstimatedPrice = wishlist.reduce((sum, item) => sum + item.estimatedPrice, 0);
  const totalWeight = wishlist.reduce((sum, item) => sum + item.grossWeight, 0).toFixed(1);

  const handleSendWishlistToWhatsApp = () => {
    let msg = `*My J. Lalchand Saraf Wishlist Enquiry*\n\n`;
    wishlist.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}* (${item.karat}, ${item.grossWeight}g) - Approx: ₹${item.estimatedPrice.toLocaleString()}\n`;
    });
    msg += `\n*Total Items:* ${wishlist.length}\n`;
    msg += `*Total Gold Weight:* ~${totalWeight}g\n`;
    msg += `*Total Estimated Amount:* ~₹${totalEstimatedPrice.toLocaleString()}\n\n`;
    msg += `Please let me know if these are available at your Ratnagiri flagship store.`;

    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFAF6] shadow-2xl border-l border-[#E5DCcb] flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 bg-[#0D1624] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#DFBA54] fill-[#DFBA54]" />
              <div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#F3E5AB]">
                  My Saved Jewellery
                </h3>
                <p className="text-[11px] text-gray-300">
                  {wishlist.length} item{wishlist.length === 1 ? "" : "s"} shortlisted
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF7F0] border border-[#E9E0CD] flex items-center justify-center text-gray-400">
                  <Heart className="w-8 h-8 text-gray-300" />
                </div>
                <h4 className="text-base font-serif-luxury font-bold text-gray-800">
                  Your Wishlist is Empty
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Click the heart icon on any design in our collection to save your favorite pieces and request customized quotes.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-full bg-[#0D1624] text-[#F3E5AB] text-xs font-bold uppercase tracking-wider"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white border border-[#EAE1D0] flex gap-3 items-center justify-between shadow-sm hover:border-[#DFBA54] transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border border-gray-100 shrink-0 cursor-pointer"
                      onClick={() => { onQuickView(item); onClose(); }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-[#8C6B1C] uppercase tracking-wider">
                        {item.karat} • {item.grossWeight}g
                      </div>
                      <h5 
                        className="text-xs font-bold text-gray-900 truncate cursor-pointer hover:text-[#B38728]"
                        onClick={() => { onQuickView(item); onClose(); }}
                      >
                        {item.name}
                      </h5>
                      <div className="text-xs font-bold text-gray-900 mt-1">
                        ₹{item.estimatedPrice.toLocaleString()}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onClearWishlist}
                    className="text-[11px] text-gray-400 hover:text-red-500 font-semibold"
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Summary & WhatsApp Order CTA */}
          {wishlist.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EAE1D0] space-y-4">
              <div className="p-3.5 rounded-xl bg-[#FFF9E6] border border-[#DFBA54]/40 space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-700">
                  <span>Total Items Shortlisted:</span>
                  <span className="font-semibold">{wishlist.length}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Approx Gold Weight:</span>
                  <span className="font-semibold">~{totalWeight} Grams</span>
                </div>
                <div className="pt-1.5 border-t border-[#DFBA54]/30 flex justify-between items-baseline">
                  <span className="font-bold text-gray-900 text-sm">Estimated Total:</span>
                  <span className="font-serif-luxury text-xl font-bold text-[#8C6B1C]">
                    ₹{totalEstimatedPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSendWishlistToWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Wishlist To Store WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B38728]" />
                <span>Direct Karigar Quote • 100% BIS Hallmarked Purity</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
