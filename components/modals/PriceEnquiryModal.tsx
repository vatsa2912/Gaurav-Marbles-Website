"use client";

import React, { useState } from "react";
import { X, Send, MessageCircle, CheckCircle2, Phone } from "lucide-react";
import { Product } from "@/types/product";
import { getProductWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { validatePhone } from "@/lib/validation";
import { useLanguage } from "@/lib/languageContext";
import { SITE_CONFIG } from "@/data/siteConfig";

interface PriceEnquiryModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PriceEnquiryModal({
  product,
  isOpen,
  onClose,
}: PriceEnquiryModalProps) {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(language === "hi" ? "कृपया अपना नाम दर्ज करें।" : "Please enter your name.");
      return;
    }
    if (!validatePhone(phone)) {
      setError(language === "hi" ? "कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।" : "Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const customMessage = `Hello Gaurav Marbles,\nI am requesting price details for: ${product.name}\nName: ${name || "Customer"}\nPhone: ${phone || "Not provided"}\nRequirement: ${requirement || "Price & Availability"}\nPlease assist me.`;
    window.open(getWhatsAppUrl(customMessage), "_blank");
    onClose();
  };

  const resetAndClose = () => {
    setName("");
    setPhone("");
    setRequirement("");
    setError("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity"
    >
      <div
        className="relative w-full max-w-lg bg-[#FCFBF8] border border-stone-300 rounded-sm shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-semibold text-[#8C6D3B] uppercase tracking-widest font-sans-clean">
                {language === "hi" ? "त्वरित मूल्य पूछताछ" : "Quick Price Enquiry"}
              </span>
              <h2
                id="modal-title"
                className="text-xl sm:text-2xl font-semibold font-serif-luxury text-stone-900 mt-1"
              >
                {t.products.getPrice}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {product.name}
              </p>
              <div className="mt-2 inline-flex items-center text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-xs">
                <span>{product.category.toUpperCase()} • {product.size}</span>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {t.quote.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Agrawal"
                  className="w-full text-sm py-2 px-3 border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {t.quote.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full text-sm py-2 px-3 border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {language === "hi" ? "आवश्यकता / मात्रा (वैकल्पिक)" : "Requirement / Approx Quantity (Optional)"}
                </label>
                <textarea
                  rows={2}
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  placeholder="e.g. 500 sq ft for living room or 2 bathrooms"
                  className="w-full text-sm py-2 px-3 border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-800 bg-white"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-100 py-2.5 px-4 text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === "hi" ? "पूछताछ सबमिट करें" : "Submit Enquiry"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 px-4 text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === "hi" ? "व्हाट्सएप पूछताछ" : "WhatsApp Enquiry"}</span>
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-stone-200 text-center">
              <span className="text-[11px] text-stone-500">
                {language === "hi" ? "या सीधे कॉल करें:" : "Or call showroom directly:"}{" "}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-medium text-stone-900 hover:underline"
                >
                  {SITE_CONFIG.displayPhone}
                </a>
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif-luxury font-semibold text-stone-900">
              {t.quote.successTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-sm mx-auto">
              {language === "hi"
                ? `धन्यवाद ${name}! हम ${product.name} की मूल्य सूची के साथ जल्द आपसे संपर्क करेंगे।`
                : `Thank you, ${name}! Our team will provide price details for ${product.name} promptly.`}
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 px-4 text-sm font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.quote.continueOnWhatsApp}</span>
              </button>

              <button
                onClick={resetAndClose}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 py-2.5 text-xs font-medium rounded-xs transition-colors"
              >
                {language === "hi" ? "बंद करें" : "Close Window"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
