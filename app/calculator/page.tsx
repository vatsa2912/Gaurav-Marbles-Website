import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AreaCalculator } from "@/components/calculator/AreaCalculator";
import { HelpCircle, Calculator, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Marble & Tile Area Calculator — Wastage & Quantity Estimator",
  description:
    "Calculate floor and wall surface area in feet or meters, compute recommended cutting wastage (10%-15%), and estimate tile boxes needed for your project with Gaurav Marbles Firozabad.",
  keywords: [
    "Tile area calculator",
    "Marble square foot calculator",
    "Flooring wastage estimator",
    "How many boxes of tiles do I need",
  ],
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Utilities", url: "/calculator" },
            { name: "Area Calculator", url: "/calculator" },
          ]}
        />

        <div className="my-6">
          <AreaCalculator />
        </div>

        {/* Informative Guidance on Wastage & Installation */}
        <div className="mt-12 bg-white border border-stone-200 rounded-xs p-6 sm:p-8 font-sans-clean shadow-xs">
          <h3 className="font-serif-luxury text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#8C6D3B]" />
            <span>Understanding Flooring Wastage & Tile Cutting</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600 leading-relaxed">
            <div>
              <strong className="block text-stone-900 font-semibold mb-1">
                Standard Straight Layouts (8% – 10%)
              </strong>
              <span>
                Standard parallel laying has low cutting losses. A 10% buffer is recommended to account for wall perimeter trims and column boxing.
              </span>
            </div>
            <div>
              <strong className="block text-stone-900 font-semibold mb-1">
                Diagonal & Herringbone Patterns (12% – 15%)
              </strong>
              <span>
                Angled layouts generate triangular offcuts along perimeter edges. A 15% allowance ensures you do not run short of identical shade batches.
              </span>
            </div>
            <div>
              <strong className="block text-stone-900 font-semibold mb-1">
                Batch Shade Protection
              </strong>
              <span>
                Tile factories produce tiles in distinct shade and caliber lots. Ordering sufficient quantity in the original batch prevents slight color mismatch later.
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
