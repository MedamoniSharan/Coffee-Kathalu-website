import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#120905',
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coffee Kathalu | Warangal - Tea, Coffee, Fast Food, Milkshakes & Juices',
  description:
    'Welcome to Coffee Kathalu at 19-6-288/1, Rangashaipet, Warangal-506005. Serving authentic South Indian filter kaapi, dum chai, crispy fast food, thick shakes, and fresh juices. Open daily 7:00 AM – 10:00 PM. Call +91 9014891413.',
  keywords: [
    'coffee kathalu',
    'coffee kathalu warangal',
    'cafe in rangashaipet',
    'best filter coffee warangal',
    'tea and coffee warangal',
    'fastfood warangal',
    'milkshakes warangal',
    'juices rangashaipet',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FBF7F2] text-[#2C1810] selection:bg-[#D89255] selection:text-white min-h-screen flex flex-col">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
