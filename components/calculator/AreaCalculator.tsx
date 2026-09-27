"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  RotateCcw,
  ArrowRight,
  MessageCircle,
  AlertCircle,
  Boxes,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/languageContext";
import { getCalculatorWhatsAppUrl } from "@/lib/whatsapp";

interface TileOption {
  label: string;
  boxSqFt: number; // Sq ft covered per box
}

const TILE_BOX_SPECS: Record<string, TileOption> = {
  "600x1200": { label: "2ft × 4ft (600×1200 mm) — 2 pcs/box", boxSqFt: 15.5 },
  "600x600": { label: "2ft × 2ft (600×600 mm) — 4 pcs/box", boxSqFt: 15.5 },
  "300x600": { label: "1ft × 2ft (300×600 mm Wall) — 5 pcs/box", boxSqFt: 9.68 },
  "800x1600": { label: "2.6ft × 5.2ft (800×1600 mm Slab) — 2 pcs/box", boxSqFt: 27.55 },
};

export function AreaCalculator({
  initialMaterial = "Marble / Tile Flooring",
}: {
  initialMaterial?: string;
}) {
  const { t, language } = useLanguage();

  const [unit, setUnit] = useState<"feet" | "meters">("feet");
  const [length, setLength] = useState<string>("15");
  const [width, setWidth] = useState<string>("12");
  const [wastage, setWastage] = useState<number>(10);
  const [selectedTileType, setSelectedTileType] = useState<string>("600x1200");
  const [materialType, setMaterialType] = useState<string>(initialMaterial);

  // Calculations
  const numLength = parseFloat(length) || 0;
  const numWidth = parseFloat(width) || 0;

  // Raw area
  const carpetArea = numLength * numWidth;

  // Wastage addition
  const wastageArea = (carpetArea * wastage) / 100;
  const totalRecommendedArea = carpetArea + wastageArea;

  // Equivalent in other unit
  const areaInSqFt = unit === "feet" ? totalRecommendedArea : totalRecommendedArea * 10.7639;
  const areaInSqM = unit === "meters" ? totalRecommendedArea : totalRecommendedArea * 0.092903;

  // Tile box calculation
  const boxCoverage = TILE_BOX_SPECS[selectedTileType]?.boxSqFt || 15.5;
  const estimatedBoxes = Math.ceil(areaInSqFt / boxCoverage);

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setWastage(10);
  };

  const quoteUrl = `/quote?area=${encodeURIComponent(
    `${totalRecommendedArea.toFixed(1)} ${unit === "feet" ? "sq ft" : "sq meters"}`
  )}&material=${encodeURIComponent(materialType)}`;

  return (
    <div className="bg-white border border-stone-200 rounded-xs p-6 sm:p-8 shadow-luxury font-sans-clean">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8C6D3B] mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900">
            {t.calculator.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Unit Selector Pill */}
        <div className="flex items-center bg-stone-100 p-1 rounded-xs border border-stone-200 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setUnit("feet")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
              unit === "feet"
                ? "bg-stone-900 text-stone-100 shadow-xs"
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            {t.calculator.unitFeet}
          </button>
          <button
            type="button"
            onClick={() => setUnit("meters")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
              unit === "meters"
                ? "bg-stone-900 text-stone-100 shadow-xs"
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            {t.calculator.unitMeters}
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs Left, Live Results Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Form Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Material Type Dropdown */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
              Target Application / Stone
            </label>
            <select
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
              className="w-full text-sm py-2 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
            >
              <option value="Italian / Indian Marble Flooring">Italian / Indian Marble Flooring</option>
              <option value="Vitrified Floor Tiles (GVT/PGVT)">Vitrified Floor Tiles (GVT/PGVT)</option>
              <option value="Kitchen Granite Countertops">Kitchen Granite Countertops</option>
              <option value="Bathroom Wall & Floor Tiles">Bathroom Wall & Floor Tiles</option>
              <option value="Outdoor Driveway / Parking Tiles">Outdoor Driveway / Parking Tiles</option>
              <option value="Staircase Slabs & Risers">Staircase Slabs & Risers</option>
            </select>
          </div>

          {/* Dimensions Input Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                {t.calculator.length} ({unit === "feet" ? "ft" : "m"})
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="e.g. 20"
                className="w-full text-base font-medium py-2.5 px-3.5 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                {t.calculator.width} ({unit === "feet" ? "ft" : "m"})
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="e.g. 15"
                className="w-full text-base font-medium py-2.5 px-3.5 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>

          {/* Wastage Preset Selector */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                {t.calculator.wastagePercentage}
              </label>
              <span className="text-xs font-bold text-[#8C6D3B]">{wastage}% Selected</span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map((percent) => (
                <button
                  key={percent}
                  type="button"
                  onClick={() => setWastage(percent)}
                  className={`py-2 px-3 text-xs font-medium rounded-xs border transition-colors cursor-pointer text-center ${
                    wastage === percent
                      ? "bg-stone-900 text-stone-100 border-stone-900"
                      : "bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  +{percent}% {percent === 10 ? "(Std)" : ""}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 mt-1.5">
              {t.calculator.wastageRecommended}
            </p>
          </div>

          {/* Tile Box Size Selection */}
          <div className="pt-2 border-t border-stone-100">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
              <Boxes className="w-3.5 h-3.5 text-[#8C6D3B]" />
              <span>{t.calculator.tileEstimatorTitle}</span>
            </label>
            <select
              value={selectedTileType}
              onChange={(e) => setSelectedTileType(e.target.value)}
              className="w-full text-xs py-2 px-3 bg-white border border-stone-300 rounded-xs"
            >
              {Object.entries(TILE_BOX_SPECS).map(([key, opt]) => (
                <option key={key} value={key}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.calculator.reset}</span>
            </button>
          </div>
        </div>

        {/* Right Live Results Card (5 Cols) */}
        <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs p-6 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#8C6D3B] mb-2">
              Calculation Breakdown
            </div>

            {/* Net Carpet Area */}
            <div className="py-3 border-b border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-600">{t.calculator.carpetArea}</span>
              <span className="text-sm font-semibold text-stone-900 font-mono">
                {carpetArea.toFixed(1)} {unit === "feet" ? "sq ft" : "sq m"}
              </span>
            </div>

            {/* Wastage Buffer */}
            <div className="py-3 border-b border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-600">
                Wastage Buffer ({wastage}%)
              </span>
              <span className="text-sm font-semibold text-[#8C6D3B] font-mono">
                +{wastageArea.toFixed(1)} {unit === "feet" ? "sq ft" : "sq m"}
              </span>
            </div>

            {/* Highlighted Total Box */}
            <div className="my-5 p-4 bg-white border border-[#C5A880]/40 rounded-xs shadow-xs">
              <span className="text-xs font-semibold text-stone-500 block uppercase tracking-wider">
                {t.calculator.recommendedQuantity}
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-950">
                  {totalRecommendedArea.toFixed(1)}
                </span>
                <span className="text-sm font-semibold text-[#8C6D3B]">
                  {unit === "feet" ? "SQ. FEET" : "SQ. METERS"}
                </span>
              </div>
              <div className="text-[11px] text-stone-400 mt-1 font-mono">
                ≈ {unit === "feet" ? `${areaInSqM.toFixed(1)} sq meters` : `${areaInSqFt.toFixed(1)} sq ft`}
              </div>
            </div>

            {/* Estimated Box Count */}
            <div className="p-3 bg-stone-100/70 border border-stone-200 rounded-xs mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-700 font-medium">
                  {t.calculator.tileBoxEstimate}:
                </span>
                <span className="text-sm font-bold text-stone-900 font-mono">
                  {carpetArea > 0 ? `${estimatedBoxes} Boxes` : "—"}
                </span>
              </div>
              <span className="text-[10px] text-stone-500 block mt-0.5">
                Based on {boxCoverage} sq ft coverage per box.
              </span>
            </div>

            {/* Mandatory Disclaimer */}
            <div className="p-3 bg-amber-50/70 border border-amber-200 text-amber-900 text-[11px] rounded-xs leading-relaxed flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{t.calculator.disclaimer}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-2.5">
            <Link
              href={quoteUrl}
              className="w-full bg-stone-900 hover:bg-[#8C6D3B] text-stone-100 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{t.calculator.requestQuoteWithArea}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getCalculatorWhatsAppUrl({
                length: numLength,
                width: numWidth,
                unit: unit === "feet" ? "ft" : "m",
                carpetArea,
                wastagePercent: wastage,
                totalArea: totalRecommendedArea,
                materialType,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 px-4 text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Calculation on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
