"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowUpRight, Tag, ShieldCheck } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/languageContext";
import { PriceEnquiryModal } from "@/components/modals/PriceEnquiryModal";

export function ProductCard({ product }: { product: Product }) {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white border border-stone-200 hover:border-stone-400 rounded-xs overflow-hidden transition-all duration-300 hover:shadow-luxury-hover flex flex-col h-full font-sans-clean">
        {/* Product Image Box */}
        <Link
          href={`/products/${product.slug}`}
          className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden block"
        >
          <Image
            src={product.images[0] || "/images/categories/marble.webp"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Availability & Featured Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            {product.featured && (
              <Badge variant="gold" size="sm">
                Featured
              </Badge>
            )}
            <Badge
              variant={product.availability === "In Stock" ? "dark" : "outline"}
              size="sm"
            >
              {product.availability === "In Stock"
                ? language === "hi"
                  ? "स्टॉक में"
                  : "In Stock"
                : language === "hi"
                  ? "ऑर्डर पर"
                  : "On Order"}
            </Badge>
          </div>

          {/* Category overlay label */}
          <div className="absolute bottom-2.5 right-2.5 z-10">
            <span className="bg-stone-900/80 backdrop-blur-xs text-[10px] text-stone-200 font-medium px-2 py-0.5 rounded-xs uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </Link>

        {/* Product Information */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-[11px] text-stone-500 font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>{product.brand}</span>
              <span className="text-[#8C6D3B]">{product.subcategory}</span>
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="group-hover:text-[#8C6D3B] transition-colors"
            >
              <h3 className="font-serif-luxury text-base sm:text-lg font-semibold text-stone-900 line-clamp-1">
                {product.name}
              </h3>
            </Link>

            <p className="text-stone-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Key Specifications Grid */}
            <div className="mt-3.5 pt-3 border-t border-stone-100 grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
              <div>
                <span className="text-stone-400 block">{t.products.size}:</span>
                <span className="font-medium text-stone-800 truncate block">
                  {product.size}
                </span>
              </div>
              <div>
                <span className="text-stone-400 block">{t.products.finish}:</span>
                <span className="font-medium text-stone-800 truncate block">
                  {product.finish}
                </span>
              </div>
              <div className="col-span-2 pt-0.5">
                <span className="text-stone-400 inline-block mr-1">{t.products.color}:</span>
                <span className="font-medium text-stone-800">
                  {product.colour}
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Notice & Action Buttons */}
          <div className="mt-4 pt-3.5 border-t border-stone-100">
            <div className="text-xs text-[#8C6D3B] font-medium mb-2.5 flex items-center gap-1">
              <Tag className="w-3 h-3 shrink-0" />
              <span>{t.products.priceOnRequest}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-semibold py-2 px-3 rounded-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{t.products.getPrice}</span>
              </button>

              <a
                href={getProductWhatsAppUrl(product.name, product.category)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp enquiry for ${product.name}`}
                className="p-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-xs transition-colors"
                title="WhatsApp Enquiry"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <Link
                href={`/products/${product.slug}`}
                aria-label={`View details for ${product.name}`}
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-xs transition-colors"
                title={t.products.viewDetails}
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PriceEnquiryModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
