"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin } from "lucide-react";
import { ProjectItem, PROJECTS_GALLERY } from "@/data/projects";

type GalleryCategory = "All" | "Residential" | "Kitchen" | "Bathroom" | "Flooring" | "Wall Cladding" | "Commercial";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    "All",
    "Flooring",
    "Kitchen",
    "Bathroom",
    "Wall Cladding",
    "Residential",
    "Commercial",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <div className="space-y-8 font-sans-clean">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`text-xs uppercase tracking-wider font-medium py-2 px-4 rounded-full transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-stone-900 text-stone-100 shadow-sm"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="group relative bg-white border border-stone-200 rounded-xs overflow-hidden shadow-xs hover:shadow-luxury-hover transition-all duration-300"
          >
            {/* Image Container */}
            <div
              onClick={() => openLightbox(idx)}
              className="relative aspect-4/3 w-full bg-stone-100 cursor-pointer overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-2.5 bg-white/90 text-stone-900 rounded-full shadow-md">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>

              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-stone-200 px-2.5 py-1 rounded-xs">
                {project.category}
              </div>
            </div>

            {/* Information Body */}
            <div className="p-4 sm:p-5">
              <h3 className="font-serif-luxury text-base sm:text-lg font-semibold text-stone-900 group-hover:text-[#8C6D3B] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#8C6D3B]" />
                  <span>{project.location}</span>
                </span>
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-xs">
                  Inspiration Sample
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer hidden sm:block"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer hidden sm:block"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col bg-stone-950 border border-stone-800 rounded-xs overflow-hidden">
            <div className="relative aspect-16/10 w-full bg-black">
              <Image
                src={filteredProjects[lightboxIndex].image}
                alt={filteredProjects[lightboxIndex].title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="p-5 bg-stone-900 text-stone-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A880]">
                    {filteredProjects[lightboxIndex].category}
                  </span>
                  <h3 className="font-serif-luxury text-lg font-semibold text-white">
                    {filteredProjects[lightboxIndex].title}
                  </h3>
                </div>
                <div className="text-xs text-stone-400">
                  {lightboxIndex + 1} of {filteredProjects.length}
                </div>
              </div>

              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                {filteredProjects[lightboxIndex].description}
              </p>

              {filteredProjects[lightboxIndex].materialsUsed && (
                <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-stone-800">
                  <span className="text-[11px] text-stone-400 mr-1 self-center">Materials:</span>
                  {filteredProjects[lightboxIndex].materialsUsed.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded-xs"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
