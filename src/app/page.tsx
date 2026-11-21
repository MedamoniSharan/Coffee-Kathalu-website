'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SpecialOffers from '@/components/SpecialOffers';
import MenuSection from '@/components/MenuSection';
import TodaysSpecial from '@/components/TodaysSpecial';
import StoreGallery from '@/components/StoreGallery';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import SignInModal from '@/components/SignInModal';
import ReservationModal from '@/components/ReservationModal';
import ToastNotification from '@/components/ToastNotification';

export default function Home() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2]">
      {/* Navigation Bar */}
      <Navbar onOpenSignIn={() => setIsSignInOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section: "A Coffee Ritual for Every Mood" */}
        <HeroSection />

        {/* 2. Special Offers: "ENJOY THE NEW SALE OFFERS" */}
        <SpecialOffers />

        {/* 3. Our Menu: Coffee Menu & Food Menu */}
        <MenuSection />

        {/* 4. Today's Special: "Coffee Time" (Dark Ambient 50% Discount Showcase) */}
        <TodaysSpecial />

        {/* 5. Store Gallery: Cafe Atmosphere & Roasting Art */}
        <StoreGallery />

        {/* 6. About Us: Dedicated Baristas & Single-Origin Craft */}
        <AboutSection />

        {/* 7. Testimonials: "What Our Customers Say" */}
        <TestimonialsSection />

        {/* 8. Contact & Reservations: Form and Roastery Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Tray Drawer */}
      <CartDrawer />

      {/* Modals & Feedback Notifications */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
      <ReservationModal />
      <ToastNotification />
    </div>
  );
}
