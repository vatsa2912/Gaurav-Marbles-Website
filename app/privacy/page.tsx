import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy — Gaurav Marbles",
  description: "Privacy policy and information handling practices for Gaurav Marbles showroom website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans-clean">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/privacy" },
            { name: "Privacy Policy", url: "/privacy" },
          ]}
        />

        <div className="mt-6 mb-10">
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-stone-500 mt-2">
            Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xs p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif-luxury text-base font-bold text-stone-900">
              1. Overview
            </h2>
            <p>
              At <strong>{SITE_CONFIG.name}</strong>, we respect your privacy. This website is an informational business showroom portal designed to showcase our marble, tiles, granite, sanitaryware, and chemical inventory, and facilitate customer inquiries. We do not collect online payments or process financial transactions directly through this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-luxury text-base font-bold text-stone-900">
              2. Information We Collect
            </h2>
            <p>
              When you submit an enquiry form, request a quote, or contact us via WhatsApp, we may collect the following contact information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Your name and contact phone number</li>
              <li>Email address (optional)</li>
              <li>Product requirements, area dimensions, or project specifications</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-luxury text-base font-bold text-stone-900">
              3. How Your Information is Used
            </h2>
            <p>
              Information collected is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Provide accurate quotations, material guidance, and lot availability details</li>
              <li>Coordinate showroom visits or respond to WhatsApp and phone queries</li>
              <li>Improve customer assistance and product recommendations</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information with any third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-luxury text-base font-bold text-stone-900">
              4. WhatsApp & External Links
            </h2>
            <p>
              Our website provides links to external services such as WhatsApp and Google Maps. When you click these links, your interaction is governed by the respective privacy policies of those third-party platforms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-luxury text-base font-bold text-stone-900">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this policy or our data practices, please contact:
            </p>
            <div className="p-3 bg-stone-50 rounded-xs border border-stone-200 text-xs">
              <div><strong>{SITE_CONFIG.name}</strong></div>
              <div>Proprietor: {SITE_CONFIG.owner}</div>
              <div>Phone: {SITE_CONFIG.displayPhone}</div>
              <div>Email: {SITE_CONFIG.email}</div>
              <div>Address: {SITE_CONFIG.address.full}</div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
