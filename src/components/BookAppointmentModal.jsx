"use client";

import React, { useState } from "react";
import { STORE_INFO } from "../data/jewelryData";
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  MapPin
} from "lucide-react";

export default function BookAppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    timeSlot: "11:30 AM - 01:00 PM",
    interest: "Bridal Jewellery & Trousseau",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Prepare WhatsApp message
    const msg = `*VIP Store Appointment Booking - J. Lalchand Saraf*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Date:* ${formData.date || "Upcoming weekend"}\n` +
      `⏰ *Time Slot:* ${formData.timeSlot}\n` +
      `💎 *Consultation:* ${formData.interest}\n` +
      `📝 *Notes:* ${formData.notes || "Looking for custom designs"}\n\n` +
      `Please confirm my VIP appointment at your Ratnagiri flagship store.`;

    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#DFBA54]/40 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0D1624] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DFBA54]/20 text-[#DFBA54] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> VIP In-Store Experience
          </div>
          <h3 className="text-2xl font-serif-luxury font-bold text-[#F3E5AB]">
            Book a Personal Consultation
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Enjoy dedicated lounge seating, bridal trial, and master karigar guidance at our Ratnagiri flagship store.
          </p>
        </div>

        {/* Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif-luxury font-bold text-gray-900">
              Appointment Request Sent!
            </h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. Our jewellery concierge has received your request and will welcome you at our Ratnagiri store.
            </p>
            <div className="p-3 bg-[#FAF7F0] rounded-xl text-xs text-gray-700 border border-[#EBE4D5]">
              <div className="font-semibold text-[#8C6B1C]">{STORE_INFO.address}</div>
              <div className="text-[11px] text-gray-500 mt-1">Phone: {STORE_INFO.phone}</div>
            </div>
            <button
              onClick={() => { setIsSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-full bg-[#0D1624] text-[#F3E5AB] text-xs font-bold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Shraddha Patil"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F0] border border-[#E0D7C5] rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F0] border border-[#E0D7C5] rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-[#FAF7F0] border border-[#E0D7C5] rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                  Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full py-2.5 px-3 bg-[#FAF7F0] border border-[#E0D7C5] rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="10:30 AM - 12:00 PM">10:30 AM - 12:00 PM</option>
                  <option value="12:00 PM - 02:30 PM">12:00 PM - 02:30 PM</option>
                  <option value="03:00 PM - 05:30 PM">03:00 PM - 05:30 PM</option>
                  <option value="05:30 PM - 08:30 PM">05:30 PM - 08:30 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Jewellery Interest
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full py-2.5 px-3 bg-[#FAF7F0] border border-[#E0D7C5] rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Bridal Jewellery & Trousseau">Royal Bridal Jewellery & Trousseau</option>
                <option value="Maharashtrian Kolhapuri Saaj & Thushi">Maharashtrian Kolhapuri Saaj & Thushi</option>
                <option value="Certified Diamond Solitaires">Certified Diamond Solitaires & Rings</option>
                <option value="Gold Exchange & Old Gold Valuation">Gold Exchange & Old Gold Valuation</option>
                <option value="Custom Karigar Design">Custom Karigar Bespoke Design</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm & Book on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
