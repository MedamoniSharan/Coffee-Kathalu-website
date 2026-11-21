'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discount,
    total,
    promoCode,
    applyPromo,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('CM-28491');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon) return;
    applyPromo(inputCoupon);
    setInputCoupon('');
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    const newOrderNum = `CM-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(newOrderNum);

    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#543323', '#C27A45', '#D89255', '#EEDBCA'],
        });
      } catch {
        // ignore
      }
    }, 1200);
  };

  const handleFinish = () => {
    clearCart();
    setOrderComplete(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF7F2] shadow-2xl flex flex-col border-l border-[#E8D6C4] animate-fadeIn">
          {/* Header */}
          <div className="p-6 border-b border-[#E8D6C4] flex items-center justify-between bg-[#F5EBE1]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#543323] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#EEDBCA]" />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#2C1810]">
                Your Coffee Tray
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-[#543323] hover:bg-[#EEDBCA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          {orderComplete ? (
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
                Order Received!
              </h3>
              <p className="text-xs text-[#6E5548] leading-relaxed max-w-xs mb-6">
                Our baristas have started grinding the beans for your order. We’ll notify you when your items are ready for pick up or delivery.
              </p>
              <div className="bg-[#F5EBE1] p-4 rounded-2xl w-full max-w-xs border border-[#E8D6C4] mb-6 text-xs text-[#543323] text-left space-y-1">
                <p><span className="font-bold">Order #:</span> {orderNumber}</p>
                <p><span className="font-bold">Est. Time:</span> 12 - 15 mins</p>
                <p><span className="font-bold">Total Paid:</span> ${total.toFixed(2)}</p>
              </div>
              <button
                onClick={handleFinish}
                className="w-full max-w-xs py-3 rounded-full bg-[#543323] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3D2314] transition-all"
              >
                Back to Cafe
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#EEDBCA]/50 text-[#8C6249] flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-serif text-lg font-bold text-[#2C1810] mb-1">
                Your tray is currently empty
              </p>
              <p className="text-xs text-[#7A6153] max-w-xs mb-6">
                Discover our signature macchiato, Mexican spiced coffee, and artisanal bites to add to your tray.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#543323] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3D2314] transition-all"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.map((ci) => {
                  const sizeMultiplier = ci.size === 'Large' ? 1.25 : 1;
                  const itemPrice = ci.item.price * sizeMultiplier;

                  return (
                    <div
                      key={`${ci.item.id}-${ci.size}`}
                      className="bg-white rounded-2xl p-4 border border-[#E8D6C4] flex gap-3 shadow-sm"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#EEDBCA]/40 shrink-0">
                        <Image
                          src={ci.item.image}
                          alt={ci.item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info & Adjuster */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif text-sm font-bold text-[#2C1810]">
                              {ci.item.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(ci.item.id)}
                              className="text-[#9E8373] hover:text-rose-600 transition-colors p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-[#8C6249]">
                            {ci.size} • {ci.milk}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="font-bold text-xs text-[#2C1810]">
                            ${(itemPrice * ci.quantity).toFixed(2)}
                          </span>

                          <div className="flex items-center gap-2 bg-[#F5EBE1] rounded-full px-2 py-0.5 border border-[#E8D6C4]">
                            <button
                              onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                              className="p-1 text-[#543323] hover:text-[#2C1810]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center text-[#2C1810]">
                              {ci.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                              className="p-1 text-[#543323] hover:text-[#2C1810]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Promo Code & Order Summary */}
              <div className="p-6 bg-[#F5EBE1] border-t border-[#E8D6C4] space-y-4">
                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C6249]" />
                    <input
                      type="text"
                      placeholder="Try COFFEE10 or MOOD30"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-white rounded-xl text-xs text-[#2C1810] border border-[#E8D6C4] focus:outline-none focus:ring-1 focus:ring-[#C27A45]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#543323] text-white text-xs font-semibold rounded-xl hover:bg-[#3D2314] transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {promoCode && (
                  <p className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                    Active Code: {promoCode}
                  </p>
                )}

                {/* Subtotals */}
                <div className="space-y-1.5 text-xs text-[#6E5548] border-b border-[#E8D6C4] pb-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#2C1810]">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%)</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <span className="font-serif text-base font-bold text-[#2C1810]">
                    Total
                  </span>
                  <span className="font-serif text-2xl font-black text-[#2C1810]">
                    ${(total * 1.08).toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-50"
                >
                  {isCheckingOut ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <span>Proceed to Order</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
