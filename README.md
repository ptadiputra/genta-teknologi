# Genta Teknologi Company Profile

A company profile and portfolio website for Genta Teknologi. This project is a static React landing page that showcases digital services, pricing packages, project portfolio, WhatsApp consultation buttons, and a short agency profile.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion / Motion
- Lucide React
- Netlify

## Main Features

- Responsive landing page with navbar, hero section, services, portfolio, about section, and footer.
- Auto-running marquee showcase for portfolio images.
- Service packages:
  - Web Development
  - Digital Ads
  - UI/UX Design
  - Logo Design
- Floating WhatsApp button and service package CTAs with pre-filled messages.
- Interactive portfolio with category filters:
  - All Projects
  - Web App
  - UI/UX Design
  - Logo Design
- Portfolio detail modal with image preview, carousel, thumbnails, tags, description, and demo link when available.
- Basic SEO, Open Graph, Twitter Card, favicon, canonical URL, robots, sitemap, and Organization structured data.

## Project Structure

```text
.
├── index.html
├── netlify.toml
├── package.json
├── vite.config.js
├── public/
│   ├── logo.webp
│   ├── logo-blue.webp
│   ├── genta.webp
│   ├── genta-white.webp
│   ├── marquee/
│   ├── ui/
│   ├── web/
│   └── logo/
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   └── Portfolio.jsx
    ├── data/
    │   └── portfolio.js
    └── utils/
        └── whatsapp.js
```

## Getting Started

Make sure Node.js is installed, then install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Configuration

- Portfolio data is stored in `src/data/portfolio.js`.
- WhatsApp message templates are stored in `src/utils/whatsapp.js`.
- Main landing page content is located in `src/App.jsx`.
- Portfolio grid, filters, modal, and carousel are handled in `src/components/Portfolio.jsx`.
- Image assets are stored in `public/` and referenced with absolute paths such as `/logo.webp` or `/web/sikejarbali.webp`.

## Deployment

This project already includes a Netlify configuration in `netlify.toml`:

```toml
[build]
  command = "vite build"
  publish = "dist"
```

When deploying to Netlify, the build command is `vite build` and the production output is generated in the `dist` folder.
