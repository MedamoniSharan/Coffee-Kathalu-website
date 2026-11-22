'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Star, Plus, Minus, Coffee, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '@/data/coffeeData';
import { useCart } from '@/context/CartContext';

export default function MenuSection() {
  const { addToCart, updateQuantity, cart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Matches exact items from logo banner: COFFEE | TEA | SNACKS | MILKSHAKES | JUICES | FAST FOOD | BIRYANI
  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'tea', label: 'Tea' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'milkshakes', label: 'Milkshakes' },
    { id: 'juices', label: 'Juices' },
    { id: 'fastfood', label: 'Fast Food' },
    { id: 'biryani', label: 'Biryani' },
  ];

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCat =
        selectedCategory === 'all' ? true : item.category === selectedCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tastingNotes.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBDCCB] text-[#4A2818] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C27A45]" />
            Complete Cafe Menu
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#24130B] tracking-tight uppercase mb-4">
            Our Menu
          </h2>
          <p className="text-sm sm:text-base text-[#6E5548] leading-relaxed">
            From morning filter kaapi and clay-pot chai to evening snacks, loaded burgers, thick shakes, and fragrant handi dum biryani.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#4A2818] text-white shadow-md scale-105'
                  : 'bg-white text-[#4A2818] hover:bg-[#F5ECE1] border border-[#E8D8C8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#8C6249]" />
            <input
              type="text"
              placeholder="Search Coffee, Chai, Biryani, Shakes, Burgers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-full text-xs text-[#24130B] placeholder-[#9E8373] border border-[#E8D8C8] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8D8C8] max-w-md mx-auto shadow-sm">
            <Coffee className="w-10 h-10 text-[#C27A45] mx-auto mb-3" />
            <p className="text-[#24130B] font-bold mb-1">No items found</p>
            <p className="text-xs text-[#8C6249]">Try searching for &quot;Kaapi&quot;, &quot;Biryani&quot;, &quot;Chai&quot;, or &quot;Shake&quot;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const cartItem = cart.find((c) => c.item.id === item.id);
              const inCart = !!cartItem;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E8D8C8] shadow-cafe hover:shadow-cafe-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Image and Badges */}
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 bg-[#EBDCCB]/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.isPopular && (
                        <div className="absolute top-3 left-3 bg-[#24130B] text-[#FAF6F0] text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                          BESTSELLER
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
                        <h3 className="font-serif text-lg font-bold text-[#24130B] group-hover:text-[#C27A45] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5ECE1] px-2 py-0.5 rounded-lg shrink-0">
                        <Star className="w-3.5 h-3.5 fill-[#D89255] text-[#D89255]" />
                        <span className="text-xs font-bold text-[#24130B]">
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
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF6F0] text-[#4A2818] border border-[#E8D8C8]/60 font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Add button */}
                  <div className="pt-3 border-t border-[#E8D8C8] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#8C6249] block">Price</span>
                      <span className="font-serif text-xl font-black text-[#24130B]">
                        ₹{item.price}
                      </span>
                    </div>

                    {inCart ? (
                      /* Interactive Quantity Stepper directly on card */
                      <div className="flex items-center gap-2 bg-[#F5ECE1] rounded-full px-3 py-1.5 border border-[#E8D8C8] shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                          className="p-0.5 text-[#4A2818] hover:text-[#C27A45] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-black text-[#24130B] px-1 min-w-4 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                          className="p-0.5 text-[#4A2818] hover:text-[#C27A45] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item, 1, 'Regular')}
                        className="px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-200 shadow-sm active:scale-95 bg-[#4A2818] hover:bg-[#24130B] text-white cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Tray</span>
                      </button>
                    )}
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
