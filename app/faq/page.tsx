import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQPageSchema } from "@/components/seo/SchemaData";
import { FAQ_DATA } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) — Gaurav Marbles Firozabad",
  description:
    "Common questions about marble slabs, vitrified tiles, granite countertops, showroom visiting hours, and quotation requests at Gaurav Marbles in Firozabad, UP.",
  keywords: [
    "Marble FAQ Firozabad",
    "Gaurav Marbles questions",
    "Tile adhesive questions",
    "Granite kitchen counter guide",
  ],
};

export default function FAQPage() {
  const schemaItems = FAQ_DATA.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <FAQPageSchema items={schemaItems} />
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Information", url: "/faq" },
            { name: "FAQ", url: "/faq" },
          ]}
        />

        <div className="text-center max-w-3xl mx-auto mt-6 mb-12 font-sans-clean">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
            Help & Material Guidance
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Everything you need to know about our marble varieties, vitrified tile formats, showroom inspections, and quotation procedures.
          </p>
        </div>

        <FAQAccordion />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
