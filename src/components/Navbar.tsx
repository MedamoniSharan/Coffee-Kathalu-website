'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, X, Sparkles, Phone, Building2, MessageSquare } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CAFE_INFO } from '@/data/coffeeData';

interface NavbarProps {
  onOpenFranchise: () => void;
}

export default function Navbar({ onOpenFranchise }: NavbarProps) {
  const { totalItems, setIsCartOpen, setIsReservationOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Daily Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Ribbon */}
      <div className="bg-[#120905] text-[#EBDCCB] py-1.5 sm:py-2 px-3 sm:px-4 text-[10px] sm:text-[11px] font-semibold border-b border-[#362117] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-ping inline-block shrink-0" />
            <span className="text-[#E5A967] tracking-wider uppercase font-bold truncate">
              {CAFE_INFO.tagline}
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-[#D9BEA7]">
              {CAFE_INFO.teluguTagline}
            </span>
          </div>

          <div className="flex items-center shrink-0">
            <button
              onClick={onOpenFranchise}
              className="text-[#FAF6F0] hover:text-[#E5A967] transition-colors flex items-center gap-1 cursor-pointer text-[9px] sm:text-xs bg-[#24130B] px-2 sm:px-2.5 py-0.5 rounded-full border border-[#4A2818]"
            >
              <Building2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D89255]" />
              <span className="text-[#D89255] font-bold hidden xs:inline">FRANCHISE:</span>
              <span className="font-mono font-bold">{CAFE_INFO.franchisePhone}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Modern Header */}
      <header
        className={`fixed top-[28px] sm:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-cafe py-2 sm:py-2.5'
            : 'bg-[#FAF6F0]/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-[#E8D8C8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: Official Brand Logo Emblem */}
            <Link href="#home" className="flex items-center gap-2.5 group">
              <div className="relative h-10 w-28 sm:h-12 sm:w-36 rounded-xl bg-black px-2 py-1 border border-[#3E2317] shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={CAFE_INFO.logoEnglish}
                  alt="Coffee Kathalu Official Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="font-serif text-lg font-black tracking-tight text-[#24130B] leading-none group-hover:text-[#C27A45] transition-colors">
                  {CAFE_INFO.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#8C6249] font-bold mt-0.5">
                  WARANGAL • RANGASHAIPET
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-bold text-[#4A2818] hover:text-[#C27A45] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C27A45] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Quick Call */}
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="text-xs font-bold text-[#4A2818] bg-[#F5ECE1] hover:bg-[#EBDCCB] px-3.5 py-2 rounded-full border border-[#D9BEA7] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                title="Call Coffee Kathalu"
              >
                <Phone className="w-3.5 h-3.5 text-[#C27A45]" />
                <span>{CAFE_INFO.phone}</span>
              </a>

              {/* Table Reservation Button */}
              <button
                onClick={() => setIsReservationOpen(true)}
                className="text-xs font-bold tracking-wider uppercase text-[#4A2818] hover:text-white hover:bg-[#4A2818] px-4 py-2 rounded-full border border-[#4A2818]/60 transition-all flex items-center gap-1.5 active:scale-95 shadow-sm cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C27A45]" />
                Book Table
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Open Tray"
                className="relative p-2.5 rounded-full text-[#24130B] hover:bg-[#EBDCCB]/60 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C27A45] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="p-2 text-[#4A2818] bg-[#EBDCCB]/70 rounded-full"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-[#C27A45]" />
              </a>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#24130B]"
                aria-label="Tray"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute 0 right-0 bg-[#C27A45] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#24130B] rounded-lg hover:bg-[#EBDCCB]/60 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-[#E8D8C8] px-5 sm:px-6 py-4 sm:py-5 shadow-2xl transition-all animate-fadeIn max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-[#24130B] hover:text-[#C27A45] py-2 border-b border-[#E8D8C8]/40"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFranchise();
                  }}
                  className="w-full py-2.5 rounded-full bg-[#120905] text-[#E5A967] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Building2 className="w-4 h-4 text-[#D89255]" />
                  Franchise Inquiry (9014891413)
                </button>
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="w-full py-2.5 rounded-full bg-[#EBDCCB] text-[#4A2818] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C27A45]" />
                  Call {CAFE_INFO.displayPhone}
                </a>
                <a
                  href={`https://wa.me/91${CAFE_INFO.phone}?text=Hi%20Coffee%20Kathalu!%20I%20would%20like%20to%20order.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Order on WhatsApp
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsReservationOpen(true);
                  }}
                  className="w-full py-2.5 rounded-full border border-[#4A2818] text-[#24130B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C27A45]" />
                  Book Table Reservation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
