import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Inspiration Gallery — Gaurav Marbles Firozabad",
  description:
    "Explore architectural applications of natural marble, vitrified tiles, granite, and modern bathroom fittings across residential and commercial spaces.",
  keywords: [
    "Marble flooring design",
    "Kitchen granite ideas",
    "Bathroom tile layout",
    "Gaurav Marbles projects gallery",
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Portfolio", url: "/projects" },
            { name: "Projects & Inspiration", url: "/projects" },
          ]}
        />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-12 font-sans-clean">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
            Architectural Showcases
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Spaces Designed with Timeless Stone
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Gain inspiration for your residence, commercial floor, or luxury bathroom with our curated design showcases featuring marble, tiles, granite, and fittings.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-xs text-[11px] text-stone-500">
            <Info className="w-3.5 h-3.5 text-[#8C6D3B]" />
            <span>
              Design inspiration concepts. Real on-site completed project photos can easily be uploaded by the showroom owner.
            </span>
          </div>
        </div>

        {/* Gallery with Lightbox */}
        <ProjectGallery />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
