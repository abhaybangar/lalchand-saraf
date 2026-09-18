"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, STORE_INFO } from "../data/jewelryData";
import { 
  Filter, 
  Heart, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  RotateCcw, 
  Check, 
  SlidersHorizontal,
  ShieldCheck,
  Scale,
  Search,
  ArrowUpDown
} from "lucide-react";

export default function ProductCatalog({ 
  selectedCategoryFilter, 
  setSelectedCategoryFilter,
  selectedKaratFilter,
  setSelectedKaratFilter,
  selectedOccasionFilter,
  setSelectedOccasionFilter,
  searchQuery,
  setSearchQuery,
  wishlist,
  onToggleWishlist,
  onQuickView
}) {
  const [selectedGender, setSelectedGender] = useState("All");
  const [priceMax, setPriceMax] = useState(500000);
  const [sortBy, setSortBy] = useState("featured"); // 'featured', 'low-high', 'high-low', 'weight'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter options
  const categories = [
    { id: "all", label: "All Categories" },
    { id: "necklaces", label: "Necklaces & Harams" },
    { id: "earrings", label: "Earrings & Jhumkas" },
    { id: "rings", label: "Rings & Solitaires" },
    { id: "bangles", label: "Bangles & Patlya" },
    { id: "mangalsutra", label: "Mangalsutra & Pendants" },
    { id: "chains", label: "Chains & Bullion" }
  ];

  const karats = ["All", "24KT", "22KT", "18KT"];
  const occasions = ["All", "Bridal", "Daily Wear", "Festive", "Gifting"];
  const genders = ["All", "Women", "Men", "Unisex"];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategoryFilter && selectedCategoryFilter !== "all" && item.category !== selectedCategoryFilter) {
        return false;
      }
      // Karat match
      if (selectedKaratFilter && selectedKaratFilter !== "All" && item.karat !== selectedKaratFilter) {
        return false;
      }
      // Occasion match
      if (selectedOccasionFilter && selectedOccasionFilter !== "All" && item.occasion !== selectedOccasionFilter) {
        return false;
      }
      // Gender match
      if (selectedGender !== "All" && item.gender !== selectedGender && item.gender !== "Unisex") {
        return false;
      }
      // Price match
      if (item.estimatedPrice > priceMax) {
        return false;
      }
      // Search match
      if (searchQuery && searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesMarathi = item.marathiName?.toLowerCase().includes(q);
        const matchesDesc = item.description?.toLowerCase().includes(q);
        const matchesCat = item.category?.toLowerCase().includes(q);
        if (!matchesName && !matchesMarathi && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "low-high") return a.estimatedPrice - b.estimatedPrice;
      if (sortBy === "high-low") return b.estimatedPrice - a.estimatedPrice;
      if (sortBy === "weight") return b.grossWeight - a.grossWeight;
      return 0; // featured default
    });
  }, [
    selectedCategoryFilter, 
    selectedKaratFilter, 
    selectedOccasionFilter, 
    selectedGender, 
    priceMax, 
    searchQuery, 
    sortBy
  ]);

  const handleResetFilters = () => {
    setSelectedCategoryFilter("all");
    setSelectedKaratFilter("All");
    setSelectedOccasionFilter("All");
    setSelectedGender("All");
    setPriceMax(500000);
    setSearchQuery("");
  };

  const hasActiveFilters = 
    (selectedCategoryFilter && selectedCategoryFilter !== "all") ||
    (selectedKaratFilter && selectedKaratFilter !== "All") ||
    (selectedOccasionFilter && selectedOccasionFilter !== "All") ||
    selectedGender !== "All" ||
    priceMax < 500000 ||
    searchQuery !== "";

  return (
    <section id="catalog" className="py-16 bg-[#FAF7F0] border-t border-[#EDE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#B38728] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FINE JEWELLERY COLLECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1C1917] tracking-tight">
            Exquisite Jewellery Designs
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Every piece is 100% BIS Hallmarked, weighed transparently, and handcrafted with master karigar perfection.
          </p>
        </div>

        {/* Mobile Filter Toggle & Search Bar */}
        <div className="lg:hidden mb-6 flex items-center gap-3">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#D4AF37] rounded-xl text-xs font-bold text-[#8C6B1C] shadow-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{mobileFilterOpen ? "Hide Filters" : "Filter & Refine"}</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            )}
          </button>

          <div className="flex-1">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full py-3 px-3 bg-white border border-[#E2D8C3] rounded-xl text-xs font-semibold text-gray-700 shadow-sm focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="weight">Weight: Heavy to Light</option>
            </select>
          </div>
        </div>

        {/* Main Grid: Sidebar Filters + Products List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar Filter Panel */}
          <aside className={`lg:col-span-3 bg-white rounded-2xl p-6 border border-[#EAE1D0] shadow-sm space-y-6 ${mobileFilterOpen ? "block" : "hidden lg:block"}`}>
            {/* Filter Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0E8DC]">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1C1917]">
                <Filter className="w-4 h-4 text-[#B38728]" />
                <span>Filters</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-[11px] font-semibold text-[#8C6B1C] hover:text-[#DFBA54] transition"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Category
              </label>
              <div className="space-y-1">
                {categories.map((cat) => {
                  const isSelected = (selectedCategoryFilter || "all") === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategoryFilter(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                        isSelected
                          ? "bg-[#FFF9E6] text-[#8C6B1C] font-bold border border-[#DFBA54]/40"
                          : "text-gray-600 hover:bg-[#FAF7F0] hover:text-gray-900"
                      }`}
                    >
                      <span>{cat.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#B38728]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Purity / Karat Filter */}
            <div className="space-y-2 pt-3 border-t border-[#F2EDE2]">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Purity / Karat
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {karats.map((k) => {
                  const isSelected = (selectedKaratFilter || "All") === k;
                  return (
                    <button
                      key={k}
                      onClick={() => setSelectedKaratFilter(k)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold text-center border transition ${
                        isSelected
                          ? "bg-[#0D1624] text-[#F3E5AB] border-[#0D1624] shadow-sm"
                          : "bg-[#FCFAF6] text-gray-600 border-[#EAE2D2] hover:border-[#DFBA54]"
                      }`}
                    >
                      {k}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Occasion Filter */}
            <div className="space-y-2 pt-3 border-t border-[#F2EDE2]">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Occasion
              </label>
              <div className="flex flex-wrap gap-1.5">
                {occasions.map((occ) => {
                  const isSelected = (selectedOccasionFilter || "All") === occ;
                  return (
                    <button
                      key={occ}
                      onClick={() => setSelectedOccasionFilter(occ)}
                      className={`py-1.5 px-3 rounded-full text-xs font-medium transition ${
                        isSelected
                          ? "bg-[#DFBA54] text-[#0D1624] font-bold"
                          : "bg-[#F8F5EE] text-gray-600 hover:bg-[#EFE9DC]"
                      }`}
                    >
                      {occ}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Gender Filter */}
            <div className="space-y-2 pt-3 border-t border-[#F2EDE2]">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {genders.map((g) => {
                  const isSelected = selectedGender === g;
                  return (
                    <button
                      key={g}
                      onClick={() => setSelectedGender(g)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-medium border transition ${
                        isSelected
                          ? "bg-[#0D1624] text-[#F3E5AB] border-[#0D1624]"
                          : "bg-[#FCFAF6] text-gray-600 border-[#EAE2D2] hover:border-[#DFBA54]"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-3 pt-3 border-t border-[#F2EDE2]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-gray-700">Max Budget</span>
                <span className="font-bold text-[#8C6B1C]">₹{priceMax.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="30000"
                max="500000"
                step="10000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#B38728] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>₹30,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* BIS Hallmark Promise Card */}
            <div className="pt-3 border-t border-[#F2EDE2]">
              <div className="p-3 rounded-xl bg-[#FFF9E6] border border-[#DFBA54]/40 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#B38728] shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#785912] leading-snug">
                  <strong>BIS Hallmarked Purity:</strong> Every jewellery item comes with authentic HUID laser engraving and certificate.
                </div>
              </div>
            </div>
          </aside>

          {/* Right Product Grid Area */}
          <div className="lg:col-span-9 space-y-6">
            {/* Top Toolbar (Desktop) */}
            <div className="hidden lg:flex items-center justify-between bg-white rounded-xl p-4 border border-[#EAE1D0] shadow-sm">
              <div className="text-xs font-semibold text-gray-600">
                Showing <strong className="text-gray-900">{filteredProducts.length}</strong> exquisite designs
              </div>

              {/* Sort Tabs */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-400 uppercase tracking-wider font-bold text-[10px]">Sort By:</span>
                <button
                  onClick={() => setSortBy("featured")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    sortBy === "featured" ? "bg-[#0D1624] text-[#F3E5AB]" : "text-gray-600 hover:bg-[#F8F5EE]"
                  }`}
                >
                  Featured
                </button>
                <button
                  onClick={() => setSortBy("low-high")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    sortBy === "low-high" ? "bg-[#0D1624] text-[#F3E5AB]" : "text-gray-600 hover:bg-[#F8F5EE]"
                  }`}
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => setSortBy("high-low")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    sortBy === "high-low" ? "bg-[#0D1624] text-[#F3E5AB]" : "text-gray-600 hover:bg-[#F8F5EE]"
                  }`}
                >
                  Price: High to Low
                </button>
                <button
                  onClick={() => setSortBy("weight")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    sortBy === "weight" ? "bg-[#0D1624] text-[#F3E5AB]" : "text-gray-600 hover:bg-[#F8F5EE]"
                  }`}
                >
                  Gold Weight
                </button>
              </div>
            </div>

            {/* Active Filters Tag Bar */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-gray-400">Active Filters:</span>
                {selectedCategoryFilter && selectedCategoryFilter !== "all" && (
                  <span className="px-2.5 py-1 bg-white border border-[#DFBA54] rounded-full text-[#8C6B1C] font-semibold flex items-center gap-1">
                    Category: {selectedCategoryFilter}
                    <button onClick={() => setSelectedCategoryFilter("all")} className="hover:text-red-500 font-bold">×</button>
                  </span>
                )}
                {selectedKaratFilter && selectedKaratFilter !== "All" && (
                  <span className="px-2.5 py-1 bg-white border border-[#DFBA54] rounded-full text-[#8C6B1C] font-semibold flex items-center gap-1">
                    Karat: {selectedKaratFilter}
                    <button onClick={() => setSelectedKaratFilter("All")} className="hover:text-red-500 font-bold">×</button>
                  </span>
                )}
                {selectedOccasionFilter && selectedOccasionFilter !== "All" && (
                  <span className="px-2.5 py-1 bg-white border border-[#DFBA54] rounded-full text-[#8C6B1C] font-semibold flex items-center gap-1">
                    Occasion: {selectedOccasionFilter}
                    <button onClick={() => setSelectedOccasionFilter("All")} className="hover:text-red-500 font-bold">×</button>
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2.5 py-1 bg-white border border-[#DFBA54] rounded-full text-[#8C6B1C] font-semibold flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="hover:text-red-500 font-bold">×</button>
                  </span>
                )}
              </div>
            )}

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#EAE1D0] space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF9E6] border border-[#DFBA54] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#DFBA54]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-gray-900">
                  No matching jewellery found
                </h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Try adjusting your budget or category filters, or contact our Ratnagiri flagship store for customized karigar designs.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#0D1624] text-[#F3E5AB] text-xs font-bold uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Product Cards Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => {
                  const isWishlisted = wishlist.some((item) => item.id === prod.id);
                  const whatsappMsg = `Hello J. Lalchand Saraf Jewellers, I would like to inquire about "${prod.name}" (${prod.karat}, ${prod.grossWeight}g, Approx ₹${prod.estimatedPrice.toLocaleString()}). Is it available at your Ratnagiri store?`;
                  const productWhatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

                  return (
                    <div
                      key={prod.id}
                      className="group bg-white rounded-2xl overflow-hidden border border-[#EAE1D0] hover:border-[#DFBA54] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Product Image Container */}
                      <div className="relative h-64 bg-[#F8F5EE] overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0D1624] text-[#F3E5AB] shadow-sm">
                            {prod.badge}
                          </span>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/95 backdrop-blur-md text-[#8C6B1C] border border-[#DFBA54]/40">
                            {prod.purity}
                          </span>
                        </div>

                        {/* Wishlist Heart Button */}
                        <button
                          onClick={() => onToggleWishlist(prod)}
                          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 shadow-md ${
                            isWishlisted
                              ? "bg-rose-50 text-rose-600 scale-110"
                              : "bg-white/90 text-gray-600 hover:text-rose-600 hover:bg-white"
                          }`}
                          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-600" : ""}`} />
                        </button>

                        {/* Quick View Button (Desktop Hover) */}
                        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                          <button
                            onClick={() => onQuickView(prod)}
                            className="w-full py-2 px-3 bg-white/95 backdrop-blur-md hover:bg-white text-gray-900 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#B38728]" />
                            <span>Quick View & Specs</span>
                          </button>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                            <span className="uppercase tracking-wider font-semibold text-[#8C6B1C]">
                              {prod.karat} Gold
                            </span>
                            <span className="flex items-center gap-1 text-gray-600">
                              <Scale className="w-3 h-3 text-[#B38728]" />
                              Gross: <strong>{prod.grossWeight}g</strong>
                            </span>
                          </div>

                          <h3 
                            onClick={() => onQuickView(prod)}
                            className="text-base font-serif-luxury font-bold text-gray-900 line-clamp-1 group-hover:text-[#B38728] transition cursor-pointer"
                          >
                            {prod.name}
                          </h3>

                          <p className="text-[11px] text-gray-500 italic line-clamp-1">
                            {prod.marathiName}
                          </p>
                        </div>

                        {/* Price & Action */}
                        <div className="pt-3 border-t border-[#F2ECE1] space-y-3">
                          <div className="flex items-baseline justify-between">
                            <div>
                              <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                                Approx Value
                              </div>
                              <div className="text-lg font-bold text-[#1C1917]">
                                ₹{prod.estimatedPrice.toLocaleString()}
                              </div>
                            </div>
                            <div className="text-[10px] text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                              Making: {prod.makingChargePercent}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => onQuickView(prod)}
                              className="py-2 px-2.5 rounded-xl bg-[#F8F5EE] hover:bg-[#EFE5D2] text-[#8C6B1C] text-xs font-bold border border-[#DFBA54]/40 transition"
                            >
                              Details
                            </button>

                            <a
                              href={productWhatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2 px-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Enquire</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
