// @ts-nocheck
// constants.js — wearit business configuration
// Updated Sprint 4: real phone + address (Sayali Gavali)

export const BUSINESS = {
  legalName: 'wearit Costume Rentals',
  tagline:   'Rent · Wear · Shine',

  whatsapp: {
    waMeNumber: '918888289846',       // Sayali Gavali — real number
    display:    '+91 88882 89846',
  },

  serviceAreas: [
    'Maan',
    'Hinjewadi',
    'Wakad',
    'Baner',
    'Balewadi',
    'Pimple Saudagar',
    'Aundh',
  ],

  hours: {
    weekdays: {
      label: 'Mon – Sat',
      open:  '10:00 AM',
      close: '8:00 PM',
    },
    sunday: {
      label: 'Sunday',
      note:  'By appointment',
    },
  },

  pickupLocation: {
    area:    'Maan',
    city:    'Pune',
    pin:     '411057',
    full:    '57/1 Govind, Rajyog Society, Mhalarshrusthi, Maan–Mhalune Link Road, Maan, Pune 411057',
  },

  owner: {
    name:  'Sayali Gavali',
    phone: '+91 88882 89846',
  },
};