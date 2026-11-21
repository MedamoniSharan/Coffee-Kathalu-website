'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Coffee, Sparkles, Phone } from 'lucide-react';
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
    { name: 'Services & Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'Store Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF7F2]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E8D6C4]/60'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Coffee Kathalu Branding */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-full bg-[#3D2314] text-[#EEDBCA] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 border border-[#A76B43]/50">
              <Coffee className="w-5 h-5 text-[#EEDBCA]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tight text-[#2C1810] group-hover:text-[#A76B43] transition-colors leading-none">
                Coffee Kathalu
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8C6249] font-bold mt-0.5">
                RANGASHAIPET • WARANGAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#4A3228] hover:text-[#A76B43] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A76B43] hover:after:w-full after:transition-all after:duration-200"
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
  );
}
