import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CategoryLandingView } from "@/components/categories/CategoryLandingView";
import { CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "Marble Showroom in Firozabad — Makrana, Italian Statuario, Green Marble",
  description:
    "Explore pure Makrana white marble, Italian Statuario, Udaipur green marble and bookmatched slabs at Gaurav Marbles Firozabad. Full lot inspection and personalized guidance.",
  keywords: [
    "Marble shop in Firozabad",
    "Makrana marble dealer Firozabad",
    "Italian marble Uttar Pradesh",
    "Statuario marble price",
    "Marble dealers near me",
  ],
};

export default function MarblePage() {
  const marbleCategory = CATEGORIES.find((c) => c.id === "marble")!;

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <div className="flex-1">
        <CategoryLandingView
          category={marbleCategory}
          guideTitle="Key Considerations When Selecting Marble Slabs"
          guidePoints={[
            {
              title: "Lot Consistency & Matching",
              desc: "Always inspect the complete lot from the same quarry block to guarantee harmonious background color and continuous veining across rooms.",
            },
            {
              title: "Thickness & Polish Retention",
              desc: "Quality natural marble slabs should be at least 16mm to 18mm thick to withstand diamond repolishing decades later without structural thinning.",
            },
            {
              title: "Appropriate Room Placement",
              desc: "High calcite marbles (Makrana) are exceptional for living rooms, puja rooms, and courtyards, while acid-sensitive marbles require sealing in kitchens.",
            },
          ]}
        />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
