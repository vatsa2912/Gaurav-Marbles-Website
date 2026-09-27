import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { CATEGORIES } from "@/data/categories";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#12100E] text-stone-300 pt-16 pb-12 border-t border-stone-800 font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-800/80">
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif-luxury text-2xl font-bold tracking-[0.22em] text-white block">
                GAURAV
              </span>
              <span className="font-serif-luxury text-xs tracking-[0.38em] text-[#C5A880] block font-medium">
                MARBLES
              </span>
            </Link>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Firozabad’s trusted destination for natural marble slabs, vitrified tiles, granite, designer sanitaryware, and construction chemicals. Authentic materials inspected directly at our physical showroom.
            </p>

            <div className="text-xs text-stone-400 space-y-1 pt-1">
              <div className="text-[#C5A880] font-medium">
                Proprietor: {SITE_CONFIG.owner}
              </div>
              <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Verified Physical Showroom in Firozabad, U.P.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={getWhatsAppUrl("Hello Gaurav Marbles, I would like to inquire about showroom visit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 text-xs rounded-xs border border-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={SITE_CONFIG.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 text-stone-300 hover:text-white text-xs rounded-xs border border-stone-700 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Explore
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Projects & Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Area Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Catalogue</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Request Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections Links */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Collections
            </h3>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-600" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Visit Showroom
            </h3>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {SITE_CONFIG.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{SITE_CONFIG.openingHours.time} (Daily)</span>
              </div>

              <div className="pt-2">
                <a
                  href={SITE_CONFIG.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C5A880] hover:text-white transition-colors text-xs font-medium"
                >
                  <span>Get Directions on Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</p>

          <div className="flex items-center space-x-6 text-xs">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">
              Contact Showroom
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
