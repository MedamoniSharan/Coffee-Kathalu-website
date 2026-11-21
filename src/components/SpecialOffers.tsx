'use client';

import React from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { Sparkles, ShoppingBag, Check } from 'lucide-react';
import { SPECIAL_OFFERS, MenuItem } from '@/data/coffeeData';
import { useCart } from '@/context/CartContext';

export default function SpecialOffers() {
  const { addToCart, cart } = useCart();

  const handleAvail = (item: MenuItem, e: React.MouseEvent) => {
    // Fire festive confetti
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#543323', '#C27A45', '#EEDBCA', '#D89255'],
      });
    } catch {
      // ignore
    }

    addToCart(item, 1, 'Regular');
  };

  return (
    <section id="offers" className="py-20 bg-[#F5EBE1]/60 relative overflow-hidden">
      {/* Coffee Splash Decor Accents */}
      <div className="absolute -left-12 top-10 w-44 h-44 opacity-20 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="#543323" className="w-full h-full">
          <path d="M42.7,-62.9C55.9,-54.7,67.5,-44.1,72.6,-31C77.7,-17.8,76.3,-2.1,72.7,12.7C69.1,27.5,63.2,41.4,52.8,51.8C42.4,62.1,27.5,68.9,12.1,71.2C-3.4,73.4,-19.4,71.2,-34.2,64.3C-48.9,57.5,-62.4,46,-69.5,31.4C-76.7,16.8,-77.6,-0.9,-72.7,-16.4C-67.8,-32,-57.1,-45.3,-44.2,-53.7C-31.4,-62.1,-16.2,-65.7,-0.4,-65.2C15.4,-64.7,30.8,-60.1,42.7,-62.9Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="absolute -right-16 bottom-6 w-56 h-56 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="#C27A45" className="w-full h-full">
          <path d="M47.7,-67.2C61.4,-58.5,72.1,-44.9,76.4,-29.7C80.8,-14.5,78.8,2.3,73.3,17.7C67.8,33.1,58.7,47.1,46.2,56.7C33.6,66.3,17.7,71.6,1.4,69.7C-14.8,67.8,-28.8,58.7,-41.8,48.7C-54.8,38.7,-66.9,27.9,-71.4,14.3C-75.9,0.7,-72.8,-15.7,-64.8,-29C-56.7,-42.4,-43.8,-52.7,-30.1,-61.4C-16.4,-70.2,-2,-77.4,13.6,-76.3C29.2,-75.2,34.1,-75.9,47.7,-67.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Matching Mockup */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] text-[#543323] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C27A45]" />
            Special Deals of the Day
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2C1810] tracking-tight uppercase mb-4">
            Enjoy The New Sale Offers
          </h2>
          <p className="text-sm sm:text-base text-[#6E5548] leading-relaxed">
            Relish handcrafted cups of authentic filter kaapi, dum chai, loaded burgers, and creamy milkshakes with exclusive deals at Coffee Kathalu.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIAL_OFFERS.slice(0, 4).map((item) => {
            const inCart = cart.some((c) => c.item.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-[#FBF7F2] rounded-3xl overflow-hidden border border-[#E8D6C4] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Top Image */}
                <div className="relative w-full aspect-[4/3] bg-[#EEDBCA]/40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-[#C27A45] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {item.discountBadge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-1 group-hover:text-[#A76B43] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-bold text-[#8C6249] tracking-wide mb-2 uppercase">
                      {item.categoryLabel} Special Offer
                    </p>
                    <p className="text-xs text-[#7A6153] line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price and Avail Button */}
                  <div className="pt-2 border-t border-[#E8D6C4]/60 flex flex-col items-center">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-serif text-2xl font-black text-[#2C1810]">
                        ₹{item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-[#9E8373] line-through font-semibold">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => handleAvail(item, e)}
                      className={`w-full py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${
                        inCart
                          ? 'bg-[#3D2314] text-white hover:bg-[#2C1810]'
                          : 'bg-[#543323] hover:bg-[#3D2314] text-white hover:shadow-md'
                      } active:scale-95`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Added (Add More)</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Avail Now</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
