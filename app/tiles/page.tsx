import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CategoryLandingView } from "@/components/categories/CategoryLandingView";
import { CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "Tiles Shop in Firozabad — Vitrified, Floor & Wall Tiles",
  description:
    "Premium GVT/PGVT vitrified tiles, 600x1200mm large format slabs, anti-skid bathroom tiles, and kitchen wall tiles at Gaurav Marbles Firozabad showroom.",
  keywords: [
    "Tiles shop in Firozabad",
    "Vitrified floor tiles",
    "GVT tiles 600x1200",
    "Bathroom wall tiles Firozabad",
    "Parking tiles",
  ],
};

export default function TilesPage() {
  const tilesCategory = CATEGORIES.find((c) => c.id === "tiles")!;

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <div className="flex-1">
        <CategoryLandingView
          category={tilesCategory}
          guideTitle="Selecting the Right Tile Format & Finish"
          guidePoints={[
            {
              title: "Large Formats (600×1200mm)",
              desc: "Large slabs minimize grout lines, creating a grand, seamless stone appearance that visually expands living halls and reception areas.",
            },
            {
              title: "Matte Anti-Skid for Bathrooms",
              desc: "R9 or R10 rated matte vitrified tiles provide essential traction under wet conditions while repelling soap scum and hard water scale.",
            },
            {
              title: "Proper Tile Adhesive Usage",
              desc: "Never lay large vitrified tiles with traditional sand and cement alone; always use polymer-modified Type-2 adhesive to prevent debonding.",
            },
          ]}
        />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
