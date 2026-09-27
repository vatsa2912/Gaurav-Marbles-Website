"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { useLanguage } from "@/lib/languageContext";

export function TestimonialPreview() {
  const { language } = useLanguage();
  const reviews = TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-20 bg-[#FDFCF7] border-t border-stone-200/80 font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
              Customer Perspectives
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              {language === "hi" ? "शोरूम ग्राहकों के अनुभव" : "Words from Our Showroom Visitors"}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-xl">
              {language === "hi"
                ? "फिरोजाबाद एवं आसपास के गृहस्वामियों, ठेकेदारों और वास्तुकारों का विश्वास।"
                : "Honest feedback and project experiences from homeowners, contractors, and architects in Firozabad."}
            </p>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6D3B] hover:text-stone-900 transition-colors group shrink-0"
          >
            <span>{language === "hi" ? "सभी समीक्षाएं देखें" : "View All Reviews"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-stone-200 rounded-xs p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-stone-300" />
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-medium text-[#8C6D3B] block truncate">
                    {rev.projectType}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-luxury text-sm font-bold text-stone-900">
                    {rev.name}
                  </h3>
                  <span className="text-[11px] text-stone-500 block">
                    {rev.role} • {rev.location}
                  </span>
                </div>
                {rev.verifiedShowroomVisitor && (
                  <span
                    className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-xs"
                    title="Verified Showroom Visitor"
                  >
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Disclaimer Notice */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-stone-400 italic">
            * Showcase demonstration feedback. Actual client reviews and verified Google ratings can be added directly by the showroom owner.
          </p>
        </div>
      </div>
    </section>
  );
}
