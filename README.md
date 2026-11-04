# RSV Infra — Premium Real Estate Website

A classy, modern real estate website built with React, Vite, Tailwind CSS, and
Framer Motion. Features a luxury dark theme (navy/charcoal + gold accents),
elegant typography (Playfair Display + Inter), smooth scroll animations, and a
fully responsive layout.

## Pages

1. **Home** — Full-screen hero, animated stats, about preview, featured projects,
   why-choose-us, auto-rotating testimonials, and CTA sections
2. **Commercial** — Filterable project grid (by type & status), project cards,
   highlights band, and CTA
3. **Residential** — Filterable project grid, amenities showcase, lifestyle
   gallery, and CTA
4. **About Us** — Company story, mission/vision/promise, core values, interactive
   timeline, leadership team, and legacy stats
5. **Contact Us** — Contact info cards, validated contact form with success state,
   embedded Google Map, and FAQ accordion

## Tech Stack

- **React 19** + **Vite 8**
- **React Router 6** for routing
- **Tailwind CSS 3** for styling
- **Framer Motion 11** for animations
- **React Icons** for iconography

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173/` by default.

## Project Structure

```
src/
├── components/      # Navbar, Footer, Reveal, AnimatedCounter, PageHero, ProjectCard, ScrollToTop
├── data/            # Centralized project & testimonial data
├── pages/           # Home, Commercial, Residential, About, Contact
├── App.jsx          # Routing + shared layout
├── main.jsx         # Entry point (BrowserRouter)
└── index.css        # Tailwind directives + custom utilities
```
