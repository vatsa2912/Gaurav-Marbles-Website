"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Phone,
  Calculator,
  Languages,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { CATEGORIES } from "@/data/categories";
import { useLanguage } from "@/lib/languageContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCollectionsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.calculator, href: "/calculator" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      {/* Top micro-bar for showroom hours & location reminder */}
      <div className="bg-[#181614] text-stone-300 text-[11px] py-1.5 px-4 border-b border-stone-800/80 tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span>{SITE_CONFIG.openingHours.text}</span>
            </span>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span className="hidden sm:inline text-stone-400">
              {SITE_CONFIG.address.short}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hover:text-stone-100 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>{SITE_CONFIG.displayPhone}</span>
            </a>
            <span className="text-stone-600">|</span>
            {/* Language toggle in top bar */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1 text-[#C5A880] hover:text-white transition-colors uppercase font-medium cursor-pointer"
            >
              <Languages className="w-3 h-3" />
              <span>{language === "en" ? "हिन्दी" : "English"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FCFBF8]/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3"
            : "bg-[#FCFBF8] border-b border-stone-200/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Text Logo */}
            <Link
              href="/"
              className="group flex flex-col items-start leading-tight"
              aria-label="Gaurav Marbles Home"
            >
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.22em] text-stone-900 group-hover:text-[#8C6D3B] transition-colors">
                GAURAV
              </span>
              <span className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.38em] text-[#8C6D3B] font-medium -mt-0.5">
                MARBLES
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              <Link
                href="/"
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#8C6D3B] ${
                  pathname === "/" ? "text-[#8C6D3B] font-semibold" : "text-stone-700"
                }`}
              >
                {t.nav.home}
              </Link>

              <Link
                href="/about"
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#8C6D3B] ${
                  pathname === "/about" ? "text-[#8C6D3B] font-semibold" : "text-stone-700"
                }`}
              >
                {t.nav.about}
              </Link>

              {/* Collections Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-[#8C6D3B] transition-colors py-2 cursor-pointer"
                  aria-expanded={isCollectionsOpen}
                >
                  <span>{t.nav.collections}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isCollectionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCollectionsOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#FCFBF8] border border-stone-200 shadow-xl rounded-xs py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 border-b border-stone-100 text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                      {language === "hi" ? "प्रमुख श्रेणियां" : "Showroom Categories"}
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/${cat.slug}`}
                        className="flex items-center justify-between px-3.5 py-2 text-xs text-stone-800 hover:bg-stone-100 hover:text-[#8C6D3B] transition-colors"
                      >
                        <span className="font-medium">
                          {language === "hi" ? cat.hindiName : cat.name}
                        </span>
                        <span className="text-[10px] text-stone-400">→</span>
                      </Link>
                    ))}
                    <div className="pt-1.5 border-t border-stone-100 mt-1">
                      <Link
                        href="/products"
                        className="block px-3.5 py-1.5 text-xs text-[#8C6D3B] font-medium hover:underline"
                      >
                        {t.products.allProducts} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/products"
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#8C6D3B] ${
                  pathname === "/products" ? "text-[#8C6D3B] font-semibold" : "text-stone-700"
                }`}
              >
                {t.nav.products}
              </Link>

              <Link
                href="/projects"
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#8C6D3B] ${
                  pathname === "/projects" ? "text-[#8C6D3B] font-semibold" : "text-stone-700"
                }`}
              >
                {t.nav.projects}
              </Link>

              <Link
                href="/calculator"
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#8C6D3B] flex items-center gap-1 ${
                  pathname === "/calculator" ? "text-[#8C6D3B] font-semibold" : "text-stone-700"
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>{t.nav.calculator}</span>
              </Link>

              <Link
                href="/contact"
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#8C6D3B] ${
                  pathname === "/contact" ? "text-[#8C6D3B] font-semibold" : "text-stone-700"
                }`}
              >
                {t.nav.contact}
              </Link>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center space-x-3.5">
              <a
                href={getWhatsAppUrl("Hello Gaurav Marbles, I would like to inquire about your collections.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 text-stone-700 hover:text-[#25D366] transition-colors"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <Link
                href="/quote"
                className="bg-stone-900 hover:bg-[#8C6D3B] text-stone-100 text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-xs transition-all shadow-xs border border-stone-800"
              >
                {t.nav.getQuote}
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="px-2 py-1 text-[11px] font-semibold text-[#8C6D3B] border border-[#C5A880]/50 rounded-xs"
              >
                {language === "en" ? "हिन्दी" : "EN"}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 text-stone-800 hover:text-stone-900"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FCFBF8] border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="space-y-1 divide-y divide-stone-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2.5 text-sm font-medium tracking-wide ${
                    pathname === link.href ? "text-[#8C6D3B] font-semibold" : "text-stone-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="py-2.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  {t.nav.collections}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/${cat.slug}`}
                      className="text-xs py-1.5 px-2 bg-stone-100 text-stone-800 rounded-xs hover:bg-stone-200"
                    >
                      {language === "hi" ? cat.hindiName : cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-stone-200 space-y-2">
              <Link
                href="/quote"
                className="w-full block text-center bg-stone-900 text-stone-100 text-xs font-semibold uppercase tracking-wider py-3 rounded-xs"
              >
                {t.nav.getQuote}
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-100 text-stone-900 text-xs font-medium rounded-xs border border-stone-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8C6D3B]" />
                  <span>{t.nav.callNow}</span>
                </a>
                <a
                  href={getWhatsAppUrl("Hello Gaurav Marbles, I would like to inquire about your collections.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] text-white text-xs font-medium rounded-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
