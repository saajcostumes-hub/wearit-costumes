// @ts-nocheck
/**
 * products.js — wearit Phase 1 catalog
 * Sprint 4 update: Kashtha restructured into 3 categories:
 *   nauwari  → Paithani Nauwari Kashta (3 Paithani products)
 *   kashtha  → Designer Nauwari Kashta (Purple, Peach, Lilac Brahmani)
 *   velvet   → Velvet Nauwari Kashta (Velvet Nauvaari — NEW category)
 *   lehenga  → Lehenga
 *   maternity→ Maternity Gowns
 *   western  → Western & Themed
 *   shaadi   → Shaadi Specials (collection: nauwari + kashtha + velvet + lehenga)
 */

// ─────────────────────────────────────────────
// PAITHANI NAUWARI KASHTA (3 products)
// ─────────────────────────────────────────────

const nauwariProducts = [
  {
    id:       'nauwari-green-paithani',
    name:     'Green Paithani Rajlakshmi Kashtha',
    slug:     'nauwari-green-paithani',
    category: 'nauwari',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    450,
    deposit:  900,
    description: 'Magnificent emerald green Paithani Rajlakshmi Kashtha saree with authentic Paithani motifs and traditional zari border. A timeless piece for weddings and festive celebrations.',
    specs: {
      sareeName: 'Green Paithani Rajlakshmi Kashtha',
      fabric:    'Premium Paithani Silk',
      work:      'Traditional Zari Border with authentic Paithani motifs (royal gold-and-orange border detailing)',
      color:     'Emerald Green (with contrasting golden-cream embellished blouse)',
      occasion:  'Weddings | Festive | Gudi Padwa | Cultural Programs',
      type:      'Paithani Nauwari Kashta (9-yard) Saree',
    },
    tags:     ['nauwari', 'paithani', 'green', 'rajlakshmi', 'kashtha', '9-yard', 'zari', 'wedding', 'gudi padwa'],
    badge:    'Only in wearit',
    badgeType:'exclusive',
    image:    null,
    images:   ['/images/nauwari-saree-1.jpg'],
    colors:   [],
    alt:      'Green Paithani Rajlakshmi Kashtha saree — wearit premium rental, Hinjewadi Pune',
    featured: true,
    phase:    1,
  },
  {
    id:       'nauwari-violet-paithani',
    name:     'Violet Paithani Rajlakshmi Kashtha',
    slug:     'nauwari-violet-paithani',
    category: 'nauwari',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    450,
    deposit:  900,
    description: 'Stunning deep violet Paithani Rajlakshmi Kashtha saree with signature Paithani pallu motifs and classic peacock/floral embroidery. Royalty in every drape.',
    specs: {
      sareeName: 'Violet Paithani Rajlakshmi Kashtha',
      fabric:    'Premium Paithani Silk',
      work:      'Traditional Zari Border with signature Paithani pallu motifs (classic peacock/floral embroidery)',
      color:     'Deep Violet / Royal Purple (with contrasting golden-cream embellished blouse)',
      occasion:  'Weddings | Festive | Gudi Padwa | Cultural Programs',
      type:      'Paithani Nauwari Kashta (9-yard) Saree',
    },
    tags:     ['nauwari', 'paithani', 'violet', 'purple', 'rajlakshmi', 'kashtha', '9-yard', 'peacock', 'wedding'],
    badge:    null,
    badgeType:null,
    image:    null,
    images:   ['/images/nauwari-saree-2.jpg'],
    colors:   [],
    alt:      'Violet Paithani Rajlakshmi Kashtha saree — wearit premium rental, Hinjewadi Pune',
    featured: false,
    phase:    1,
  },
  {
    id:       'nauwari-blue-paithani',
    name:     'Blue Paithani Rajlakshmi Kastha',
    slug:     'nauwari-blue-paithani',
    category: 'nauwari',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    450,
    deposit:  900,
    description: 'Breathtaking royal blue Paithani Rajlakshmi Kastha saree with traditional Paithani peacock motifs and rich pallu work. A majestic choice for any grand occasion.',
    specs: {
      sareeName: 'Blue Paithani Rajlakshmi Kastha',
      fabric:    'Premium Paithani Silk',
      work:      'Traditional Zari Border with authentic Paithani peacock motifs and rich pallu work',
      color:     'Royal Blue (with contrasting rich red/pink embroidered blouse)',
      occasion:  'Weddings | Festive | Gudi Padwa | Cultural Programs',
      type:      'Paithani Nauwari Kashta (9-yard) Saree',
    },
    tags:     ['nauwari', 'paithani', 'blue', 'royal blue', 'rajlakshmi', 'kastha', '9-yard', 'peacock', 'wedding'],
    badge:    null,
    badgeType:null,
    image:    null,
    images:   ['/images/nauwari-saree-3.jpg'],
    colors:   [],
    alt:      'Blue Paithani Rajlakshmi Kastha saree — wearit premium rental, Hinjewadi Pune',
    featured: false,
    phase:    1,
  },
];

// ─────────────────────────────────────────────
// VELVET NAUWARI KASHTA (1 product — NEW category)
// ─────────────────────────────────────────────

const velvetProducts = [
  {
    id:       'kashtha-velvet-nauvari',
    name:     'Velvet Nauvaari Kashtha',
    slug:     'kashtha-velvet-nauvari',
    category: 'velvet',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    450,
    deposit:  900,
    description: 'Stunning velvet Nauvaari Kashtha saree with rich embroidery work. A bold, luxurious choice for festive occasions and cultural celebrations.',
    specs: {
      sareeName: 'Velvet Nauvaari Kashtha',
      fabric:    'Premium Velvet',
      work:      'Embroidery Work',
      color:     'Deep Wine / Maroon',
      occasion:  'Festive | Cultural Programs | Ganesh Chaturthi',
      type:      'Velvet Nauwari Kashta',
    },
    tags:     ['velvet', 'nauvari', 'kashtha', 'maharashtrian', 'embroidery', 'festive'],
    badge:    'Only in wearit',
    badgeType:'exclusive',
    image:    null,
    images:   ['/images/kashta-saree-1.jpeg'],
    colors:   [],
    alt:      'Velvet Nauvaari Kashtha saree — wearit premium rental, Hinjewadi Pune',
    featured: true,
    phase:    1,
  },
];

// ─────────────────────────────────────────────
// DESIGNER NAUWARI KASHTA (3 products — Brahmani series)
// ─────────────────────────────────────────────

const kashthaProducts = [
  {
    id:       'kashtha-saree-2',
    name:     'Purple Designer Brahmani Kashtha',
    slug:     'kashtha-saree-2',
    category: 'kashtha',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    450,
    deposit:  900,
    description: 'Regal deep purple Brahmani Kashtha saree with heavy embroidery and zari work. An exquisite choice for weddings, festive occasions, and cultural celebrations.',
    specs: {
      sareeName: 'Purple Designer Brahmani Kashtha',
      fabric:    'Silk Blend',
      work:      'Heavy Embroidery & Zari Work',
      color:     'Deep Purple (with contrasting red blouse)',
      occasion:  'Weddings | Festive | Cultural Programs',
      type:      'Designer Nauwari Kashta',
    },
    tags:     ['kashtha', 'purple', 'brahmani', 'silk', 'zari', 'embroidery', 'wedding', 'festive'],
    badge:    null,
    badgeType:null,
    image:    null,
    images:   ['/images/kashta-saree-2.jpeg'],
    colors:   [],
    alt:      'Purple Designer Brahmani Kashtha saree — wearit premium rental, Hinjewadi Pune',
    featured: false,
    phase:    1,
  },
  {
    id:       'kashtha-saree-3',
    name:     'Peach Designer Brahmani Kashtha',
    slug:     'kashtha-saree-3',
    category: 'kashtha',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    450,
    deposit:  900,
    description: 'Stunning peach Brahmani Kashtha saree with intricate scalloped border embroidery. A graceful combination of tradition and elegance for weddings and cultural events.',
    specs: {
      sareeName: 'Peach Designer Brahmani Kashtha',
      fabric:    'Premium Fabric Blend',
      work:      'Embroidery Work with intricate scalloped borders',
      color:     'Peach (with contrasting deep red/maroon velvet blouse)',
      occasion:  'Festive | Weddings | Cultural Programs',
      type:      'Designer Nauwari Kashta',
    },
    tags:     ['kashtha', 'peach', 'brahmani', 'embroidery', 'scalloped border', 'wedding', 'festive'],
    badge:    null,
    badgeType:null,
    image:    null,
    images:   ['/images/kashta-saree-3.jpeg'],
    colors:   [],
    alt:      'Peach Designer Brahmani Kashtha saree — wearit premium rental, Hinjewadi Pune',
    featured: false,
    phase:    1,
  },
  {
    id:       'kashtha-lilac-brahmani',
    name:     'Lilac Designer Brahmani Kashtha',
    slug:     'kashtha-lilac-brahmani',
    category: 'kashtha',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    500,
    deposit:  1000,
    description: 'Mesmerising lilac Brahmani Kashtha saree with rich embroidery and heavily embellished borders. Where tradition meets elegance — perfect for weddings and premium festive occasions.',
    specs: {
      sareeName: 'Lilac Designer Brahmani Kashtha',
      fabric:    'Premium Fabric Blend',
      work:      'Rich Embroidery with heavy embellished borders',
      color:     'Lilac / Light Mauve (with contrasting deep maroon/wine blouse)',
      occasion:  'Festive | Weddings | Cultural Programs',
      type:      'Designer Nauwari Kashta',
    },
    tags:     ['kashtha', 'lilac', 'mauve', 'brahmani', 'embroidery', 'embellished', 'wedding', 'festive'],
    badge:    'Most Loved',
    badgeType:'exclusive',
    image:    null,
    images:   ['/images/kashta-saree-4.jpeg'],
    colors:   [],
    alt:      'Lilac Designer Brahmani Kashtha saree — wearit premium rental, Hinjewadi Pune',
    featured: true,
    phase:    1,
  },
];

// ─────────────────────────────────────────────
// LEHENGA (2 products)
// ─────────────────────────────────────────────

const lehengaProducts = [
  {
    id:       'lehenga',
    name:     'Lehenga',
    slug:     'lehenga',
    category: 'lehenga',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    500,
    deposit:  1000,
    description: 'Festive lehenga choli for celebrations, cultural programs, and family events. Vibrant colours, fully embroidered.',
    specs: {
      sareeName: 'Festive Lehenga Choli',
      fabric:    'Georgette / Net',
      work:      'Full embroidery with sequin work',
      color:     'Multiple colours available',
      occasion:  'Navratri | Garba | Celebrations | Festivals',
      type:      'Lehenga Choli',
    },
    tags:     ['lehenga', 'choli', 'festive', 'celebration', 'cultural', 'navratri', 'garba'],
    badge:    null,
    badgeType:null,
    image:    null,
    images:   [],
    colors:   [],
    alt:      'Festive lehenga choli — wearit premium rental, Hinjewadi Pune',
    featured: true,
    phase:    1,
  },
  {
    id:       'navratri-chaniya-choli',
    name:     'Navratri Chaniya Choli',
    slug:     'navratri-chaniya-choli',
    category: 'lehenga',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    400,
    deposit:  800,
    description: 'Colourful mirror-work chaniya choli for Navratri garba and dandiya events. High-energy festive look.',
    specs: {
      sareeName: 'Navratri Chaniya Choli',
      fabric:    'Cotton / Rayon',
      work:      'Mirror work & traditional embroidery',
      color:     'Multiple colours available',
      occasion:  'Navratri | Garba | Dandiya nights',
      type:      'Chaniya Choli',
    },
    tags:     ['navratri', 'chaniya', 'choli', 'garba', 'dandiya', 'mirror work', 'festive'],
    badge:    null,
    badgeType:null,
    image:    null,
    images:   [],
    colors:   [],
    alt:      'Navratri chaniya choli — wearit premium rental, Hinjewadi Pune',
    featured: false,
    phase:    1,
  },
];

// ─────────────────────────────────────────────
// MATERNITY GOWNS
// ─────────────────────────────────────────────

const maternityProducts = [
  {
    id:       'maternity-gown',
    name:     'Maternity Gown',
    slug:     'maternity-gown',
    category: 'maternity',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    600,
    deposit:  1200,
    description: 'Elegant maternity gowns for photoshoots, baby showers, and special occasions. Comfortable, flattering, and available in multiple styles and colours.',
    specs: {
      sareeName: 'Maternity Gown',
      fabric:    'Soft flowy fabric',
      work:      'Minimal detailing / Lace trim',
      color:     'Multiple colours — WhatsApp to check',
      occasion:  'Maternity Photoshoot | Baby Shower | Special occasions',
      type:      'Maternity Gown',
    },
    tags:     ['maternity', 'gown', 'photoshoot', 'baby shower', 'pregnancy', 'maternity photoshoot'],
    badge:    'New Arrival',
    badgeType:'exclusive',
    image:    null,
    images:   [],
    colors:   [],
    alt:      'Maternity gown for photoshoot — wearit premium rental, Hinjewadi Pune',
    featured: false,
    phase:    1,
  },
];

// ─────────────────────────────────────────────
// WESTERN & THEMED
// ─────────────────────────────────────────────

const westernProducts = [
  {
    id:       'western-themed',
    name:     'Western & Themed',
    slug:     'western-themed',
    category: 'western',
    sizes:    ['Free Size'],
    sizeType: 'freesize',
    price:    400,
    deposit:  800,
    description: 'Western formals, Halloween costumes, and themed outfit rentals for IT office events, parties, and international theme nights.',
    specs: {
      sareeName: 'Western & Themed Costume',
      fabric:    'Varies by costume',
      work:      'Themed detailing',
      color:     'Varies — WhatsApp to check',
      occasion:  'Halloween | Office Theme Party | Corporate Events',
      type:      'Western / Themed Costume',
    },
    tags:     ['western', 'halloween', 'themed', 'office', 'party', 'costume', 'corporate', 'formal'],
    badge:    'New Arrival',
    badgeType:'exclusive',
    image:    null,
    images:   [],
    colors:   [],
    alt:      'Western and themed costume — wearit premium rental, Hinjewadi Pune',
    featured: false,
    phase:    1,
  },
];

// NOTE: Shaadi Specials is a COLLECTION tab (not a product category).
// Shows: nauwariProducts + kashthaProducts + velvetProducts + lehengaProducts
// Filter logic handled in catalog.astro


// ═════════════════════════════════════════════
// PHASE 2 — COMMENTED OUT (DO NOT DELETE)
// ═════════════════════════════════════════════

// const traditionalProducts = [ ... ];
// const kidsProducts = [ ... ];


// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

export const allProducts = [
  ...nauwariProducts,
  ...velvetProducts,
  ...kashthaProducts,
  ...lehengaProducts,
  ...maternityProducts,
  ...westernProducts,
];

export const featuredProducts = allProducts.filter(p => p.featured);

export const productsByCategory = {
  nauwari:   nauwariProducts,
  velvet:    velvetProducts,
  kashtha:   kashthaProducts,
  lehenga:   lehengaProducts,
  maternity: maternityProducts,
  western:   westernProducts,
};

export function getProductBySlug(slug) {
  return allProducts.find(p => p.slug === slug) ?? null;
}

export function filterProducts({ category = 'all' } = {}) {
  if (category === 'all') return allProducts;
  // Shaadi = collection of nauwari + velvet + kashtha + lehenga
  if (category === 'shaadi') return allProducts.filter(p =>
    ['nauwari', 'velvet', 'kashtha', 'lehenga'].includes(p.category)
  );
  return allProducts.filter(p => p.category === category);
}

export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}