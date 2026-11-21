# Pushpamangalam Gold & Diamonds — Multi-Version Website Repository

This repository is structured for **GitHub Pages** so multiple website design versions (`v1/`, `v2/`, `v3/`, etc.) can be hosted side-by-side and shared cleanly with the client.

## Folder Structure

```text
.
├── index.html          # Branded Version Selector Hub (links to all live versions)
├── .nojekyll           # Disables Jekyll so static folders serve cleanly on GitHub Pages
├── .gitignore
├── README.md
├── v1/                 # Version 1: Warm Ivory, Soft Alabaster & Deep Burgundy Heritage Luxury
│   ├── index.html
│   ├── css/styles.css
│   ├── js/config.js    # Edit phone, WhatsApp, addresses & social links here
│   ├── js/main.js
│   └── assets/images/
├── v2/                 # Version 2: Pearl Ivory, Royal Peacock Teal (#145B5F) & Champagne Gold
│   ├── index.html
│   ├── css/styles.css
│   ├── js/config.js
│   ├── js/main.js
│   └── assets/images/
├── v3/                 # Version 3: High-Fashion Editorial Minimalism (White, Linen, Wine Burgundy & Bodoni Moda)
│   ├── index.html
│   ├── css/styles.css
│   ├── js/config.js
│   ├── js/main.js
│   └── assets/images/
├── v4/                 # Version 4: v1 Base + Full-Viewport Landscape Split Hero (Logo + Model), v3 Glass Tag/Watermark Layer, No Store Photos
│   ├── index.html
│   ├── css/styles.css
│   ├── js/config.js
│   ├── js/main.js
│   └── assets/images/
└── v5/                 # Version 5: Sketch-Matched Seamless Landscape Hero (Unboxed Logo + Writings + CTAs + 2 Locations | Modern-Heritage Model)
    ├── index.html
    ├── css/styles.css
    ├── js/config.js
    ├── js/main.js
    └── assets/images/
```

## Live URLs Once Deployed on GitHub Pages

After pushing to GitHub (`https://github.com/<your-username>/<repo-name>`):
- **Design Preview Hub (All Versions):** `https://<your-username>.github.io/<repo-name>/`
- **Version 1 Direct Link:** `https://<your-username>.github.io/<repo-name>/v1/`
- **Future Version 2 Direct Link:** `https://<your-username>.github.io/<repo-name>/v2/`

## How to Publish to GitHub Pages

1. Create a new repository on GitHub (e.g., `pushpamangalam-website`).
2. Push this local Git repo:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` and folder `/ (root)`
   - Click **Save** — GitHub Pages will publish your site within ~1 minute.

## How to Replace Placeholder Data with Real Data

Every editable data point across **`v1`**, **`v2`**, and **`v3`** is tagged with **`[EDIT DATA`** so you can press `Ctrl+Shift+F` in VS Code (or any code editor) and jump straight to every item:

| Data Point | Where to Edit | Notes |
| --- | --- | --- |
| **Phone, WhatsApp, Addresses, PINs, Store Hours, Google Rating/Count, Social URLs** | `v1/js/config.js`, `v2/js/config.js`, `v3/js/config.js` | Single-source config — automatically updates header, hero, collection WhatsApp links, reviews summary, visit card, footer, and mobile bar |
| **Google Maps Embed Pin** | `v*/index.html` (`[EDIT DATA: Google Maps Embed Iframe URL]`) | Copy the `src` URL from Google Maps → Share → Embed a map |
| **Customer Testimonials** | `v*/index.html` (`[EDIT DATA: Testimonial ...]`) | Update quote text, reviewer initials, name, and city |
| **About Us Story & Stats** | `v*/index.html` (`[EDIT DATA: About Us ...]`) | Update milestones, founding year, and showroom captions |
| **Product & Showroom Photos** | `v*/assets/images/` | Swap files keeping the same filename (`hero-bridal.jpg`, `cat-*.jpg`, `showroom-*.jpg`) |

## Adding a New Version (`v2`, `v3`, ...)

1. Copy `v1/` to `v2/` (or create a fresh `v2/` folder with its own `index.html`, `css/`, `js/`, and `assets/`).
2. Add a card linking to `v2/index.html` in the root `index.html` preview hub.
3. Commit and push to `main` — both `/v1/` and `/v2/` will stay live simultaneously for side-by-side client review.
