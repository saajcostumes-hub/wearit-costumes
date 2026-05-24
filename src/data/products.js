// @ts-nocheck
/**
 * products.js — wearit Phase 1 catalog
 * ─────────────────────────────────────────────
 * Sprint 4 update: restructured for Phase 1 launch
 * 5 active categories (women's focus), Kids coming soon
 *
 * PHASE 2 items are commented out below — DO NOT DELETE
 * Traditional Marathi (Shivaji, Mawla, Angarkha, Dhoti) → Phase 2
 * Kids Fancy Dress → Phase 2
 * ─────────────────────────────────────────────
 *
 * Category slugs (Phase 1):
 *   nauwari   → Nauwari Sarees
 *   lehenga   → Lehenga
 *   maternity → Maternity Gowns
 *   shaadi    → Shaadi Specials
 *   western   → Western & Themed
 *
 * Each product:
 *   id, name, slug, category, sizes[], sizeType,
 *   price, deposit, description, tags[], badge,
 *   badgeType, image, alt, featured, phase (1 | 2)
 */

// ─────────────────────────────────────────────
// NAUWARI SAREES (3 products)
// ─────────────────────────────────────────────

const nauwariProducts = [
  {
    id:          'nauwari-saree',
    name:        'Nauwari Saree',
    slug:        'nauwari-saree',
    category:    'nauwari',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       400,
    deposit:     800,
    description: 'Traditional 9-yard Maharashtrian saree — the centrepiece of Ganesh Chaturthi and Shiv Jayanti celebrations. Includes matching blouse.',
    tags:        ['nauwari', '9-yard', 'maharashtrian', 'ganesh chaturthi', 'shiv jayanti', 'traditional', 'saree'],
    badge:       'Only in wearit',
    badgeType:   'exclusive',
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Nauwari 9-yard Maharashtrian saree — wearit premium rental, Hinjewadi Pune',
    featured:    true,
    phase:       1,
  },
  {
    id:          'kashta-saree',
    name:        'Kashta Saree',
    slug:        'kashta-saree',
    category:    'nauwari',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       350,
    deposit:     700,
    description: 'Traditional Kashta-style drape — a distinct Maharashtrian way of wearing a saree, perfect for Ganesh Chaturthi cultural programs.',
    tags:        ['kashta', 'saree', 'maharashtrian', 'traditional', 'ganesh chaturthi'],
    badge:       null,
    badgeType:   null,
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Kashta style saree — wearit premium rental, Hinjewadi Pune',
    featured:    false,
    phase:       1,
  },
  {
    id:          'festive-saree',
    name:        'Festive Saree',
    slug:        'festive-saree',
    category:    'nauwari',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       250,
    deposit:     500,
    description: 'Silk-look festive saree for Navratri, Puja, and cultural programs. Available in multiple colours.',
    tags:        ['saree', 'festive', 'navratri', 'puja', 'silk', 'cultural'],
    badge:       null,
    badgeType:   null,
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Festive saree — wearit premium rental, Hinjewadi Pune',
    featured:    false,
    phase:       1,
  },
];

// ─────────────────────────────────────────────
// LEHENGA (2 products)
// ─────────────────────────────────────────────

const lehengaProducts = [
  {
    id:          'lehenga',
    name:        'Lehenga',
    slug:        'lehenga',
    category:    'lehenga',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       500,
    deposit:     1000,
    description: 'Festive lehenga choli for celebrations, cultural programs, and family events. Vibrant colours, fully embroidered.',
    tags:        ['lehenga', 'choli', 'festive', 'celebration', 'cultural', 'navratri', 'garba'],
    badge:       null,
    badgeType:   null,
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Festive lehenga choli — wearit premium rental, Hinjewadi Pune',
    featured:    true,
    phase:       1,
  },
  {
    id:          'navratri-chaniya-choli',
    name:        'Navratri Chaniya Choli',
    slug:        'navratri-chaniya-choli',
    category:    'lehenga',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       400,
    deposit:     800,
    description: 'Colourful mirror-work chaniya choli for Navratri garba and dandiya events. High-energy festive look.',
    tags:        ['navratri', 'chaniya', 'choli', 'garba', 'dandiya', 'mirror work', 'festive'],
    badge:       null,
    badgeType:   null,
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Navratri chaniya choli — wearit premium rental, Hinjewadi Pune',
    featured:    false,
    phase:       1,
  },
];

// ─────────────────────────────────────────────
// MATERNITY GOWNS (1 product — Phase 1 launch)
// Add more specific items as inventory grows
// ─────────────────────────────────────────────

const maternityProducts = [
  {
    id:          'maternity-gown',
    name:        'Maternity Gown',
    slug:        'maternity-gown',
    category:    'maternity',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       600,
    deposit:     1200,
    description: 'Elegant maternity gowns for photoshoots, baby showers, and special occasions. Comfortable, flattering, and available in multiple styles and colours. WhatsApp us for current colour options.',
    tags:        ['maternity', 'gown', 'photoshoot', 'baby shower', 'pregnancy', 'maternity photoshoot'],
    badge:       'New Arrival',
    badgeType:   'exclusive',
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Maternity gown for photoshoot — wearit premium rental, Hinjewadi Pune',
    featured:    false,
    phase:       1,
  },
];

// ─────────────────────────────────────────────
// SHAADI SPECIALS (1 product — Phase 1 launch)
// Add specific engagement / mehndi / sangeet
// items as inventory grows
// ─────────────────────────────────────────────

const shaadiProducts = [
  {
    id:          'shaadi-specials',
    name:        'Shaadi Specials',
    slug:        'shaadi-specials',
    category:    'shaadi',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       700,
    deposit:     1400,
    description: 'Pre-wedding occasion wear for engagement, mehndi night, sangeet, and anniversary celebrations. Shararas, anarkalis, gowns and more. WhatsApp us with your event date for personalised suggestions.',
    tags:        ['shaadi', 'engagement', 'mehndi', 'sangeet', 'pre-wedding', 'sharara', 'anarkali', 'anniversary'],
    badge:       'New Arrival',
    badgeType:   'exclusive',
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Shaadi special occasion wear — wearit premium rental, Hinjewadi Pune',
    featured:    false,
    phase:       1,
  },
];

// ─────────────────────────────────────────────
// WESTERN & THEMED (1 product — Phase 1 launch)
// Add specific items (Halloween, corporate, formal)
// as inventory grows
// ─────────────────────────────────────────────

const westernProducts = [
  {
    id:          'western-themed',
    name:        'Western & Themed',
    slug:        'western-themed',
    category:    'western',
    sizes:       ['Free Size'],
    sizeType:    'freesize',
    price:       400,
    deposit:     800,
    description: 'Western formals, Halloween costumes, and themed outfit rentals for IT office events, parties, and international theme nights. WhatsApp us for current stock and costume options.',
    tags:        ['western', 'halloween', 'themed', 'office', 'party', 'costume', 'corporate', 'formal'],
    badge:       'New Arrival',
    badgeType:   'exclusive',
    image:       null,        // LEGACY single image — use 'images' array below
    images:      [],           // Add up to 5 photo paths: ['/images/product/img1.jpg', ...]
    colors:      [],           // Add available colours: ['Red', 'Blue', 'Green'] — shown as selector on product page
    alt:         'Western and themed costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
    phase:       1,
  },
];


// ═════════════════════════════════════════════
// PHASE 2 — COMMENTED OUT (DO NOT DELETE)
// Uncomment when ready to add to catalog
// ═════════════════════════════════════════════

// ─── Traditional Marathi ───
// const traditionalProducts = [
//   {
//     id: 'shivaji-set-kids', name: 'Shivaji Maharaj Set — Kids',
//     slug: 'shivaji-set-kids', category: 'traditional',
//     sizes: ['3-5Y', '5-7Y', '7-10Y', '10-12Y'], sizeType: 'kids',
//     price: 350, deposit: 700,
//     description: 'Complete Shivaji Maharaj costume for children — includes pagdi, angrakha, dhoti, kundal, and toy talwar.',
//     tags: ['shivaji', 'maharaj', 'kids', 'shiv jayanti', 'school'],
//     badge: null, badgeType: null, image: null,
//     alt: 'Kids Shivaji Maharaj costume — wearit, Hinjewadi Pune', featured: false, phase: 2,
//   },
//   {
//     id: 'shivaji-set-adult', name: 'Shivaji Maharaj Set — Adult',
//     slug: 'shivaji-set-adult', category: 'traditional',
//     sizes:       ['Free Size'], sizeType: 'standard',
//     price: 800, deposit: 1600,
//     description: 'Premium adult Shivaji Maharaj warrior set — pagdi, angrakha, dhoti, armour, kundal, talwar.',
//     tags: ['shivaji', 'maharaj', 'adult', 'shiv jayanti', 'warrior'],
//     badge: 'Most Booked', badgeType: 'exclusive', image: null,
//     alt: 'Adult Shivaji Maharaj costume — wearit, Hinjewadi Pune', featured: false, phase: 2,
//   },
//   {
//     id: 'mawla-warrior', name: 'Mawla Warrior Set',
//     slug: 'mawla-warrior', category: 'traditional',
//     sizes:       ['Free Size'], sizeType: 'standard',
//     price: 600, deposit: 1200,
//     description: 'Mawla warrior costume with shield, sword, and period armour accessories.',
//     tags: ['mawla', 'warrior', 'shivaji', 'shiv jayanti'],
//     badge: null, badgeType: null, image: null,
//     alt: 'Mawla warrior costume — wearit, Hinjewadi Pune', featured: false, phase: 2,
//   },
//   {
//     id: 'angarkha', name: 'Angarkha',
//     slug: 'angarkha', category: 'traditional',
//     sizes:       ['Free Size'], sizeType: 'standard',
//     price: 400, deposit: 800,
//     description: 'Traditional Maharashtrian angarkha for cultural programs.',
//     tags: ['angarkha', 'traditional', 'maharashtrian', 'mens'],
//     badge: null, badgeType: null, image: null,
//     alt: 'Traditional Angarkha — wearit, Hinjewadi Pune', featured: false, phase: 2,
//   },
//   {
//     id: 'dhoti-kurta', name: 'Dhoti Kurta Set',
//     slug: 'dhoti-kurta', category: 'traditional',
//     sizes:       ['Free Size'], sizeType: 'standard',
//     price: 300, deposit: 600,
//     description: 'Classic white dhoti-kurta for Gudi Padwa, Republic Day, and cultural events.',
//     tags: ['dhoti', 'kurta', 'traditional', 'gudi padwa'],
//     badge: null, badgeType: null, image: null,
//     alt: 'Dhoti kurta set — wearit, Hinjewadi Pune', featured: false, phase: 2,
//   },
// ];

// ─── Kids Fancy Dress ───
// const kidsProducts = [
//   { id: 'kids-fancy-dress-mixed', name: 'Fancy Dress — Animals & Fruits', slug: 'kids-fancy-dress-mixed', category: 'kids', sizes: ['2-4Y','4-6Y','6-8Y'], sizeType: 'kids', price: 150, deposit: 300, description: 'Fun animal and fruit costumes for school fancy dress competitions.', tags: ['fancy dress', 'kids', 'school', 'animal'], badge: null, badgeType: null, image: null, alt: 'Kids fancy dress animal costume', featured: false, phase: 2 },
//   { id: 'national-leaders', name: 'National Leaders Set', slug: 'national-leaders', category: 'kids', sizes: ['4-6Y','6-8Y','8-10Y','10-12Y'], sizeType: 'kids', price: 300, deposit: 600, description: 'National leader costume sets for Republic and Independence Day.', tags: ['national leaders', 'republic day', 'school', 'kids'], badge: null, badgeType: null, image: null, alt: 'Kids national leaders costume', featured: false, phase: 2 },
//   { id: 'gandhi-costume', name: 'Mahatma Gandhi Costume', slug: 'gandhi-costume', category: 'kids', sizes: ['4-6Y','6-8Y','8-10Y','10-12Y'], sizeType: 'kids', price: 250, deposit: 500, description: 'Complete Mahatma Gandhi costume for Republic Day school programs.', tags: ['gandhi', 'republic day', 'school', 'kids'], badge: null, badgeType: null, image: null, alt: 'Kids Gandhi costume', featured: false, phase: 2 },
//   { id: 'laxmibai-costume', name: 'Rani Laxmibai Costume', slug: 'laxmibai-costume', category: 'kids', sizes: ['4-6Y','6-8Y','8-10Y','10-12Y'], sizeType: 'kids', price: 350, deposit: 700, description: 'Rani of Jhansi warrior costume for girls.', tags: ['laxmibai', 'rani', 'republic day', 'girls', 'school'], badge: null, badgeType: null, image: null, alt: 'Kids Rani Laxmibai costume', featured: false, phase: 2 },
//   { id: 'kids-animals', name: 'Animal Costumes', slug: 'kids-animals', category: 'kids', sizes: ['2-4Y','4-6Y','6-8Y'], sizeType: 'kids', price: 150, deposit: 300, description: 'Zoo and jungle animal costumes.', tags: ['animal', 'kids', 'fancy dress'], badge: null, badgeType: null, image: null, alt: 'Kids animal costume', featured: false, phase: 2 },
//   { id: 'superheroes', name: 'Superhero Costumes', slug: 'superheroes', category: 'kids', sizes: ['3-5Y','5-7Y','7-10Y'], sizeType: 'kids', price: 250, deposit: 500, description: 'Superhero costumes for birthday parties and school events.', tags: ['superhero', 'kids', 'birthday', 'school'], badge: null, badgeType: null, image: null, alt: 'Kids superhero costume', featured: false, phase: 2 },
// ];


// ─────────────────────────────────────────────
// EXPORTS — Phase 1 only
// ─────────────────────────────────────────────

export const allProducts = [
  ...nauwariProducts,
  ...lehengaProducts,
  ...maternityProducts,
  ...shaadiProducts,
  ...westernProducts,
  // Phase 2 (uncomment when ready):
  // ...traditionalProducts,
  // ...kidsProducts,
];

// Homepage featured cards
export const featuredProducts = allProducts.filter(p => p.featured);

// Category helpers
export const productsByCategory = {
  nauwari:   nauwariProducts,
  lehenga:   lehengaProducts,
  maternity: maternityProducts,
  shaadi:    shaadiProducts,
  western:   westernProducts,
  // traditional: traditionalProducts, // Phase 2
  // kids:        kidsProducts,        // Phase 2
};

// Product detail page lookup
export function getProductBySlug(slug) {
  return allProducts.find(p => p.slug === slug) ?? null;
}

// Catalog filter
export function filterProducts({ category = 'all', size = 'all' } = {}) {
  let results = allProducts;
  if (category !== 'all') results = results.filter(p => p.category === category);
  if (size !== 'all')     results = results.filter(p => p.sizes.includes(size));
  return results;
}

// Format price: 400 → "₹400"
export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}