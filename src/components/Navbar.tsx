'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, X, Sparkles, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CAFE_INFO } from '@/data/coffeeData';

interface NavbarProps {
  onOpenSignIn: () => void;
}

export default function Navbar({ onOpenSignIn }: NavbarProps) {
  const { totalItems, setIsCartOpen, setIsReservationOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Daily Offers', href: '#offers' },
    { name: 'Store Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      {/* Top Franchise & Tagline Ribbon (Matching the Official Banner) */}
      <div className="bg-[#140A06] text-[#EEDBCA] py-1.5 px-4 text-[11px] sm:text-xs font-semibold border-b border-[#362117] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#D89255] tracking-widest uppercase font-bold">
              {CAFE_INFO.tagline}
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline text-[#BFA695]">
              {CAFE_INFO.teluguTagline}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CAFE_INFO.franchisePhone}`}
              className="text-[#EEDBCA] hover:text-[#D89255] transition-colors flex items-center gap-1"
            >
              <span className="text-[#C27A45] font-bold">FOR FRANCHISE:</span>
              <span className="font-mono font-bold">{CAFE_INFO.franchisePhone}</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-[31px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF7F2]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#E8D6C4]/60'
            : 'bg-[#FBF7F2]/80 backdrop-blur-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: Official Brand Logo Image */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative h-10 w-28 sm:h-12 sm:w-36 overflow-hidden rounded-lg bg-black px-1.5 py-1 border border-[#3E2317] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={CAFE_INFO.logoEnglish}
                  alt="Coffee Kathalu Official Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="font-serif text-lg font-black tracking-tight text-[#2C1810] leading-none group-hover:text-[#A76B43] transition-colors">
                  {CAFE_INFO.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#8C6249] font-bold mt-0.5">
                  WARANGAL • RANGASHAIPET
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-bold text-[#4A3228] hover:text-[#A76B43] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A76B43] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Quick Call Button */}
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="text-xs font-bold text-[#543323] bg-[#EEDBCA]/60 hover:bg-[#EEDBCA] px-3.5 py-2 rounded-full border border-[#D9BEA7] transition-all flex items-center gap-1.5 shadow-sm"
                title="Call Coffee Kathalu"
              >
                <Phone className="w-3.5 h-3.5 text-[#C27A45]" />
                <span>{CAFE_INFO.phone}</span>
              </a>

              {/* Table Reservation Button */}
              <button
                onClick={() => setIsReservationOpen(true)}
                className="text-xs font-semibold tracking-wider uppercase text-[#8C6249] hover:text-[#3D2314] px-3 py-2 rounded-full border border-[#D9BEA7]/80 hover:border-[#8C6249] transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C27A45]" />
                Book Table
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Open Cart"
                className="relative p-2.5 rounded-full text-[#3D2314] hover:bg-[#EEDBCA]/40 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C27A45] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Sign In Button */}
              <button
                onClick={onOpenSignIn}
                className="px-5 py-2 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Menu & Cart Buttons */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="p-2 text-[#543323] bg-[#EEDBCA]/50 rounded-full"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-[#C27A45]" />
              </a>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#3D2314]"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute 0 right-0 bg-[#C27A45] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#3D2314] rounded-lg hover:bg-[#EEDBCA]/40 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF7F2] border-b border-[#E8D6C4] px-6 py-5 shadow-lg transition-all animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#3D2314] hover:text-[#A76B43] py-1 border-b border-[#E8D6C4]/40"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="w-full py-2.5 rounded-full bg-[#EEDBCA] text-[#543323] text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C27A45]" />
                  Call {CAFE_INFO.displayPhone}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsReservationOpen(true);
                  }}
                  className="w-full py-2.5 rounded-full border border-[#8C6249] text-[#3D2314] text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C27A45]" />
                  Book Table Reservation
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="w-full py-2.5 rounded-full bg-[#543323] text-white text-sm font-medium shadow"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
