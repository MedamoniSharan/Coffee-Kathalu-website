'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/coffeeData';

export default function StoreGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#F5EBE1]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] text-[#543323] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C27A45]" />
            Visual Diary
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2C1810] tracking-tight uppercase mb-4">
            Store Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#6E5548] leading-relaxed">
            Take a glimpse into our cafe sanctuary, artisan roasting lab, and the craftsmanship poured into every single cup.
          </p>
        </div>

        {/* Gallery Grid (Matches Top Right of Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.url)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border border-[#E8D6C4] transition-all duration-300 bg-[#EEDBCA]/30"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D89255] mb-1">
                  {img.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-white">
                    {img.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Subtle top badge */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-[#543323] shadow-sm">
                {img.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[85vh] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
