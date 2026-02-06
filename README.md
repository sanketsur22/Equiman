<<<<<<< HEAD
# Equiman Portfolio Website

A modern portfolio website for Equiman, showcasing trading courses and services.

## Features

- **Home Page** with hero section
- **Video Section** for services showcase
- **About the Owner** section
- **Equimantum Fellowship** dedicated page
- **FAQ Section** with accordion-style questions
- **Responsive Navbar** with mobile menu
- **Footer** with quick links and contact information

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Adding Your Video

To add your services video, edit `components/VideoSection.tsx` and replace the placeholder with your video embed code (YouTube, Vimeo, etc.).

### Updating Content

- **Owner Information**: Edit `components/AboutSection.tsx`
- **FAQ Questions**: Edit the `faqs` array in `components/FAQSection.tsx`
- **Fellowship Details**: Edit `app/fellowship/page.tsx`

### Color Scheme

The accent color `rgb(168, 110, 56)` is used throughout the site. You can find it defined in:
- `tailwind.config.ts` as `accent` color
- `app/globals.css` as CSS variable

## Build for Production

```bash
npm run build
npm start
```

## Domain

The website is configured for the domain: **eqiman.in**

=======
# Equiman
>>>>>>> 6c8b67b060dd4678bf112ef84ceaf31e42416c97
