export interface MenuItem {
  id: string;
  name: string;
  category: 'hot' | 'cold' | 'signature' | 'food' | 'dessert';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  rating: number;
  reviewCount: number;
  description: string;
  tastingNotes: string[];
  image: string;
  isPopular?: boolean;
  isOffer?: boolean;
  dietary?: ('dairy-free' | 'vegan' | 'gluten-free')[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const SPECIAL_OFFERS: MenuItem[] = [
  {
    id: 'offer-1',
    name: 'Artisan Macchiato',
    category: 'hot',
    categoryLabel: 'Hot Coffee',
    price: 8.5,
    originalPrice: 12.0,
    discountBadge: '30% OFF',
    rating: 4.9,
    reviewCount: 342,
    description: 'Top Mexican single-origin espresso crowned with dense velvety steamed foam and hints of toasted hazelnut.',
    tastingNotes: ['Toasted Hazelnut', 'Dark Cocoa', 'Brown Sugar'],
    image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-2',
    name: 'Mexican Spiced Latte',
    category: 'hot',
    categoryLabel: 'Hot Coffee',
    price: 8.5,
    originalPrice: 12.0,
    discountBadge: '30% OFF',
    rating: 4.8,
    reviewCount: 289,
    description: 'Rich dark espresso infused with organic Mexican cinnamon, bittersweet cocoa nibs, and silky oat milk.',
    tastingNotes: ['Ceylon Cinnamon', 'Nutmeg', 'Vanilla Bean'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-3',
    name: 'Salted Caramel Macchiato',
    category: 'signature',
    categoryLabel: 'Signature Blends',
    price: 8.5,
    originalPrice: 12.0,
    discountBadge: '30% OFF',
    rating: 5.0,
    reviewCount: 512,
    description: 'Layered fresh espresso with hand-spun vanilla bean syrup, micro-textured milk, and salted caramel drizzle.',
    tastingNotes: ['Sea Salt Caramel', 'Vanilla', 'Butterscotch'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-4',
    name: 'Smoked Vanilla Cortado',
    category: 'hot',
    categoryLabel: 'Hot Coffee',
    price: 8.5,
    originalPrice: 12.0,
    discountBadge: '30% OFF',
    rating: 4.9,
    reviewCount: 198,
    description: 'Equal parts bold ristretto and warm milk cut with smoked Madagascar bourbon vanilla and brown sugar.',
    tastingNotes: ['Smoked Vanilla', 'Almond Butter', 'Espresso Crema'],
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-5',
    name: 'Nitro Hazelnut Cold Brew',
    category: 'cold',
    categoryLabel: 'Cold Brews',
    price: 9.0,
    originalPrice: 13.0,
    discountBadge: '30% OFF',
    rating: 4.9,
    reviewCount: 421,
    description: 'Slow-steeped for 24 hours and nitrogen-charged for a Guinness-like creamy cascade and natural hazelnut aroma.',
    tastingNotes: ['Roasted Hazelnut', 'Black Cherry', 'Molasses'],
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Hot Coffee
  {
    id: 'menu-1',
    name: 'Double Shot Espresso',
    category: 'hot',
    categoryLabel: 'Hot Coffee',
    price: 4.5,
    rating: 4.9,
    reviewCount: 180,
    description: 'Intense, aromatic extraction with a thick golden-hazel crema. Notes of dark chocolate and orange zest.',
    tastingNotes: ['Dark Chocolate', 'Citrus Zest', 'Syrupy Body'],
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'menu-2',
    name: 'Signature Velvet Cappuccino',
    category: 'hot',
    categoryLabel: 'Hot Coffee',
    price: 6.5,
    rating: 4.9,
    reviewCount: 360,
    description: 'Precision-pulled espresso balanced with silky steamed whole milk and a cloud-like dense foam crown.',
    tastingNotes: ['Honey', 'Roasted Almond', 'Milk Chocolate'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'menu-3',
    name: 'Classic Flat White',
    category: 'hot',
    categoryLabel: 'Hot Coffee',
    price: 6.0,
    rating: 4.8,
    reviewCount: 245,
    description: 'A smooth micro-foam pour over double ristretto, emphasizing the sweet roasted subtleties of the bean.',
    tastingNotes: ['Creamy Toffee', 'Sweet Floral', 'Caramel'],
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'menu-4',
    name: 'Caffè Mocha with Dark Ganache',
    category: 'hot',
    categoryLabel: 'Hot Coffee',
    price: 7.25,
    rating: 4.9,
    reviewCount: 310,
    description: 'Belgian 70% dark chocolate melted into freshly pulled espresso and steamed milk, topped with cocoa powder.',
    tastingNotes: ['Belgian Dark Cocoa', 'Espresso', 'Cream'],
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },

  // Cold Brew & Iced
  {
    id: 'menu-5',
    name: 'Ethiopian Cold Brew Tonic',
    category: 'cold',
    categoryLabel: 'Cold Brew & Iced',
    price: 7.0,
    rating: 4.8,
    reviewCount: 154,
    description: 'Single-origin cold extraction mixed with artisanal botanical tonic and dehydrated blood orange garnish.',
    tastingNotes: ['Blood Orange', 'Bergamot', 'Jasmine'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'menu-6',
    name: 'Iced Spanish Vanilla Latte',
    category: 'cold',
    categoryLabel: 'Cold Brew & Iced',
    price: 7.5,
    rating: 5.0,
    reviewCount: 480,
    description: 'Espresso poured over ice, condensed sweet milk, and Madagascar vanilla, served chilled in a frosted glass.',
    tastingNotes: ['Sweet Cream', 'Bourbon Vanilla', 'Spiced Oak'],
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'menu-7',
    name: 'Matcha Espresso Fusion',
    category: 'cold',
    categoryLabel: 'Cold Brew & Iced',
    price: 7.75,
    rating: 4.9,
    reviewCount: 220,
    description: 'Ceremonial grade Uji matcha layered above sweetened oat milk and topped with an espresso floater.',
    tastingNotes: ['Earthy Umami', 'Sweet Matcha', 'Roasted Coffee'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
  },

  // Signature Specials
  {
    id: 'menu-8',
    name: 'Today’s Special: Smoked Amber Mocha',
    category: 'signature',
    categoryLabel: 'Signature Blends',
    price: 7.5,
    originalPrice: 15.0,
    discountBadge: '50% SPECIAL',
    rating: 5.0,
    reviewCount: 610,
    description: 'Smoked oak infusion, Colombian Supremo roast, melted artisan hazelnut chocolate, topped with gold sugar dust.',
    tastingNotes: ['Smoked Oak', 'Golden Honey', 'Hazelnut Crunch'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'menu-9',
    name: 'Cardamom Rose Affogato',
    category: 'signature',
    categoryLabel: 'Signature Blends',
    price: 8.0,
    rating: 4.9,
    reviewCount: 195,
    description: 'Artisan pistachio gelato submerged under a sizzling shot of freshly brewed cardamom-scented espresso.',
    tastingNotes: ['Pistachio', 'Rose Petal', 'Warm Cardamom'],
    image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=800&q=80',
  },

  // Food & Bakery
  {
    id: 'menu-10',
    name: 'Almond Butter Croissant',
    category: 'food',
    categoryLabel: 'Artisan Bakery',
    price: 5.5,
    rating: 4.8,
    reviewCount: 178,
    description: 'Flaky twice-baked French butter croissant filled with almond frangipane cream and sliced toasted almonds.',
    tastingNotes: ['French Butter', 'Toasted Almond', 'Vanilla Custard'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'menu-11',
    name: 'Avocado Tartine with Poached Egg',
    category: 'food',
    categoryLabel: 'Artisan Bakery',
    price: 11.5,
    rating: 4.9,
    reviewCount: 230,
    description: 'Seeded sourdough toast layered with crushed Hass avocado, microgreens, chili flakes, and cage-free poached egg.',
    tastingNotes: ['Creamy Avocado', 'Chili Flakes', 'Crisp Sourdough'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },

  // Desserts
  {
    id: 'menu-12',
    name: 'Traditional Espresso Tiramisu',
    category: 'dessert',
    categoryLabel: 'Desserts',
    price: 8.5,
    rating: 5.0,
    reviewCount: 420,
    description: 'Espresso-soaked savoiardi biscuits layered with mascarpone sabayon cream and dusted with Valrhona cocoa.',
    tastingNotes: ['Dark Espresso', 'Sweet Mascarpone', 'Valrhona Cocoa'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'menu-13',
    name: 'Warm Basque Burnt Cheesecake',
    category: 'dessert',
    categoryLabel: 'Desserts',
    price: 8.0,
    rating: 4.9,
    reviewCount: 310,
    description: 'Caramelized crust with an ultra-creamy, molten cheese center, served with fresh raspberry reduction.',
    tastingNotes: ['Caramelized Crust', 'Molten Cream Cheese', 'Tart Berries'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    title: 'Artisan Pour Over Ritual',
    category: 'Brewing',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-2',
    title: 'Freshly Roasted Arabica Beans',
    category: 'Roastery',
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-3',
    title: 'Barista Latte Art Craftsmanship',
    category: 'Barista',
    url: 'https://images.unsplash.com/photo-1507133750040-3a7f573485f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-4',
    title: 'Steaming Morning Brew',
    category: 'Experience',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-5',
    title: 'Cozy Cafe Ambiance & Seating',
    category: 'Atmosphere',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-6',
    title: 'Freshly Baked Morning Pastries',
    category: 'Bakery',
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Nadir Afridi',
    role: 'CEO, Design Arena',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment:
      'Coffee Mood has redefined my morning routine. The Macchiato and single-origin Mexican roast are balanced like nowhere else in the city. The vibe is immaculate!',
    date: '10/09/2026',
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Creative Director, Atelier Studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment:
      'The attention to detail in their extraction and the warmth of the baristas is genuinely inspiring. This is a sanctuary for anyone who takes their espresso seriously.',
    date: '18/09/2026',
  },
  {
    id: 'test-3',
    name: 'Marcus Chen',
    role: 'Senior Architect',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment:
      'From the aroma greeting you at the doorway to the velvety finish of the Nitro cold brew, every sip feels like a thoughtful ritual. Absolutely top tier.',
    date: '25/09/2026',
  },
];
