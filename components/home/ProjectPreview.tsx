"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Maximize2 } from "lucide-react";
import { PROJECTS_GALLERY } from "@/data/projects";
import { useLanguage } from "@/lib/languageContext";

export function ProjectPreview() {
  const { language } = useLanguage();
  const previewProjects = PROJECTS_GALLERY.slice(0, 3);

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-stone-200/80 font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D3B] block mb-2">
              Inspiration Showcase
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              {language === "hi" ? "वास्तुशिल्प एवं इंटीरियर प्रोजेक्ट्स" : "Spaces Brought to Life"}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-xl">
              {language === "hi"
                ? "प्राकृतिक मार्बल, विट्रीफाइड टाइल्स और प्रीमियम फिटिंग्स के उत्कृष्ट संयोजन से तैयार किए गए प्रेरणादायक कमरे।"
                : "Explore how natural stone slabs, vitrified formats, and architectural fittings transform living spaces, baths, and commercial lobbies."}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6D3B] hover:text-stone-900 transition-colors group shrink-0"
          >
            <span>{language === "hi" ? "सभी प्रोजेक्ट्स देखें" : "View All Projects"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {previewProjects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group bg-white border border-stone-200 hover:border-stone-400 rounded-xs overflow-hidden shadow-xs hover:shadow-luxury-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-stone-200 px-2 py-0.5 rounded-xs">
                  {project.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#8C6D3B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8C6D3B]" />
                    <span>{project.location}</span>
                  </span>
                  <span className="text-[#8C6D3B] font-semibold text-xs">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
