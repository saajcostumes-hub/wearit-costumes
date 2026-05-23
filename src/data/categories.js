/**
 * categories.js — wearit single source of truth
 * ─────────────────────────────────────────────
 * All homepage dynamic content lives here.
 * To update for a new festival or add a category:
 *   → Edit THIS file only. Zero component code changes needed.
 *   → Push to GitHub → Vercel auto-deploys in ~60 seconds.
 */


// ─────────────────────────────────────────────
// 1. HERO CHIPS
// ─────────────────────────────────────────────
// categoryId  → the catalog tab to open (/catalog?category=womens)
// catalogSlug → the type filter within that category (/catalog?category=womens&type=nauwari-saree)
// As inventory grows, multiple products of same type will be filtered by &type= param
// ─────────────────────────────────────────────

export const heroChips = [
  {
    id:          'nauwari-saree',
    label:       'Nauwari Saree',
    isWomens:    true,
    categoryId:  'womens',
    catalogSlug: 'nauwari-saree',
    btnLabel:    'Browse Nauwari Sarees',
  },
  {
    id:          'lehenga',
    label:       'Lehenga',
    isWomens:    true,
    categoryId:  'womens',
    catalogSlug: 'lehenga',
    btnLabel:    'Browse Lehengas',
  },
  {
    id:          'gown',
    label:       'Gown',
    isWomens:    true,
    categoryId:  'womens',
    catalogSlug: 'gown',
    btnLabel:    'Browse Gowns',
  },
  {
    id:          'festive-saree',
    label:       'Festive Saree',
    isWomens:    true,
    categoryId:  'womens',
    catalogSlug: 'festive-saree',
    btnLabel:    'Browse Festive Sarees',
  },
  {
    id:          'kids-fancy-dress',
    label:       'Kids Fancy Dress',
    isWomens:    false,
    categoryId:  'kids',
    catalogSlug: 'kids-fancy-dress',
    btnLabel:    'Browse Kids Fancy Dress',
  },
];

// Chip that is active/selected by default on page load (first chip)
export const defaultChipId = heroChips[0].id;


// ─────────────────────────────────────────────
// 2. CATEGORY TABS
// ─────────────────────────────────────────────

export const categoryTabs = [
  {
    id:        'womens',
    label:     "Women's",
    isDefault: true,
    items: [
      { id: 'nauwari-saree',  name: 'Nauwari Saree',  sub: '9-yard · Festival wear',    badge: 'Only in wearit', badgeType: 'exclusive', slug: 'nauwari-saree'  },
      { id: 'lehenga',        name: 'Lehenga',         sub: 'Festive · Celebrations',    badge: 'From ₹400',      badgeType: 'price',     slug: 'lehenga'        },
      { id: 'gown',           name: 'Gown',            sub: 'Events · Formal',           badge: 'From ₹500',      badgeType: 'price',     slug: 'gown'           },
      { id: 'festive-saree',  name: 'Festive Saree',   sub: 'Navratri · Puja',           badge: 'From ₹250',      badgeType: 'price',     slug: 'festive-saree'  },
    ],
  },
  {
    id:        'traditional',
    label:     'Traditional',
    isDefault: false,
    items: [
      { id: 'shivaji-set',    name: 'Shivaji Maharaj Set', sub: 'Kids + Adult sizes',       badge: 'From ₹700', badgeType: 'price', slug: 'shivaji-set-adult'  },
      { id: 'mawla-warrior',  name: 'Mawla Warrior',       sub: 'Full set with accessories', badge: 'From ₹500', badgeType: 'price', slug: 'mawla-warrior'      },
      { id: 'kashta-saree',   name: 'Kashta Saree',        sub: 'Traditional Marathi drape', badge: 'From ₹350', badgeType: 'price', slug: 'kashta-saree'       },
      { id: 'angarkha',       name: 'Angarkha',             sub: "Men's traditional",        badge: 'From ₹400', badgeType: 'price', slug: 'angarkha'           },
    ],
  },
  {
    id:        'kids',
    label:     'Kids',
    isDefault: false,
    items: [
      { id: 'kids-fancy-mixed',   name: 'Fancy Dress Mixed',  sub: 'Animals, fruits, misc',     badge: 'From ₹150', badgeType: 'price', slug: 'kids-fancy-dress-mixed' },
      { id: 'national-leaders',   name: 'National Leaders',   sub: 'Gandhi, Nehru, Laxmibai',   badge: 'From ₹300', badgeType: 'price', slug: 'national-leaders'       },
      { id: 'kids-animals',       name: 'Animals & Nature',   sub: 'Zoo animals, insects',      badge: 'From ₹150', badgeType: 'price', slug: 'kids-animals'           },
      { id: 'superheroes',        name: 'Superheroes',        sub: 'Popular characters',         badge: 'From ₹250', badgeType: 'price', slug: 'superheroes'            },
    ],
  },
];


// ─────────────────────────────────────────────
// 3. FESTIVAL BANNER
// ─────────────────────────────────────────────

export const festiveBanner = {
  active:          true,
  label:           'Upcoming Festival',
  title:           'Ganesh Chaturthi 2026',
  urgency:         'Nauwari Saree Collection available — only 8 sets left. Pre-book now to secure your size.',
  ctaLabel:        'Pre-Book via WhatsApp',
  whatsappMessage: "Hi! I'd like to pre-book a Nauwari Saree for Ganesh Chaturthi 2026. Can you share size availability and pricing? \uD83D\uDE4F",
};