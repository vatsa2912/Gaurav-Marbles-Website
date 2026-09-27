"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, FileText, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/languageContext";

export function FinalCTA() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-[#161412] text-white relative overflow-hidden font-sans-clean">
      <div className="absolute inset-0 bg-stone-subtle opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
          Start Your Project With Confidence
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {language === "hi"
            ? "क्या आप अपने स्थान के लिए सही पत्थर या टाइल की तलाश में हैं?"
            : "Looking for the right material for your space?"}
        </h2>

        <p className="font-sans-clean text-stone-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-light">
          {language === "hi"
            ? "चाहे आप घर बनवा रहे हों, दुकान का नवीनीकरण कर रहे हों या नया बाथरूम डिजाइन कर रहे हों — गौरव मार्बल्स आपको उचित सामग्री व सही माप का परामर्श देने के लिए सदैव तत्पर है।"
            : "Whether you are building a new residence, renovating a kitchen, or designing luxury bathrooms, our team in Firozabad is ready with slab samples, quantity guidance, and competitive estimates."}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#B39366] text-stone-950 font-semibold text-xs sm:text-sm uppercase tracking-widest py-3.5 px-8 rounded-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>{language === "hi" ? "कोटेशन का अनुरोध करें" : "Request a Quote"}</span>
          </Link>

          <a
            href={getWhatsAppUrl("Hello Gaurav Marbles, I am looking for suitable materials for my space and would like a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-7 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === "hi" ? "व्हाट्सएप परामर्श" : "WhatsApp Us"}</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="w-full sm:w-auto bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xs border border-stone-700 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>Call Showroom</span>
          </a>
        </div>

        {/* Location & Opening Hours reminder */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{SITE_CONFIG.address.short}</span>
          </div>
          <span className="hidden sm:inline text-stone-600">•</span>
          <div>
            <span>Open Daily: 9:00 AM – 8:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
