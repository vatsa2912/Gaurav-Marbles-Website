"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { useLanguage } from "@/lib/languageContext";

export function CategoryGrid() {
  const { t, language } = useLanguage();

  return (
    <section id="categories" className="py-20 bg-[#FDFCF7] font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
            Architectural Solutions
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {t.categories.sectionTitle}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
            {t.categories.sectionSubtitle}
          </p>
        </div>

        {/* Categories Grid (2 cols sm, 3 cols lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="group relative bg-white border border-stone-200 hover:border-stone-400 rounded-xs overflow-hidden transition-all duration-300 hover:shadow-luxury-hover flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/11 w-full bg-stone-100 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-[11px] tracking-widest uppercase font-semibold text-[#EADBCC]">
                    {language === "hi" ? cat.hindiName : cat.name}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-stone-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-stone-900 group-hover:text-[#8C6D3B] transition-colors">
                    {language === "hi" ? cat.hindiName : cat.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed line-clamp-2">
                    {cat.tagline}
                  </p>

                  {/* Subcategories list preview */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {cat.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-xs"
                      >
                        {sub}
                      </span>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <span className="text-[10px] text-stone-400 self-center">
                        +{cat.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8C6D3B]">
                  <span>{t.categories.explore}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
