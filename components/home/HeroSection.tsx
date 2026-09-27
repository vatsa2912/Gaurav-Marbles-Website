"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";
import { SITE_CONFIG } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#161412] text-white">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stone.webp"
          alt="Gaurav Marbles Architectural Stone Showroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 scale-105 animate-in fade-in duration-1000"
        />
        {/* Editorial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-radial-at-c from-black/20 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-black/40" />
      </div>

      {/* Decorative Stone Frame Accents */}
      <div className="absolute inset-4 sm:inset-8 border border-[#C5A880]/15 pointer-events-none z-10 hidden sm:block">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C5A880]/50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C5A880]/50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C5A880]/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C5A880]/50" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Subtle Location & Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/30 text-[#C5A880] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Firozabad, Uttar Pradesh</span>
        </div>

        {/* Hero Tagline */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12]">
          {t.hero.headline}
        </h1>

        {/* Supporting Copy */}
        <p className="font-sans-clean text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mt-6 leading-relaxed font-light">
          {t.hero.subheadline}
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/products"
            className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#B39366] text-stone-950 font-semibold text-xs sm:text-sm uppercase tracking-widest py-3.5 px-8 rounded-xs transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.exploreCollections}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/quote"
            className="w-full sm:w-auto bg-stone-900/90 hover:bg-stone-800 text-stone-100 font-semibold text-xs sm:text-sm uppercase tracking-widest py-3.5 px-8 rounded-xs border border-stone-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>{t.hero.requestQuote}</span>
          </Link>

          <a
            href={getWhatsAppUrl("Hello Gaurav Marbles, I am visiting your website and would like material guidance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.hero.whatsappUs}</span>
          </a>
        </div>

        {/* Verified Showroom Badge */}
        <div className="mt-12 flex items-center gap-2 text-stone-400 text-xs">
          <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          <span>
            {language === "hi"
              ? "प्रत्यक्ष शोरूम • मकराना मार्बल, जीवीटी टाइल्स, ग्रेनाइट एवं फिटिंग्स"
              : "Physical Showroom • Makrana Marble, GVT Tiles, Granite & Sanitaryware"}
          </span>
        </div>
      </div>
    </section>
  );
}
