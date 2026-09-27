"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { validatePhone } from "@/lib/validation";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/languageContext";

export function ContactForm() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Showroom Visit Inquiry");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Gaurav Marbles,\nMy name is ${name || "Visitor"}.\nPhone: ${phone || "Not provided"}\nSubject: ${subject}\nMessage: ${message || "I would like to visit the showroom or inquire about stone supplies."}`;
    window.open(getWhatsAppUrl(text), "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-stone-50 border border-stone-200 rounded-xs p-8 text-center space-y-3">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
          Message Received
        </h4>
        <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
          Thank you, {name}. Our team will review your inquiry and connect with you shortly.
        </p>
        <button
          onClick={handleWhatsAppRedirect}
          className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white py-2.5 px-5 rounded-xs text-xs font-semibold shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect Immediately on WhatsApp</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans-clean">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
          {error}
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Gaurav Kumar"
          className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10-digit mobile number"
          className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
          Inquiry Type
        </label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
        >
          <option value="Showroom Visit Guidance">Planning a Showroom Visit</option>
          <option value="Marble Slabs Price Inquiry">Marble Slabs & Lot Inquiry</option>
          <option value="Tiles Bulk Order / Estimation">Tiles Selection & Estimation</option>
          <option value="Sanitaryware & Fittings">Sanitaryware & Bath Fittings</option>
          <option value="Contractor / Architect Consultation">Architect / Contractor Trade Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
          Message / Requirement
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Let us know what materials or spaces you are planning..."
          className="w-full text-sm py-2.5 px-3 bg-white border border-stone-300 rounded-xs focus:ring-1 focus:ring-stone-900"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
        <button
          type="submit"
          className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-100 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Send Message</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppRedirect}
          className="sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 px-4 text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat Directly</span>
        </button>
      </div>
    </form>
  );
}
