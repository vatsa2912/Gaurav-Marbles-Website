import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, Quote, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Client Testimonials & Showroom Reviews — Gaurav Marbles",
  description:
    "Read experiences from homeowners, architects, and contractors who have visited Gaurav Marbles showroom in Firozabad for stone, tile, and fitting requirements.",
  keywords: [
    "Gaurav Marbles reviews",
    "Marble showroom feedback Firozabad",
    "Tiles review Firozabad",
  ],
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "About", url: "/about" },
            { name: "Testimonials", url: "/testimonials" },
          ]}
        />

        <div className="text-center max-w-3xl mx-auto mt-6 mb-12 font-sans-clean">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
            Client Voices
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Showroom Visitor Testimonials
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Honest perspectives from homeowners, property developers, and design professionals who have consulted with Gaurav Marbles in Firozabad.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-xs text-[11px] text-stone-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D3B]" />
            <span>
              Representative customer feedback interface. Verified Google Maps reviews can be synchronized by the showroom owner.
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-sans-clean">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-stone-200 rounded-xs p-6 sm:p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-200" />
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100">
                  <span className="text-xs font-semibold text-[#8C6D3B] block">
                    {t.projectType}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-luxury text-base font-bold text-stone-900">
                    {t.name}
                  </h3>
                  <span className="text-xs text-stone-500">
                    {t.role} • {t.location}
                  </span>
                </div>
                <span className="text-[11px] text-stone-400">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Share Your Experience */}
        <div className="mt-16 bg-[#FAF8F5] border border-stone-200 rounded-xs p-8 text-center max-w-2xl mx-auto font-sans-clean">
          <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
            Visited Gaurav Marbles Showroom?
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            We value your honest feedback. Share your experience with our showroom assistance, slab inspection, or installation outcomes.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl("Hello Gaurav Marbles, I would like to share feedback regarding my showroom visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-xs transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Review on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-xs transition-colors"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
