# LuxWash Laundry Website

LuxWash is a modern single-page laundry service website built with HTML, CSS, and JavaScript. It presents a premium laundry brand with a polished landing page, service highlights, pricing plans in Naira, testimonials, gallery content, and a booking form for pickup requests.

## Live Demo

Add your deployed project URL here:

```text
https://your-live-demo-link.com
```

## Preview

You can add screenshots to this repository and display them here for a stronger GitHub presentation.

Suggested screenshot names:

- `assets/preview-home.png`
- `assets/preview-pricing.png`
- `assets/preview-booking.png`

Example markdown:

```md
![LuxWash Homepage](assets/preview-home.png)
```

## Overview

This project is a static frontend website designed for a laundry business that wants a sleek, high-end online presence. The site includes smooth interactions, responsive sections, dark and light theme support, and a booking form with client-side validation.

## Features

- Responsive single-page layout
- Premium hero section with animated visual elements
- Service, benefits, and process sections
- Weekly pricing plans displayed in Naira
- Testimonial slider with auto-rotation and manual controls
- Image gallery for visual brand presentation
- Booking section with phone, WhatsApp, email, and coverage details
- Booking form with frontend validation and success feedback
- Dark/light theme toggle with `localStorage` persistence
- Scroll reveal animations and back-to-top button

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [Bootstrap 5.3.3](https://getbootstrap.com/)
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)

## Project Structure

```text
Laundry Website 2/
|-- index.html
|-- style.css
|-- script.js
`-- README.md
```

## File Guide

### `index.html`

Contains the full page structure, including:

- Navigation bar
- Hero section
- Services section
- Why choose us section
- Process section
- Pricing plans
- Testimonials
- Gallery
- Booking form
- Footer

### `style.css`

Contains all custom styling for:

- Color variables and theme tokens
- Layout, spacing, and responsive behavior
- Buttons, cards, sections, and form styling
- Animation helpers and visual effects
- Light and dark mode appearance

### `script.js`

Handles interactive behavior such as:

- Theme switching
- Sticky navbar effects
- Active nav link updates on scroll
- Reveal-on-scroll animation triggers
- Card tilt effects
- Hero parallax effect
- Testimonial slider controls
- Booking form validation
- Minimum booking date restriction
- Back-to-top button behavior

## Getting Started

Because this is a static website, no installation step is required.

1. Download or clone the project.
2. Open `index.html` in your browser.

For a smoother development workflow, you can also run it with a local live server extension in your code editor.

## Customization

You can easily adapt this project for a real laundry business by updating the following:

- Business name and branding in `index.html`
- Contact details such as phone, WhatsApp, email, and location
- Pricing plans and service descriptions
- Gallery images
- Social media links in the footer
- Theme colors in `style.css`
- Booking form messaging and validation behavior in `script.js`

## Brand Details To Update

Before publishing for a real business, replace the sample content below with your actual details:

- Business name: `LuxWash`
- Phone number: `+234 800 000 0000`
- WhatsApp link: `https://wa.me/2348000000000`
- Email address: `hello@luxwash.com`
- Location: `Abuja, Nigeria`
- Social media links in the footer
- Copyright line in the footer

## Current Booking Form Behavior

The booking form currently performs client-side validation only. Submitting the form:

- checks required fields
- validates email and phone number format
- prevents past pickup dates
- shows a success message on valid submission

It does not yet send data to a backend service, email address, database, or WhatsApp automatically.

## External Dependencies

The project loads the following libraries from CDNs:

- Bootstrap CSS
- Bootstrap JavaScript bundle
- Bootstrap Icons

An internet connection is required for those CDN assets unless you replace them with local copies.

## Deployment

This site can be deployed easily on any static hosting platform, including:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any shared hosting service with HTML support

## GitHub README Tips

To make this project stand out on GitHub, you can also add:

- A real live demo link
- Screenshots or GIF previews
- Your name or business name as the author
- A license such as MIT
- A short changelog or roadmap section

## Suggested Next Improvements

- Connect the booking form to a backend or email service
- Replace placeholder contact details with real business information
- Add SEO metadata and social sharing tags
- Optimize images for faster loading
- Add real testimonials and business photos
- Connect booking requests to WhatsApp or email notifications

## Author

Add your details here:

```text
Name: Your Name or Business Name
Website: https://yourwebsite.com
Email: your@email.com
```

## License

This project is available for personal or commercial customization. Add your preferred license here if you want formal usage terms.
# Laundry-Website
