'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, PriceOption } from '@/data/coffeeData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  size?: string;
  selectedOption?: PriceOption;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, selectedOption?: PriceOption) => void;
  removeFromCart: (itemId: string, optionLabel?: string) => void;
  updateQuantity: (itemId: string, quantity: number, optionLabel?: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
  promoCode: string;
  applyPromo: (code: string) => boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isReservationOpen: boolean;
  setIsReservationOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('coffee_cart');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // ignore
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('coffee_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (
    item: MenuItem,
    quantity = 1,
    selectedOption?: PriceOption
  ) => {
    const option = selectedOption || (item.priceOptions ? item.priceOptions[0] : undefined);
    const optionLabel = option?.label;

    setCart((prev) => {
      const existing = prev.find(
        (ci) => ci.item.id === item.id && ci.selectedOption?.label === optionLabel
      );
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id && ci.selectedOption?.label === optionLabel
            ? { ...ci, quantity: ci.quantity + quantity }
            : ci
        );
      }
      return [...prev, { item, quantity, selectedOption: option, size: optionLabel }];
    });

    const displayMsg = optionLabel
      ? `Added ${item.name} (${optionLabel}) to tray!`
      : `Added ${item.name} to tray!`;
    showToast(displayMsg);
  };

  const removeFromCart = (itemId: string, optionLabel?: string) => {
    setCart((prev) =>
      prev.filter(
        (ci) => !(ci.item.id === itemId && ci.selectedOption?.label === optionLabel)
      )
    );
    showToast('Item removed from tray');
  };

  const updateQuantity = (itemId: string, quantity: number, optionLabel?: string) => {
    if (quantity <= 0) {
      removeFromCart(itemId, optionLabel);
      return;
    }
    setCart((prev) =>
      prev.map((ci) =>
        ci.item.id === itemId && ci.selectedOption?.label === optionLabel
          ? { ...ci, quantity }
          : ci
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromo = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'COFFEE10') {
      setPromoCode('COFFEE10 (10% OFF)');
      setDiscountPercent(0.1);
      showToast('10% discount promo applied!');
      return true;
    } else if (clean === 'MOOD30') {
      setPromoCode('MOOD30 (30% OFF)');
      setDiscountPercent(0.3);
      showToast('30% VIP promo applied!');
      return true;
    } else {
      showToast('Invalid coupon code. Try COFFEE10 or MOOD30');
      return false;
    }
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => {
    const unitPrice = item.selectedOption?.price ?? item.item.price;
    return acc + unitPrice * item.quantity;
  }, 0);
  const discount = subtotal * discountPercent;
  const total = Math.max(0, subtotal - discount);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discount,
        total,
        promoCode,
        applyPromo,
        isCartOpen,
        setIsCartOpen,
        isReservationOpen,
        setIsReservationOpen,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
