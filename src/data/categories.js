/**
 * categories.js — wearit Phase 1
 * ─────────────────────────────────────────────
 * Sprint 4 update: 5 women's categories + Kids coming soon
 * Traditional Marathi → Phase 2 (commented out below)
 * ─────────────────────────────────────────────
 */


// ─────────────────────────────────────────────
// 1. HERO CHIPS (Phase 1)
// ─────────────────────────────────────────────

export const heroChips = [
  {
    id:          'nauwari-saree',
    label:       'Nauwari Saree',
    isWomens:    true,
    categoryId:  'nauwari',
    catalogSlug: 'nauwari-green-paithani',
    btnLabel:    'Browse Nauwari Sarees',
  },
  {
    id:          'kashtha',
    label:       'Kashtha Sarees',
    isWomens:    true,
    categoryId:  'kashtha',
    catalogSlug: 'kashtha-velvet-nauvari',
    btnLabel:    'Browse Kashtha Sarees',
  },
  {
    id:          'lehenga',
    label:       'Lehenga',
    isWomens:    true,
    categoryId:  'lehenga',
    catalogSlug: 'lehenga',
    btnLabel:    'Browse Lehengas',
  },
  {
    id:          'maternity',
    label:       'Maternity Gowns',
    isWomens:    true,
    categoryId:  'maternity',
    catalogSlug: 'maternity-gown',
    btnLabel:    'Browse Maternity Gowns',
  },
  {
    id:          'shaadi',
    label:       'Shaadi Specials',
    isWomens:    true,
    categoryId:  'shaadi',
    catalogSlug: 'shaadi-specials',
    btnLabel:    'Browse Shaadi Specials',
  },
  {
    id:          'western',
    label:       'Western & Themed',
    isWomens:    true,
    categoryId:  'western',
    catalogSlug: 'western-themed',
    btnLabel:    'Browse Western & Themed',
  },
];

// Kids chip — shown as "Coming Soon" in HeroSection
// Uncomment and add to heroChips array when Phase 2 is ready
// {
//   id:         'kids',
//   label:      'Kids Fancy Dress',
//   isWomens:   false,
//   categoryId: 'kids',
//   catalogSlug:'kids-fancy-dress-mixed',
//   btnLabel:   'Browse Kids Fancy Dress',
// }

export const defaultChipId = heroChips[0].id;


// ─────────────────────────────────────────────
// 2. CATEGORY TABS (Phase 1 — catalog page)
// ─────────────────────────────────────────────

export const categoryTabs = [
  {
    id:        'nauwari',
    label:     'Nauwari Sarees',
    isDefault: false,
    items: [
      { id: 'nauwari-green-paithani',  name: 'Green Paithani Rajlakshmi Kashtha',  sub: 'Emerald Green · Paithani Silk', badge: 'Only in wearit', badgeType: 'exclusive', slug: 'nauwari-green-paithani' },
      { id: 'nauwari-violet-paithani', name: 'Violet Paithani Rajlakshmi Kashtha', sub: 'Deep Violet · Peacock motifs',   badge: null,             badgeType: null,        slug: 'nauwari-violet-paithani' },
      { id: 'nauwari-blue-paithani',   name: 'Blue Paithani Rajlakshmi Kastha',    sub: 'Royal Blue · Rich pallu work',   badge: null,             badgeType: null,        slug: 'nauwari-blue-paithani' },
    ],
  },
  {
    id:        'kashtha',
    label:     'Kashtha Sarees',
    isDefault: false,
    items: [
      { id: 'kashtha-velvet-nauvari',  name: 'Velvet Nauvaari Kashtha',             sub: 'Deep Wine · Velvet',     badge: 'Only in wearit', badgeType: 'exclusive', slug: 'kashtha-velvet-nauvari' },
      { id: 'kashtha-saree-2',         name: 'Purple Designer Brahmani Kashtha',      sub: 'Deep Purple · Zari',     badge: null,             badgeType: null,        slug: 'kashtha-saree-2' },
      { id: 'kashtha-saree-3',         name: 'Peach Designer Brahmani Kashtha',       sub: 'Peach · Scalloped border',badge: null,            badgeType: null,        slug: 'kashtha-saree-3' },
      { id: 'kashtha-peach-brahmani',  name: 'The Peach Designer Brahmani Kashtha', sub: 'Peach · Stone Detailing', badge: 'Most Loved',     badgeType: 'exclusive', slug: 'kashtha-peach-brahmani' },
    ],
  },
  {
    id:        'lehenga',
    label:     'Lehenga',
    isDefault: false,
    items: [
      { id: 'lehenga',              name: 'Lehenga',              sub: 'Festive · Celebrations', badge: null, badgeType: null, slug: 'lehenga' },
      { id: 'navratri-chaniya-choli', name: 'Navratri Chaniya Choli', sub: 'Garba · Dandiya',  badge: null, badgeType: null, slug: 'navratri-chaniya-choli' },
    ],
  },
  {
    id:        'maternity',
    label:     'Maternity Gowns',
    isDefault: false,
    items: [
      { id: 'maternity-gown', name: 'Maternity Gown', sub: 'Photoshoot · Baby shower', badge: 'New Arrival', badgeType: 'exclusive', slug: 'maternity-gown' },
    ],
  },
  {
    id:        'shaadi',
    label:     'Shaadi Specials',
    isDefault: false,
    items: [
      { id: 'shaadi-specials', name: 'Shaadi Specials', sub: 'Engagement · Mehndi · Sangeet', badge: 'New Arrival', badgeType: 'exclusive', slug: 'shaadi-specials' },
    ],
  },
  {
    id:        'western',
    label:     'Western & Themed',
    isDefault: false,
    items: [
      { id: 'western-themed', name: 'Western & Themed', sub: 'Halloween · Office · Parties', badge: 'New Arrival', badgeType: 'exclusive', slug: 'western-themed' },
    ],
  },
];

// Phase 2 tabs — uncomment when ready
// {
//   id: 'traditional', label: 'Traditional Marathi', isDefault: false,
//   items: [
//     { id: 'shivaji-adult', name: 'Shivaji Maharaj Set', sub: 'Kids + Adult', badge: 'Most Booked', badgeType: 'exclusive', slug: 'shivaji-set-adult' },
//     { id: 'mawla', name: 'Mawla Warrior', sub: 'Full set', badge: null, badgeType: null, slug: 'mawla-warrior' },
//   ],
// },
// {
//   id: 'kids', label: 'Kids Fancy Dress', isDefault: false,
//   items: [
//     { id: 'kids-mixed', name: 'Fancy Dress Mixed', sub: 'Animals · Fruits', badge: null, badgeType: null, slug: 'kids-fancy-dress-mixed' },
//     { id: 'national-leaders', name: 'National Leaders', sub: 'Gandhi · Nehru', badge: null, badgeType: null, slug: 'national-leaders' },
//   ],
// },


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