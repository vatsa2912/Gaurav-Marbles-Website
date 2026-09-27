"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { ProductCategory } from "@/types/product";
import { CATEGORIES } from "@/data/categories";
import { useLanguage } from "@/lib/languageContext";

export interface FilterState {
  search: string;
  category: ProductCategory | "all";
  brand: string;
  finish: string;
  availability: "all" | "In Stock" | "Available on Order";
  sortBy: "featured" | "name-asc" | "name-desc";
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableBrands: string[];
  availableFinishes: string[];
  totalResults: number;
}

export function ProductFilters({
  filters,
  onFilterChange,
  availableBrands,
  availableFinishes,
  totalResults,
}: ProductFiltersProps) {
  const { t, language } = useLanguage();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleSearchChange = (val: string) => {
    onFilterChange({ ...filters, search: val });
  };

  const handleCategoryChange = (val: ProductCategory | "all") => {
    onFilterChange({ ...filters, category: val });
  };

  const handleBrandChange = (val: string) => {
    onFilterChange({ ...filters, brand: val });
  };

  const handleFinishChange = (val: string) => {
    onFilterChange({ ...filters, finish: val });
  };

  const handleAvailabilityChange = (val: "all" | "In Stock" | "Available on Order") => {
    onFilterChange({ ...filters, availability: val });
  };

  const handleSortChange = (val: "featured" | "name-asc" | "name-desc") => {
    onFilterChange({ ...filters, sortBy: val });
  };

  const resetAll = () => {
    onFilterChange({
      search: "",
      category: "all",
      brand: "all",
      finish: "all",
      availability: "all",
      sortBy: "featured",
    });
  };

  const hasActiveFilters =
    filters.search !== "" ||
    filters.category !== "all" ||
    filters.brand !== "all" ||
    filters.finish !== "all" ||
    filters.availability !== "all";

  return (
    <div className="space-y-4 font-sans-clean">
      {/* Top Bar: Live Search & Sort Control */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={t.products.searchPlaceholder}
            className="w-full text-xs sm:text-sm pl-9 pr-8 py-2.5 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900 shadow-xs"
          />
          {filters.search && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort & Mobile Filter Toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile Filter Sheet Button */}
          <button
            type="button"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex items-center justify-center gap-1.5 px-3 py-2 bg-stone-100 border border-stone-300 rounded-xs text-xs font-medium text-stone-800"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters {hasActiveFilters && "•"}</span>
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xs text-stone-500 hidden sm:inline">
              {t.products.sortBy}:
            </span>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                handleSortChange(e.target.value as "featured" | "name-asc" | "name-desc")
              }
              aria-label="Sort products by"
              className="text-xs py-2 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900 cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills (Horizontal Scroll / Wrap) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-medium shrink-0 transition-colors cursor-pointer ${
            filters.category === "all"
              ? "bg-stone-900 text-stone-100"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
          }`}
        >
          {language === "hi" ? "सभी संग्रह" : "All Collections"}
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-medium shrink-0 transition-colors cursor-pointer ${
              filters.category === cat.id
                ? "bg-stone-900 text-stone-100"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
            }`}
          >
            {language === "hi" ? cat.hindiName : cat.name}
          </button>
        ))}
      </div>

      {/* Secondary Filter Row (Brand, Finish, Availability, Reset) */}
      <div
        className={`${
          mobileFilterOpen ? "block" : "hidden md:flex"
        } flex-wrap items-center justify-between gap-3 pt-2 pb-1 border-t border-stone-200 text-xs`}
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Brand Filter */}
          <div className="flex items-center gap-1">
            <span className="text-stone-500">{t.products.filterByBrand}:</span>
            <select
              value={filters.brand}
              onChange={(e) => handleBrandChange(e.target.value)}
              aria-label="Filter by brand"
              className="py-1 px-2.5 bg-white border border-stone-300 rounded-xs text-xs"
            >
              <option value="all">All Brands</option>
              {availableBrands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Finish Filter */}
          <div className="flex items-center gap-1">
            <span className="text-stone-500">{t.products.filterByFinish}:</span>
            <select
              value={filters.finish}
              onChange={(e) => handleFinishChange(e.target.value)}
              aria-label="Filter by finish"
              className="py-1 px-2.5 bg-white border border-stone-300 rounded-xs text-xs"
            >
              <option value="all">All Finishes</option>
              {availableFinishes.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Filter */}
          <div className="flex items-center gap-1">
            <span className="text-stone-500">{t.products.filterByAvailability}:</span>
            <select
              value={filters.availability}
              onChange={(e) =>
                handleAvailabilityChange(
                  e.target.value as "all" | "In Stock" | "Available on Order"
                )
              }
              aria-label="Filter by stock availability"
              className="py-1 px-2.5 bg-white border border-stone-300 rounded-xs text-xs"
            >
              <option value="all">All Availability</option>
              <option value="In Stock">In Showroom Stock</option>
              <option value="Available on Order">On Order</option>
            </select>
          </div>
        </div>

        {/* Counter and Reset Action */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end pt-2 sm:pt-0">
          <span className="text-stone-500 text-[11px]">
            Showing <strong className="text-stone-900">{totalResults}</strong> products
          </span>

          {hasActiveFilters && (
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 underline text-xs cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.products.clearFilters}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
