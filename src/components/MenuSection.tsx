'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Star, Plus, Check, Coffee, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '@/data/coffeeData';
import { useCart } from '@/context/CartContext';

export default function MenuSection() {
  const { addToCart, cart } = useCart();
  const [activeTab, setActiveTab] = useState<'coffee' | 'food'>('coffee');
  const [subCategory, setSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Main tab filter
      const matchesMainTab =
        activeTab === 'coffee'
          ? ['hot', 'cold', 'signature'].includes(item.category)
          : ['food', 'dessert'].includes(item.category);

      // Sub-category filter
      const matchesSub =
        subCategory === 'all' ? true : item.category === subCategory;

      // Search query
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tastingNotes.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesMainTab && matchesSub && matchesSearch;
    });
  }, [activeTab, subCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#FBF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] text-[#543323] text-xs font-bold uppercase tracking-wider mb-3">
            <Coffee className="w-3.5 h-3.5 text-[#C27A45]" />
            Artisanal Selection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2C1810] tracking-tight uppercase mb-4">
            Our Menu
          </h2>
          <p className="text-sm sm:text-base text-[#6E5548] leading-relaxed">
            Every cup is brewed with precision from freshly micro-roasted beans. Pair with our daily house-made French bakery specials and desserts.
          </p>
        </div>

        {/* Main Tab Switch: "Coffee Menu" vs "Food Menu" (Matches Mockup) */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => {
              setActiveTab('coffee');
              setSubCategory('all');
            }}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'coffee'
                ? 'bg-[#543323] text-white shadow-md'
                : 'bg-[#F5EBE1] text-[#543323] hover:bg-[#EEDBCA] border border-[#E8D6C4]'
            }`}
          >
            <Coffee className="w-4 h-4" />
            <span>Coffee Menu</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('food');
              setSubCategory('all');
            }}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'food'
                ? 'bg-[#543323] text-white shadow-md'
                : 'bg-[#F5EBE1] text-[#543323] hover:bg-[#EEDBCA] border border-[#E8D6C4]'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Food Menu</span>
          </button>
        </div>

        {/* Search & Subcategory Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#F5EBE1]/70 p-3 rounded-2xl border border-[#E8D6C4]">
          {/* Subcategories */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSubCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                subCategory === 'all'
                  ? 'bg-[#2C1810] text-[#EEDBCA]'
                  : 'bg-white/80 text-[#543323] hover:bg-white'
              }`}
            >
              All {activeTab === 'coffee' ? 'Brews' : 'Bites'}
            </button>

            {activeTab === 'coffee' ? (
              <>
                <button
                  onClick={() => setSubCategory('hot')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    subCategory === 'hot'
                      ? 'bg-[#2C1810] text-[#EEDBCA]'
                      : 'bg-white/80 text-[#543323] hover:bg-white'
                  }`}
                >
                  Hot Coffee
                </button>
                <button
                  onClick={() => setSubCategory('cold')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    subCategory === 'cold'
                      ? 'bg-[#2C1810] text-[#EEDBCA]'
                      : 'bg-white/80 text-[#543323] hover:bg-white'
                  }`}
                >
                  Cold Brews & Iced
                </button>
                <button
                  onClick={() => setSubCategory('signature')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    subCategory === 'signature'
                      ? 'bg-[#2C1810] text-[#EEDBCA]'
                      : 'bg-white/80 text-[#543323] hover:bg-white'
                  }`}
                >
                  Signature Blends
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSubCategory('food')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    subCategory === 'food'
                      ? 'bg-[#2C1810] text-[#EEDBCA]'
                      : 'bg-white/80 text-[#543323] hover:bg-white'
                  }`}
                >
                  Bakery & Tartines
                </button>
                <button
                  onClick={() => setSubCategory('dessert')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    subCategory === 'dessert'
                      ? 'bg-[#2C1810] text-[#EEDBCA]'
                      : 'bg-white/80 text-[#543323] hover:bg-white'
                  }`}
                >
                  Desserts & Cakes
                </button>
              </>
            )}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C6249]" />
            <input
              type="text"
              placeholder="Search by name, flavor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-xs text-[#2C1810] placeholder-[#9E8373] border border-[#E8D6C4] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F5EBE1]/40 rounded-3xl border border-[#E8D6C4] max-w-md mx-auto">
            <Coffee className="w-10 h-10 text-[#C27A45] mx-auto mb-3" />
            <p className="text-[#3D2314] font-medium mb-1">No items match your search</p>
            <p className="text-xs text-[#8C6249]">Try clearing your search term or select all categories</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCart = cart.some((c) => c.item.id === item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#FBF7F2] rounded-3xl p-4 border border-[#E8D6C4] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Image and Badges */}
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 bg-[#EEDBCA]/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.isPopular && (
                        <div className="absolute top-3 left-3 bg-[#2C1810] text-[#EEDBCA] text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                          POPULAR
                        </div>
                      )}
                      {item.discountBadge && (
                        <div className="absolute top-3 right-3 bg-[#C27A45] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                          {item.discountBadge}
                        </div>
                      )}
                    </div>

                    {/* Title and Rating */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A76B43]">
                          {item.categoryLabel}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-[#2C1810] group-hover:text-[#A76B43] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-[#EEDBCA]/50 px-2 py-0.5 rounded-lg shrink-0">
                        <Star className="w-3.5 h-3.5 fill-[#D89255] text-[#D89255]" />
                        <span className="text-xs font-bold text-[#2C1810]">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#6E5548] line-clamp-2 mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tasting Notes Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5EBE1] text-[#543323] border border-[#E8D6C4]/60 font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Add button */}
                  <div className="pt-3 border-t border-[#E8D6C4] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#8C6249] block">Price</span>
                      <span className="font-serif text-xl font-black text-[#2C1810]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(item, 1, 'Regular')}
                      className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-200 shadow-sm active:scale-95 ${
                        inCart
                          ? 'bg-[#3D2314] text-white hover:bg-[#2C1810]'
                          : 'bg-[#543323] hover:bg-[#3D2314] text-white'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>In Tray (+1)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
