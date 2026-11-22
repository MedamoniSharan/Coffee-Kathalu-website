'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Coffee, Clock, Phone, Sparkles, Flame, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SPECIAL_OFFERS, CAFE_INFO } from '@/data/coffeeData';

export default function HeroSection() {
  const { addToCart, setIsReservationOpen } = useCart();
  const featuredOffer = SPECIAL_OFFERS[0]; // Filter Kaapi

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glowing Lights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-orange-200/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Subtle Coffee Bean Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c-5 0-9 4-9 9 0 7 9 16 9 16s9-9 9-16c0-5-4-9-9-9zm0 14c-1.5 0-2.5-3-2.5-5s1-3 2.5-3 2.5 1 2.5 3-1 5-2.5 5z' fill='%234A2818' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sleek Official Master Banner Header */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-black p-2.5 sm:p-3.5 border border-[#3E2317] shadow-cafe max-w-4xl mx-auto group hover:border-[#D89255]/50 transition-all duration-300">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bold Modern Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Status Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5ECE1] border border-[#E8D8C8] text-[#4A2818] text-xs font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>Brewing Live at Rangashaipet</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4A2818] text-[#FAF6F0] text-xs font-bold shadow-sm">
                <Clock className="w-3.5 h-3.5 text-[#E5A967]" />
                <span>Open 7:00 AM – 10:00 PM Daily</span>
              </div>
            </div>

            {/* Main Headline with Serif + Italic Polish */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-black tracking-tight text-[#24130B] leading-[1.06] mb-4">
              Every Cup Has <br />
              <span className="text-[#C27A45] italic font-serif">A Story To Tell...</span>
            </h1>

            {/* Telugu Subtitle */}
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#8C6249] mb-5 tracking-wide">
              ప్రతి కప్పుది ఓ కథే...
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5D463B] max-w-xl leading-relaxed mb-6 font-normal">
              Step into <strong>Coffee Kathalu Cafe</strong> in Warangal. Experience authentic Chikmagalur filter kaapi, slow-dum chai, thick milkshakes, fresh mojitos, crispy burgers, and royal handi biryani.
            </p>

            {/* Services Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Coffee', 'Tea', 'Snacks', 'Milkshakes', 'Juices', 'Fast Food', 'Biryani'].map((srv) => (
                <span
                  key={srv}
                  className="px-3.5 py-1 rounded-full bg-white/80 border border-[#E8D8C8] text-xs font-bold text-[#4A2818] uppercase tracking-wider shadow-sm hover:border-[#C27A45] hover:text-[#C27A45] transition-colors cursor-pointer"
                >
                  {srv}
                </span>
              ))}
            </div>

            {/* Action Buttons with Modern Interactive Glow */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#menu"
                className="px-8 py-3.5 rounded-full bg-[#4A2818] hover:bg-[#24130B] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 text-[#E5A967]" />
              </a>

              <a
                href={`https://wa.me/91${CAFE_INFO.phone}?text=Hi%20Coffee%20Kathalu!%20I%20would%20like%20to%20place%20an%20order.`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="px-6 py-3.5 rounded-full bg-[#FAF6F0] border-2 border-[#4A2818] hover:bg-[#4A2818]/5 text-[#24130B] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C27A45]" />
                <span>Call {CAFE_INFO.phone}</span>
              </a>

              <button
                onClick={() => setIsReservationOpen(true)}
                className="text-xs font-bold text-[#8C6249] hover:text-[#24130B] underline underline-offset-4 ml-1 flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C27A45]" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Proof Metric Tiles */}
            <div className="pt-6 border-t border-[#E8D8C8] w-full grid grid-cols-3 gap-4">
              <div className="glass-panel p-3.5 rounded-2xl">
                <p className="font-serif text-2xl font-black text-[#24130B]">4.9 ★</p>
                <p className="text-[11px] text-[#7A6153] font-semibold">Warangal&apos;s Favorite</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl">
                <p className="font-serif text-2xl font-black text-[#24130B]">7 Services</p>
                <p className="text-[11px] text-[#7A6153] font-semibold">Chai to Dum Biryani</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl">
                <p className="font-serif text-2xl font-black text-[#24130B]">7am – 10pm</p>
                <p className="text-[11px] text-[#7A6153] font-semibold">Open All 7 Days</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Storefront + Kaapi Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[430px] aspect-square flex items-center justify-center">
              {/* Outer Decorative Radial Halo */}
              <div className="absolute inset-0 rounded-full border border-[#D9BEA7]/50 bg-gradient-to-tr from-[#F5ECE1] to-[#EBDCCB]/60 shadow-inner" />

              {/* Main Visual: Storefront Architecture */}
              <div className="relative z-20 w-[84%] h-[84%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src={CAFE_INFO.storefrontImage}
                  alt="Coffee Kathalu Modern Cafe Storefront"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#E8D8C8] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#4A2818] text-[#FAF6F0] flex items-center justify-center shadow">
                      <Coffee className="w-4 h-4 text-[#E5A967]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#24130B]">Special Filter Kaapi</p>
                      <p className="text-[11px] text-[#8C6249] font-medium">Fresh Froth • ₹40</p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(featuredOffer)}
                    className="px-3.5 py-1.5 bg-[#C27A45] hover:bg-[#A76B43] text-white text-xs font-bold rounded-full shadow transition-all active:scale-95"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-3 -right-2 z-30 bg-[#24130B] text-[#FAF6F0] px-4 py-2 rounded-2xl shadow-xl border border-[#D89255]/40 flex items-center gap-2 animate-float-gentle">
                <Flame className="w-4 h-4 text-[#E5A967]" />
                <span className="text-xs font-bold tracking-wide">Rangashaipet Hub</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -left-2 z-30 bg-white text-[#24130B] px-4 py-2.5 rounded-2xl shadow-xl border border-[#E8D8C8] flex items-center gap-2.5 animate-float-delayed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold">100% Fresh Daily Preparation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
