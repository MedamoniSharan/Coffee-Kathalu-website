'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Coffee, Clock, Phone, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SPECIAL_OFFERS, CAFE_INFO } from '@/data/coffeeData';

export default function HeroSection() {
  const { addToCart, setIsReservationOpen } = useCart();
  const featuredOffer = SPECIAL_OFFERS[0]; // Filter Kaapi

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Subtle Coffee Bean Stamp Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none select-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c-5 0-9 4-9 9 0 7 9 16 9 16s9-9 9-16c0-5-4-9-9-9zm0 14c-1.5 0-2.5-3-2.5-5s1-3 2.5-3 2.5 1 2.5 3-1 5-2.5 5z' fill='%23543323' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm Ambient Radial Glow Behind the Cup */}
      <div className="absolute top-1/4 right-5 md:right-1/4 w-[380px] h-[380px] md:w-[520px] md:h-[520px] bg-gradient-to-tr from-[#E6CAAF]/60 to-[#FCEFD8]/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Official Banner Showcase Card */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-black p-2 sm:p-3 border border-[#3E2317] shadow-xl max-w-4xl mx-auto">
          <div className="relative w-full aspect-[1024/163]">
            <Image
              src={CAFE_INFO.logoBanner}
              alt="Coffee Kathalu Official Logo Banner"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag with Location & Timings */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] border border-[#D9BEA7] text-[#543323] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#C27A45]" />
                <span>Rangashaipet, Warangal</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#543323] text-[#EEDBCA] text-xs font-bold tracking-wide">
                <Clock className="w-3.5 h-3.5 text-[#D89255]" />
                <span>Open 7:00 AM – 10:00 PM Daily</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight text-[#2C1810] leading-[1.08] mb-3">
              Every Cup Has A Story...
            </h1>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#A76B43] mb-4">
              ప్రతి కప్పుది ఓ కథే...
            </p>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#5D463B] max-w-xl leading-relaxed mb-6 font-normal">
              Welcome to <strong>Coffee Kathalu Cafe</strong> — Warangal&apos;s warm neighborhood gathering spot.
              From morning authentic filter kaapi &amp; dum chai to evening thick milkshakes, fresh juices, crispy snacks, fast food, and handi biryani.
            </p>

            {/* Services Quick Chips Matching Logo Strip */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Coffee', 'Tea', 'Snacks', 'Milkshakes', 'Juices', 'Fast Food', 'Biryani'].map((srv) => (
                <span
                  key={srv}
                  className="px-3 py-1 rounded-full bg-[#F5EBE1] border border-[#E8D6C4] text-xs font-bold text-[#543323] uppercase tracking-wider"
                >
                  {srv}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#menu"
                className="px-8 py-3.5 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Menu
              </a>
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="px-6 py-3.5 rounded-full border-2 border-[#543323] hover:bg-[#543323]/10 text-[#3D2314] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C27A45]" />
                <span>Call {CAFE_INFO.phone}</span>
              </a>
              <button
                onClick={() => setIsReservationOpen(true)}
                className="text-xs font-bold text-[#8C6249] hover:text-[#3D2314] underline underline-offset-4 ml-1 flex items-center gap-1"
              >
                Reserve a Table &rarr;
              </button>
            </div>

            {/* Quick Proof Highlights */}
            <div className="pt-6 border-t border-[#E8D6C4] w-full grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-2xl font-bold text-[#2C1810]">4.9 ★</p>
                <p className="text-xs text-[#7A6153]">Warangal’s Favorite</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#2C1810]">7 Categories</p>
                <p className="text-xs text-[#7A6153]">Chai, Coffee, Biryani & More</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#2C1810]">7am - 10pm</p>
                <p className="text-xs text-[#7A6153]">Open Every Day</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Coffee Cup, Splash, and Roasted Beans */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Outer decorative wave circle */}
              <div className="absolute inset-0 rounded-full border border-[#D9BEA7]/40 bg-gradient-to-b from-[#F5EBE1] to-[#EEDBCA]/50 shadow-inner" />

              {/* Main Cup Image */}
              <div className="relative z-20 w-[82%] h-[82%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80"
                  alt="A Coffee Ritual for Every Mood & Story - Coffee Kathalu"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Steam effect simulation */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
                  <div className="w-1.5 h-10 bg-white/40 blur-sm rounded-full animate-steam" />
                  <div className="w-1.5 h-12 bg-white/30 blur-sm rounded-full animate-steam [animation-delay:0.7s]" />
                  <div className="w-1.5 h-8 bg-white/40 blur-sm rounded-full animate-steam [animation-delay:1.4s]" />
                </div>

                {/* Cup Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#E8D6C4] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#543323] text-white flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-[#EEDBCA]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2C1810]">Special Filter Kaapi</p>
                      <p className="text-[11px] text-[#8C6249]">Fresh Brewed • ₹40</p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(featuredOffer)}
                    className="px-3 py-1.5 bg-[#C27A45] hover:bg-[#A76B43] text-white text-xs font-semibold rounded-full shadow transition-all active:scale-95"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* Floating Roasted Bean Badge 1 */}
              <div className="absolute -top-3 -right-2 z-30 bg-[#2C1810] text-[#EEDBCA] px-3.5 py-2 rounded-2xl shadow-xl border border-[#D9BEA7]/40 flex items-center gap-2 animate-float-gentle">
                <Star className="w-4 h-4 fill-[#D89255] text-[#D89255]" />
                <span className="text-xs font-bold tracking-wide">Rangashaipet Hub</span>
              </div>

              {/* Floating Coffee Splash badge 2 */}
              <div className="absolute -bottom-4 -left-2 z-30 bg-[#FAF5EF] text-[#3D2314] px-4 py-2.5 rounded-2xl shadow-xl border border-[#E8D6C4] flex items-center gap-2.5 animate-float-delayed">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                <span className="text-xs font-semibold">Chai & Coffee Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roasted Coffee Beans Horizontal Ribbon (Matching Mockup) */}
        <div className="mt-16 pt-6 relative">
          <div className="relative w-full h-24 sm:h-32 rounded-3xl overflow-hidden shadow-md border border-[#E8D6C4]">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1600&q=80"
              alt="Coffee Kathalu Roasting & Brewing Craft"
              fill
              className="object-cover brightness-95 contrast-105"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/75 via-[#2C1810]/40 to-[#2C1810]/75 flex items-center justify-between px-6 sm:px-12 text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EEDBCA]">
                  COFFEE • TEA • SNACKS • MILKSHAKES • JUICES • FAST FOOD • BIRYANI
                </span>
                <span className="hidden sm:inline text-white/50">•</span>
                <span className="hidden sm:inline text-xs sm:text-sm text-white/90">
                  Daily 7:00 AM – 10:00 PM at Rangashaipet
                </span>
              </div>
              <a
                href="#offers"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F5EBE1] hover:text-[#D89255] transition-colors shrink-0"
              >
                <span>View Deals</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
