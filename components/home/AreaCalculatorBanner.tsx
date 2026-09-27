"use client";

import React from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export function AreaCalculatorBanner() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-[#181614] text-white relative overflow-hidden font-sans-clean">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-stone-subtle opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-stone-900/80 border border-[#C5A880]/30 rounded-xs p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
              <Calculator className="w-4 h-4" />
              <span>Smart Material Planning</span>
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {language === "hi"
                ? "क्या आप नए फर्श या दीवार की योजना बना रहे हैं?"
                : "Planning a New Floor or Wall?"}
            </h2>

            <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
              {language === "hi"
                ? "अपने कमरे का माप दर्ज करें, कटिंग वेस्टेज जोड़ें और तुरंत आवश्यक टाइल्स या मार्बल की मात्रा जानें। इसके बाद हमारे शोरूम से तुरंत कोटेशन प्राप्त करें।"
                : "Calculate your approximate area, account for recommended cutting wastage, and get in touch with our team for a tailored product recommendation and quotation."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/calculator"
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#B39366] text-stone-950 font-semibold text-xs sm:text-sm uppercase tracking-widest py-3.5 px-8 rounded-xs transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{language === "hi" ? "एरिया कैलकुलेटर खोलें" : "Calculate Area"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/quote"
              className="w-full sm:w-auto bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xs border border-stone-700 transition-colors flex items-center justify-center cursor-pointer"
            >
              <span>{language === "hi" ? "डायरेक्ट कोटेशन" : "Direct Quote"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
