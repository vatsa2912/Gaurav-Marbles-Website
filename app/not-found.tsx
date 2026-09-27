import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Compass, Home, Search, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-3xl mx-auto px-4 py-20 text-center font-sans-clean flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#FAF5EE] text-[#8C6D3B] border border-[#EADBCC] flex items-center justify-center mb-6">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
          404 — Page Not Found
        </span>

        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Looking for a Specific Stone or Product?
        </h1>

        <p className="text-stone-600 text-xs sm:text-sm mt-3 max-w-md leading-relaxed">
          The page or product link you requested may have moved or been updated. You can browse our showroom collections or contact our team directly.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-100 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#B39366] text-stone-950 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 py-3.5 px-5 text-xs font-semibold uppercase tracking-wider rounded-xs border border-stone-300 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#8C6D3B]" />
            <span>Call Showroom</span>
          </a>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
