'use client';

import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAFE_INFO } from '@/data/coffeeData';

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
            Drop by for a comforting cup, call us for quick takeaways, or send us a message below. We look forward to seeing you at Coffee Kathalu!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Cafe Visit & Info Side */}
          <div className="lg:col-span-5 bg-[#F5EBE1] rounded-3xl p-8 border border-[#E8D6C4] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
              Coffee Kathalu
            </h3>
            <p className="text-xs text-[#7A6153] leading-relaxed mb-6">
              Tea, Coffee, Fast Food, Milkshakes & Juices at Rangashaipet, Warangal.
            </p>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Cafe Address
                  </h4>
                  <p className="text-xs text-[#6E5548] mt-1 leading-relaxed">
                    <strong>19-6-288/1</strong><br />
                    Rangashaipet<br />
                    Warangal - 506005, Telangana
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Phone & Orders
                  </h4>
                  <a
                    href={`tel:${CAFE_INFO.phone}`}
                    className="text-xs text-[#543323] font-bold mt-1 block hover:text-[#C27A45] transition-colors"
                  >
                    +91 {CAFE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Email Inquiries
                  </h4>
                  <a
                    href={`mailto:${CAFE_INFO.email}`}
                    className="text-xs text-[#6E5548] mt-1 block hover:text-[#2C1810] underline"
                  >
                    {CAFE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Business Hours Detailed */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#543323] text-[#EEDBCA] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    Business Hours (Open Daily)
                  </h4>
                  <div className="text-xs text-[#6E5548] mt-1 space-y-0.5">
                    <p>Monday to Friday: <strong className="text-[#2C1810]">7:00 AM – 10:00 PM</strong></p>
                    <p>Saturday: <strong className="text-[#2C1810]">7:00 AM – 10:00 PM</strong></p>
                    <p>Sunday: <strong className="text-[#2C1810]">7:00 AM – 10:00 PM</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-[#E8D6C4] flex flex-col gap-2.5">
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full py-2.5 rounded-full bg-[#543323] text-white text-xs font-bold uppercase tracking-wider text-center hover:bg-[#3D2314] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now (+91 {CAFE_INFO.phone})</span>
              </a>
              <a
                href={`https://wa.me/91${CAFE_INFO.phone}?text=Hi%20Coffee%20Kathalu,%20I%20would%20like%20to%20place%20an%20order`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider text-center hover:bg-emerald-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Order on WhatsApp</span>
              </a>
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
                  We have received your message. The Coffee Kathalu team will get in touch with you at{' '}
                  <span className="font-semibold text-[#2C1810]">{formData.contactInfo}</span> shortly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/91${CAFE_INFO.phone}?text=Hi%20Coffee%20Kathalu,%20I%20am%20${encodeURIComponent(formData.fullName)}.%20Message:%20${encodeURIComponent(formData.message || 'I submitted an inquiry on your website.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>

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
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#543323] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3D2314] transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
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
                    placeholder="Enter your name"
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
                    placeholder="Enter your mobile number or email"
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
                        Time Slot (7am - 10pm)
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#FBF7F2] border border-[#E8D6C4] text-xs text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C27A45]"
                      >
                        <option>Morning 07:30 AM</option>
                        <option>Morning 09:30 AM</option>
                        <option>Noon 12:30 PM</option>
                        <option>Evening 04:30 PM</option>
                        <option>Evening 06:30 PM</option>
                        <option>Night 08:30 PM</option>
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
                        <option>2 Friends</option>
                        <option>3 - 4 Group</option>
                        <option>5 - 8 Family</option>
                        <option>Birthday / Party (10+)</option>
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
                    placeholder="Tell us what you would like to know, or special requests..."
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
