/**
 * products.js — wearit complete product catalog
 * ─────────────────────────────────────────────
 * Sprint 2: expanded from 2 → 17 products
 * Sprint 3: replace null images with real photography paths
 *
 * Schema per product:
 *   id          — unique identifier string
 *   name        — display name
 *   slug        — URL slug → /catalog/[slug]
 *   category    — 'womens' | 'traditional' | 'kids'
 *   sizes       — array of available size strings
 *   sizeType    — 'standard' (S/M/L/XL) | 'kids' (age ranges)
 *   price       — rental price per event (₹)
 *   deposit     — refundable security deposit (₹) — always 2× price
 *   description — 1–2 sentence description
 *   tags        — searchable keywords array
 *   badge       — short badge label (or null)
 *   badgeType   — 'exclusive' (orange) | 'price' (gold) | null
 *   image       — image path (null until photography is done)
 *   alt         — image alt text for accessibility
 *   featured    — true = appears on homepage Popular section
 *
 * Import pattern:
 *   import { allProducts, featuredProducts, getProductBySlug } from '../data/products.js';
 *   import { allProducts } from '../../data/products.js';
 */

// ─────────────────────────────────────────────
// WOMEN'S COLLECTION (6 products)
// ─────────────────────────────────────────────

const womensProducts = [
  {
    id:          'nauwari-saree',
    name:        'Nauwari Saree',
    slug:        'nauwari-saree',
    category:    'womens',
    sizes:       ['S', 'M', 'L', 'XL'],
    sizeType:    'standard',
    price:       400,
    deposit:     800,
    description: 'Traditional 9-yard Maharashtrian saree — the centrepiece of Ganesh Chaturthi and Shiv Jayanti celebrations. Includes matching blouse.',
    tags:        ['nauwari', '9-yard', 'maharashtrian', 'ganesh chaturthi', 'shiv jayanti', 'traditional', 'saree'],
    badge:       'Only in wearit',
    badgeType:   'exclusive',
    image:       null,
    alt:         'Nauwari 9-yard Maharashtrian saree — wearit premium rental, Hinjewadi Pune',
    featured:    true,
  },
  {
    id:          'lehenga',
    name:        'Lehenga',
    slug:        'lehenga',
    category:    'womens',
    sizes:       ['S', 'M', 'L'],
    sizeType:    'standard',
    price:       500,
    deposit:     1000,
    description: 'Festive lehenga choli for celebrations, cultural programs, and family events. Vibrant colours, fully embroidered.',
    tags:        ['lehenga', 'choli', 'festive', 'celebration', 'cultural', 'navratri', 'garba'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Festive lehenga choli — wearit premium rental, Hinjewadi Pune',
    featured:    true,
  },
  {
    id:          'gown',
    name:        'Gown',
    slug:        'gown',
    category:    'womens',
    sizes:       ['S', 'M', 'L', 'XL'],
    sizeType:    'standard',
    price:       500,
    deposit:     1000,
    description: 'Elegant floor-length gown for formal events, school annual days, and stage performances.',
    tags:        ['gown', 'formal', 'event', 'annual day', 'stage', 'performance'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Formal gown — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'festive-saree',
    name:        'Festive Saree',
    slug:        'festive-saree',
    category:    'womens',
    sizes:       ['Free Size'],
    sizeType:    'standard',
    price:       250,
    deposit:     500,
    description: 'Silk-look festive saree for Navratri, Puja, and cultural programs. Available in multiple colours.',
    tags:        ['saree', 'festive', 'navratri', 'puja', 'silk', 'cultural'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Festive saree — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'kashta-saree',
    name:        'Kashta Saree',
    slug:        'kashta-saree',
    category:    'womens',
    sizes:       ['Free Size'],
    sizeType:    'standard',
    price:       350,
    deposit:     700,
    description: 'Traditional Kashta-style drape — a distinct Maharashtrian way of wearing a saree, perfect for Ganesh Chaturthi programs.',
    tags:        ['kashta', 'saree', 'maharashtrian', 'traditional', 'ganesh chaturthi'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kashta style saree — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'navratri-chaniya-choli',
    name:        'Navratri Chaniya Choli',
    slug:        'navratri-chaniya-choli',
    category:    'womens',
    sizes:       ['S', 'M', 'L'],
    sizeType:    'standard',
    price:       400,
    deposit:     800,
    description: 'Colourful mirror-work chaniya choli for Navratri garba and dandiya events. High-energy festive look.',
    tags:        ['navratri', 'chaniya', 'choli', 'garba', 'dandiya', 'mirror work', 'festive'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Navratri chaniya choli — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
];

// ─────────────────────────────────────────────
// TRADITIONAL COLLECTION (5 products)
// ─────────────────────────────────────────────

const traditionalProducts = [
  {
    id:          'shivaji-set-kids',
    name:        'Shivaji Maharaj Set — Kids',
    slug:        'shivaji-set-kids',
    category:    'traditional',
    sizes:       ['3-5Y', '5-7Y', '7-10Y', '10-12Y'],
    sizeType:    'kids',
    price:       350,
    deposit:     700,
    description: 'Complete Shivaji Maharaj costume for children — includes pagdi, angrakha, dhoti, kundal, and toy talwar.',
    tags:        ['shivaji', 'maharaj', 'kids', 'children', 'shiv jayanti', 'school', 'annual day', 'warrior'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kids Shivaji Maharaj costume set — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'shivaji-set-adult',
    name:        'Shivaji Maharaj Set — Adult',
    slug:        'shivaji-set-adult',
    category:    'traditional',
    sizes:       ['S', 'M', 'L', 'XL'],
    sizeType:    'standard',
    price:       800,
    deposit:     1600,
    description: 'Premium adult Shivaji Maharaj warrior set — includes royal pagdi, angrakha, dhoti, armour accessories, kundal, and talwar. Most booked for Shiv Jayanti.',
    tags:        ['shivaji', 'maharaj', 'adult', 'shiv jayanti', 'warrior', 'pagdi', 'talwar', 'premium'],
    badge:       'Most Booked',
    badgeType:   'exclusive',
    image:       null,
    alt:         'Adult Shivaji Maharaj warrior costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'mawla-warrior',
    name:        'Mawla Warrior Set',
    slug:        'mawla-warrior',
    category:    'traditional',
    sizes:       ['S', 'M', 'L', 'XL'],
    sizeType:    'standard',
    price:       600,
    deposit:     1200,
    description: 'Mawla warrior costume with shield, sword, and period armour accessories. Ideal for Shiv Jayanti and historical drama events.',
    tags:        ['mawla', 'warrior', 'shivaji', 'shiv jayanti', 'shield', 'sword', 'historical'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Mawla warrior costume set — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'angarkha',
    name:        'Angarkha',
    slug:        'angarkha',
    category:    'traditional',
    sizes:       ['S', 'M', 'L', 'XL'],
    sizeType:    'standard',
    price:       400,
    deposit:     800,
    description: 'Traditional Maharashtrian angarkha — a classic men\'s wrap garment for cultural programs and historical performances.',
    tags:        ['angarkha', 'traditional', 'maharashtrian', 'mens', 'cultural', 'historical'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Traditional Angarkha — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'dhoti-kurta',
    name:        'Dhoti Kurta Set',
    slug:        'dhoti-kurta',
    category:    'traditional',
    sizes:       ['S', 'M', 'L', 'XL'],
    sizeType:    'standard',
    price:       300,
    deposit:     600,
    description: 'Classic white dhoti-kurta set for Gudi Padwa, Republic Day, and traditional cultural events.',
    tags:        ['dhoti', 'kurta', 'traditional', 'gudi padwa', 'republic day', 'cultural', 'mens'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Dhoti kurta set — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
];

// ─────────────────────────────────────────────
// KIDS COLLECTION (6 products)
// ─────────────────────────────────────────────

const kidsProducts = [
  {
    id:          'kids-fancy-dress-mixed',
    name:        'Fancy Dress — Animals & Fruits',
    slug:        'kids-fancy-dress-mixed',
    category:    'kids',
    sizes:       ['2-4Y', '4-6Y', '6-8Y'],
    sizeType:    'kids',
    price:       150,
    deposit:     300,
    description: 'Fun animal and fruit costumes for school fancy dress competitions — lion, tiger, parrot, apple, carrot and more.',
    tags:        ['fancy dress', 'kids', 'school', 'animal', 'fruit', 'competition', 'annual day'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kids fancy dress animal costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'national-leaders',
    name:        'National Leaders Set',
    slug:        'national-leaders',
    category:    'kids',
    sizes:       ['4-6Y', '6-8Y', '8-10Y', '10-12Y'],
    sizeType:    'kids',
    price:       300,
    deposit:     600,
    description: 'Costume sets representing India\'s national leaders — includes Nehru, Subhas Chandra Bose, and Rani Laxmibai options.',
    tags:        ['national leaders', 'nehru', 'bose', 'republic day', 'independence day', 'school', 'kids'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kids national leaders costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'gandhi-costume',
    name:        'Mahatma Gandhi Costume',
    slug:        'gandhi-costume',
    category:    'kids',
    sizes:       ['4-6Y', '6-8Y', '8-10Y', '10-12Y'],
    sizeType:    'kids',
    price:       250,
    deposit:     500,
    description: 'Complete Mahatma Gandhi costume — white dhoti, shawl, round glasses, and walking stick. Perfect for Republic Day and Independence Day programs.',
    tags:        ['gandhi', 'mahatma', 'republic day', 'independence day', 'school', 'kids', 'freedom fighter'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kids Mahatma Gandhi costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'laxmibai-costume',
    name:        'Rani Laxmibai Costume',
    slug:        'laxmibai-costume',
    category:    'kids',
    sizes:       ['4-6Y', '6-8Y', '8-10Y', '10-12Y'],
    sizeType:    'kids',
    price:       350,
    deposit:     700,
    description: 'Rani of Jhansi warrior costume for girls — includes saree drape, sword, and crown. Most popular for Republic Day school programs.',
    tags:        ['laxmibai', 'rani', 'jhansi', 'warrior', 'girls', 'republic day', 'independence day', 'school'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kids Rani Laxmibai costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'kids-animals',
    name:        'Animal Costumes',
    slug:        'kids-animals',
    category:    'kids',
    sizes:       ['2-4Y', '4-6Y', '6-8Y'],
    sizeType:    'kids',
    price:       150,
    deposit:     300,
    description: 'Zoo and jungle animal costumes — lion, elephant, giraffe, rabbit, and more. Soft, comfortable fabric for long wear.',
    tags:        ['animal', 'lion', 'elephant', 'rabbit', 'zoo', 'kids', 'fancy dress', 'school'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kids animal costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
  {
    id:          'superheroes',
    name:        'Superhero Costumes',
    slug:        'superheroes',
    category:    'kids',
    sizes:       ['3-5Y', '5-7Y', '7-10Y'],
    sizeType:    'kids',
    price:       250,
    deposit:     500,
    description: 'Popular superhero costumes for birthday parties and school events. Multiple character options available — ask us for current stock.',
    tags:        ['superhero', 'kids', 'birthday', 'party', 'school', 'fancy dress'],
    badge:       null,
    badgeType:   null,
    image:       null,
    alt:         'Kids superhero costume — wearit premium rental, Hinjewadi Pune',
    featured:    false,
  },
];

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

export const allProducts = [
  ...womensProducts,
  ...traditionalProducts,
  ...kidsProducts,
];

// Homepage "Popular this season" — featured: true products only
export const featuredProducts = allProducts.filter(p => p.featured);

// Catalog page category helpers
export const productsByCategory = {
  womens:      womensProducts,
  traditional: traditionalProducts,
  kids:        kidsProducts,
};

// Product detail page — find by slug
export function getProductBySlug(slug) {
  return allProducts.find(p => p.slug === slug) ?? null;
}

// Catalog filter helper — filter by category + size
export function filterProducts({ category = 'all', size = 'all' } = {}) {
  let results = allProducts;

  if (category !== 'all') {
    results = results.filter(p => p.category === category);
  }

  if (size !== 'all') {
    results = results.filter(p => p.sizes.includes(size));
  }

  return results;
}

// Format price for display: 400 → "₹400"
export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}