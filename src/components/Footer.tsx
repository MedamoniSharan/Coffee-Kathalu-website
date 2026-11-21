'use client';

import React from 'react';
import Link from 'next/link';
import { Coffee, ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffeeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#462E22] text-[#F5EBE1] pt-16 pb-8 border-t border-[#362117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5E4233]">
          {/* Col 1: Brand & Socials (Matching Mockup) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-[#2C1810] text-[#EEDBCA] flex items-center justify-center border border-[#6E4E3C]">
                <Coffee className="w-5 h-5 text-[#EEDBCA]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF5EF]">
                  Coffee Kathalu
                </span>
                <span className="text-[10px] tracking-widest text-[#D9BEA7] uppercase font-semibold">
                  WARANGAL • RANGASHAIPET
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#D9BEA7] leading-relaxed max-w-sm mb-5">
              A heartwarming cafe for every mood and every story. Freshly brewed South Indian filter kaapi, authentic dum chai, thick milkshakes, and delicious fast food.
            </p>

            {/* Instagram Tag Badge */}
            <a
              href={CAFE_INFO.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#362117] text-[#EEDBCA] text-xs font-bold mb-5 hover:bg-[#C27A45] hover:text-white transition-colors"
            >
              <span>Instagram:</span>
              <span className="text-[#D89255] hover:underline font-mono">{CAFE_INFO.social.instagramTag}</span>
            </a>

            {/* Social Icons with circular borders (Matching Mockup) */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href={CAFE_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#8C6249] flex items-center justify-center text-[#EEDBCA] hover:bg-[#C27A45] hover:text-white hover:border-[#C27A45] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={CAFE_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#8C6249] flex items-center justify-center text-[#EEDBCA] hover:bg-[#C27A45] hover:text-white hover:border-[#C27A45] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={CAFE_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#8C6249] flex items-center justify-center text-[#EEDBCA] hover:bg-[#C27A45] hover:text-white hover:border-[#C27A45] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services / Offerings */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9BEA7]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Artisan Teas & Chai
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Specialty Coffee
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Delicious Fast Food
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Thick Milkshakes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Fresh Juices & Coolers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9BEA7]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-white transition-colors">
                  Daily Offers
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Coffee Kathalu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Store Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info (Exact Real Business Details) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <div className="text-xs text-[#D9BEA7] space-y-2.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D89255] shrink-0 mt-0.5" />
                <p>
                  <strong>19-6-288/1</strong>, Rangashaipet,<br />
                  Warangal - 506005, Telangana
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D89255] shrink-0" />
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="text-[#F5EBE1] font-bold hover:text-[#D89255] transition-colors"
                >
                  +91 {CAFE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D89255] shrink-0" />
                <a
                  href={`mailto:${CAFE_INFO.email}`}
                  className="text-[#C27A45] hover:underline"
                >
                  {CAFE_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-2 bg-[#362117] p-2.5 rounded-xl border border-[#543323]">
                  <Clock className="w-4 h-4 text-[#D89255] shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#EEDBCA]">
                    <span className="font-bold text-white block">Business Hours (Open Daily)</span>
                    Mon – Sun: <strong>7:00 AM – 10:00 PM</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BFA695]">
          <p>
            &copy; 2026. All Rights Reserved by <strong>Coffee Kathalu</strong>, Warangal.
          </p>
          <div className="flex items-center gap-4">
            <span>Tea • Coffee • Fastfood • Milkshakes • Juices</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#362117] hover:bg-[#C27A45] text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
