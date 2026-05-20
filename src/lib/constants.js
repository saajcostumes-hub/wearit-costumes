// ============================================================
// wearit — constants.js
//
// Single source of truth for business info and utilities.
// Import anywhere using:
//   import { BUSINESS, buildWhatsAppLink } from "../lib/constants.js";
//
// When real values arrive (phone number, Instagram, domain)
// update them ONCE here — the whole site reflects the change.
// ============================================================

export const BUSINESS = {
  // Identity
  name:        "wearit",
  displayName: "wearit",
  tagline:     "Premium Costume Rentals · Hinjewadi · Wakad · Baner",
  legalName: "wearit Costume Rentals",
  metaDescription:
    "Premium, UV-sanitized costume rentals across Hinjewadi, Wakad, Baner, Balewadi and Aundh. Traditional Marathi, kids fancy dress, festive and themed costumes — book on WhatsApp.",

  // Brand colors (mirrors global.css — useful for meta tags)
  colors: {
    primary:  "#E85D26",  // Marathi Orange
    charcoal: "#1A1A2E",
    gold:     "#C9A84C",
  },

  // ⚠️ PLACEHOLDERS — update when real values are confirmed
  whatsapp: {
    raw:        "+919999999999",   // with + sign
    display:    "+91 99999 99999", // human-readable
    waMeNumber: "919999999999",    // for wa.me links (no +)
  },
  email:     "hello@wearit.in",
  instagram: "@wearit.pune",

  // Pickup location (doorstep delivery coming in Phase 3)
  pickupLocation: {
    area:     "Maan",
    landmark: "near Hinjewadi Phase 2",
    city:     "Pune",
    state:    "Maharashtra",
    pin:      "411057",
    country:  "India",
  },

  // Service areas — used in footer, hero, SEO, and schema markup
  serviceAreas: [
    "Maan",
    "Hinjewadi",
    "Wakad",
    "Baner",
    "Balewadi",
    "Pimple Saudagar",
    "Aundh",
  ],

  // Business hours
  hours: {
    weekdays: { label: "Mon – Sat", open: "10:00 AM", close: "8:00 PM" },
    sunday:   { label: "Sunday",    note: "By appointment" },
  },

  // URLs
  site: {
    productionDomain: "wearit.in",
    stagingUrl:       "https://wearit.vercel.app",
    googleBusinessUrl: "",
    justDialUrl:       "",
  },

  ogImage: "/og-cover.jpg",
};

// ============================================================
// buildWhatsAppLink — used by every "Book" button on the site
//
// buildWhatsAppLink("Hi! I want to book a Nauwari saree.")
// → https://wa.me/919999999999?text=Hi%21%20I%20want%20to%20book...
// ============================================================
export function buildWhatsAppLink(message = "") {
  const encoded = encodeURIComponent(message.trim());
  const base    = `https://wa.me/${BUSINESS.whatsapp.waMeNumber}`;
  return encoded ? `${base}?text=${encoded}` : base;
}

// ============================================================
// buildBookingMessage — standard message format for product pages
//
// Called in Sprint 2 when customer taps "Book via WhatsApp"
// after selecting costume + size + dates.
// ============================================================
export function buildBookingMessage({ productName, size, startDate, endDate, rentalPerDay, depositAmount }) {
  const start = new Date(startDate);
  const end   = new Date(endDate);
  const days  = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1);
  const rentalTotal = rentalPerDay * days;
  const pickupTotal = rentalTotal + depositAmount;
  const ref         = makeBookingId();

  const fmt = (d) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return [
    `Hi wearit! I'd like to book:`,
    `• ${productName}`,
    `• Size: ${size}`,
    `• Dates: ${fmt(start)} → ${fmt(end)} (${days} ${days === 1 ? "day" : "days"})`,
    `• Rental: ${formatPrice(rentalTotal)} + ${formatPrice(depositAmount)} refundable deposit`,
    `• Total at pickup: ${formatPrice(pickupTotal)} (${formatPrice(depositAmount)} returned on return)`,
    `Booking ref: #${ref}`,
    `Please confirm availability.`,
  ].join("\n");
}

// ============================================================
// formatPrice — consistent ₹ formatting with Indian grouping
//   formatPrice(1500)   → "₹1,500"
//   formatPrice(125000) → "₹1,25,000"
// ============================================================
export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency", currency: "INR", maximumFractionDigits: 0,
  }).format(amount);
}

// ============================================================
// makeBookingId — tracking reference for WhatsApp messages
//   makeBookingId() → "WEARIT-20260520-7B3"
// ============================================================
export function makeBookingId() {
  const now  = new Date();
  const yyyy = now.getFullYear();
  const mm   = String(now.getMonth() + 1).padStart(2, "0");
  const dd   = String(now.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(-3).toUpperCase();
  return `WEARIT-${yyyy}${mm}${dd}-${rand}`;
}