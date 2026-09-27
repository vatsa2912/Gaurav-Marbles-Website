"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, MessageCircle } from "lucide-react";
import { FAQItem, FAQ_DATA } from "@/data/faq";
import { useLanguage } from "@/lib/languageContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FAQAccordion() {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-01": true,
    "faq-03": true,
  });

  const categories = [
    "All",
    "General",
    "Marble & Granite",
    "Tiles",
    "Sanitaryware & Fittings",
    "Showroom & Visit",
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      const matchEngQ = item.question.toLowerCase().includes(q);
      const matchEngA = item.answer.toLowerCase().includes(q);
      const matchHiQ = item.hindiQuestion.toLowerCase().includes(q);
      const matchHiA = item.hindiAnswer.toLowerCase().includes(q);
      return matchEngQ || matchEngA || matchHiQ || matchHiA;
    }

    return true;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-8 font-sans-clean">
      {/* Search and Category Filter Bar */}
      <div className="space-y-4">
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions about marble, tiles, granite, hours or location..."
            className="w-full text-xs sm:text-sm pl-9 pr-4 py-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900 shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-wider font-medium py-1.5 px-3.5 rounded-full transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-stone-900 text-stone-100"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white border border-stone-200 rounded-xs p-6">
            <HelpCircle className="w-10 h-10 text-stone-400 mx-auto mb-2" />
            <p className="text-sm text-stone-700 font-medium">No matching questions found.</p>
            <p className="text-xs text-stone-500 mt-1">
              Have a specific requirement? Contact us directly on WhatsApp.
            </p>
            <a
              href={getWhatsAppUrl(`Hello Gaurav Marbles, I have a question: ${search}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold py-2 px-4 rounded-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            const q = language === "hi" ? faq.hindiQuestion : faq.question;
            const a = language === "hi" ? faq.hindiAnswer : faq.answer;

            return (
              <div
                key={faq.id}
                className="bg-white border border-stone-200 rounded-xs overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors"
                >
                  <span className="font-serif-luxury text-sm sm:text-base font-semibold text-stone-900">
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 bg-stone-50/30">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
