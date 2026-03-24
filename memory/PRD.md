# Campus Needs - Product Requirements Document

## Overview
Campus Needs is a marketing and browsing website for a hyper-local, student-to-student marketplace at the University of San Francisco. All browse CTAs redirect to https://www.trickly.io/market/CampusNeeds. List Your Item CTAs go to the internal form page.

## Brand
- **Primary**: USF Green (#006341)
- **Accent**: USF Gold (#C99700)
- **Supporting**: Dark Green (#004D32)
- **Background**: White
- **Font**: Inter
- **Logo**: Custom circular green/gold arrows icon (campus-needs-logo.png)

## Pages (5 total)
1. **Homepage** — Hero with campus image, trust bar, 4 category cards, How It Works (3 steps), List Item CTA banner, Marketplace CTA banner
2. **Categories** — 2×2 grid of category cards
3. **How It Works** — 3-step process + Providers/Buyers audience columns
4. **List Your Item** — Form with @usfca.edu email validation, category dropdown, success state
5. **About** — Mission, 4 categories, Why P2P (Trust/Local/Affordable), Problem section

## Key Features
- Custom logo PNG in header/footer (40px height)
- Onboarding modal (4 slides, localStorage persistence, first-visit only)
- Trust bar with 3 verified signals
- @usfca.edu email validation on listing form
- SEO: Unique page titles, meta descriptions, OG tags per page
- Full-screen mobile overlay nav with all 5 links + Browse Listings
- Scroll-to-top on page navigation

## Tech Stack
- React + React Router
- Tailwind CSS with HSL design tokens
- shadcn/ui components (Button, Card, Input, Label, Textarea, Select)
- Framer Motion for animations
- react-helmet-async for SEO
- Lucide React for icons
