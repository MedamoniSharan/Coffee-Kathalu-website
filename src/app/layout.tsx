import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

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
  title: 'Coffee MOOD | Modern Artisanal Cafe & Specialty Brews',
  description:
    'A Coffee Ritual for Every Mood. Single-origin Mexican coffee, velvety macchiatos, artisan pastries, and warm ambiance.',
  keywords: [
    'coffee cafe',
    'specialty coffee',
    'macchiato',
    'single origin',
    'artisan roastery',
    'coffee mood',
    'coffee kathalu',
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
