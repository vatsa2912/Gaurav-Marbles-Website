import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  Store,
  Compass,
  CheckCircle2,
  Users2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Gaurav Marbles Showroom, Firozabad",
  description:
    "Learn about Gaurav Marbles and proprietor Gaurav Kumar Agrawal. A trusted local destination in Firozabad for genuine marble slabs, vitrified tiles, granite, and sanitaryware.",
  keywords: [
    "About Gaurav Marbles",
    "Gaurav Kumar Agrawal",
    "Marble showroom Firozabad UP",
    "Stone dealers Firozabad",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "About", url: "/about" },
            { name: "Our Story & Showroom", url: "/about" },
          ]}
        />

        {/* Hero Banner */}
        <div className="mt-6 mb-16 text-center max-w-3xl mx-auto font-sans-clean">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
            The Gaurav Marbles Story
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            A Trusted Local Destination for Architectural Stone
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base mt-4 leading-relaxed font-light">
            Founded and managed by proprietor <strong>{SITE_CONFIG.owner}</strong>, Gaurav Marbles serves the Firozabad and broader Uttar Pradesh region with premium natural marble, vitrified tiles, heavy-duty granite, designer sanitaryware, and construction chemicals.
          </p>
        </div>

        {/* Visual Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 font-sans-clean">
          <div className="lg:col-span-6 relative aspect-4/3 w-full bg-stone-100 rounded-xs overflow-hidden border border-stone-200 shadow-luxury">
            <Image
              src="/images/showroom-exterior.webp"
              alt="Gaurav Marbles Showroom Firozabad"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] px-3 py-1 rounded-xs">
              Showroom on Bypass Road, Purushottam Vihar, Firozabad
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#8C6D3B] font-semibold">
              Our Showroom Philosophy
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              Material Guidance Built on Integrity and Practical Suitability
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Selecting natural stone is not like buying mass manufactured commodities. Every block of marble and granite carries unique grain patterns, varying calcite density, and distinct surface hardness.
            </p>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              At <strong>Gaurav Marbles</strong>, our focus is simple: we help customers find the material that genuinely performs best for their specific architectural requirements. Whether choosing an impervious black granite countertop that withstands daily Indian cooking, or selecting non-skid vitrified tiles for bathroom safety, our showroom provides direct, honest guidance.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-stone-50 rounded-xs border border-stone-200">
                <strong className="block text-stone-900 font-semibold mb-0.5">Proprietor</strong>
                <span className="text-stone-600">{SITE_CONFIG.owner}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xs border border-stone-200">
                <strong className="block text-stone-900 font-semibold mb-0.5">Location</strong>
                <span className="text-stone-600">Firozabad, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Our Service */}
        <div className="mb-20 font-sans-clean">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-1">
              Core Principles
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">
              How We Serve Every Home & Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-stone-200 rounded-xs shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-stone-900">
                Direct Lot Inspection
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Customers can view and touch entire marble lots and tile display stands in person to evaluate true color and mirror finish.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-xs shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-stone-900">
                Quantity Assistance
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We assist with room-by-room area calculations and recommended cutting wastage buffers to keep orders accurate.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-xs shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-stone-900">
                End-to-End Solutions
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Everything required from sub-base adhesives and waterproof grouts to countertop basins and solid brass faucets.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-xs shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] flex items-center justify-center">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-stone-900">
                Personalized Care
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Direct phone and WhatsApp consultation with the shop owner for quick quotes and batch availability confirmations.
              </p>
            </div>
          </div>
        </div>

        {/* Visit Showroom Callout */}
        <div className="bg-[#FAF8F5] border border-stone-200 rounded-xs p-8 sm:p-12 text-center max-w-3xl mx-auto font-sans-clean shadow-xs">
          <MapPin className="w-8 h-8 text-[#8C6D3B] mx-auto mb-3" />
          <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
            Experience Our Showroom in Firozabad
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
            Located at Purushottam Vihar, Bamba, Bypass Road, near Tharpootha, Jagdamba Nagar. Open daily from 9:00 AM to 8:00 PM.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-xs transition-colors"
            >
              Get Directions & Details
            </Link>
            <Link
              href="/quote"
              className="bg-[#C5A880] hover:bg-[#B39366] text-stone-950 text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-xs transition-colors"
            >
              Request a Quotation
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
