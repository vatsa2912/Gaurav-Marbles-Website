import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Gaurav Marbles — Showroom Location & Phone, Firozabad",
  description:
    "Contact Gaurav Marbles in Firozabad, Uttar Pradesh. Phone: 9897695715, Address: Purushottam Vihar, Bamba, Bypass Rd, near Tharpootha, Jagdamba Nagar. Open daily 9am-8pm.",
  keywords: [
    "Gaurav Marbles phone number",
    "Marble shop Firozabad address",
    "Gaurav Kumar Agrawal Firozabad",
    "Marble showroom near me Firozabad",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Information", url: "/contact" },
            { name: "Contact Showroom", url: "/contact" },
          ]}
        />

        {/* Section Header */}
        <div className="mt-6 mb-12 font-sans-clean">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
            Visit & Connect
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Contact Gaurav Marbles
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed">
            We welcome homeowners, contractors, architects, and builders to our Firozabad showroom. Experience our stone slabs, vitrified tiles, and sanitary collections first-hand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Business Details & Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 font-sans-clean">
            <div className="bg-white border border-stone-200 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C6D3B] font-semibold block mb-1">
                  Showroom Management
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Proprietor: <strong className="text-stone-800">{SITE_CONFIG.owner}</strong>
                </p>
              </div>

              {/* Showroom Address */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-100">
                <div className="p-2.5 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-1">
                    Showroom Address
                  </strong>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {SITE_CONFIG.address.full}
                  </p>
                  <a
                    href={SITE_CONFIG.maps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D3B] hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-100">
                <div className="p-2.5 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-1">
                    Phone & Call Support
                  </strong>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sm font-bold text-stone-900 hover:text-[#8C6D3B] transition-colors block"
                  >
                    {SITE_CONFIG.displayPhone}
                  </a>
                  <span className="text-[11px] text-stone-500 block mt-0.5">
                    Direct phone consultation for material queries
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-100">
                <div className="p-2.5 rounded-xs bg-[#25D366]/15 text-[#25D366] shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-1">
                    WhatsApp Chat
                  </strong>
                  <a
                    href={getWhatsAppUrl("Hello Gaurav Marbles, I would like to contact your showroom.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#25D366] hover:underline block"
                  >
                    +91 {SITE_CONFIG.phone}
                  </a>
                  <span className="text-[11px] text-stone-500 block mt-0.5">
                    Fast response for photos, rates & estimates
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-100">
                <div className="p-2.5 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-1">
                    Email
                  </strong>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-xs font-semibold text-stone-900 hover:underline break-all block"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-100">
                <div className="p-2.5 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-1">
                    Opening Hours
                  </strong>
                  <span className="text-xs text-stone-900 font-medium block">
                    {SITE_CONFIG.openingHours.days}
                  </span>
                  <span className="text-xs text-stone-600 block">
                    {SITE_CONFIG.openingHours.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Grid */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-stone-900 hover:bg-stone-800 text-stone-100 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppUrl("Hello Gaurav Marbles, I would like to enquire about visiting your showroom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form & Google Map Embed (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Showroom Visit Inquiry Form */}
            <div className="bg-white border border-stone-200 rounded-xs p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif-luxury text-xl font-bold text-stone-900 mb-1">
                Send an Inquiry or Schedule a Visit
              </h3>
              <p className="text-xs text-stone-600 mb-6">
                Fill in your details and our team will prepare material samples before you arrive.
              </p>
              <ContactForm />
            </div>

            {/* Google Maps Embed Card */}
            <div className="bg-white border border-stone-200 rounded-xs p-4 sm:p-6 shadow-xs font-sans-clean">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C6D3B]" />
                  <h4 className="font-serif-luxury font-bold text-stone-900 text-sm">
                    Showroom Location Map
                  </h4>
                </div>
                <a
                  href={SITE_CONFIG.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8C6D3B] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative aspect-16/9 w-full bg-stone-100 rounded-xs overflow-hidden border border-stone-200">
                <iframe
                  src={SITE_CONFIG.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gaurav Marbles Location in Firozabad"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-3 text-[11px] text-stone-500 flex items-center justify-between">
                <span>Near THARPOOTHA, Bypass Rd, Jagdamba Nagar, Firozabad (283203)</span>
                <a
                  href={SITE_CONFIG.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8C6D3B] font-medium hover:underline shrink-0 ml-2"
                >
                  Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
