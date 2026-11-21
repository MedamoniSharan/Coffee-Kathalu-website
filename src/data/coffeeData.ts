export interface MenuItem {
  id: string;
  name: string;
  category: 'tea' | 'coffee' | 'fastfood' | 'milkshakes' | 'juices';
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

export const CAFE_INFO = {
  name: 'Coffee Kathalu',
  tagline: 'A Coffee Ritual for Every Mood & Every Story',
  phone: '9014891413',
  displayPhone: '+91 90148 91413',
  email: 'rgcoffeekathalu@gmal.com',
  address: {
    doorNo: '19-6-288/1',
    area: 'Rangashaipet',
    city: 'Warangal',
    pincode: '506005',
    full: '19-6-288/1, Rangashaipet, Warangal - 506005, Telangana',
  },
  hours: {
    daily: '7:00 AM – 10:00 PM',
    monFri: '7:00 AM – 10:00 PM',
    sat: '7:00 AM – 10:00 PM',
    sun: '7:00 AM – 10:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/explore/tags/coffeekathalu',
    instagramTag: '#coffeekathalu',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
  services: [
    { id: 'tea', label: 'Artisan Teas & Chai', desc: 'Special Dum Chai, Masala & Ginger Tea' },
    { id: 'coffee', label: 'Specialty Coffee', desc: 'Authentic Filter Kaapi, Espresso & Cold Brews' },
    { id: 'fastfood', label: 'Delicious Fast Food', desc: 'Crispy Burgers, Loaded Fries, Sandwiches' },
    { id: 'milkshakes', label: 'Thick Milkshakes', desc: 'Belgian Chocolate, KitKat, Oreo Shakes' },
    { id: 'juices', label: 'Fresh Juices & Coolers', desc: '100% Real Fruit Juices & Mojitos' },
  ],
};

export const SPECIAL_OFFERS: MenuItem[] = [
  {
    id: 'offer-1',
    name: 'Authentic South Indian Filter Kaapi',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 40,
    originalPrice: 60,
    discountBadge: '30% OFF',
    rating: 5.0,
    reviewCount: 380,
    description: 'Traditional slow-dripped chicory blend frothed high with creamy farm milk in brass davarah tumbler.',
    tastingNotes: ['Rich Chicory', 'Creamy Milk', 'Caramel Aroma'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-2',
    name: 'Signature Kathalu Masala Chai',
    category: 'tea',
    categoryLabel: 'Tea',
    price: 30,
    originalPrice: 45,
    discountBadge: '33% OFF',
    rating: 4.9,
    reviewCount: 420,
    description: 'Slow-simmered Assam tea leaves brewed with crushed green cardamom, ginger root, and warm clove.',
    tastingNotes: ['Crushed Ginger', 'Green Cardamom', 'Assam Tea'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-3',
    name: 'Belgian Chocolate Thick Shake',
    category: 'milkshakes',
    categoryLabel: 'Milkshakes',
    price: 110,
    originalPrice: 150,
    discountBadge: '25% OFF',
    rating: 4.9,
    reviewCount: 295,
    description: 'Decadent imported Belgian cocoa blended with dairy soft-serve and dark chocolate chip fudge.',
    tastingNotes: ['Belgian Cocoa', 'Fudge Swirl', 'Velvety Cream'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-4',
    name: 'Crispy Peri-Peri Paneer Burger',
    category: 'fastfood',
    categoryLabel: 'Fast Food',
    price: 120,
    originalPrice: 160,
    discountBadge: '25% OFF',
    rating: 4.8,
    reviewCount: 310,
    description: 'Golden crust panko cottage cheese patty loaded with fiery peri-peri sauce, cheese slice, and fresh veggies.',
    tastingNotes: ['Spicy Peri-Peri', 'Crispy Patty', 'Toasted Bun'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // TEA SECTION
  {
    id: 'tea-1',
    name: 'Kathalu Special Dum Chai',
    category: 'tea',
    categoryLabel: 'Tea & Chai',
    price: 30,
    rating: 5.0,
    reviewCount: 450,
    description: 'Slow-dum brewed Irani style tea with condensed malai reduction, served hot in authentic clay kullad.',
    tastingNotes: ['Creamy Malai', 'Strong Brew', 'Caramelized Milk'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'tea-2',
    name: 'Fresh Ginger Cardamom Tea',
    category: 'tea',
    categoryLabel: 'Tea & Chai',
    price: 25,
    rating: 4.9,
    reviewCount: 320,
    description: 'Freshly grated spicy ginger infused with whole crushed cardamom pods for a soothing, aromatic sip.',
    tastingNotes: ['Zesty Ginger', 'Fragrant Cardamom', 'CTC Black Tea'],
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tea-3',
    name: 'Honey Lemon Green Tea',
    category: 'tea',
    categoryLabel: 'Tea & Chai',
    price: 35,
    rating: 4.8,
    reviewCount: 190,
    description: 'Organic whole-leaf Darjeeling green tea paired with raw forest honey and freshly squeezed lime.',
    tastingNotes: ['Forest Honey', 'Tangy Citrus', 'Antioxidant Green Tea'],
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=800&q=80',
  },

  // COFFEE SECTION
  {
    id: 'cof-1',
    name: 'Warangal Signature Filter Kaapi',
    category: 'coffee',
    categoryLabel: 'Specialty Coffee',
    price: 40,
    rating: 5.0,
    reviewCount: 680,
    description: 'Fresh Chikmagalur plantation roast decoction met with piping hot full-cream milk and frothy crown.',
    tastingNotes: ['Plantation Arabica', 'Chicory Notes', 'Velvety Foam'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'cof-2',
    name: 'Hazelnut Iced Cold Coffee',
    category: 'coffee',
    categoryLabel: 'Specialty Coffee',
    price: 90,
    rating: 4.9,
    reviewCount: 340,
    description: 'Double espresso blended with chilled milk, roasted hazelnut syrup, and a scoop of vanilla ice cream.',
    tastingNotes: ['Roasted Hazelnut', 'Chilled Espresso', 'Creamy Vanilla'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'cof-3',
    name: 'Artisan Caramel Macchiato',
    category: 'coffee',
    categoryLabel: 'Specialty Coffee',
    price: 85,
    originalPrice: 110,
    discountBadge: 'BESTSELLER',
    rating: 4.9,
    reviewCount: 290,
    description: 'Steamed milk with vanilla bean syrup marked with intense espresso and salted buttery caramel drizzle.',
    tastingNotes: ['Salted Caramel', 'Fresh Espresso', 'Sweet Cream'],
    image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=800&q=80',
  },

  // FAST FOOD SECTION
  {
    id: 'ff-1',
    name: 'Crispy Peri-Peri French Fries',
    category: 'fastfood',
    categoryLabel: 'Fast Food',
    price: 80,
    rating: 4.9,
    reviewCount: 410,
    description: 'Hot, crunchy potato fries tossed in house peri-peri seasoning, served with garlic mayo dip.',
    tastingNotes: ['Spicy Peri-Peri', 'Crisp Potato', 'Garlic Mayo'],
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'ff-2',
    name: 'Cheesy Corn & Spinach Grilled Sandwich',
    category: 'fastfood',
    categoryLabel: 'Fast Food',
    price: 95,
    rating: 4.8,
    reviewCount: 280,
    description: 'Golden grilled jumbo bread packed with sweet corn, sauteed spinach, mozzarella cheese, and herbs.',
    tastingNotes: ['Melted Mozzarella', 'Sweet Golden Corn', 'Butter Crust'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'ff-3',
    name: 'Steamed Veg Momos with Spicy Dip',
    category: 'fastfood',
    categoryLabel: 'Fast Food',
    price: 85,
    rating: 4.9,
    reviewCount: 350,
    description: 'Thin-wrapper dumplings filled with crunchy cabbage, carrots, and spring onions, served with fiery red chili chutney.',
    tastingNotes: ['Thin Wrapper', 'Savory Veggies', 'Red Chili Chutney'],
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80',
  },

  // MILKSHAKES SECTION
  {
    id: 'ms-1',
    name: 'KitKat Crunch Thick Shake',
    category: 'milkshakes',
    categoryLabel: 'Thick Milkshakes',
    price: 120,
    rating: 5.0,
    reviewCount: 510,
    description: 'Crushed KitKat wafers blended into creamy dairy ice cream, crowned with chocolate wafer sticks and whipped topping.',
    tastingNotes: ['Wafer Crunch', 'Milk Chocolate', 'Creamy Frosting'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'ms-2',
    name: 'Oreo Overload Shake',
    category: 'milkshakes',
    categoryLabel: 'Thick Milkshakes',
    price: 115,
    rating: 4.9,
    reviewCount: 390,
    description: 'Rich dark cocoa Oreo biscuits pureed with milk and sweet cream, finished with cookie crumble dusting.',
    tastingNotes: ['Dark Cookie Crumble', 'Sweet Cream', 'Chocolate Drizzle'],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ms-3',
    name: 'Royal Alphonso Mango Shake',
    category: 'milkshakes',
    categoryLabel: 'Thick Milkshakes',
    price: 110,
    rating: 4.8,
    reviewCount: 260,
    description: 'Real Ratnagiri mango pulp churned with chilled milk and garnished with chopped dry fruits.',
    tastingNotes: ['Sweet Mango', 'Pistachio Flakes', 'Rich Milk'],
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80',
  },

  // JUICES & COOLERS SECTION
  {
    id: 'j-1',
    name: 'Virgin Mint Lime Mojito',
    category: 'juices',
    categoryLabel: 'Juices & Coolers',
    price: 75,
    rating: 4.9,
    reviewCount: 430,
    description: 'Muddled fresh garden mint leaves, tangy lime wedges, chilled sparkling fizz, and brown sugar crystals.',
    tastingNotes: ['Garden Mint', 'Zesty Lime', 'Crisp Sparkle'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'j-2',
    name: 'Blue Curacao Ocean Cooler',
    category: 'juices',
    categoryLabel: 'Juices & Coolers',
    price: 85,
    rating: 4.8,
    reviewCount: 220,
    description: 'Vibrant blue citrus syrup combined with crushed ice, lemon juice, and effervescent soda.',
    tastingNotes: ['Citrus Orange', 'Icy Refreshment', 'Sparkling Soda'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'j-3',
    name: 'Fresh Watermelon Mint Splash',
    category: 'juices',
    categoryLabel: 'Juices & Coolers',
    price: 70,
    rating: 4.9,
    reviewCount: 310,
    description: '100% natural, freshly cold-pressed sweet watermelon with a pinch of black salt and mint sprigs.',
    tastingNotes: ['Sweet Watermelon', 'Black Salt', 'Cooling Mint'],
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    title: 'Authentic Filter Kaapi Pour',
    category: 'Coffee',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-2',
    title: 'Clay Pot Dum Chai Brewing',
    category: 'Tea',
    url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-3',
    title: 'Chilled Thick Milkshakes',
    category: 'Milkshakes',
    url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-4',
    title: 'Sizzling Burgers & Peri Peri Fries',
    category: 'Fast Food',
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-5',
    title: 'Fresh Fruit Coolers & Mojitos',
    category: 'Juices',
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-6',
    title: 'Cozy Atmosphere in Rangashaipet',
    category: 'Atmosphere',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ramesh Goud',
    role: 'Local Foodie & Student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment:
      'Coffee Kathalu is the best hangout spot in Rangashaipet! Their Special Dum Chai and Filter Kaapi are unmatched, and the Peri Peri Fries are super crispy.',
    date: '10/09/2026',
  },
  {
    id: 'test-2',
    name: 'Sravani Reddy',
    role: 'Software Professional, Warangal',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment:
      'The KitKat Thick Shake and Cheesy Grilled Sandwich make evening conversations so delightful. Friendly staff, clean ambiance, and open from 7 AM till 10 PM!',
    date: '18/09/2026',
  },
  {
    id: 'test-3',
    name: 'Vikram Chary',
    role: 'Entrepreneur, Warangal',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment:
      'True to its name, every cup comes with great stories. Whether you want quick morning chai or evening coolers with friends, Coffee Kathalu delivers quality.',
    date: '25/09/2026',
  },
];
