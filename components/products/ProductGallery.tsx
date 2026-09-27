"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const displayImages = images.length > 0 ? images : ["/images/categories/marble.webp"];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="relative aspect-4/3 sm:aspect-16/12 w-full bg-stone-100 border border-stone-200 rounded-xs overflow-hidden shadow-xs">
        <Image
          src={displayImages[selectedImageIndex]}
          alt={`${productName} view ${selectedImageIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-all duration-300"
        />
        <div className="absolute bottom-3 left-3 bg-stone-900/70 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 rounded-xs tracking-wider uppercase font-sans-clean">
          View {selectedImageIndex + 1} of {displayImages.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      {displayImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative w-20 h-16 sm:w-24 sm:h-18 rounded-xs overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                selectedImageIndex === idx
                  ? "border-[#8C6D3B] ring-1 ring-[#8C6D3B]"
                  : "border-stone-200 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="96px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
