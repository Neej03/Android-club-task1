<div align="center">

  <img src="public/logo.png" alt="Android Club Logo" width="100" />

  # Android Club • VIT Bhopal
  **If it's Android, it's Us.**

  The official web portal for the Android Club chapter at VIT Bhopal University.  
  Designed with a cyber-minimal dark aesthetic, interactive 3D WebGL experiences, and real-time student tooling.

  [Live Demo](http://localhost:3000) • [Official Website](https://androidclub.tech/) • [WhatsApp Community](https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK) • [GitHub](https://github.com/androidclubvitbhopal)

</div>

---

## Overview

Founded in 2017 by Abhay Nigam, Android Club is a student-run technical community at VIT Bhopal University focused on mobile systems, modern Kotlin architectures, on-device Edge AI, and open-source software. 

This repository houses the redesigned chapter portal built with React, Vite, Tailwind CSS, and Framer Motion. It showcases the chapter's flagship initiatives—including AcWoC (Android Club Winter of Code), the Android Fusion national hackathon series, and campus-deployed applications.

---

## Highlights

- **Bugdroid Awakening Sequence:** Procedural introductory boot animation featuring responsive SVG antenna kinematics, live terminal boot telemetry, and smooth portal exit.
- **Interactive 3D Mascot:** Embedded Spline WebGL 3D Android mascot with real-time cursor perspective tracking, ambient light halos, and fluid physics.
- **Interactive Mobile Device Lab:** A Pixel OS device simulation inside the browser featuring 6 interactive applications:
  - *Campus Navigator:* Multi-building routing and schedule tracker.
  - *AcWoC Issue Tracker:* Live PR tracker with top contributor leaderboards.
  - *PulseSync Tickets:* Verified event pass with interactive QR scanner.
  - *DroidVault:* Biometric keystore simulator for campus credentials.
  - *Kotlin Playground:* In-browser Kotlin 2.0 code compiler simulator.
  - *Community Chat:* Direct gateway to the active WhatsApp developer network.
- **Digital Event Pass System:** Ticketing card architecture styled after authentic developer conference passes, complete with tear-off notch geometry, date ribbons, and live countdowns.
- **AcWoC 2026 Flagship Showcase:** A 4-week open-source mentorship program hub with stats on 450+ PRs, project repositories, and contribution tiers.
- **Cyber Dark Visual System:** Bespoke circuit and matrix dot-grid background patterns, ambient volumetric glow orbs, and glassmorphic surface elevation.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18 |
| **Build Tool & Bundler** | Vite 5 |
| **Styling & Design System** | Tailwind CSS 3.4 |
| **Motion & Gestures** | Framer Motion 11 |
| **3D & WebGL Canvas** | `@splinetool/react-spline` |
| **Icons & Typography** | Lucide React, Space Grotesk, Plus Jakarta Sans, JetBrains Mono |
| **Micro-Interactions** | Canvas Confetti |

---

## Getting Started

### Prerequisites
- Node.js (v18.x or higher)
- npm, pnpm, or yarn

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/Neej03/Android-club-task1.git

# Navigate into project directory
cd Android-club-task1

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portal.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
Android-club/
├── public/
│   ├── AboutPage_Assets/       # Faculty portraits & signatures
│   ├── Events_Page/            # Rotating portal graphics
│   ├── Homepage_Assets/        # Student contributor avatars
│   ├── RecruitmentsPage_Assets/# 3D Bugdroid wallpapers
│   ├── TeamPage_Assets/        # Domain badges & icons
│   ├── Android.splinecode      # 3D Spline scene asset
│   └── logo.png                # High-res 3D Android mascot
├── src/
│   ├── assets/                 # App assets & brand vectors
│   ├── components/
│   │   ├── About.jsx           # Chapter heritage, pillars & device lab
│   │   ├── AcwocHighlight.jsx  # Winter of Code flagship program
│   │   ├── AndroidIntroAnimation.jsx # Initial bootloader animation
│   │   ├── AndroidVisual3D.jsx # 3D Android mascot with mouse tilt
│   │   ├── Benefits.jsx        # Engineering perks & student outcomes
│   │   ├── Contact.jsx         # Mission control dispatch & socials
│   │   ├── Events.jsx          # Pass cards, countdown & gallery
│   │   ├── Footer.jsx          # Chapter recognition & quick links
│   │   ├── Hero.jsx            # Main headline, Spline scene & metrics
│   │   ├── InteractivePhoneExperience.jsx # Mobile simulator
│   │   ├── Navbar.jsx          # Navigation header & WhatsApp CTA
│   │   ├── PartnersMarquee.jsx # Ecosystem partner ticker
│   │   ├── ScrollNavigation.jsx# Vertical section indicator
│   │   └── TechKnowledgeDrop.jsx # FAQ & architecture insights
│   ├── data/                   # Structured content & event datasets
│   ├── App.jsx                 # Master page layout & intro state
│   ├── index.css               # Cyber grid patterns & design tokens
│   └── main.jsx                # React DOM entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Community & Socials

- **WhatsApp Community:** [chat.whatsapp.com](https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK)
- **GitHub:** [@androidclubvitbhopal](https://github.com/androidclubvitbhopal)
- **LinkedIn:** [Android Club VIT Bhopal](https://www.linkedin.com/company/android-club-vit-bhopal/)
- **Instagram:** [@androidclub.vitb](https://www.instagram.com/androidclub.vitb/)
- **YouTube:** [@androidclub-vitb](https://www.youtube.com/@androidclub-vitb-wi4qe)
- **Official Inquiries:** `androidclub@vitbhopal.ac.in`

---

## License

This project is maintained by members of **Android Club, VIT Bhopal University**.  
Licensed under the [MIT License](LICENSE).
