"use client";

import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import { useLanguage } from "@/lib/languageContext";
import { SearchX, RotateCcw } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
  isLoading?: boolean;
}

export function ProductGrid({
  products,
  onResetFilters,
  isLoading = false,
}: ProductGridProps) {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="bg-white border border-stone-200 rounded-xs h-96 animate-pulse p-4 space-y-4"
          >
            <div className="bg-stone-200 aspect-4/3 w-full rounded-xs" />
            <div className="h-4 bg-stone-200 w-1/3 rounded-xs" />
            <div className="h-5 bg-stone-200 w-3/4 rounded-xs" />
            <div className="h-10 bg-stone-100 w-full rounded-xs" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-stone-50 border border-stone-200 rounded-xs">
        <SearchX className="w-12 h-12 text-stone-400 mx-auto mb-3" />
        <h3 className="font-serif-luxury text-lg font-semibold text-stone-800">
          {t.products.noProductsFound}
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
          Try adjusting your search keywords, category selection, or filters to find what you need.
        </p>

        {onResetFilters && (
          <div className="mt-5">
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-stone-100 text-xs font-medium rounded-xs hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.products.clearFilters}</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
