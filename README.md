# Dan-Wash Website

Dan-Wash is a modern multi-page laundry and dry-cleaning website built with HTML, CSS, and vanilla JavaScript. It presents a more realistic laundry business presence for Abuja, with dedicated pages for services, trust-building content, pricing, gallery, and booking.

## Overview

This project was redesigned from a generic landing page into a structured business website for **Dan-Wash Laundry & Dry Cleaning**. It uses a shared design system, responsive layouts, animated interactions, a light/dark theme toggle, and a booking form with client-side validation.

The current business details used in the site are:

- Phone: `08109368514`
- Email: `jegbefumhendaniel@gmail.com`
- WhatsApp: `+234 8109368514`
- Location: `FCT - Abuja`

## Design Direction

The visual system now follows the uploaded `DESIGN.md` reference:

- Editorial-inspired color palette with electric blue, deep indigo, magenta, and slate-lavender accents
- `Manrope` for display and headline typography
- `Inter` for body and interface text
- Glassy floating navigation and layered surfaces
- Motion-focused polish with scroll reveals, hover transitions, and page-entry effects

## Pages

- `index.html`  
  Homepage with hero content, service summary, key benefits, pricing preview, gallery preview, and CTA sections.

- `services.html`  
  Full service breakdown including wash and fold, ironing, dry cleaning, household fabrics, express work, and recurring plans.

- `why-us.html`  
  Trust and operations page explaining Dan-Wash’s workflow, standards, and customer value.

- `pricing.html`  
  Pricing overview with featured plans, item rates, and recurring service notes.

- `gallery.html`  
  Image-driven page showing the brand presentation, workflow quality, and laundry finishing standards.

- `book-us.html`  
  Booking page with contact details, pickup zones, booking form, and FAQ content.

## Shared Assets

- `style.css`  
  Shared design system, typography, colors, layout, card styling, navbar styling, theme toggle styling, animation utilities, and responsive behavior.

- `script.js`  
  Shared interaction logic including:
  - theme persistence with `localStorage`
  - scroll progress bar
  - reveal-on-scroll effects
  - navbar scroll behavior
  - back-to-top button
  - background motion
  - booking form validation and success state

## Features

- Multi-page business website structure
- Responsive layout for desktop and mobile
- Shared navigation across all pages
- Navbar icons for quick visual scanning
- Professional segmented light/dark theme toggle
- Animated page entry, reveal, hover, and scroll effects
- Abuja-focused service and coverage content
- Booking form with frontend validation
- Back-to-top button and scroll progress indicator

## Project Structure

```text
Laundry Website/
|-- index.html
|-- services.html
|-- why-us.html
|-- pricing.html
|-- gallery.html
|-- book-us.html
|-- style.css
|-- script.js
`-- README.md
```

## Getting Started

This is a static website, so no build step is required.

1. Clone or download the project.
2. Open `index.html` in your browser.

For easier editing and preview during development, use a local live server extension in your editor.

## External Dependencies

The project loads the following from CDNs:

- [Bootstrap 5.3.3](https://getbootstrap.com/)
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)
- Google Fonts (`Manrope` and `Inter`)

If you need offline use, replace these CDN links with local asset copies.

## Booking Form Behavior

The booking form on `book-us.html` currently performs client-side validation only.

It validates:

- full name
- phone number
- email address
- pickup area
- service type
- pickup date
- pickup window
- pickup address
- order notes

It does **not** currently send data to a backend, database, email service, or WhatsApp automatically.

## Customization Notes

You can adapt the site further by editing:

- business copy in the HTML pages
- coverage areas and pickup windows
- service descriptions and pricing
- gallery images
- social/contact links
- theme tokens and animations in `style.css`
- form behavior in `script.js`

## Deployment

This project can be deployed on any static hosting platform, including:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- standard shared hosting with HTML support

## Suggested Next Improvements

- Connect the booking form to a real backend or email workflow
- Add real service photos and local Abuja business imagery
- Add SEO/social metadata for all pages
- Add a sitemap and favicon set
- Add WhatsApp quick-book integration from the booking form
- Add analytics or form conversion tracking

## Author

Dan-Wash Laundry & Dry Cleaning

- Phone: `08109368514`
- Email: `jegbefumhendaniel@gmail.com`
- WhatsApp: `+234 8109368514`
- Location: `FCT - Abuja`

## License

This project is available for personal or commercial customization. Add your preferred license if you want formal usage terms.
