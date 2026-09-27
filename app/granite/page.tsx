import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CategoryLandingView } from "@/components/categories/CategoryLandingView";
import { CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "Granite Dealers in Firozabad — Jet Black, Tan Brown & Slabs",
  description:
    "Explore Rajasthan Telephone Jet Black, Tan Brown, and Kashmir White granite slabs at Gaurav Marbles Firozabad. Ultimate heat and scratch resistance for kitchen counters and stairs.",
  keywords: [
    "Granite dealers in Firozabad",
    "Jet black granite price",
    "Kitchen countertop granite",
    "Tan brown granite Firozabad",
  ],
};

export default function GranitePage() {
  const graniteCategory = CATEGORIES.find((c) => c.id === "granite")!;

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <div className="flex-1">
        <CategoryLandingView
          category={graniteCategory}
          guideTitle="Why Natural Granite Reigns Supreme in Kitchens"
          guidePoints={[
            {
              title: "Extreme Heat Resistance",
              desc: "Hot kadhais, pans, and cookers straight from gas stoves will not scorch, discolor, or thermal-shock high-density natural granite counters.",
            },
            {
              title: "Zero Knife Scratching",
              desc: "With a Mohs hardness of 6.5 to 7, standard kitchen steel knives cannot gouge or scratch the surface during daily meal preparation.",
            },
            {
              title: "Edge Profiling Options",
              desc: "Granite allows full bullnose, chamfer, or double-sandwich edge moulding for rounded safety and architectural luxury.",
            },
          ]}
        />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
