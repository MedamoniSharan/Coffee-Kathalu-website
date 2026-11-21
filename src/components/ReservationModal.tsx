'use client';

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '@/context/CartContext';

export default function ReservationModal() {
  const { isReservationOpen, setIsReservationOpen, showToast } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [guests, setGuests] = useState('2 Guests');
  const [seating, setSeating] = useState('Window Barista Counter');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isReservationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#543323', '#C27A45', '#D89255'],
      });
    } catch {
      // ignore
    }

    setIsSuccess(true);
    showToast(`Table confirmed for ${name}!`);
  };

  const handleClose = () => {
    setIsReservationOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#FBF7F2] rounded-3xl shadow-2xl border border-[#E8D6C4] p-8 z-10 animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#7A6153] hover:bg-[#EEDBCA]/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
              Table Reserved!
            </h3>
            <p className="text-xs text-[#6E5548] leading-relaxed max-w-sm mx-auto mb-6">
              We look forward to welcoming you, <span className="font-semibold text-[#2C1810]">{name}</span>. We will hold your table for 15 minutes past the reserved time.
            </p>
            <div className="bg-[#F5EBE1] p-4 rounded-2xl max-w-xs mx-auto border border-[#E8D6C4] text-xs text-[#543323] space-y-1 text-left mb-6">
              <p><span className="font-bold">Party:</span> {guests}</p>
              <p><span className="font-bold">Time:</span> {time}</p>
              <p><span className="font-bold">Seating:</span> {seating}</p>
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-2.5 rounded-full bg-[#543323] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3D2314] transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEDBCA] text-[#543323] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#C27A45]" />
                Sanctuary Seating
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                Reserve a Table
              </h3>
              <p className="text-xs text-[#7A6153] mt-1">
                Enjoy fresh pour-overs and warm atmosphere with zero waiting.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3D2314] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Maria Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3D2314] mb-1">
                    Phone / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3D2314] mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#3D2314] mb-1">
                    Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  >
                    <option>08:30 AM</option>
                    <option>10:00 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:30 PM</option>
                    <option>06:00 PM</option>
                    <option>08:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#3D2314] mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  >
                    <option>1 Person</option>
                    <option>2 Guests</option>
                    <option>3 - 4 Guests</option>
                    <option>5 - 8 Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#3D2314] mb-1">
                  Seating Preference
                </label>
                <select
                  value={seating}
                  onChange={(e) => setSeating(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                >
                  <option>Window Barista Counter</option>
                  <option>Cozy Velvet Sofa Lounge</option>
                  <option>Outdoor Sunlit Patio</option>
                  <option>Quiet Work & Book Corner</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center gap-2 mt-4"
              >
                <span>Confirm Table Reservation</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
