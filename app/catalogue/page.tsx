import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FileText, Download, MessageCircle, Mail, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Product Catalogue & Digital Brochure — Gaurav Marbles",
  description:
    "Request or download the digital product catalogue for Gaurav Marbles Firozabad. Italian and Indian marble slabs, vitrified tiles, granite, and sanitaryware brochures.",
  keywords: [
    "Marble catalogue PDF",
    "Gaurav Marbles brochure",
    "Tiles catalogue Firozabad",
  ],
};

export default function CataloguePage() {
  // Flag configured for when a physical PDF brochure is placed in public/catalogue.pdf
  const isPdfAvailable = false;

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Resources", url: "/catalogue" },
            { name: "Product Catalogue", url: "/catalogue" },
          ]}
        />

        <div className="max-w-3xl mx-auto my-12 text-center font-sans-clean">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF5EE] border border-[#EADBCC] text-[#8C6D3B] text-xs font-semibold uppercase tracking-widest rounded-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Showroom Edition</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Gaurav Marbles Official Catalogue
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Our comprehensive stone and tile brochure is currently being compiled with newly received quarry lots and large format vitrified tiles.
          </p>

          {/* Placeholder Card */}
          <div className="mt-10 bg-white border border-stone-200 rounded-xs p-8 sm:p-12 shadow-luxury text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#FAF5EE] text-[#8C6D3B] border border-[#EADBCC] flex items-center justify-center mx-auto mb-5">
              <FileText className="w-8 h-8" />
            </div>

            <h2 className="font-serif-luxury text-2xl font-bold text-stone-900">
              Catalogue Coming Soon
            </h2>

            <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
              We are finalizing high-resolution photographs and specifications for our latest marble slabs, vitrified series, and sanitaryware collections.
            </p>

            {/* Action when PDF is uploaded */}
            {isPdfAvailable ? (
              <div className="mt-8">
                <a
                  href="/catalogue.pdf"
                  download="Gaurav_Marbles_Catalogue.pdf"
                  className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#B39366] text-stone-950 font-semibold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xs transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalogue (PDF)</span>
                </a>
              </div>
            ) : (
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl("Hello Gaurav Marbles, please share your digital catalogue and latest slab images on WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Slab Photos via WhatsApp</span>
                </a>

                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xs transition-colors"
                >
                  <span>Browse Online Catalog</span>
                </Link>
              </div>
            )}
          </div>

          {/* Showroom Visit CTA */}
          <div className="mt-12 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8C6D3B]" />
              <span>Or visit showroom to inspect physical sample boards in person.</span>
            </span>
            <Link href="/contact" className="text-stone-900 font-semibold hover:underline">
              Get Showroom Directions →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
