"use client";

import React, { useState } from "react";
import { LIVE_RATES, STORE_INFO } from "../data/jewelryData";
import { 
  X, 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  Info
} from "lucide-react";

export default function GoldRateCalculatorModal({ isOpen, onClose }) {
  const [metalType, setMetalType] = useState("22k"); // '24k', '22k', '18k', 'silver'
  const [weight, setWeight] = useState(10); // grams
  const [makingChargePct, setMakingChargePct] = useState(10); // percentage

  if (!isOpen) return null;

  const currentRate = metalType === "24k" 
    ? LIVE_RATES.gold24k 
    : metalType === "22k" 
      ? LIVE_RATES.gold22k 
      : metalType === "18k" 
        ? LIVE_RATES.gold18k 
        : LIVE_RATES.silver999;

  const baseGoldCost = Math.round(weight * currentRate);
  const makingCost = metalType === "silver" ? 0 : Math.round(baseGoldCost * (makingChargePct / 100));
  const gstCost = Math.round((baseGoldCost + makingCost) * 0.03);
  const totalCost = baseGoldCost + makingCost + gstCost;

  const getMetalTitle = () => {
    if (metalType === "24k") return "24KT Pure 999.9 Gold";
    if (metalType === "22k") return "22KT 916 BIS Hallmarked Gold";
    if (metalType === "18k") return "18KT 750 Diamond Gold";
    return "925 Pure Silver";
  };

  const whatsappMsg = `Hello J. Lalchand Saraf Jewellers, I calculated an estimate for ${weight}g of ${getMetalTitle()} (Approx: ₹${totalCost.toLocaleString()}). I would like to consult your Ratnagiri showroom.`;
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#DFBA54]/40 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0D1624] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DFBA54]/20 text-[#DFBA54] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" /> Live Rate Calculator
          </div>
          <h3 className="text-2xl font-serif-luxury font-bold text-[#F3E5AB]">
            Transparent Gold Rate Estimator
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Calculate fair & transparent jewellery prices based on today's official rates.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Metal Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
              Select Purity / Metal
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setMetalType("24k")}
                className={`p-2.5 rounded-xl text-xs font-bold border transition text-center ${
                  metalType === "24k"
                    ? "bg-[#0D1624] text-[#F3E5AB] border-[#0D1624] shadow-sm"
                    : "bg-[#FBF9F5] text-gray-700 border-[#E5DCcb] hover:border-[#DFBA54]"
                }`}
              >
                24KT Pure
                <div className="text-[10px] font-normal opacity-80">₹{LIVE_RATES.gold24k}/g</div>
              </button>

              <button
                type="button"
                onClick={() => setMetalType("22k")}
                className={`p-2.5 rounded-xl text-xs font-bold border transition text-center ${
                  metalType === "22k"
                    ? "bg-[#0D1624] text-[#F3E5AB] border-[#0D1624] shadow-sm"
                    : "bg-[#FBF9F5] text-gray-700 border-[#E5DCcb] hover:border-[#DFBA54]"
                }`}
              >
                22KT 916
                <div className="text-[10px] font-normal opacity-80">₹{LIVE_RATES.gold22k}/g</div>
              </button>

              <button
                type="button"
                onClick={() => setMetalType("18k")}
                className={`p-2.5 rounded-xl text-xs font-bold border transition text-center ${
                  metalType === "18k"
                    ? "bg-[#0D1624] text-[#F3E5AB] border-[#0D1624] shadow-sm"
                    : "bg-[#FBF9F5] text-gray-700 border-[#E5DCcb] hover:border-[#DFBA54]"
                }`}
              >
                18KT Diamond
                <div className="text-[10px] font-normal opacity-80">₹{LIVE_RATES.gold18k}/g</div>
              </button>

              <button
                type="button"
                onClick={() => setMetalType("silver")}
                className={`p-2.5 rounded-xl text-xs font-bold border transition text-center ${
                  metalType === "silver"
                    ? "bg-[#0D1624] text-[#F3E5AB] border-[#0D1624] shadow-sm"
                    : "bg-[#FBF9F5] text-gray-700 border-[#E5DCcb] hover:border-[#DFBA54]"
                }`}
              >
                Silver 999
                <div className="text-[10px] font-normal opacity-80">₹{LIVE_RATES.silver999}/g</div>
              </button>
            </div>
          </div>

          {/* Weight Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold uppercase tracking-wider text-gray-700">
                Jewellery Weight (in Grams)
              </label>
              <span className="font-bold text-[#8C6B1C] bg-[#FFF9E6] px-2.5 py-0.5 rounded border border-[#DFBA54]/40">
                {weight} Grams
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="0.5"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full accent-[#B38728] cursor-pointer"
            />
            <div className="flex gap-2">
              {[2, 5, 8, 10, 15, 25, 40, 50].map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWeight(w)}
                  className={`text-[10px] font-semibold py-1 px-2 rounded-md border ${
                    weight === w ? "bg-[#0D1624] text-[#F3E5AB]" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {w}g
                </button>
              ))}
            </div>
          </div>

          {/* Making Charge Percent */}
          {metalType !== "silver" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-gray-700">
                  Approx Making Charge
                </label>
                <span className="font-bold text-gray-800">{makingChargePct}%</span>
              </div>
              <input
                type="range"
                min="6"
                max="16"
                step="1"
                value={makingChargePct}
                onChange={(e) => setMakingChargePct(Number(e.target.value))}
                className="w-full accent-[#B38728] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>6% (Simple Chain/Coin)</span>
                <span>10% (Standard)</span>
                <span>16% (Intricate Bridal)</span>
              </div>
            </div>
          )}

          {/* Calculation Summary Box */}
          <div className="p-4 rounded-2xl bg-[#FFF9E6] border border-[#DFBA54]/40 space-y-2.5 text-xs">
            <div className="flex justify-between text-gray-700">
              <span>Pure Metal Value ({weight}g × ₹{currentRate}/g)</span>
              <span className="font-semibold">₹{baseGoldCost.toLocaleString()}</span>
            </div>
            {metalType !== "silver" && (
              <div className="flex justify-between text-gray-700">
                <span>Making Charges ({makingChargePct}%)</span>
                <span className="font-semibold">₹{makingCost.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-700">
              <span>GST (3%)</span>
              <span className="font-semibold">₹{gstCost.toLocaleString()}</span>
            </div>
            <div className="pt-2 border-t border-[#DFBA54]/30 flex justify-between items-baseline">
              <span className="font-bold text-gray-900 text-sm">Estimated Total Amount:</span>
              <span className="font-serif-luxury text-2xl font-bold text-[#8C6B1C]">
                ₹{totalCost.toLocaleString()}
              </span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Calculation to Store WhatsApp</span>
            </a>
            <p className="text-[11px] text-gray-400 text-center">
              Visit J. Lalchand Saraf Ratnagiri for exact weighing and zero hidden charge billing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
