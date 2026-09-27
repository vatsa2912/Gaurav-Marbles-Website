# Gaurav Marbles — Premium Showroom Website

Official production-ready business website for **Gaurav Marbles**, Firozabad's premier destination for natural marble slabs, vitrified tiles, heavy-duty granite, designer sanitaryware, bath fittings, and construction chemicals.

Designed with an original architectural stone identity, fast Next.js App Router performance, bilingual English & Hindi support, local SEO schema markup, interactive area calculator, quotation workflow, and seamless WhatsApp integration.

---

## 1. Business Information & Core Configuration

All business contact details, owner name, address, hours, maps, and social handles are centralized in **one single file**:

📁 `data/siteConfig.ts`

```typescript
export const SITE_CONFIG = {
  name: "Gaurav Marbles",
  owner: "Gaurav Kumar Agrawal",
  phone: "9897695715",
  whatsappNumber: "919897695715",
  email: "gerul_agral@gmail.com",
  address: {
    street: "PURUSHOTTAM VIHAR, BAMBA, Bypass Rd, near THARPOOTHA",
    area: "Jagdamba Nagar",
    city: "Firozabad",
    state: "Uttar Pradesh",
    postalCode: "283203",
    country: "India",
  },
  openingHours: {
    days: "Monday – Sunday",
    time: "9:00 AM – 8:00 PM",
  },
  maps: {
    url: "https://maps.app.goo.gl/4LK85HMa8VLXmS656?g_st=iw",
  },
};
```

---

## 2. Technology Stack

- **Framework**: Next.js 16 (Turbopack, App Router)
- **UI Runtime**: React 19
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4 with custom architectural stone design system
- **Typography**: Google Fonts (`Cinzel` for luxury roman stone headings + `Geist Sans` for clean body typography)
- **Icons**: Lucide React
- **SEO & Schema**: Next.js Metadata, dynamic `sitemap.ts`, `robots.ts`, Schema.org (`HomeGoodsStore`, `Product`, `FAQPage`, `BreadcrumbList`)
- **Assets**: Optimized WebP procedural stone imagery generated with `sharp`

---

## 3. Website Structure & Routes

| Route | Page Purpose |
|---|---|
| `/` | Cinematic Homepage (Hero, Trust Strip, Collections, Featured Products, Why Us, Calculator Preview, Projects, Reviews, CTA) |
| `/about` | About Gaurav Marbles, proprietor Gaurav Kumar Agrawal, showroom philosophy |
| `/products` | Full filterable catalog (Category, Brand, Finish, Availability, Search, Sort) |
| `/products/[slug]` | Product details, high-res gallery, specs, "Get Price" modal, WhatsApp direct enquiry |
| `/marble` | Dedicated Marble showcase (Makrana White, Italian Statuario, Green, Black, Lot guidance) |
| `/tiles` | Dedicated Tiles showcase (GVT/PGVT 600x1200, anti-skid bathroom, wall, parking) |
| `/granite` | Dedicated Granite showcase (Telephone Jet Black, Tan Brown, Kashmir White) |
| `/sanitaryware` | Dedicated Sanitaryware showcase (Vessel basins, rimless wall-hung closets, sinks) |
| `/bathroom-fittings` | Dedicated Fittings showcase (Brass pillar mixers, thermostatic showers, diverters) |
| `/chemicals` | Dedicated Chemicals showcase (Polymer tile adhesives, epoxy grouts, sealers) |
| `/projects` | Architectural inspiration gallery with category filters & full-screen lightbox |
| `/testimonials` | Customer reviews wall & feedback submission workflow |
| `/calculator` | Interactive Marble & Tile Area Calculator with wastage & box count estimation |
| `/quote` | Request a Quote form with validation & instant WhatsApp continuation |
| `/catalogue` | Digital & physical catalogue request page (PDF download ready) |
| `/faq` | Searchable & categorized FAQ with Local SEO `FAQPage` schema |
| `/contact` | Contact showroom, interactive Google Maps embed, phone, email, visit form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions with natural stone geological characteristics disclosure |

---

## 4. How to Update & Customize Content

### 4.1 How to Change Business Information, Phone, WhatsApp or Address
Open `data/siteConfig.ts` and modify the relevant fields. The navbar, footer, contact page, floating buttons, schemas, and WhatsApp links will immediately reflect the changes.

### 4.2 How to Add or Edit Products
Open `data/products.ts`. Each product is typed according to `Product`:

```typescript
{
  id: "gm-mrb-005",
  name: "Torroncino Gold Marble",
  slug: "torroncino-gold-marble",
  category: "marble",
  subcategory: "Italian / Imported Marble",
  brand: "Imported Selection",
  colour: "Golden Cream",
  size: "8ft × 4ft Slabs",
  material: "Natural Calcite",
  finish: "High Gloss Polished",
  description: "Warm honey golden veins over alabaster background...",
  images: ["/images/products/torroncino-gold.webp"],
  featured: true,
  availability: "In Stock",
  tags: ["Marble", "Living Room", "Gold Veins"],
  specifications: {
    "Origin": "Italy",
    "Thickness": "18 mm",
  }
}
```

### 4.3 How to Replace Product Images
All product images reside in `public/images/products/`.
1. Place your new photo in `public/images/products/` (e.g. `statuario-white.webp` or `.jpg`).
2. Point the `images` array in `data/products.ts` to your file path: `images: ["/images/products/my-photo.webp"]`.

### 4.4 How to Add a Real Logo
In `components/layout/Navbar.tsx` and `components/layout/Footer.tsx`, the logo currently renders an elegant text brand mark:
```tsx
<span className="font-serif-luxury text-xl font-bold tracking-[0.22em] text-stone-900">
  GAURAV
</span>
<span className="font-serif-luxury text-[11px] tracking-[0.38em] text-[#8C6D3B]">
  MARBLES
</span>
```
When an official image logo is designed, place it at `public/images/branding/logo.png` and replace the text with Next.js `<Image src="/images/branding/logo.png" alt="Gaurav Marbles" width={180} height={50} />`.

### 4.5 How to Enable the Downloadable Catalogue (PDF)
1. Place your compiled PDF brochure in `public/catalogue.pdf`.
2. Open `app/catalogue/page.tsx`.
3. Change `const isPdfAvailable = false;` to `const isPdfAvailable = true;`.
The page will instantly display the "Download Catalogue (PDF)" button.

### 4.6 How to Update Testimonials & Projects
- Testimonials: Edit `data/testimonials.ts` to add verified Google Reviews.
- Projects: Edit `data/projects.ts` to add real on-site photos of completed floors and bathrooms.

### 4.7 How to Update Translations (English & Hindi)
Open `data/translations.ts`. Both `en` and `hi` dictionaries are clearly organized by section (`nav`, `hero`, `trust`, `categories`, `products`, `calculator`, `quote`, `common`).

---

## 5. Development & Production Build

### Prerequisites
- Node.js 18+ (tested on Node.js 22 LTS)
- npm or pnpm

### Installation
```bash
npm install
```

### Running Locally in Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 6. Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the `marble-shop` repository.
4. Framework Preset: **Next.js**.
5. Click **Deploy**. Vercel will build and deploy the application automatically with static optimization and global CDN caching.

---

## 7. License & Credits

© Gaurav Marbles. All Rights Reserved.
Proprietor: Gaurav Kumar Agrawal, Firozabad, Uttar Pradesh, India.
