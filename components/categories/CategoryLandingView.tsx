"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, FileText, Sparkles } from "lucide-react";
import { CategoryInfo } from "@/types/product";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { useLanguage } from "@/lib/languageContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface CategoryLandingViewProps {
  category: CategoryInfo;
  guideTitle: string;
  guidePoints: { title: string; desc: string }[];
}

export function CategoryLandingView({
  category,
  guideTitle,
  guidePoints,
}: CategoryLandingViewProps) {
  const { language } = useLanguage();
  const categoryProducts = PRODUCTS.filter((p) => p.category === category.id);

  return (
    <div className="font-sans-clean">
      {/* Category Hero Banner */}
      <section className="relative bg-[#161412] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Products", url: "/products" },
              { name: category.name, url: `/${category.slug}` },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              {language === "hi" ? category.hindiName : "Showroom Collection"}
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {category.name}
            </h1>
            <p className="font-serif-luxury text-lg text-[#EADBCC] mt-2 font-normal">
              {category.tagline}
            </p>
            <p className="text-stone-300 text-xs sm:text-sm mt-4 leading-relaxed font-light">
              {category.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/quote?category=${category.slug}`}
                className="bg-[#C5A880] hover:bg-[#B39366] text-stone-950 font-semibold text-xs uppercase tracking-wider py-3 px-6 rounded-xs transition-colors shadow-xs"
              >
                Request {category.name} Quote
              </Link>
              <a
                href={getWhatsAppUrl(`Hello Gaurav Marbles, I am inquiring about your ${category.name} collection.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs uppercase tracking-wider py-3 px-5 rounded-xs transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Subcategories Strip */}
        <div className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3">
            Available Varieties & Classifications
          </h2>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((sub) => (
              <span
                key={sub}
                className="px-3.5 py-1.5 bg-white border border-stone-300 text-stone-800 text-xs font-medium rounded-xs shadow-xs"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Hallmark Features */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {category.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xs flex items-center gap-3"
            >
              <Sparkles className="w-4 h-4 text-[#8C6D3B] shrink-0" />
              <span className="text-xs font-semibold text-stone-900">
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
            <div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">
                Featured {category.name} Slabs & Products
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Batch inspected materials available at Gaurav Marbles Firozabad.
              </p>
            </div>
            <Link
              href={`/products?category=${category.id}`}
              className="text-xs font-semibold text-[#8C6D3B] hover:underline hidden sm:inline"
            >
              View Filterable Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {categoryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Selection Guidance Box */}
        <div className="bg-white border border-stone-200 rounded-xs p-6 sm:p-10 shadow-xs mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8C6D3B] block mb-2">
            Showroom Guidance
          </span>
          <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900 mb-6">
            {guideTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guidePoints.map((pt, i) => (
              <div key={i} className="p-4 bg-stone-50 rounded-xs border border-stone-200/60">
                <div className="flex items-center gap-2 mb-2 font-serif-luxury font-semibold text-stone-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D3B]" />
                  <span>{pt.title}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
