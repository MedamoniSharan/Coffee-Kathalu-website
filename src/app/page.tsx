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
import ReservationModal from '@/components/ReservationModal';
import FranchiseModal from '@/components/FranchiseModal';
import FloatingCartBar from '@/components/FloatingCartBar';
import ToastNotification from '@/components/ToastNotification';

export default function Home() {
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      {/* Navigation Bar with Franchise Trigger */}
      <Navbar
        onOpenFranchise={() => setIsFranchiseOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section: "Every Cup Has A Story... / ప్రతి కప్పుది ఓ కథే..." */}
        <HeroSection />

        {/* 2. Special Offers: "ENJOY THE NEW SALE OFFERS" */}
        <SpecialOffers />

        {/* 3. Our Menu: Coffee, Tea, Snacks, Shakes, Juices, Fast Food, Biryani */}
        <MenuSection />

        {/* 4. Today's Special: "Coffee Time" (Dark Luxury 50% Showcase) */}
        <TodaysSpecial />

        {/* 5. Store Gallery: Cafe Atmosphere & Regenerated Storefront */}
        <StoreGallery />

        {/* 6. About Us: Physical Storefront in Rangashaipet & The Story of Kathalu */}
        <AboutSection />

        {/* 7. Testimonials: "What Our Customers Say" */}
        <TestimonialsSection />

        {/* 8. Contact & Reservations: Form, Location, WhatsApp & Direct Call */}
        <ContactSection />
      </main>

      {/* Modern Luxury Dark Footer */}
      <Footer />

      {/* Slide-out Cart Tray Drawer */}
      <CartDrawer />

      {/* Floating Bottom Quick Tray Bar with instant WhatsApp ordering */}
      <FloatingCartBar />

      {/* Modals & Feedback Notifications */}
      <FranchiseModal
        isOpen={isFranchiseOpen}
        onClose={() => setIsFranchiseOpen(false)}
      />
      <ReservationModal />
      <ToastNotification />
    </div>
  );
}
