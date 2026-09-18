"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import StoreShowcaseCard from "../components/StoreShowcaseCard";
import CategorySparkleGrid from "../components/CategorySparkleGrid";
import CuratedKaratFilter from "../components/CuratedKaratFilter";
import ProductCatalog from "../components/ProductCatalog";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import TrustHeritageSection from "../components/TrustHeritageSection";
import InstagramFeedSection from "../components/InstagramFeedSection";
import LuxuryFooter from "../components/LuxuryFooter";

// Modals
import ProductQuickViewModal from "../components/ProductQuickViewModal";
import GoldRateCalculatorModal from "../components/GoldRateCalculatorModal";
import BookAppointmentModal from "../components/BookAppointmentModal";
import DirectionsMapModal from "../components/DirectionsMapModal";
import WishlistDrawer from "../components/WishlistDrawer";

import { PRODUCTS, STORE_INFO } from "../data/jewelryData";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export default function Home() {
  // State management
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Filters state
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedKaratFilter, setSelectedKaratFilter] = useState("All");
  const [selectedOccasionFilter, setSelectedOccasionFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Wishlist handler
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveWishlistItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  // Category select from grid
  const handleSelectCategory = (catId) => {
    setSelectedCategoryFilter(catId);
  };

  // Karat / Occasion select from curated component
  const handleCuratedFilterSelect = (key, val) => {
    if (key === "karat") {
      setSelectedKaratFilter(val);
      setSelectedOccasionFilter("All");
    } else if (key === "occasion") {
      setSelectedOccasionFilter(val);
      setSelectedKaratFilter("All");
    }
  };

  // Scroll to catalog
  const handleExploreClick = () => {
    const catalogElem = document.getElementById("catalog");
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E1E1E]">
      {/* 1. Luxury Navbar with Live Rate ticker & search */}
      <Navbar
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={wishlist.length}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
        onSelectCategory={handleSelectCategory}
      />

      {/* 2. Hero Carousel Banner */}
      <HeroCarousel
        onExploreClick={handleExploreClick}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* 3. Flagship Store Highlight Showcase Card (Exact match to reference image) */}
      <StoreShowcaseCard
        onOpenDirections={() => setIsDirectionsOpen(true)}
      />

      {/* 4. Category Grid ("How would you like to Sparkle?") */}
      <CategorySparkleGrid
        onSelectCategory={handleSelectCategory}
      />

      {/* 5. Curated Karats & Occasions */}
      <CuratedKaratFilter
        onFilterSelect={handleCuratedFilterSelect}
      />

      {/* 6. Product Catalog with Left Sidebar Filters & Live Price Breakdown */}
      <ProductCatalog
        selectedCategoryFilter={selectedCategoryFilter}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
        selectedKaratFilter={selectedKaratFilter}
        setSelectedKaratFilter={setSelectedKaratFilter}
        selectedOccasionFilter={selectedOccasionFilter}
        setSelectedOccasionFilter={setSelectedOccasionFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={(prod) => setSelectedProduct(prod)}
      />

      {/* 7. Trust & Heritage Pillars */}
      <TrustHeritageSection
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* 8. Google Reviews Showcase (4.9 Rating, 1,607 Reviews, Gemini AI Summary) */}
      <GoogleReviewsSection />

      {/* 9. Instagram Feed Showcase (@jlalchandsaraf) */}
      <InstagramFeedSection />

      {/* 10. Luxury Footer */}
      <LuxuryFooter
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenDirections={() => setIsDirectionsOpen(true)}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Quick Rate Calc floating button */}
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="hidden sm:flex items-center gap-2 bg-[#0D1624] text-[#F3E5AB] border border-[#DFBA54]/60 px-4 py-2.5 rounded-full shadow-2xl hover:bg-[#1A283F] transition-all text-xs font-bold uppercase tracking-wider"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DFBA54]" />
          <span>Live Gold Calc</span>
        </button>

        {/* WhatsApp Floating Chat */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello J. Lalchand Saraf Jewellers Ratnagiri, I would like to make an enquiry.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
          title="Chat with Store on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Modals & Drawers */}
      {selectedProduct && (
        <ProductQuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isWishlisted={wishlist.some((i) => i.id === selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      <GoldRateCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <BookAppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      <DirectionsMapModal
        isOpen={isDirectionsOpen}
        onClose={() => setIsDirectionsOpen(false)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onClearWishlist={handleClearWishlist}
        onQuickView={(prod) => setSelectedProduct(prod)}
      />
    </main>
  );
}
