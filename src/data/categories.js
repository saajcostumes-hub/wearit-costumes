/**
 * categories.js — wearit Phase 1
 * ─────────────────────────────────────────────
 * Sprint 4 update: Restructured Nauwari categories
 *   nauwari  → Paithani Nauwari Kashta
 *   kashtha  → Designer Nauwari Kashta (Brahmani — Purple, Peach, Lilac)
 *   velvet   → Velvet Nauwari Kashta (Velvet Nauvaari)
 *   kids     → Kids Fancy Dress (moved to FIRST position — highest demand)
 *   lehenga  → real products added: Ivory Bridal + Navy Paithani
 * ─────────────────────────────────────────────
 */


// ─────────────────────────────────────────────
// 1. HERO CHIPS (Phase 1)
// Kids moved to position 0 — now the default active chip on homepage
// ─────────────────────────────────────────────

export const heroChips = [
  {
    id:          'kids',
    label:       'Kids Fancy Dress',
    isWomens:    false,
    categoryId:  'kids',
    catalogSlug: 'kids-nauvari-kashta-saree-1',
    btnLabel:    'Browse Kids Fancy Dress',
  },
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
    catalogSlug: 'lehenga-ivory-bridal',
    btnLabel:    'Browse Lehengas',
  },
  {
    id:          'maternity',
    label:       'Maternity Gowns',
    isWomens:    true,
    categoryId:  'maternity',
    catalogSlug: 'maternity-smoky-plum-grey-gown',
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
    catalogSlug: 'western-aubergine-velvet-gown',
    btnLabel:    'Browse Western & Themed',
  },
];

export const defaultChipId = heroChips[0].id;


// ─────────────────────────────────────────────
// 2. CATEGORY TABS (Phase 1 — catalog page)
// Kids moved to position 0
// ─────────────────────────────────────────────

export const categoryTabs = [
  {
    id:        'kids',
    label:     'Kids Fancy Dress',
    isDefault: false,
    items: [
      { id: 'kids-combo-set-1',              name: 'Mom & Daughter Nauwari Combo',       sub: 'Matching Sets · Family',   badge: 'New Arrival', badgeType: 'exclusive', slug: 'kids-combo-set-1' },
      { id: 'kids-varkari-set-1',            name: 'Little Varkari Pilgrim Set',          sub: 'Wari · Cultural',          badge: 'Only in wearit', badgeType: 'exclusive', slug: 'kids-varkari-set-1' },
      { id: 'kids-rakhumai-set-4',           name: 'Yellow Mirror-Work Festive Lehenga',  sub: 'Navratri · Garba',         badge: 'Most Loved',   badgeType: 'exclusive', slug: 'kids-rakhumai-set-4' },
      { id: 'kids-nauvari-kashta-saree-1',   name: 'Red & Green Zari Kids Nauwari Kashta',sub: 'Ganesh Chaturthi · Festive', badge: 'Only in wearit', badgeType: 'exclusive', slug: 'kids-nauvari-kashta-saree-1' },
    ],
  },
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
      { id: 'lehenga-ivory-bridal',  name: 'Ivory Gold Embroidered Net Lehenga', sub: 'Bridal · Reception',       badge: null, badgeType: null, slug: 'lehenga-ivory-bridal' },
      { id: 'lehenga-navy-paithani', name: 'Navy Blue Paithani Zari Lehenga',    sub: 'Weddings · Festive',       badge: null, badgeType: null, slug: 'lehenga-navy-paithani' },
    ],
  },
  {
    id:        'maternity',
    label:     'Maternity Gowns',
    isDefault: false,
    items: [
      { id: 'maternity-smoky-plum-grey-gown', name: 'Smoky Plum-Grey Basket-Weave Gown', sub: 'Photoshoot · Ethereal',  badge: 'New Arrival', badgeType: 'exclusive', slug: 'maternity-smoky-plum-grey-gown' },
      { id: 'maternity-teal-ruffled-tulle-gown', name: 'Deep Teal Ruffled Tulle Gown',   sub: 'Photoshoot · Dramatic',  badge: null,          badgeType: null,        slug: 'maternity-teal-ruffled-tulle-gown' },
      { id: 'maternity-rose-bloom-tulle-gown', name: 'Rose Bloom Coral Tulle Gown',       sub: 'Photoshoot · Romantic', badge: 'Most Loved',  badgeType: 'exclusive', slug: 'maternity-rose-bloom-tulle-gown' },
      { id: 'maternity-wine-ruffled-cape-gown', name: 'Wine Ruffled Tulle Cape Gown',     sub: 'Photoshoot · Statement',badge: null,          badgeType: null,        slug: 'maternity-wine-ruffled-cape-gown' },
      { id: 'maternity-red-satin-draped-gown', name: 'Crimson Red Satin Draped Gown',     sub: 'Photoshoot · Evening',  badge: null,          badgeType: null,        slug: 'maternity-red-satin-draped-gown' },
    ],
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
      { id: 'lehenga-ivory-bridal',    name: 'Ivory Gold Embroidered Net Lehenga', sub: 'Bridal · Reception',   badge: null,             badgeType: null,        slug: 'lehenga-ivory-bridal' },
    ],
  },
  {
    id:        'western',
    label:     'Western & Themed',
    isDefault: false,
    items: [
      { id: 'western-aubergine-velvet-gown',    name: 'Aubergine Velvet Slip Gown',           sub: 'Cocktail · Reception',   badge: 'New Arrival', badgeType: 'exclusive', slug: 'western-aubergine-velvet-gown' },
      { id: 'western-navy-wrap-maxi-dress',      name: 'Navy Textured Wrap Maxi Dress',        sub: 'Evening · Office Party', badge: null,           badgeType: null,        slug: 'western-navy-wrap-maxi-dress' },
      { id: 'western-maroon-ruffle-saree-gown',  name: 'Maroon Ruffle Pre-Draped Saree Gown',  sub: 'Reception · Fusion',     badge: 'Most Loved',   badgeType: 'exclusive', slug: 'western-maroon-ruffle-saree-gown' },
      { id: 'western-navy-embroidered-net-saree',name: 'Navy Blue Embroidered Net Saree',      sub: 'Wedding · Reception',    badge: null,           badgeType: null,        slug: 'western-navy-embroidered-net-saree' },
      { id: 'western-teal-satin-saree',          name: 'Teal Satin Saree with Embroidered Border', sub: 'Reception · Elegant', badge: null,        badgeType: null,        slug: 'western-teal-satin-saree' },
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