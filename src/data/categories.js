/**
 * categories.js — wearit Phase 1
 * ─────────────────────────────────────────────
 * Sprint 4 update: Restructured Nauwari categories
 *   nauwari  → Paithani Nauwari Kashta
 *   kashtha  → Designer Nauwari Kashta (Brahmani — Purple, Peach, Lilac)
 *   velvet   → Velvet Nauwari Kashta (Velvet Nauvaari)
 *   kids     → Kids Fancy Dress (NEW — real tab, replaces "Coming Soon")
 * ─────────────────────────────────────────────
 */


// ─────────────────────────────────────────────
// 1. HERO CHIPS (Phase 1)
// ─────────────────────────────────────────────

export const heroChips = [
  {
    id:          'nauwari-saree',
    label:       'Paithani Nauwari Kashta',
    isWomens:    true,
    categoryId:  'nauwari',
    catalogSlug: 'nauwari-green-paithani',
    btnLabel:    'Browse Paithani Nauwari Kashta',
  },
  {
    id:          'kashtha',
    label:       'Designer Nauwari Kashta',
    isWomens:    true,
    categoryId:  'kashtha',
    catalogSlug: 'kashtha-saree-2',
    btnLabel:    'Browse Designer Nauwari Kashta',
  },
  {
    id:          'velvet',
    label:       'Velvet Nauwari Kashta',
    isWomens:    true,
    categoryId:  'velvet',
    catalogSlug: 'kashtha-velvet-nauvari',
    btnLabel:    'Browse Velvet Nauwari Kashta',
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
    id:          'kids',
    label:       'Kids Fancy Dress',
    isWomens:    false,
    categoryId:  'kids',
    catalogSlug: 'kids-fancy-dress',
    btnLabel:    'Browse Kids Fancy Dress',
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

export const defaultChipId = heroChips[0].id;


// ─────────────────────────────────────────────
// 2. CATEGORY TABS (Phase 1 — catalog page)
// ─────────────────────────────────────────────

export const categoryTabs = [
  {
    id:        'nauwari',
    label:     'Paithani Nauwari Kashta',
    isDefault: false,
    items: [
      { id: 'nauwari-green-paithani',  name: 'Green Paithani Rajlakshmi Kashtha',  sub: 'Emerald Green · Paithani Silk', badge: 'Only in wearit', badgeType: 'exclusive', slug: 'nauwari-green-paithani' },
      { id: 'nauwari-violet-paithani', name: 'Violet Paithani Rajlakshmi Kashtha', sub: 'Deep Violet · Peacock motifs',   badge: null,             badgeType: null,        slug: 'nauwari-violet-paithani' },
      { id: 'nauwari-blue-paithani',   name: 'Blue Paithani Rajlakshmi Kastha',    sub: 'Royal Blue · Rich pallu work',   badge: null,             badgeType: null,        slug: 'nauwari-blue-paithani' },
    ],
  },
  {
    id:        'kashtha',
    label:     'Designer Nauwari Kashta',
    isDefault: false,
    items: [
      { id: 'kashtha-saree-2',         name: 'Purple Designer Brahmani Kashtha',      sub: 'Deep Purple · Zari',           badge: null,         badgeType: null,        slug: 'kashtha-saree-2' },
      { id: 'kashtha-saree-3',         name: 'Peach Designer Brahmani Kashtha',       sub: 'Peach · Scalloped border',     badge: null,         badgeType: null,        slug: 'kashtha-saree-3' },
      { id: 'kashtha-lilac-brahmani',  name: 'Lilac Designer Brahmani Kashtha',       sub: 'Lilac · Embellished',          badge: 'Most Loved', badgeType: 'exclusive', slug: 'kashtha-lilac-brahmani' },
    ],
  },
  {
    id:        'velvet',
    label:     'Velvet Nauwari Kashta',
    isDefault: false,
    items: [
      { id: 'kashtha-velvet-nauvari', name: 'Velvet Nauvaari Kashtha', sub: 'Deep Wine · Velvet · Embroidery', badge: 'Only in wearit', badgeType: 'exclusive', slug: 'kashtha-velvet-nauvari' },
    ],
  },
  {
    id:        'lehenga',
    label:     'Lehenga',
    isDefault: false,
    items: [
      { id: 'lehenga',                name: 'Lehenga',               sub: 'Festive · Celebrations', badge: null, badgeType: null, slug: 'lehenga' },
      { id: 'navratri-chaniya-choli', name: 'Navratri Chaniya Choli', sub: 'Garba · Dandiya',        badge: null, badgeType: null, slug: 'navratri-chaniya-choli' },
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
    id:        'kids',
    label:     'Kids Fancy Dress',
    isDefault: false,
    // ⬇ PENDING: items will be filled once photos + product names arrive.
    // Structure to follow (copy this pattern per costume):
    // { id: 'kids-slug', name: 'Costume Name', sub: 'Age group · Theme', badge: 'New Arrival', badgeType: 'exclusive', slug: 'kids-slug' },
    items: [],
  },
  {
    id:        'shaadi',
    label:     'Shaadi Specials',
    isDefault: false,
    items: [
      { id: 'nauwari-green-paithani',  name: 'Green Paithani Rajlakshmi Kashtha',  sub: 'Weddings · Festive',   badge: 'Only in wearit', badgeType: 'exclusive', slug: 'nauwari-green-paithani' },
      { id: 'kashtha-lilac-brahmani',  name: 'Lilac Designer Brahmani Kashtha',    sub: 'Weddings · Partywear', badge: 'Most Loved',     badgeType: 'exclusive', slug: 'kashtha-lilac-brahmani' },
      { id: 'kashtha-velvet-nauvari',  name: 'Velvet Nauvaari Kashtha',            sub: 'Weddings · Festive',   badge: 'Only in wearit', badgeType: 'exclusive', slug: 'kashtha-velvet-nauvari' },
      { id: 'kashtha-saree-2',         name: 'Purple Designer Brahmani Kashtha',   sub: 'Weddings · Festive',   badge: null,             badgeType: null,        slug: 'kashtha-saree-2' },
      { id: 'lehenga',                 name: 'Lehenga',                            sub: 'Garba · Celebrations', badge: null,             badgeType: null,        slug: 'lehenga' },
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


// ─────────────────────────────────────────────
// 3. FESTIVAL BANNER
// ─────────────────────────────────────────────

export const festiveBanner = {
  active:          true,
  label:           'Upcoming Festival',
  title:           'Ganesh Chaturthi 2026',
  urgency:         'Nauwari Saree Collection available — only 8 sets left. Pre-book now to secure your size.',
  ctaLabel:        'Pre-Book via WhatsApp',
  whatsappMessage: "Hi! I'd like to pre-book a Nauwari Saree for Ganesh Chaturthi 2026. Can you share size availability and pricing? 🙏",
};