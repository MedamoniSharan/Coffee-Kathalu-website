'use client';

import React, { useState } from 'react';
import { X, Coffee, Lock, Mail, User, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const { showToast } = useCart();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      isRegister
        ? `Welcome to Coffee MOOD Club, ${name || 'Coffee Lover'}!`
        : 'Welcome back! You have 120 Coffee Reward Points.'
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-[#FBF7F2] rounded-3xl shadow-2xl border border-[#E8D6C4] p-8 z-10 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#7A6153] hover:bg-[#EEDBCA]/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Icon & Heading */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center mx-auto mb-3 shadow-md">
            <Coffee className="w-6 h-6 text-[#EEDBCA]" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
            {isRegister ? 'Join Coffee MOOD' : 'Sign In to Your Account'}
          </h3>
          <p className="text-xs text-[#7A6153] mt-1">
            {isRegister
              ? 'Get 10% off your first online order & earn points on every cup.'
              : 'Access your order history and mood reward perks.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-1">
                Your Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C6249]" />
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C6249]" />
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C6249]" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center gap-2 mt-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D89255]" />
            <span>{isRegister ? 'Create Account' : 'Sign In'}</span>
          </button>
        </form>

        {/* Footer Toggle */}
        <div className="text-center mt-6 pt-4 border-t border-[#E8D6C4]/80">
          <p className="text-xs text-[#7A6153]">
            {isRegister ? 'Already have an account?' : "Don't have an account yet?"}{' '}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#C27A45] hover:text-[#543323] font-bold underline ml-1"
            >
              {isRegister ? 'Sign In' : 'Join Now'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
