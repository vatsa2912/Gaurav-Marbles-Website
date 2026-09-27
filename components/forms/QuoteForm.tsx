"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { validateQuoteForm } from "@/lib/validation";
import { getQuoteWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/languageContext";
import { CATEGORIES } from "@/data/categories";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const { t, language } = useLanguage();

  const initialProduct = searchParams.get("product") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialArea = searchParams.get("area") || "";
  const initialMaterial = searchParams.get("material") || "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(initialCategory || "marble");
  const [product, setProduct] = useState(initialProduct || initialMaterial || "");
  const [quantity, setQuantity] = useState(initialArea ? `Estimated Area: ${initialArea}` : "");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateQuoteForm({ name, phone, email, message });
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    if (!quantity.trim() && !message.trim()) {
      setErrors({ quantity: "Please provide your approximate quantity, area or requirements." });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean submission (ready for Firebase / Email hook later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppContinuation = () => {
    const waUrl = getQuoteWhatsAppUrl({
      name,
      category,
      product: product || "General Stone Inquiry",
      quantity: quantity || message,
    });
    window.open(waUrl, "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-white border border-stone-200 rounded-xs p-8 sm:p-10 shadow-luxury text-center max-w-xl mx-auto font-sans-clean">
        <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
          {t.quote.successTitle}
        </h3>
        <p className="text-stone-600 text-sm mt-3 leading-relaxed">
          {t.quote.successMessage}
        </p>

        <div className="mt-6 p-4 bg-stone-50 border border-stone-200 rounded-xs text-xs text-left space-y-1.5 text-stone-700">
          <div><strong>Name:</strong> {name}</div>
          <div><strong>Phone:</strong> {phone}</div>
          <div><strong>Category:</strong> {category}</div>
          {product && <div><strong>Product:</strong> {product}</div>}
          {quantity && <div><strong>Requirement:</strong> {quantity}</div>}
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={handleWhatsAppContinuation}
            className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 px-6 font-semibold text-sm rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.quote.continueOnWhatsApp}</span>
          </button>

          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-stone-500 hover:text-stone-900 underline cursor-pointer"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-stone-200 rounded-xs p-6 sm:p-10 shadow-luxury space-y-6 font-sans-clean"
    >
      <div>
        <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900">
          {t.quote.title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          {t.quote.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            {t.quote.fullName}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Gaurav Agrawal"
            className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            {t.quote.phone}
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile number"
            className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            {t.quote.emailOptional}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. name@example.com"
            className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            {t.quote.category}
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900 cursor-pointer"
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.slug}>
                {language === "hi" ? c.hindiName : c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Specific Product or Material */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.quote.selectedProduct} (Optional)
        </label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="e.g. Italian Statuario White or 600x1200 Onyx Tiles"
          className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
        />
      </div>

      {/* Quantity / Requirements */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.quote.quantityRequirement}
        </label>
        <input
          type="text"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="e.g. Approx 1,200 sq ft for ground floor living & bedrooms"
          className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
        />
        {errors.quantity && (
          <p className="text-red-600 text-xs mt-1">{errors.quantity}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.quote.message}
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Provide any specific details (e.g. delivery to Firozabad, need installation advice, etc.)"
          className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
        />
      </div>

      {/* Submit Button & Direct WhatsApp Alternative */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-100 py-3.5 px-6 text-sm font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? t.quote.submitting : t.quote.submitQuote}</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppContinuation}
          className="sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 px-6 text-sm font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Quote via WhatsApp</span>
        </button>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D3B]" />
        <span>Your contact details are used strictly for showroom quotation and guidance.</span>
      </div>
    </form>
  );
}
