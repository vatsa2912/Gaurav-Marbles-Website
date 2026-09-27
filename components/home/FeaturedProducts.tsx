"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { useLanguage } from "@/lib/languageContext";
import { ProductCategory } from "@/types/product";

export function FeaturedProducts() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProductCategory | "all">("all");

  const featured = PRODUCTS.filter((p) => p.featured);
  const displayProducts =
    activeTab === "all" ? featured : featured.filter((p) => p.category === activeTab);

  const tabs: { label: string; value: ProductCategory | "all" }[] = [
    { label: "All Featured", value: "all" },
    { label: "Marble", value: "marble" },
    { label: "Tiles", value: "tiles" },
    { label: "Granite", value: "granite" },
    { label: "Sanitaryware", value: "sanitaryware" },
    { label: "Fittings", value: "bathroom-fittings" },
    { label: "Chemicals", value: "chemicals" },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-b border-stone-200/80 font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
              Curated Showroom Highlights
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              {t.products.featuredTitle}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-xl">
              {t.products.featuredSubtitle}
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6D3B] hover:text-stone-900 transition-colors group shrink-0"
          >
            <span>{t.products.allProducts}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-medium shrink-0 transition-colors cursor-pointer ${
                activeTab === tab.value
                  ? "bg-stone-900 text-stone-100 shadow-xs"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#8C6D3B] text-stone-100 text-xs font-semibold uppercase tracking-widest py-3.5 px-8 rounded-xs transition-colors shadow-xs"
          >
            <span>Browse Complete Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
