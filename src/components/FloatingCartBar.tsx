'use client';

import React from 'react';
import { ShoppingBag, ArrowRight, MessageSquare } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CAFE_INFO } from '@/data/coffeeData';

export default function FloatingCartBar() {
  const { cart, totalItems, total, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  // Generate WhatsApp order message with items
  const generateWhatsAppUrl = () => {
    const itemList = cart
      .map((ci) => {
        const unitPrice = ci.selectedOption?.price ?? ci.item.price;
        const label = ci.selectedOption?.label || ci.size || 'Regular';
        return `• ${ci.item.name} (${label}) x ${ci.quantity} = ₹${unitPrice * ci.quantity}`;
      })
      .join('%0A');

    const msg = `*Order from Coffee Kathalu Website*%0A%0A${itemList}%0A%0A*Total: ₹${(total * 1.05).toFixed(0)}*%0A%0APlease confirm my order!`;
    return `https://wa.me/91${CAFE_INFO.phone}?text=${msg}`;
  };

  return (
    <aside aria-label="Tray quick action" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-lg animate-fadeIn">
      <div className="bg-[#1C110A]/95 text-white backdrop-blur-xl rounded-full p-2.5 sm:p-3 shadow-2xl border border-[#D89255]/40 flex items-center justify-between gap-2.5">
        {/* Tray count & total */}
        <div
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-3 pl-2.5 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="relative w-9 h-9 rounded-full bg-[#C27A45] flex items-center justify-center text-white shrink-0 shadow-md">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-white text-[#24130B] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#FAF6F0]">Your Tray</span>
              <span className="text-[10px] text-[#D89255] font-semibold">({totalItems} items)</span>
            </div>
            <p className="font-serif text-sm font-black text-[#FAF6F0] leading-none mt-0.5">
              ₹{(total * 1.05).toFixed(0)} <span className="text-[9px] text-white/50 font-normal">incl. tax</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold flex items-center gap-1 transition-all active:scale-95 shadow-sm"
            title="Send Order Directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Order</span>
          </a>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FAF6F0] hover:bg-[#EBDCCB] text-[#24130B] text-xs font-bold flex items-center gap-1 sm:gap-1.5 transition-all active:scale-95 shadow-sm"
          >
            <span className="sm:inline hidden">View</span>
            <span>Tray</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C27A45]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
