# FakeDental 🦷

A modern single-page application for a dental clinic based in Buenos Aires, built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** — UI library
- **TypeScript** — static typing
- **Vite 8** — build tool and dev server
- **Tailwind CSS v3** — utility-first styling
- **Google Fonts** — Cormorant Garamond + DM Sans

## Project Structure

```
fakemedical/
├── public/
│   ├── favicon.ico
│   └── og-image.jpg          # Open Graph preview image (1200×630px)
├── src/
│   ├── assets/               # Images and icons
│   ├── components/
│   │   ├── Nav.tsx           # Sticky navbar with mobile drawer
│   │   ├── Hero.tsx          # Full-viewport hero with trust bar
│   │   ├── AboutUs.tsx       # Two-column about section
│   │   ├── Specialties.tsx   # Treatment cards grid
│   │   ├── Card.tsx          # Individual specialty card
│   │   ├── Contact.tsx       # Dark CTA section
│   │   ├── Modal.tsx         # Booking modal trigger
│   │   ├── ModalContent.tsx  # Booking form with success state
│   │   ├── Testimonials.tsx  # Patient reviews grid
│   │   ├── ReviewCard.tsx    # Individual review card
│   │   └── ContactForm.tsx   # Contact info + map section
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css             # Global styles and design tokens
│   └── vite-env.d.ts         # Asset type declarations
├── index.html                # Entry point with Open Graph meta tags
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs
├── postcss.config.js
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fakemedical.git
cd fakemedical

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) with hot module replacement.

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Design System

The site uses a warm, clinic-appropriate palette defined as CSS variables in `index.css`:

| Variable | Value | Usage |
|---|---|---|
| `--dental-cream` | `#F8F5F0` | Page background |
| `--dental-bone` | `#EDE8DF` | Cards, borders, sections |
| `--dental-sage` | `#7A9E8E` | Accents, hover states |
| `--dental-sage-dark` | `#4D7A68` | Primary CTA buttons |
| `--dental-charcoal` | `#2C2C2A` | Text, dark sections |
| `--dental-warm-gray` | `#6B6860` | Secondary text |
| `--dental-gold` | `#B8965A` | Star ratings |

**Fonts:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) for display headings, [DM Sans](https://fonts.google.com/specimen/DM+Sans) for body text.

## Sections

| Section | ID | Description |
|---|---|---|
| Nav | — | Sticky navbar, scroll-aware shadow, animated mobile menu |
| Hero | — | Full-viewport image, headline, trust stats |
| About Us | `#aboutUs` | Team photo, clinic description |
| Specialties | `#specialties` | 8 treatment cards in a responsive grid |
| Book Appointment | `#contactForm` | Dark CTA with modal booking form |
| Testimonials | `#testimonials` | 4 patient reviews with SVG star ratings |
| Contact | `#contactInfo` | Address, phone, hours, email, map |

## Deployment

The site is a static SPA — it can be deployed to any static hosting provider.

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --build
```

### GitHub Pages

Set `base` in `vite.config.ts` to your repo name:

```ts
export default defineConfig({
  base: '/fakemedical/',
  plugins: [react()],
})
```

Then build and deploy the `dist/` folder.

## Before Going Live

- [ ] Replace `https://www.fakedental.com.ar/` in `index.html` with your real domain
- [ ] Add a real `og-image.jpg` to `/public` (1200×630px recommended)
- [ ] Update the address, phone, email, and hours in `ContactForm.tsx`
- [ ] Replace placeholder user photos in `src/assets/` with real patient photos (with consent)
- [ ] Connect the booking form in `ModalContent.tsx` to a real backend or service (e.g. EmailJS, Formspree)
- [ ] Update `settings.react.version` in `.eslintrc.cjs` from `'18.2'` to `'19.0'`
- [ ] Run `npx update-browserslist-db@latest` to silence the caniuse-lite warning

## License

MIT
