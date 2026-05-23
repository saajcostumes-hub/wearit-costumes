/**
 * whatsapp.js — wearit WhatsApp booking utilities
 * ─────────────────────────────────────────────
 * Generates wa.me booking links with pre-filled messages.
 * Single source of truth for all WhatsApp message formats.
 *
 * Import pattern:
 *   import { generateBookingLink, makeBookingId } from '../lib/whatsapp.js';
 *   import { generateBookingLink, makeBookingId } from '../../lib/whatsapp.js';
 */

import { BUSINESS } from './constants.js';

// ─────────────────────────────────────────────
// BOOKING ID GENERATOR
// ─────────────────────────────────────────────
// Format: #WRIT-YYYYMMDD-XXX
// Example: #WRIT-20260526-001
// Called once per booking attempt — not guaranteed unique (no backend yet)
// Sprint 2: used in message for easy tracking
// Sprint 3 (Supabase): replaced with server-generated sequential ID

export function makeBookingId() {
  const now    = new Date();
  const year   = now.getFullYear();
  const month  = String(now.getMonth() + 1).padStart(2, '0');
  const day    = String(now.getDate()).padStart(2, '0');
  const random = String(Math.floor(Math.random() * 900) + 100); // 100–999
  return `#WRIT-${year}${month}${day}-${random}`;
}


// ─────────────────────────────────────────────
// DATE FORMATTER
// ─────────────────────────────────────────────
// Converts a JS Date or date string to "21 May 2026" format

export function formatDateDisplay(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  });
}


// ─────────────────────────────────────────────
// RENTAL DURATION CALCULATOR
// ─────────────────────────────────────────────
// Returns number of days between two dates (minimum 1)

export function calcDays(startDate, endDate) {
  const start = new Date(startDate);
  const end   = new Date(endDate);
  const diff  = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff);
}


// ─────────────────────────────────────────────
// TOTAL RENTAL CALCULATOR
// ─────────────────────────────────────────────
// Returns total rental cost based on per-event price × days
// Note: wearit charges per-event not per-day for 1-day rentals

export function calcTotalRental(pricePerEvent, days) {
  // For 1-day events: charge base price
  // For multi-day: charge base + 50% per additional day
  if (days <= 1) return pricePerEvent;
  const additionalDays = days - 1;
  return pricePerEvent + (Math.round(pricePerEvent * 0.5) * additionalDays);
}


// ─────────────────────────────────────────────
// MAIN BOOKING LINK GENERATOR
// ─────────────────────────────────────────────
// Generates a wa.me URL with pre-filled booking message.
//
// Params:
//   productName  — e.g. "Nauwari Saree"
//   size         — e.g. "M" or "5-7Y"
//   startDate    — JS Date or date string
//   endDate      — JS Date or date string (can be same as start for 1-day)
//   totalRental  — total rental amount in ₹
//   deposit      — refundable deposit amount in ₹
//
// Returns: full wa.me URL string

export function generateBookingLink({
  productName,
  size,
  startDate,
  endDate,
  totalRental,
  deposit,
}) {
  const bookingId    = makeBookingId();
  const startDisplay = formatDateDisplay(startDate);
  const endDisplay   = formatDateDisplay(endDate);
  const days         = calcDays(startDate, endDate);
  const totalAtPickup = totalRental + deposit;

  const isSingleDay = startDisplay === endDisplay;
  const dateText    = isSingleDay
    ? startDisplay
    : `${startDisplay} to ${endDisplay} (${days} days)`;

  const message = [
    `Hi wearit! I'd like to book a costume. 🙏`,
    ``,
    `📋 Booking Details`,
    `Costume: ${productName}`,
    `Size: ${size}`,
    `Date: ${dateText}`,
    ``,
    `💰 Payment Summary`,
    `Rental: ₹${totalRental.toLocaleString('en-IN')}`,
    `Refundable Deposit: ₹${deposit.toLocaleString('en-IN')}`,
    `Total at Pickup: ₹${totalAtPickup.toLocaleString('en-IN')}`,
    ``,
    `Booking Ref: ${bookingId}`,
    ``,
    `Please confirm availability. Thank you!`,
  ].join('\n');

  const waNumber = BUSINESS?.whatsapp?.waMeNumber ?? '919999999999';
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}


// ─────────────────────────────────────────────
// QUICK ENQUIRY LINK (no dates selected yet)
// ─────────────────────────────────────────────
// Used on product cards where user hasn't picked dates yet.
// Simpler message — just expresses interest.

export function generateEnquiryLink({ productName, size = null }) {
  const sizeText = size ? `Size: ${size}` : '';
  const message  = [
    `Hi wearit! I'm interested in renting the ${productName}. 🙏`,
    sizeText,
    ``,
    `Can you please share availability and details?`,
  ].filter(Boolean).join('\n');

  const waNumber = BUSINESS?.whatsapp?.waMeNumber ?? '919999999999';
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}


// ─────────────────────────────────────────────
// FESTIVAL PRE-BOOK LINK
// ─────────────────────────────────────────────
// Used in FestivalBanner — passes festival context

export function generateFestivalLink({ festivalName, costumeName }) {
  const message = [
    `Hi! I'd like to pre-book a ${costumeName} for ${festivalName}. 🙏`,
    ``,
    `Can you share size availability and pricing?`,
  ].join('\n');

  const waNumber = BUSINESS?.whatsapp?.waMeNumber ?? '919999999999';
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}