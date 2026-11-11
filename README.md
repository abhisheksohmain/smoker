# The Smoke Hauz – Sheesha Lounge (React + Vite)

Premium 5-page website: Home, About, Menu, Gallery, Contact — 7 sections per page, each with its own component + CSS file.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Before going live
1. `src/data/site.js` → set the real WhatsApp number (country code, no `+`), phone, email, address, hours, social links.
2. `public/videos/hero.mp4` → add your own hero video (the site shows a poster image until it exists).
3. Images: your photos live in `public/images`; dummy images come from Unsplash in `src/data/images.js` (broken links fall back to local photos).
4. Prices/flavours are sample content — edit inside the section files.

## Structure
```
src/
  components/common   Button, Reveal, Img, SectionHead, EnquiryForm (→ WhatsApp)
  components/layout   Navbar, Footer, WhatsAppFloat
  data/               site.js (business info), images.js
  hooks/              useCountUp
  pages/<Page>/sections/<Section>/<Section>.jsx + .css
```

## Deploy
Push to GitHub, then import the repo on Vercel or Netlify (SPA rewrites already included).
