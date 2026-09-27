"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/languageContext";

export function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end">
        {showTooltip && (
          <div className="mb-2 bg-white text-stone-900 border border-stone-200 shadow-xl rounded-sm p-3 w-64 text-xs animate-in fade-in slide-in-from-bottom-2 duration-150 relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="font-semibold text-stone-900">
              {language === "hi" ? "गौरव मार्बल्स से बात करें" : "Chat with Gaurav Marbles"}
            </div>
            <p className="text-stone-600 mt-1 text-[11px] leading-relaxed">
              {language === "hi"
                ? "मार्बल, टाइल्स और रेट्स के संबंध में त्वरित सहायता के लिए व्हाट्सएप पर संदेश भेजें।"
                : "Ask about marble lots, tile sizes, rates, or showroom visit."}
            </p>
            <a
              href={getWhatsAppUrl("Hello Gaurav Marbles, I have an enquiry about your showroom products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-[11px] font-semibold py-1.5 px-3 rounded-xs w-full justify-center transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{language === "hi" ? "चैट शुरू करें" : "Start Chat Now"}</span>
            </a>
          </div>
        )}

        <div className="flex items-center gap-2">
          {!showTooltip && (
            <button
              onClick={() => setShowTooltip(true)}
              className="bg-white/95 backdrop-blur-xs text-stone-800 text-xs font-medium py-1.5 px-3 rounded-full shadow-md border border-stone-200 hover:bg-stone-50 transition-all cursor-pointer"
            >
              {language === "hi" ? "पूछताछ करें" : "Enquire on WhatsApp"}
            </button>
          )}

          <a
            href={getWhatsAppUrl("Hello Gaurav Marbles, I have an enquiry about your showroom products.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat"
            className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Fixed Action Bar (Sticky at bottom for mobile visitors) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-stone-900/95 backdrop-blur-md border-t border-stone-800 p-2 flex items-center gap-2">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-100 py-2.5 px-3 text-xs font-semibold rounded-xs flex items-center justify-center gap-2 border border-stone-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C5A880]" />
          <span>{language === "hi" ? "कॉल करें" : "Call Showroom"}</span>
        </a>

        <a
          href={getWhatsAppUrl("Hello Gaurav Marbles, I have an enquiry about your showroom products.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 px-3 text-xs font-semibold rounded-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
