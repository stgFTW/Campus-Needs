# Campus Needs - Product Requirements Document

## Overview
Campus Needs is a marketing and browsing website for a hyper-local, student-to-student marketplace at the University of San Francisco. Browse/Exchange CTAs redirect to https://www.trickly.io/market/CampusNeeds.

## Brand
- **Primary**: USF Green (#006341)
- **Accent**: USF Gold (#C99700)
- **Supporting**: Dark Green (#004D32)
- **Background**: White
- **Font**: Inter
- **Logo**: Custom circular green/gold arrows icon
- **Emails**: hello@campusneeds.me (contact), listings@campusneeds.me (listings)

## Pages (8 total)
1. **Homepage** — Hero (How It Works + List Your Item CTAs), TrustBar, How It Works, Categories, Featured Listings (6 cards + Browse the Exchange), List Item Banner, CTA Banner
2. **Categories** — Live Now (Home and Living, Study and Class Essentials) + Coming Soon (Campus Errands, Short Term Borrowing)
3. **How It Works** — 3-step process + Providers/Buyers columns
4. **List Your Item** — Form with @usfca.edu validation, 2 live category dropdown
5. **About** — Mission, categories, Why P2P, Problem section
6. **Listings** — Redirects to Trickly marketplace on mount
7. **Privacy Policy** — Who We Are, data collection, usage, rights, contact
8. **Terms of Use** — Agreement, eligibility, conduct, liability, contact

## Footer Structure
4 columns: Brand (logo + tagline + email) | Explore (Browse Exchange, Categories, How It Works, About) | Sellers (List Your Item, Email Listings, Get Support) | Legal (Privacy Policy, Terms of Use)

## Routing Logic
- **External** (trickly.io): "Browse Exchange" header CTA, "View on Exchange" product cards, "Browse the Exchange" button, /listings redirect
- **Internal**: How It Works anchor scroll, List Your Item, Categories, About, Privacy, Terms
