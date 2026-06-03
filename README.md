# Dan-Wash Website

Dan-Wash is a static multi-page laundry and dry-cleaning website for an Abuja-based laundry service. It is built with HTML, CSS, Bootstrap, Bootstrap Icons, Google Fonts, and vanilla JavaScript.

## Overview

The site presents Dan-Wash as a practical laundry and garment-care business with separate pages for the homepage, services, trust content, pricing, gallery, and booking. The latest UI pass gives the site a cleaner brand system with fresh green, deep ink, white space, and warm gold accents.

Current business details used across the site:

- Phone: `08109368514`
- WhatsApp: `+234 8109368514`
- Email: `jegbefumhendaniel@gmail.com`
- Location: `FCT - Abuja`
- Hours: `Mon-Sat: 7:00am - 8:00pm`

## Pages

- `index.html`  
  Homepage with hero content, pickup CTAs, metrics, page highlights, summary cards, and a final booking CTA.

- `services.html`  
  Service catalog for wash and fold, ironing, dry cleaning, household fabrics, express laundry, and recurring plans. Service cards use larger image thumbnails.

- `why-us.html`  
  Trust and operations page covering Dan-Wash standards, mission, vision, customer fit, and order quality.

- `pricing.html`  
  Pricing page with plan cards, common item rates, monthly plan notes, and quote guidance.

- `gallery.html`  
  Image-led gallery page with larger photo cards showing laundry presentation, sorting, finishing, packaging, and dispatch.

- `book-us.html`  
  Booking page with pickup request form, contact details, coverage areas, and FAQ cards.

## Design Direction

- Clean laundry-service look with white surfaces, green accents, deep ink text, and warm gold calls to action
- Page-specific layouts so each page feels distinct while sharing one brand system
- Larger service and gallery imagery
- 8px-style card radius, light borders, and restrained shadows
- Icon-only light/dark theme toggle
- Responsive layouts for desktop, tablet, and mobile

## Shared Files

- `style.css`  
  Contains the design tokens, responsive layout rules, page-specific styling, cards, forms, navbar, gallery, pricing tables, theme toggle, and animation styles.

- `script.js`  
  Handles theme persistence, active navigation state, scroll progress, reveal effects, navbar scroll behavior, back-to-top button, pickup date minimum, and booking form validation.

## Features

- Static multi-page site
- Shared responsive navigation
- Light/dark theme with `localStorage` persistence
- Icon-only theme toggle
- Scroll progress indicator
- Reveal-on-scroll animation
- Back-to-top button
- Booking form validation and success state
- Abuja-focused service, pricing, coverage, and contact content

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

No build step is required.

1. Open `index.html` in a browser.
2. Navigate through the pages using the site navbar.

For a smoother editing workflow, use a local live server extension in your editor.

## External Dependencies

The site loads these assets from CDNs:

- [Bootstrap 5.3.3](https://getbootstrap.com/)
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)
- Google Fonts: `Inter` and `Manrope`

If offline support is needed, download these assets and update the HTML links to local files.

## Booking Form Behavior

The form on `book-us.html` validates user input in the browser. It checks:

- full name
- phone number
- email address
- pickup area
- service type
- pickup date
- pickup window
- pickup address
- order notes

The form does not currently submit to a backend, email service, database, or WhatsApp. It only shows a local success message after validation.

## Customization Notes

Common updates can be made in:

- HTML pages for copy, pricing, contact details, and coverage areas
- `style.css` for brand colors, spacing, image sizing, page layouts, and theme styling
- `script.js` for interactions and booking form behavior

## Deployment

Because the site is static, it can be hosted on:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- any shared hosting service that supports HTML, CSS, and JavaScript

## Suggested Next Improvements

- Connect the booking form to email, WhatsApp, or a backend
- Replace stock gallery images with real Dan-Wash photos
- Add favicon files and social preview metadata
- Add sitemap and `robots.txt`
- Add analytics or form conversion tracking

## Author

Dan-Wash Laundry & Dry Cleaning

## License

Add a formal license if you want to define usage terms. Until then, treat this project as available for personal or commercial customization by the project owner.
