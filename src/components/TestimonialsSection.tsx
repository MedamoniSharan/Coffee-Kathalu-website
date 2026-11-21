'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/coffeeData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F5EBE1]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Mockup */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] text-[#543323] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#C27A45]" />
            Community Love
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2C1810] tracking-tight uppercase mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#6E5548] leading-relaxed">
            From daily morning commuters to remote work creatives and espresso aficionados, here is why our community considers Coffee MOOD their second home.
          </p>
        </div>

        {/* 3 Review Cards Matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FBF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8D6C4] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative group hover:-translate-y-1.5"
            >
              {/* Customer Avatar Circle */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C27A45] shadow-md mb-4 bg-[#EEDBCA]">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-0.5">
                {t.name}
              </h3>
              <p className="text-xs font-semibold text-[#8C6249] mb-4">
                {t.role}
              </p>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-[#6E5548] italic leading-relaxed mb-6 flex-1">
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Date & 5 Gold Stars */}
              <div className="pt-4 border-t border-[#E8D6C4]/80 w-full flex flex-col items-center gap-2">
                <span className="text-[11px] text-[#9E8373] font-medium tracking-wide">
                  {t.date}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D89255] text-[#D89255]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
