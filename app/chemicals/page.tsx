import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CategoryLandingView } from "@/components/categories/CategoryLandingView";
import { CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "Tile Adhesives, Epoxy Grouts & Sealers in Firozabad",
  description:
    "Type 1 and Type 2 polymer modified tile adhesives, 100% stain-proof epoxy grouts, and penetrating marble sealers at Gaurav Marbles Firozabad.",
  keywords: [
    "Tile adhesive Firozabad",
    "Epoxy grout waterproof",
    "Marble sealer spray",
    "Tile cleaner Firozabad",
    "Gaurav Marbles chemicals",
  ],
};

export default function ChemicalsPage() {
  const chemicalsCategory = CATEGORIES.find((c) => c.id === "chemicals")!;

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <div className="flex-1">
        <CategoryLandingView
          category={chemicalsCategory}
          guideTitle="Why Construction Chemicals Are Mandatory for Modern Tiles"
          guidePoints={[
            {
              title: "Polymer-Modified Adhesives",
              desc: "Vitrified tiles have less than 0.05% water absorption, meaning traditional cement cannot key into the tile. Polymer adhesive forms a chemical grip.",
            },
            {
              title: "100% Waterproof Epoxy Grout",
              desc: "Epoxy joints cure non-porous like glass, completely preventing black mold lines, water seepage into lower floors, and oil absorption.",
            },
            {
              title: "Penetrating Stone Impregnation",
              desc: "White marbles should be sealed with silane/siloxane barrier before installation to prevent rust stains from sub-screed moisture.",
            },
          ]}
        />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
