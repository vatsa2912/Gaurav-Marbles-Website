import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CategoryLandingView } from "@/components/categories/CategoryLandingView";
import { CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "Sanitaryware Showroom in Firozabad — Basins, Wall-Hung Closets",
  description:
    "Designer countertop wash basins, rimless wall-hung water closets, and SS 304 handmade kitchen sinks at Gaurav Marbles Firozabad showroom.",
  keywords: [
    "Sanitaryware in Firozabad",
    "Wash basin showroom Firozabad",
    "Wall hung toilet price",
    "Handmade kitchen sink SS 304",
  ],
};

export default function SanitarywarePage() {
  const sanitaryCategory = CATEGORIES.find((c) => c.id === "sanitaryware")!;

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <div className="flex-1">
        <CategoryLandingView
          category={sanitaryCategory}
          guideTitle="Modern Sanitaryware Planning & Hygiene"
          guidePoints={[
            {
              title: "Rimless Tornado Flushing",
              desc: "Eliminates hard-to-clean inner ceramic rim ledges where bacteria gathers, delivering a thorough 360-degree wash with less water.",
            },
            {
              title: "Nano-Glaze Porcelain",
              desc: "Micro-porous free ceramic glaze prevents yellowish hard water staining and maintains gleaming white ceramics over years.",
            },
            {
              title: "Countertop Basin Aesthetics",
              desc: "Pair vessel or fluted basins with tall pillar faucets for five-star hotel bathroom vanity appeal.",
            },
          ]}
        />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
