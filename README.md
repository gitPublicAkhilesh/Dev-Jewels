# Shree Malti Jewellers · श्री मालती ज्वेलर्स

A responsive React + Vite jewellery showroom website for **Shree Malti Jewellers (श्री मालती ज्वेलर्स)**.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (the configured start script uses port 3000).

## Build and preview
```bash
npm run build
npm run preview
```
The production output is written to `dist/`.

## Business details and catalogue
Update the centrally configured shop details, contact placeholders, navigation, and image references in `src/config.js`. Product entries, categories, demo prices, and catalogue imagery are in `src/data/products.js`. Replace sample contact details and demo catalogue information with verified business information before publishing.

Product imagery currently loads from Unsplash and Pexels and requires an internet connection. The homepage storefront photograph is stored locally at `public/images/malti-jewellers-store.png`; update `SITE.heroImage` in `src/config.js` if you replace it.
