'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffeeData';
import { useCart } from '@/context/CartContext';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const { totalItems } = useCart();

  const defaultMessage = encodeURIComponent(
    'Hi Coffee Kathalu! I want to order / inquire about your cafe menu.'
  );
  const whatsappUrl = `https://wa.me/91${CAFE_INFO.phone}?text=${defaultMessage}`;

  return (
    <div
      className={`fixed ${
        totalItems > 0 ? 'bottom-24 sm:bottom-6' : 'bottom-6'
      } right-4 sm:right-6 z-40 flex flex-col items-end transition-all duration-300`}
    >
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-[#24130B] px-3.5 py-2 rounded-2xl shadow-xl border border-[#E8D8C8] text-xs flex items-center gap-2 animate-fadeIn max-w-[210px]">
          <span className="font-semibold leading-tight">
            Order or chat on <strong className="text-emerald-700">WhatsApp</strong>!
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/80"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping -z-10 pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="w-5 h-5 flex items-center justify-center">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.769.818 2.791.819h.002c3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.768-5.769-5.768zm0 10.354c-.933 0-1.745-.262-2.48-.722l-.178-.109-1.579.414.421-1.54-.118-.188c-.504-.798-.82-1.564-.819-2.443.001-2.488 2.025-4.444 4.512-4.444 2.487 0 4.443 1.956 4.443 4.443-.001 2.489-1.957 4.443-4.444 4.443zm2.593-3.326c-.142-.071-.84-.415-.97-.462-.13-.047-.225-.071-.319.071-.095.142-.366.462-.449.557-.083.095-.166.107-.308.036s-.603-.222-1.149-.708c-.424-.379-.711-.847-.794-.989-.083-.142-.009-.219.062-.29.064-.064.142-.166.213-.249.071-.083.095-.142.142-.237.047-.095.024-.178-.012-.249s-.319-.769-.438-1.053c-.115-.277-.233-.239-.319-.244l-.272-.005c-.095 0-.249.036-.379.178s-.509.497-.509 1.212.521 1.408.592 1.503c.071.095 1.026 1.567 2.485 2.196.347.15.619.24.831.307.349.111.666.095.917.058.28-.042.84-.343.959-.675.118-.331.118-.615.083-.675-.036-.059-.13-.095-.272-.166z" />
          </svg>
        </div>

        <span className="font-bold text-xs tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}
