'use client';

import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    message: '',
    bookingType: 'general', // 'general' | 'reservation'
    guests: '2 Guests',
    date: '',
    time: 'Morning 09:00 AM',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactInfo) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#543323', '#C27A45', '#D89255'],
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#FBF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Mockup */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2C1810] tracking-tight uppercase mb-4">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-[#6E5548] leading-relaxed">
            Have questions about our single-origin coffees, wholesale beans, or want to reserve a table for your next coffee meeting? Send us a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Cafe Visit & Info Side */}
          <div className="lg:col-span-5 bg-[#F5EBE1] rounded-3xl p-8 border border-[#E8D6C4] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-3">
              Visit Coffee MOOD
            </h3>
            <p className="text-xs text-[#7A6153] leading-relaxed mb-8">
              Step into our light-filled cafe space with artisan espresso bars, comfortable seating, and fresh bakery pastries.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Our Roastery Address
                  </h4>
                  <p className="text-xs text-[#6E5548] mt-0.5 leading-relaxed">
                    Akshya Nagar 1st Block 1st Cross, Ramamurthy nagar, Bangalore 560016
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Call & Reservations
                  </h4>
                  <p className="text-xs text-[#6E5548] mt-0.5">
                    +1 202-918-2132 / +91 98450 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Opening Hours
                  </h4>
                  <p className="text-xs text-[#6E5548] mt-0.5">
                    Mon – Fri: 07:00 AM – 10:00 PM <br />
                    Sat – Sun: 08:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Email Inquiries
                  </h4>
                  <p className="text-xs text-[#6E5548] mt-0.5">
                    hello@moodcafe.com / kathalu@coffee.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (Matching Mockup Fields: Full Name, Number or Email, Message, Submit) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8D6C4] shadow-md">
            {submitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-[#6E5548] max-w-md mx-auto mb-6">
                  We have received your message. Our cafe host will get in touch with you at{' '}
                  <span className="font-semibold text-[#2C1810]">{formData.contactInfo}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      contactInfo: '',
                      message: '',
                      bookingType: 'general',
                      guests: '2 Guests',
                      date: '',
                      time: 'Morning 09:00 AM',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#543323] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3D2314] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Form Switch: General Message vs Table Reservation */}
                <div className="flex items-center gap-3 pb-3 border-b border-[#E8D6C4]/60">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, bookingType: 'general' })}
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all ${
                      formData.bookingType === 'general'
                        ? 'bg-[#543323] text-white'
                        : 'bg-[#F5EBE1] text-[#7A6153]'
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, bookingType: 'reservation' })}
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all ${
                      formData.bookingType === 'reservation'
                        ? 'bg-[#543323] text-white'
                        : 'bg-[#F5EBE1] text-[#7A6153]'
                    }`}
                  >
                    Table Reservation
                  </button>
                </div>

                {/* Input 1: Full Name (Matches Mockup) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-1.5">
                    Full Name <span className="text-[#C27A45]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF7F2] border border-[#E8D6C4] text-sm text-[#2C1810] placeholder-[#A89080] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  />
                </div>

                {/* Input 2: Number or Email (Matches Mockup) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-1.5">
                    Number or Email <span className="text-[#C27A45]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your email or number"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF7F2] border border-[#E8D6C4] text-sm text-[#2C1810] placeholder-[#A89080] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  />
                </div>

                {/* Reservation Extra Fields when selected */}
                {formData.bookingType === 'reservation' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#3D2314] mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#FBF7F2] border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#3D2314] mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#FBF7F2] border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                      >
                        <option>Morning 09:00 AM</option>
                        <option>Brunch 11:30 AM</option>
                        <option>Afternoon 02:00 PM</option>
                        <option>Evening 05:30 PM</option>
                        <option>Dinner 08:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#3D2314] mb-1">
                        Party Size
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#FBF7F2] border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                      >
                        <option>1 Person</option>
                        <option>2 Guests</option>
                        <option>3 - 4 Guests</option>
                        <option>5 - 8 Guests</option>
                        <option>Private Event (10+)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Input 3: Message... (Matches Mockup) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-1.5">
                    Message...
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you would like to know, or special dietary notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF7F2] border border-[#E8D6C4] text-sm text-[#2C1810] placeholder-[#A89080] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                  />
                </div>

                {/* Submit Button (Matches Mockup Brown Pill Button) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#543323] hover:bg-[#3D2314] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 active:scale-95"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
