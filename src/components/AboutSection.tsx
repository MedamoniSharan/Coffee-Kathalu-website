'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Award, Users, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FBF7F2] relative overflow-hidden">
      {/* Decorative Roasted Coffee Bean Heart Shape Accent (Matching Mockup) */}
      <div className="absolute right-6 top-12 opacity-40 hidden md:block">
        <div className="w-24 h-24 rounded-full border border-[#D9BEA7] flex items-center justify-center p-3">
          <Heart className="w-12 h-12 text-[#C27A45] fill-[#C27A45]/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Barista Team Photo (Matches Mockup) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80"
                alt="Our Dedicated Barista Team at Coffee MOOD"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#EEDBCA]">
                  Certified Specialty Baristas
                </p>
                <p className="font-serif text-xl font-bold">
                  Crafting Every Pour With Heart & Precision
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#2C1810] text-[#EEDBCA] px-5 py-3.5 rounded-2xl shadow-xl border border-[#D9BEA7]/30 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#D89255]" />
              <div>
                <p className="font-serif text-lg font-bold text-white leading-tight">12+ Years</p>
                <p className="text-[11px] text-[#A76B43]">Artisan Coffee Roasting</p>
              </div>
            </div>
          </div>

          {/* Right Column: About Us Content (Matches Mockup) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] text-[#543323] text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5 text-[#C27A45]" />
              Our Story & Heritage
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2C1810] tracking-tight uppercase mb-6">
              About US
            </h2>

            <p className="text-base text-[#5D463B] leading-relaxed mb-6 font-normal">
              We currently have locations in Arkansas, California, Florida, Georgia, North Carolina,
              Pennsylvania, South Carolina, and Washington. If you hold an active real estate license in any of these
              states, you can simply transfer your license to Coffee MOOD Roasters. We are passionate about
              direct-trade farm partnerships, micro-batch roasts, and building a welcoming neighborhood sanctuary.
            </p>

            <p className="text-sm text-[#7A6153] leading-relaxed mb-8">
              Every bean is ethically harvested, sun-dried, and roasted in small batches to preserve its distinct geographic terroir, vibrant acidity, and velvety chocolate notes.
            </p>

            {/* Pillars checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C27A45] shrink-0" />
                <span className="text-xs font-semibold text-[#3D2314]">100% Direct Fair-Trade</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C27A45] shrink-0" />
                <span className="text-xs font-semibold text-[#3D2314]">Daily Small-Batch Roasts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C27A45] shrink-0" />
                <span className="text-xs font-semibold text-[#3D2314]">Eco-Friendly Compostable Cups</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C27A45] shrink-0" />
                <span className="text-xs font-semibold text-[#3D2314]">Award-Winning Latte Art</span>
              </div>
            </div>

            {/* Button Matching Mockup: "See About Us" */}
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              See About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
