'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Award, Users, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffeeData';

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
                src={CAFE_INFO.storefrontImage}
                alt="Coffee Kathalu Storefront - Rangashaipet, Warangal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#D89255] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                  19-6-288/1, Rangashaipet, Warangal
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold">
                  Coffee Kathalu Cafe Storefront
                </p>
                <p className="text-xs text-[#EEDBCA] mt-1">
                  &quot;Every cup has a story... ప్రతి కప్పుది ఓ కథే...&quot;
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute bottom-2.5 right-2.5 sm:-bottom-6 sm:right-6 bg-[#2C1810]/95 backdrop-blur-md text-[#EEDBCA] px-3.5 sm:px-5 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl border border-[#D9BEA7]/30 flex items-center gap-2.5 sm:gap-3">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#D89255] shrink-0" />
              <div>
                <p className="font-serif text-sm sm:text-lg font-bold text-white leading-tight">7 AM – 10 PM</p>
                <p className="text-[10px] sm:text-[11px] text-[#A76B43]">Open Every Single Day</p>
              </div>
            </div>
          </div>

          {/* Right Column: About Us Content (Matches Mockup) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] text-[#543323] text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5 text-[#C27A45]" />
              Our Story & Heritage
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2C1810] tracking-tight uppercase mb-5">
              About Coffee Kathalu
            </h2>

            <p className="text-base text-[#5D463B] leading-relaxed mb-4 font-normal">
              Located at <strong>Rangashaipet, Warangal</strong>, <strong>Coffee Kathalu</strong> is born from the belief that life’s finest moments happen when people come together over a steaming beverage. In Telugu, <em>&quot;Kathalu&quot;</em> translates to <em>stories</em> — and our cafe is a welcoming space where laughter, friendships, and conversations spark naturally.
            </p>

            <p className="text-sm text-[#7A6153] leading-relaxed mb-6">
              Whether you are stopping by at 7 AM for a kickstart with our signature South Indian Filter Kaapi and authentic Dum Chai, or dropping in with friends for crispy Burgers, Peri-Peri Fries, thick KitKat Shakes, and chilled Fruit Mojitos, our team prepares every item with quality ingredients and genuine warmth.
            </p>

            {/* Quick Details Box */}
            <div className="w-full bg-[#F5EBE1] rounded-2xl p-4 border border-[#E8D6C4] mb-6 space-y-2 text-xs text-[#543323]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C27A45] shrink-0" />
                <span className="font-semibold">{CAFE_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C27A45] shrink-0" />
                <span>Monday to Sunday: <strong>7:00 AM – 10:00 PM</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C27A45] shrink-0" />
                <span>Direct Contact: <strong>+91 {CAFE_INFO.phone}</strong></span>
              </div>
            </div>

            {/* 5 Service offerings */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8 w-full">
              {['Artisan Teas', 'Specialty Coffee', 'Crispy Fast Food', 'Thick Milkshakes', 'Fresh Juices & Coolers'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C27A45] shrink-0" />
                  <span className="text-xs font-bold text-[#3D2314]">{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                Visit Our Cafe
              </a>
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="px-7 py-3 rounded-full border border-[#543323] text-[#543323] hover:bg-[#543323] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
