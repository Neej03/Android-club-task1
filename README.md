# Android Club – VIT Bhopal University
### Premium Official Website & Digital Identity Portal

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=black)](https://developer.android.com/)

A modern, responsive, and interactive digital portal for **Android Club, VIT Bhopal University**. Crafted with a **Futuristic Dark × Android Green** visual system, showcasing the club's technical domains, student-developed open-source applications, hackathons, team structure, and membership intake.

---

## ✨ Features & Architecture

### 1. Design System & Theme
- **Color Palette:**
  - Primary Background: `#050505`
  - Secondary Background: `#0B0D0B`
  - Card Background: `#111411`
  - Primary Accent: `#3DDC84` (Android Green)
  - Secondary Accent: `#8AFFB7`
  - Primary Text: `#FFFFFF`
  - Secondary Text: `#A1A1AA`
  - Glow Borders: `rgba(61, 220, 132, 0.15)`
- **Typography:** Plus Jakarta Sans (body), Space Grotesk (display), JetBrains Mono (code & metrics).
- **Glassmorphism & Micro-Interactions:** Subtle backdrop blurs, glowing card hover states, and animated status pulses.

### 2. Website Sections
- **Section 01 – Sticky Navigation Bar:** Smooth scroll to sections, active section highlight, responsive mobile hamburger menu, and neon "Join Us" CTA.
- **Section 02 – Hero Experience:** Bold typography (*"BUILD. CONNECT. INNOVATE."*), interactive 3D Android Bugdroid with mouse perspective tracking and blinking eye matrix, floating tech badges, quick metrics, and scroll indicator.
- **Section 03 – About Us ("More Than Just a Club"):** Split-screen layout featuring club mission, vision, and differentiators alongside an Android Studio Ladybug code window simulation with live Gradle build telemetry.
- **Section 04 – What We Do ("Explore. Experiment. Create."):** 8 technical and creative domains (Android Dev, App Dev, Kotlin & Java, UI/UX Design, AI & Edge ML, Workshops, Open Source, and Collaborative Projects) with expandable deep dives.
- **Section 05 – Project Showcase ("Built By Our Community"):** Filterable gallery (Native Android, Cross-Platform, AI & ML, Campus Tools) with live interactive project detail modal, GitHub repository links, and live demos.
- **Section 06 – Events & Workshops ("Learn. Build. Experience."):** Interactive switcher for **Upcoming Flagship Events** (e.g. *Android Fusion 3.0 National Hackathon*, *Compose Camp 2026*) and **Past Hall of Fame** (e.g. *BugOff 2.0 Debugging Challenge*, *DroidCon Study Jam*, *App-O-Holics Sprint*).
- **Section 07 – Why Join Us? ("Your Ideas Deserve a Community"):** 6 feature cards highlighting hands-on learning, real-world projects, workshops, networking, hackathons, and leadership.
- **Section 08 – Our Team ("The People Behind the Innovation"):** Categorized team showcase (Faculty Coordinator, Club Leads, Technical Team, Design Team, PR & Outreach) with customizable profile cards.
- **Section 09 – Contact & Community ("Let's Build Something Together"):** Official email (`androidclub@vitbhopal.ac.in`), campus location details, official social links (GitHub, LinkedIn, Instagram), interactive contact form with instant validation, and confetti celebration.
- **Section 10 – Footer:** Clean branding, quick links, VIT Bhopal University recognition, back-to-top button, and copyright.
- **Interactive Global Modals:**
  - **Join Community Modal:** Student application form with registration intake, domain preference, and celebratory confetti.
  - **Project Detail Modal:** Deep-dive architectural breakdown, metrics, and repository access.

---

## 🛠️ Project Structure

```
Android-club/
├── index.html                  # HTML entry point with meta tags & fonts
├── package.json                # Dependencies and build scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom theme, colors, and keyframes
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
├── public/                     # Static assets
└── src/
    ├── App.jsx                 # Main application layout
    ├── main.jsx                # React root bootstrap
    ├── index.css               # Global styles, Tailwind directives & scrollbar
    ├── components/
    │   ├── Navbar.jsx          # Sticky navigation & mobile menu
    │   ├── Hero.jsx            # Hero section with metrics & CTAs
    │   ├── AndroidVisual3D.jsx # Interactive 3D Android Bugdroid with mouse tilt
    │   ├── About.jsx           # Mission, Vision & simulated Android Studio IDE
    │   ├── Activities.jsx      # 8 technical domain cards with expandable details
    │   ├── Projects.jsx        # Project gallery with category filter
    │   ├── ProjectModal.jsx    # Project deep-dive modal
    │   ├── Events.jsx          # Upcoming & past events timeline
    │   ├── Benefits.jsx        # 6 membership benefits
    │   ├── Team.jsx            # Team leadership & domain leads
    │   ├── Contact.jsx         # Contact form, campus info & socials
    │   ├── Footer.jsx          # Footer & back-to-top button
    │   └── JoinModal.jsx       # Student membership registration modal
    └── data/
        ├── activities.js       # Domain definitions & tech stacks
        ├── projects.js         # Community projects & repositories
        ├── events.js           # Hackathons, study jams & bootcamps
        ├── benefits.js         # Membership perks & advantages
        └── team.js             # Team roster & social links
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **npm** or **pnpm** / **yarn**

### 1. Installation
Clone the repository and install dependencies:

```bash
cd Android-club
npm install
```

### 2. Development Server
Start the local Vite development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 3. Production Build
Generate an optimized production build:

```bash
npm run build
```

The compiled assets will be output to the `dist/` directory.

### 4. Preview Production Build
Preview the generated production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Guidelines

### Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"New Project"**.
3. Import your `Android-club` repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Deploying to Netlify
1. Connect the GitHub repository on [Netlify](https://www.netlify.com/).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Click **Deploy site**.

---

## 📄 License & Attribution

- Built for **Android Club, VIT Bhopal University**.
- Reference website: [https://androidclub.tech/](https://androidclub.tech/)
- Official Email: `androidclub@vitbhopal.ac.in`
- Open-source under the [MIT License](LICENSE).

