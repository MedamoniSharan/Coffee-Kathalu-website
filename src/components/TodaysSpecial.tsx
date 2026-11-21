'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Clock, Flame, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MENU_ITEMS } from '@/data/coffeeData';

export default function TodaysSpecial() {
  const { addToCart } = useCart();
  const specialItem = MENU_ITEMS.find((m) => m.id === 'menu-8') || MENU_ITEMS[0];

  // Countdown timer to midnight
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#FBF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-[#180E09] via-[#2A160E] to-[#140A06] text-white shadow-2xl border border-[#3E2317]">
          {/* Background Ambient Coffee Steam & Vignette */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <Image
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=80"
              alt="Coffee Ambiance"
              fill
              className="object-cover"
            />
          </div>

          {/* Radial warm lighting glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#C27A45]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-8 py-14 sm:px-12 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Special Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badge Header */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3D2314]/80 border border-[#C27A45]/40 text-[#EEDBCA] text-xs font-bold uppercase tracking-wider mb-4">
                <Flame className="w-4 h-4 text-[#D89255]" />
                <span>Today’s Special Roast</span>
              </div>

              {/* Title Matching Mockup: "Coffee Time" */}
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F5EBE1] tracking-tight leading-[1.05] mb-4">
                Coffee Time
              </h2>

              <p className="text-[#D9BEA7] text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
                Indulge in our signature Smoked Amber Mocha, crafted with single-origin Colombian beans, slow-melted Belgian hazelnut ganache, and Madagascar spices.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#EEDBCA] uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#D89255]" />
                  <span>Ends in:</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#2C1810]/90 border border-[#543323] px-3 py-1.5 rounded-xl text-center">
                    <span className="font-mono text-base font-bold text-[#EEDBCA]">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] block text-[#9E8373] uppercase">hrs</span>
                  </div>
                  <span className="text-white/40 font-bold">:</span>
                  <div className="bg-[#2C1810]/90 border border-[#543323] px-3 py-1.5 rounded-xl text-center">
                    <span className="font-mono text-base font-bold text-[#EEDBCA]">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] block text-[#9E8373] uppercase">min</span>
                  </div>
                  <span className="text-white/40 font-bold">:</span>
                  <div className="bg-[#2C1810]/90 border border-[#543323] px-3 py-1.5 rounded-xl text-center">
                    <span className="font-mono text-base font-bold text-[#EEDBCA]">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] block text-[#9E8373] uppercase">sec</span>
                  </div>
                </div>
              </div>

              {/* Order Special Button & Price */}
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-[#F5EBE1]">
                    ${specialItem.price.toFixed(2)}
                  </span>
                  <span className="text-sm sm:text-base text-[#9E8373] line-through font-semibold">
                    ${specialItem.originalPrice?.toFixed(2) || '15.00'}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(specialItem, 1, 'Regular')}
                  className="px-8 py-4 rounded-full bg-[#C27A45] hover:bg-[#D89255] text-white text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-orange-900/30 flex items-center gap-2 active:scale-95"
                >
                  <span>Order Special Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual with 50% discount stamp */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#543323] group">
                <Image
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
                  alt="Today's Special: Coffee Time"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* 50% Discount Stamp (Matching Mockup Starburst Badge) */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-[#D89255] to-[#C27A45] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl border-2 border-white/40 transform rotate-12 hover:rotate-0 transition-transform">
                  <span className="font-serif text-xl font-black leading-none">50%</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Discount</span>
                </div>

                {/* Steaming Overlay hint */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1A0D08]/85 backdrop-blur-md p-3.5 rounded-2xl border border-[#3E2317] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#EEDBCA]">Reserve Roast</p>
                    <p className="text-[11px] text-[#A76B43]">Freshly Ground & Extracted</p>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#D89255]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
