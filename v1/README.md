# Pushpamangalam Gold and Diamonds — Responsive Website UI

A light, airy, modern-heritage luxury responsive website (Desktop & Mobile) crafted for **Pushpamangalam Gold and Diamonds** (Mannancherry & Cherthala, Kerala).

## Project Structure

- `index.html` — Semantic page structure across all 9 sections, thoroughly annotated with `<!-- PLACEHOLDER: ... -->` comments.
- `css/styles.css` — Design system tokens (Warm Ivory `#FAF7F2`, Soft Alabaster `#FFFFFF`, Gold Hairlines `#E5D3B3`, Deep Burgundy `#6B1D2F`, Muted Antique Gold `#C5A059`, Charcoal `#2A2421`) and full Desktop + Mobile responsive styles.
- `js/config.js` — **Single-source configuration file** for quick placeholder updates (phone number, WhatsApp number, showroom addresses, PIN codes, Google Maps links, store hours, and social profiles).
- `js/main.js` — Automatically hydrates links/numbers from `js/config.js`, builds category-specific WhatsApp enquiry links, powers the accessible mobile drawer menu, active nav highlights, and subtle scroll-reveal motion.
- `assets/images/` — High-key studio product & architectural showroom placeholder photographs ready to swap with official showroom photos.

## Quick Customization Checklist

1. **Phone, WhatsApp, Addresses, Store Hours & Social Links:**
   Edit `js/config.js`. Saving changes there automatically updates the Header, Hero, Collection WhatsApp links, Visit Us section, Footer, Desktop Floating WhatsApp button, and Mobile Sticky Bottom Bar.
2. **Brand Logo:**
   In `index.html`, search for `PLACEHOLDER: BRAND LOGO` to replace the SVG emblem + serif wordmark with your official `<img src="assets/images/logo.svg" ...>` file.
3. **Google Maps Embed:**
   In `index.html`, search for `PLACEHOLDER: GOOGLE MAPS EMBED IFRAME` and paste the exact Google Business Profile embed URL for your Cherthala showroom.
4. **Google Reviews & Testimonials:**
   In `index.html`, search for `PLACEHOLDER: Google Rating Badge` and `PLACEHOLDER Review` to plug in live review stats and verified customer quotes.
5. **Product & Showroom Photography:**
   Replace any image in `assets/images/` keeping the same filename (or update the `src` path in `index.html`):
   - `hero-bridal.jpg`
   - `cat-bridal.jpg`, `cat-lightweight.jpg`, `cat-traditional.jpg`, `cat-diamonds.jpg`, `cat-daily.jpg`, `cat-kids.jpg`, `cat-silver.jpg`
   - `showroom-interior.jpg`, `showroom-exterior.jpg`, `showroom-bridal.jpg`

## Previewing Locally

Open `index.html` directly in any modern browser (Chrome, Edge, Safari, Firefox) — no build tools or dependencies required. Use DevTools Device Toolbar (`Ctrl+Shift+M` / `Cmd+Shift+M`) to inspect both Desktop and Mobile layouts (including the mobile hamburger drawer and sticky bottom action bar).
