# Sherwin Bonavente — Portfolio

A single-page portfolio built with plain HTML/CSS/JS — no build step, no dependencies. Ready to push straight to GitHub Pages.

## Files
- `index.html` — page structure and copy
- `styles.css` — all styling and design tokens (colors/type at the top of the file)
- `script.js` — nav behavior, mobile menu, case study overlay content (edit the `projects` object here to update case study text)
- `images/` — 6 real work images pulled from your portfolio PDF (branding, packaging, shirts, logos, email, social)
- `Sherwin-Bonavente-Resume.pdf` — your résumé, linked from the Contact section

## What's already real

Pulled directly from your CV and portfolio PDF:
- Name, title, location, email, phone
- Work experience (Kite and Crest, Personiv, Graficad, DigiWorx references)
- Skills, software, and certifications (TESDA NC3, Adobe Expert certs, Lean Six Sigma)
- All 6 case study cover images, cropped from your actual project pages
- Case study text (problem / approach / outcome) — written from what's visible in your portfolio PDF, but you know these projects better than a PDF page can tell me. Treat these as a first draft to sharpen with real detail (timelines, specific results, what the client actually said).

## Still to fill in — marked `<!-- SWAP: ... -->` in index.html

1. **About portrait** — currently a placeholder color block. Add a real photo of yourself.
2. **Client testimonial** — the Proof section has placeholder quote text. Swap in a real quote once you have one (even a couple of sentences from an email or performance review works).
3. **Social links** — footer currently only links Email and Skype. Add Instagram/Behance/LinkedIn if you have profiles you want linked.

## Publishing to GitHub Pages

1. Create a new repo on GitHub (e.g. `yourname.github.io` for a root domain, or any name for a project site).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from branch → `main` / root**.
4. Your site goes live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` (or your root domain if the repo is named `yourname.github.io`).
5. Optional: add a custom domain under **Settings → Pages → Custom domain**, and create a `CNAME` file in this folder with just your domain name in it.

## Notes on the build

- Fonts load from Google Fonts (Instrument Serif + Space Grotesk) via CDN — no local font files needed.
- Project thumbnails use a dark oxblood/ink overlay that lightens on hover, so the mixed-color source images (green, orange, pink brand work) still read as one cohesive dark portfolio.
- No JavaScript framework or build tool — open `index.html` directly in a browser to preview locally, or run a simple local server (`python3 -m http.server`) to avoid file:// path quirks.
- Respects `prefers-reduced-motion` and includes visible keyboard focus states throughout.
- Mobile nav collapses under 600px; grid layouts step down at 860px.
- The résumé PDF is ~3.2MB (compressed from the original). If you want a smaller file, re-export a text-based PDF from Word/Google Docs instead of an image-heavy design template.
