"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Tag,
  Phone,
  HelpCircle,
  ShieldCheck,
  MapPin,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Product } from "@/types/product";
import { ProductGallery } from "@/components/products/ProductGallery";
import { Badge } from "@/components/ui/Badge";
import { PriceEnquiryModal } from "@/components/modals/PriceEnquiryModal";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/lib/languageContext";

export function ProductDetailClient({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quoteUrl = `/quote?product=${encodeURIComponent(
    product.name
  )}&category=${encodeURIComponent(product.category)}`;

  return (
    <div className="font-sans-clean">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Image Gallery (6 Cols) */}
        <div className="lg:col-span-6">
          <ProductGallery
            images={product.images}
            productName={product.name}
          />

          {/* Showroom Viewing Note */}
          <div className="mt-6 p-4 bg-[#FAF8F5] border border-[#EADBCC] rounded-xs flex items-start gap-3 text-xs text-stone-700">
            <MapPin className="w-4 h-4 text-[#8C6D3B] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-semibold mb-0.5">
                Inspect This Material in Person
              </strong>
              <span>
                Full slabs and sample boards are available for inspection at our showroom in Purushottam Vihar, Bypass Road, Firozabad.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info & Actions (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Badges & Category */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="gold">{product.category}</Badge>
              <Badge
                variant={product.availability === "In Stock" ? "dark" : "outline"}
              >
                {product.availability}
              </Badge>
              {product.featured && <Badge variant="default">Curated Selection</Badge>}
            </div>

            {/* Product Title */}
            <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 leading-tight">
              {product.name}
            </h1>

            {/* Subcategory & Brand */}
            <div className="mt-2 text-xs text-stone-500 font-medium tracking-wider uppercase">
              <span>{product.brand}</span> • <span className="text-[#8C6D3B]">{product.subcategory}</span>
            </div>

            {/* Price on Request Callout */}
            <div className="my-5 p-4 bg-[#FAF8F5] border border-stone-200 rounded-xs flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                  Showroom Pricing
                </span>
                <span className="text-base sm:text-lg font-bold text-stone-900 font-serif-luxury">
                  {t.products.priceOnRequest}
                </span>
              </div>
              <Tag className="w-5 h-5 text-[#8C6D3B]" />
            </div>

            {/* Overview Description */}
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6">
              {product.longDescription || product.description}
            </p>

            {/* Recommended Applications */}
            {product.recommendedApplications && product.recommendedApplications.length > 0 && (
              <div className="mb-6">
                <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block mb-2">
                  Recommended Applications:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.recommendedApplications.map((app) => (
                    <span
                      key={app}
                      className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technical Specifications Table */}
            <div className="mb-8 border border-stone-200 rounded-xs overflow-hidden">
              <div className="bg-stone-100 px-4 py-2 border-b border-stone-200 font-semibold text-xs uppercase tracking-wider text-stone-700">
                {t.products.specifications}
              </div>
              <div className="divide-y divide-stone-100 text-xs">
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-stone-500">{t.products.size}</span>
                  <span className="font-medium text-stone-900">{product.size}</span>
                </div>
                <div className="px-4 py-2.5 flex justify-between bg-stone-50/50">
                  <span className="text-stone-500">{t.products.finish}</span>
                  <span className="font-medium text-stone-900">{product.finish}</span>
                </div>
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-stone-500">{t.products.material}</span>
                  <span className="font-medium text-stone-900">{product.material}</span>
                </div>
                <div className="px-4 py-2.5 flex justify-between bg-stone-50/50">
                  <span className="text-stone-500">{t.products.color}</span>
                  <span className="font-medium text-stone-900">{product.colour}</span>
                </div>
                {product.specifications &&
                  Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="px-4 py-2.5 flex justify-between">
                      <span className="text-stone-500">{key}</span>
                      <span className="font-medium text-stone-900">{val}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{t.products.getPrice}</span>
              </button>

              <a
                href={getProductWhatsAppUrl(product.name, product.category)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            <Link
              href={quoteUrl}
              className="w-full block text-center bg-stone-100 hover:bg-stone-200 text-stone-900 font-medium text-xs uppercase tracking-wider py-3 px-4 rounded-xs border border-stone-300 transition-colors"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Request Detailed Showroom Quotation</span>
              </span>
            </Link>

            {/* Need Help Choosing Card */}
            <div className="mt-6 p-4 rounded-xs bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>{t.products.needHelpChoosing}</span>
              </div>
              <p className="text-amber-900/80 leading-relaxed">
                {t.products.talkToExpert}
              </p>
              <div className="pt-1 flex items-center gap-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-semibold text-amber-900 hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {SITE_CONFIG.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Showcase */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif-luxury text-2xl font-bold text-stone-900">
              {t.products.relatedProducts}
            </h2>
            <Link
              href={`/products?category=${product.category}`}
              className="text-xs font-semibold text-[#8C6D3B] hover:underline flex items-center gap-1"
            >
              <span>Explore All {product.category.toUpperCase()}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="bg-white border border-stone-200 rounded-xs p-4 flex gap-4 items-center hover:border-stone-400 transition-colors"
              >
                <div className="relative w-20 h-20 bg-stone-100 rounded-xs overflow-hidden shrink-0">
                  <img
                    src={rel.images[0]}
                    alt={rel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                    {rel.subcategory}
                  </span>
                  <Link
                    href={`/products/${rel.slug}`}
                    className="font-serif-luxury text-sm font-semibold text-stone-900 hover:text-[#8C6D3B] transition-colors truncate block"
                  >
                    {rel.name}
                  </Link>
                  <span className="text-xs text-[#8C6D3B] font-medium block mt-1">
                    Price on Request
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Get Price Modal */}
      <PriceEnquiryModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
