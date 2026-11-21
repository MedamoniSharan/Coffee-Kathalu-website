'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Coffee, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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
    { name: 'Store Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF7F2]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E8D6C4]/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#3D2314] text-[#EEDBCA] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 text-[#EEDBCA]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2C1810] group-hover:text-[#A76B43] transition-colors leading-none">
                Coffee MOOD
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8C6249] font-medium mt-0.5">
                KATHALU CAFE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#4A3228] hover:text-[#A76B43] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A76B43] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Quick Table Reservation Link */}
            <button
              onClick={() => setIsReservationOpen(true)}
              className="text-xs font-semibold tracking-wider uppercase text-[#8C6249] hover:text-[#3D2314] px-3 py-1.5 rounded-full border border-[#D9BEA7]/80 hover:border-[#8C6249] transition-all flex items-center gap-1.5"
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
              className="px-6 py-2.5 rounded-full bg-[#593826] hover:bg-[#3D2314] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu & Cart Buttons */}
          <div className="flex md:hidden items-center gap-2">
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
                className="text-base font-medium text-[#3D2314] hover:text-[#A76B43] py-1 border-b border-[#E8D6C4]/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
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
                className="w-full py-2.5 rounded-full bg-[#593826] text-white text-sm font-medium shadow"
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
