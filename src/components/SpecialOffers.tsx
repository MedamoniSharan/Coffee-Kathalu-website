'use client';

import React from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { Sparkles, ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { SPECIAL_OFFERS, MenuItem } from '@/data/coffeeData';
import { useCart } from '@/context/CartContext';

export default function SpecialOffers() {
  const { addToCart, cart } = useCart();

  const handleAvail = (item: MenuItem, e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    try {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { x, y },
        colors: ['#4A2818', '#C27A45', '#EBDCCB', '#E5A967'],
      });
    } catch {
      // ignore
    }

    addToCart(item, 1, item.priceOptions ? item.priceOptions[0] : undefined);
  };

  return (
    <section id="offers" className="py-24 bg-[#F5ECE1]/60 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBDCCB] text-[#4A2818] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C27A45]" />
            Signature Daily Specials
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#24130B] tracking-tight uppercase mb-4">
            Enjoy The New Sale Offers
          </h2>
          <p className="text-sm sm:text-base text-[#6E5548] leading-relaxed">
            Handcrafted South Indian filter kaapi, slow-dum chai, thick chocolate shakes, and special handi dum biryani with exclusive daily savings.
          </p>
        </div>

        {/* Offers Grid: Sleek Glass Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIAL_OFFERS.slice(0, 4).map((item) => {
            const inCart = cart.some((c) => c.item.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8D8C8] shadow-cafe hover:shadow-cafe-hover transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Image Showcase */}
                <div className="relative w-full aspect-[4/3] bg-[#EBDCCB]/30 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-600"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-[#C27A45] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md tracking-wider">
                    {item.discountBadge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A76B43] block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#24130B] mb-2 group-hover:text-[#C27A45] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#7A6153] line-clamp-2 mb-4 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Tasting notes */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tastingNotes.slice(0, 2).map((note) => (
                        <span
                          key={note}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF6F0] text-[#4A2818] border border-[#E8D8C8] font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Avail Button */}
                  <div className="pt-3 border-t border-[#E8D8C8]/60 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-2xl font-black text-[#24130B]">
                          ₹{item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-[#9E8373] line-through font-medium">
                            ₹{item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAvail(item, e)}
                      className={`py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                        inCart
                          ? 'bg-[#24130B] text-white hover:bg-[#120905]'
                          : 'bg-[#4A2818] hover:bg-[#24130B] text-white hover:shadow-md'
                      } active:scale-95`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Avail</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Menu Trigger */}
        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A2818] hover:text-[#C27A45] transition-colors"
          >
            <span>Explore All 7 Services on Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
