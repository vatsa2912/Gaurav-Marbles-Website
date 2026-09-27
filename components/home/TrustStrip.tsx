"use client";

import React from "react";
import { Sparkles, Layers, Users2, Store } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export function TrustStrip() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Sparkles,
      title: t.trust.premiumMaterials,
      desc: t.trust.premiumMaterialsDesc,
    },
    {
      icon: Layers,
      title: t.trust.wideRange,
      desc: t.trust.wideRangeDesc,
    },
    {
      icon: Users2,
      title: t.trust.personalAssistance,
      desc: t.trust.personalAssistanceDesc,
    },
    {
      icon: Store,
      title: t.trust.localShowroom,
      desc: t.trust.localShowroomDesc,
    },
  ];

  return (
    <section className="bg-[#FAF8F5] border-b border-stone-200/90 py-8 sm:py-10 font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xs bg-white/70 border border-stone-200/60 shadow-xs hover:border-[#C5A880]/50 transition-colors"
              >
                <div className="p-2.5 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] border border-[#EADBCC] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-sm font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
