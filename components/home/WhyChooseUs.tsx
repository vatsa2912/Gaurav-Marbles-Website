"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  Eye,
  Compass,
  Store,
  FileCheck,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/languageContext";
import { SITE_CONFIG } from "@/data/siteConfig";

export function WhyChooseUs() {
  const { language } = useLanguage();

  const reasons = [
    {
      icon: Eye,
      title: "Direct Slab & Batch Inspection",
      hindiTitle: "प्रत्यक्ष स्लैब व लॉट निरीक्षण",
      desc: "Natural stone has organic vein variations. At our Firozabad showroom, you inspect the exact marble and granite slabs before delivery.",
      hindiDesc: "मार्बल और ग्रेनाइट के वास्तविक स्लैब को स्वयं देखकर अपनी पसंद के अनुसार चयन करने की पूरी सुविधा।",
    },
    {
      icon: Compass,
      title: "Material & Application Guidance",
      hindiTitle: "स्थान अनुसार सही पत्थर का सुझाव",
      desc: "Unbiased technical advice on which material suits kitchen counters, wet bathroom zones, high-traffic corridors, and stairs.",
      hindiDesc: "रसोई, बाथरूम या हॉल के लिए कौन सा पत्थर या टाइल सबसे उपयुक्त रहेगा, इस पर निष्पक्ष तकनीकी मार्गदर्शन।",
    },
    {
      icon: FileCheck,
      title: "Accurate Wastage & Quantity Estimates",
      hindiTitle: "सटीक मात्रा एवं वेस्टेज आंकलन",
      desc: "We help calculate exact square footage and appropriate cutting allowances, preventing over-purchasing or mid-project shortages.",
      hindiDesc: "नक्शे के अनुसार सही क्षेत्रफल और कटिंग वेस्टेज की गणना, जिससे अतिरिक्त खर्च या काम के बीच माल की कमी न हो।",
    },
    {
      icon: Store,
      title: "Trusted Physical Presence",
      hindiTitle: "विश्वसनीय स्थानीय शोरूम उपस्थिति",
      desc: "Located on Bypass Road, Purushottam Vihar, Firozabad. Accessible for homeowners, contractors, architects, and builders alike.",
      hindiDesc: "पुरुषोत्तम विहार, बाईपास रोड, फिरोजाबाद में प्रत्यक्ष प्रतिष्ठान, जहाँ हमेशा संपर्क और सहायता उपलब्ध है।",
    },
    {
      icon: CheckCircle,
      title: "Complete One-Stop Variety",
      hindiTitle: "एक ही छत के नीचे सम्पूर्ण समाधान",
      desc: "From flooring marble and tiles to designer wash basins, solid brass faucets, and specialized chemical adhesives.",
      hindiDesc: "फर्श के पत्थर से लेकर दीवार की टाइल्स, सेनेटरीवेयर, नल एवं उच्च गुणवत्ता वाले टाइल एडहेसिव एक ही स्थान पर।",
    },
    {
      icon: MessageCircle,
      title: "Direct Owner Consultation",
      hindiTitle: "सीधा व्यक्तिगत परामर्श",
      desc: `Proprietor ${SITE_CONFIG.owner} and team provide transparent rates, verified lot origins, and prompt WhatsApp assistance.`,
      hindiDesc: `प्रोपराइटर ${SITE_CONFIG.owner} एवं टीम द्वारा पारदर्शी दरें और त्वरित व्हाट्सएप्प सहायता।`,
    },
  ];

  return (
    <section className="py-20 bg-[#FDFCF7] font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
            The Gaurav Marbles Advantage
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {language === "hi"
              ? "गौरव मार्बल्स ही क्यों चुनें?"
              : "Why Homeowners Choose Gaurav Marbles"}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
            {language === "hi"
              ? "विश्वसनीय सलाह, गुणवत्तापूर्ण सामग्री और प्रत्यक्ष शोरूम अनुभव के साथ अपने सपनों के घर को बनाएं और भी भव्य।"
              : "Dedicated to helping you choose the right surfaces for your architecture with transparency, authentic stone inspection, and personal guidance."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-stone-200/90 rounded-xs shadow-xs hover:border-[#C5A880] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-[#FAF5EE] text-[#8C6D3B] border border-[#EADBCC] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-stone-900 mb-2">
                    {language === "hi" ? reason.hindiTitle : reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {language === "hi" ? reason.hindiDesc : reason.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-[11px] font-medium text-stone-400">
                  <span>Showroom Promise • Firozabad</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
