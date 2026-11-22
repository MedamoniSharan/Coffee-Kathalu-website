'use client';

import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAFE_INFO } from '@/data/coffeeData';

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FranchiseModal({ isOpen, onClose }: FranchiseModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#D89255', '#C27A45', '#4A2818'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setCity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#FAF6F0] rounded-3xl shadow-2xl border border-[#E8D8C8] p-5 sm:p-8 max-h-[92vh] overflow-y-auto z-10 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7A6153] hover:bg-[#EBDCCB]/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#24130B] mb-2">
              Franchise Inquiry Received!
            </h3>
            <p className="text-xs text-[#6E5548] leading-relaxed max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-[#24130B]">{name}</strong>. Our franchise team will connect with you on <strong className="text-[#24130B]">{phone}</strong> within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-2.5 rounded-full bg-[#4A2818] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#24130B] transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBDCCB] text-[#4A2818] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5 text-[#C27A45]" />
                Business Opportunity
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24130B]">
                Partner With Coffee Kathalu
              </h3>
              <p className="text-xs text-[#7A6153] mt-1.5 max-w-sm mx-auto">
                Launch your own profitable cafe serving Coffee, Tea, Snacks, Shakes, Fast Food &amp; Biryani.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-2.5 mb-6 bg-[#F5ECE1] p-3 rounded-2xl border border-[#E8D8C8] text-[11px] text-[#4A2818]">
              <div className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C27A45] shrink-0" />
                <span>Low Setup Investment</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C27A45] shrink-0" />
                <span>Proven High Margin Menu</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C27A45] shrink-0" />
                <span>Full Barista Training</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C27A45] shrink-0" />
                <span>Complete Branding Setup</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase text-[#4A2818] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-xs text-[#24130B] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#4A2818] mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9014891413"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-xs text-[#24130B] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#4A2818] mb-1">
                    Target City / Area
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Warangal / Hanamkonda"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-xs text-[#24130B] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#4A2818] hover:bg-[#24130B] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 mt-2 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Franchise Inquiry</span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-[#E8D8C8] text-center">
              <span className="text-xs text-[#7A6153]">Direct Franchise Hotline: </span>
              <a
                href={`tel:${CAFE_INFO.franchisePhone}`}
                className="text-xs font-bold text-[#C27A45] hover:underline"
              >
                +91 {CAFE_INFO.franchisePhone}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
