import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Phone, Clock, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Request a Showroom Quotation — Gaurav Marbles Firozabad",
  description:
    "Request custom price estimates for marble slabs, vitrified tiles, granite countertops, and sanitaryware from Gaurav Marbles in Firozabad. Swift WhatsApp and phone assistance.",
  keywords: [
    "Marble quote Firozabad",
    "Tiles quotation",
    "Granite slab price request",
    "Gaurav Marbles enquiry",
  ],
};

export default function QuotePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Services", url: "/quote" },
            { name: "Request a Quote", url: "/quote" },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="bg-white border border-stone-200 rounded-xs p-10 text-center text-stone-500 text-sm">
                  Loading quotation form...
                </div>
              }
            >
              <QuoteForm />
            </Suspense>
          </div>

          {/* Right Information & Showroom Contact (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 font-sans-clean">
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-xs p-6 sm:p-8 space-y-5">
              <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                Direct Showroom Assistance
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Prefer to discuss your project directly? Contact proprietor <strong>{SITE_CONFIG.owner}</strong> and our knowledgeable showroom staff for immediate material recommendations, stock availability, and lot viewings.
              </p>

              <div className="space-y-3 pt-2 text-xs text-stone-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xs bg-stone-200/70 text-stone-800 shrink-0">
                    <Phone className="w-4 h-4 text-[#8C6D3B]" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                      Call Showroom
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-stone-900 font-semibold hover:underline"
                    >
                      {SITE_CONFIG.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xs bg-[#25D366]/15 text-[#25D366] shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                      Instant WhatsApp
                    </span>
                    <a
                      href={getWhatsAppUrl("Hello Gaurav Marbles, I would like to request an instant quotation.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold hover:underline"
                    >
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xs bg-stone-200/70 text-stone-800 shrink-0">
                    <Clock className="w-4 h-4 text-[#8C6D3B]" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                      Operating Hours
                    </span>
                    <span className="text-stone-900 font-medium">
                      {SITE_CONFIG.openingHours.text}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xs bg-stone-200/70 text-stone-800 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#8C6D3B]" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                      Showroom Address
                    </span>
                    <span className="text-stone-900 font-medium leading-relaxed block">
                      {SITE_CONFIG.address.full}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <a
                  href={SITE_CONFIG.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-100 py-3 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Price on Request Notice */}
            <div className="p-4 bg-white border border-stone-200 rounded-xs text-xs text-stone-600 leading-relaxed">
              <strong className="block text-stone-900 font-semibold mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8C6D3B]" />
                <span>Why We Provide Personalized Quotations</span>
              </strong>
              <span>
                Natural stone prices vary based on block quarry origin, surface crystalline grade, slab lot thickness (16mm to 20mm), and transportation distance. A personalized estimate ensures you receive exact and competitive rates.
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
