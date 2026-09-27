import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ProductsCatalogView } from "@/components/products/ProductsCatalogView";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Products Catalogue — Marble, Tiles, Granite & Sanitaryware",
  description:
    "Explore Gaurav Marbles' complete product catalogue. Italian Statuario, Makrana white marble, GVT vitrified tiles, Rajasthan jet black granite, and designer bath fittings in Firozabad.",
  keywords: [
    "Marble products Firozabad",
    "Vitrified tiles catalogue",
    "Granite slabs price request",
    "Sanitaryware Firozabad",
    "Gaurav Marbles catalog",
  ],
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <div className="flex-1">
        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 py-20 text-center text-stone-500 font-sans-clean text-sm">
              Loading Gaurav Marbles product catalogue...
            </div>
          }
        >
          <ProductsCatalogView />
        </Suspense>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
