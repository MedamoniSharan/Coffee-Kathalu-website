'use client';

import React from 'react';
import { Coffee, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ToastNotification() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-[#2C1810] text-[#F5EBE1] px-5 py-3 rounded-2xl shadow-2xl border border-[#C27A45]/40 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-[#C27A45] flex items-center justify-center text-white shrink-0">
          <Coffee className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="text-xs font-semibold tracking-wide">
            {toastMessage}
          </span>
        </div>
      </div>
    </div>
  );
}
