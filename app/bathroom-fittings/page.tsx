import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CategoryLandingView } from "@/components/categories/CategoryLandingView";
import { CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "Bathroom Fittings & Faucets in Firozabad — Gaurav Marbles",
  description:
    "Solid brass basin mixers, concealed rain shower diverters, health faucets, and architectural bath fittings at Gaurav Marbles Firozabad.",
  keywords: [
    "Bathroom fittings in Firozabad",
    "Brass basin mixers",
    "Rain shower systems",
    "Health faucet brass",
    "Bathroom accessories shop",
  ],
};

export default function BathroomFittingsPage() {
  const fittingsCategory = CATEGORIES.find((c) => c.id === "bathroom-fittings")!;

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <div className="flex-1">
        <CategoryLandingView
          category={fittingsCategory}
          guideTitle="Key Benchmarks for Long-Lasting Bathroom Fittings"
          guidePoints={[
            {
              title: "Forged Virgin Brass Core",
              desc: "Always check for heavy forged brass casting to prevent internal pinhole rusting and guarantee safe, lead-free water flow.",
            },
            {
              title: "Ceramic Disc Cartridges",
              desc: "Quality quarter-turn faucets feature European ceramic cartridges tested to withstand 500,000 opening cycles without drippage.",
            },
            {
              title: "Multi-Layer Plating & PVD",
              desc: "12-micron nickel-chrome plating and modern PVD coatings resist salty water corrosion and preserve metallic shine.",
            },
          ]}
        />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
