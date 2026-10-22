# Shreya Raval — Personal Portfolio Website

A production-ready, editorial personal portfolio website for **Shreya Raval** (Full-Stack Developer), faithfully reproducing the layout, typography hierarchy, color palette, and visual structure from `Home.pdf`.

---

## 🎨 Design System & Theme
- **Page Background:** `#F8F6F1`
- **Main Text:** `#171717`
- **Primary Purple:** `#7656A8`
- **Deep Purple:** `#4F386F`
- **Light Purple:** `#E9E1F4`
- **Secondary Background:** `#F3EEF8`
- **Secondary Text:** `#68645E`
- **Borders:** `#DDD9D0`
- **White Surface Cards:** `#FFFFFF`
- **Typography:**
  - Headings: `Space Grotesk`
  - Body: `DM Sans`
  - Technical / Monospace: `JetBrains Mono`

---

## 🏗️ Architecture & Sections
1. **Sticky Header / Navigation:** Responsive navbar with active section scrollspy, mobile drawer, resume link, and avatar.
2. **Hero Section:** Editorial headline with purple accent, availability status badge, two primary action buttons, original portrait photography, and continuous technology ticker strip.
3. **Philosophy & About:** Two-column editorial section featuring the *Digital Craft Manifesto* card and a 2x2 metadata grid (Location, Academia, Focus, Interests).
4. **Services (What I Can Build):** Six capability cards across two columns with production experience badges and technology pills.
5. **Selected Work (Things I've Built):** Three featured project showcases in alternating desktop layouts:
   - **VELOUR:** Luxury fashion e-commerce platform (`https://shreya-2111.github.io/E-Commerce-Fashion-Store/`)
   - **SUMIT TIRMARE:** 3D motion design portfolio
   - **PUREPLATTER:** Vegetarian food-delivery platform
   - Plus **More Projects** destination link.
6. **Technical Toolkit:** 5 categorized competency cards (Frontend, Backend, Data Layer, Mobile App Dev, Tools & Ecosystem).
7. **Accreditation & Practice:** Dual-column timeline showcasing Academic Foundation (MSc IT & BCA from GLS University) and Professional Experience (Flutter Developer Intern at Augmented Systems LLP).
8. **Contact Section:** Deep purple `#4F386F` container with copy-email feedback interaction, mailto CTA, and availability matrix.
9. **Footer:** Copyright, attribution, and social profile links.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24.13.0)
- npm 9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Run Production Server
```bash
npm run start
```

---

## ⚙️ Customization & Asset Configuration

All portfolio content, URLs, and external links are centralized in a single configuration file:
👉 **[`data/portfolio.ts`](./data/portfolio.ts)**

### To Update Your Resume:
Simply replace the placeholder file at:
👉 `public/resume.pdf`

### To Update Live Project Links or Socials:
Edit `data/portfolio.ts`:
- `personal.socials.linkedin`
- `personal.socials.github`
- `projects.items[1].url` (Sumit Tirmare live URL)
- `projects.items[2].url` (PurePlatter repository or live URL)

---

## 🚢 Deploying to Vercel

1. **Push this repository to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Shreya Raval Portfolio"
   git branch -M main
   git remote add origin https://github.com/shreya-2111/<repo-name>.git
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New"** > **"Project"**.
   - Select your newly pushed `portfolio` repository.
   - Framework preset will automatically detect **Next.js**.
   - Click **Deploy**.

Vercel will build and deploy your site to a global CDN with automatic HTTPS.
