"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { Product, ProductCategory } from "@/types/product";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters, FilterState } from "@/components/products/ProductFilters";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { useLanguage } from "@/lib/languageContext";

export function ProductsCatalogView() {
  const searchParams = useSearchParams();
  const { t, language } = useLanguage();

  const initialCatParam = searchParams.get("category") as ProductCategory | null;
  const initialSearchParam = searchParams.get("search") || "";

  const [filters, setFilters] = useState<FilterState>({
    search: initialSearchParam,
    category: initialCatParam || "all",
    brand: "all",
    finish: "all",
    availability: "all",
    sortBy: "featured",
  });

  // Extract unique brands and finishes
  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (p.brand) brands.add(p.brand);
    });
    return Array.from(brands).sort();
  }, []);

  const availableFinishes = useMemo(() => {
    const finishes = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (p.finish) finishes.add(p.finish);
    });
    return Array.from(finishes).sort();
  }, []);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (filters.category !== "all" && p.category !== filters.category) {
        return false;
      }

      // Brand filter
      if (filters.brand !== "all" && p.brand !== filters.brand) {
        return false;
      }

      // Finish filter
      if (filters.finish !== "all" && p.finish !== filters.finish) {
        return false;
      }

      // Availability filter
      if (filters.availability !== "all" && p.availability !== filters.availability) {
        return false;
      }

      // Search keyword filter
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesColor = p.colour.toLowerCase().includes(query);
        const matchesSubcat = p.subcategory.toLowerCase().includes(query);
        const matchesTags = p.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesColor && !matchesSubcat && !matchesTags) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }, [filters]);

  const currentCategoryInfo = CATEGORIES.find((c) => c.id === filters.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans-clean">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            name: "Products",
            url: "/products",
          },
          ...(currentCategoryInfo
            ? [
                {
                  name: currentCategoryInfo.name,
                  url: `/products?category=${currentCategoryInfo.id}`,
                },
              ]
            : []),
        ]}
      />

      {/* Catalog Title Header */}
      <div className="mt-4 mb-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-1">
          {language === "hi" ? "शोरूम कैटलॉग" : "Showroom Catalogue"}
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900">
          {currentCategoryInfo
            ? language === "hi"
              ? currentCategoryInfo.hindiName
              : currentCategoryInfo.name
            : t.products.allProducts}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
          {currentCategoryInfo
            ? currentCategoryInfo.description
            : "Browse our complete selection of Italian and Indian marble slabs, vitrified tiles, granite, designer sanitaryware, and construction chemicals. Direct batch inspection at our Firozabad showroom."}
        </p>
      </div>

      {/* Filters & Search Component */}
      <div className="mb-8">
        <ProductFilters
          filters={filters}
          onFilterChange={setFilters}
          availableBrands={availableBrands}
          availableFinishes={availableFinishes}
          totalResults={filteredProducts.length}
        />
      </div>

      {/* Products Grid */}
      <ProductGrid
        products={filteredProducts}
        onResetFilters={() =>
          setFilters({
            search: "",
            category: "all",
            brand: "all",
            finish: "all",
            availability: "all",
            sortBy: "featured",
          })
        }
      />
    </div>
  );
}
