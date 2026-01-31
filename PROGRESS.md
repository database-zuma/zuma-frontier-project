# Zuma Frontier Landing Page - Progress & TODO

> **Live URL:** https://frontier-landing-page.vercel.app  
> **GitHub:** https://github.com/database-zuma/zuma-frontier-project  
> **Last Updated:** January 31, 2026

---

## Current Status: v1.5 - Color Spectrum Cards + Refined Design

The landing page features **Geist Mono** font, **multi-color project cards** with grain texture, and streamlined navigation.

---

## Key Achievements

### Design Excellence
- **Premium Typography:** Plus Jakarta Sans (body) + Geist Mono (headings, light weight)
- **Multi-color project cards** - each with unique spectrum (yellow-green, aqua-cyan, purple-pink, orange-coral)
- **Full grain texture** on all project card graphics
- **Less rounded corners** - refined from `rounded-3xl` to `rounded-xl`
- **Glassmorphism effects** throughout
- **Smooth Framer Motion animations**
- **Dark/Light alternating sections**

### Pitching Optimizations (Oracle-Guided)
- **"Powered by" badges:** Claude Opus 4.5 & Kimi K2.5 in Tech Stack
- **Urgency copy:** "By 2027, 75% of retail ops will be AI-augmented..."
- **Industry benchmarks:** Replaced placeholder partners with real stats
- **Enterprise credibility:** "Built on Enterprise-Grade AI" messaging

---

## Completed Features

### Sections Built

| Section | Status | Key Features |
|---------|--------|--------------|
| **Navbar** | ✅ Done | Fixed top, glassmorphism, responsive - Links: Projects, Vision, Technology, Roadmap, Contact |
| **Hero** | ✅ Done | FRONTIER branding, urgency copy, floating cards |
| **Industry Ticker** | ✅ Done | Scrolling benchmarks (Walmart, Target, etc.) |
| **Vision** | ✅ Done | "The Dawn of a New Era", 4 glass cards |
| **Projects** | ✅ Done | 4 project cards with multi-color spectrums + grain texture, horizontal scroll |
| ~~Impact~~ | ❌ Removed | Section removed - not needed for pitch |
| **Roadmap** | ✅ Done | 3-phase timeline with current phase indicator |
| **Tech Stack** | ✅ Done | AI Foundation tier + 10 tech badges |
| **Footer** | ✅ Done | Zuma logo, navigation, social links, copyright |

### Technical Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | App Router, Static Export |
| TypeScript | Type safety |
| Tailwind CSS | Styling with custom Zuma colors |
| Framer Motion | Scroll animations, staggered reveals |
| shadcn/ui | Button, Badge components |
| Vercel | Hosting, CDN, auto-deploy |
| GitHub | Version control, CI/CD trigger |

### Design System

| Element | Value |
|---------|-------|
| **Primary Color** | `#00E273` (Zuma Green) |
| **Dark Background** | `#0A0A0A` |
| **Light Background** | `#faf9f7` (matte off-white) |
| **Body Font** | Plus Jakarta Sans (premium geometric) |
| **Heading Font** | **Geist Mono** (Vercel, light weight) |
| **Body Weight** | 500 (medium) |
| **Heading Weight** | 300 (light) for large titles, 400 for h3-h6 |
| **Letter Spacing** | -0.02em base |
| **Glassmorphism** | `backdrop-filter: blur(20px)` + borders |
| **Section Pattern** | Dark → Light → Dark → Light |
| **Card Border Radius** | `rounded-xl` / `rounded-lg` (less rounded) |
| **Graphics Style** | Organic blob gradients with full grain texture, 4 color spectrums |
| **Card Colors** | Yellow-Green, Aqua-Cyan, Purple-Pink, Orange-Coral |

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| Jan 31, 2026 | **v1.5** | Multi-color project cards (4 spectrums), full grain texture, reduced border radius, removed Impact section, updated navbar links |
| Jan 31, 2026 | v1.4 | Geist Mono font (light weight), organic blob graphics for all project cards |
| Jan 31, 2026 | v1.3 | Plus Jakarta Sans font (premium, Modal-like) |
| Jan 31, 2026 | v1.2 | AI badges (Claude/Kimi), urgency copy, industry benchmarks |
| Jan 31, 2026 | v1.1 | Inter font with tight letter-spacing |
| Jan 31, 2026 | v1.0 | Initial MVP - all sections complete |

---

## TODO: Future Improvements

### High Priority (For Better Pitching)

Based on Oracle consultation for funding pitch optimization:

- [ ] **Add "Cost of Inaction" Section**
  - Risk of waiting / falling behind competitors
  - "What happens if we don't act?"
  - Loss aversion is powerful for decision-makers

- [ ] **Add ROI Metrics Section (replaces Impact)**
   - Concrete ROI projections
     - "40% Time Savings (projected)"
     - "Rp 2.4B Cost Avoidance (estimated)"
     - "3x Faster Decisions"
     - "85% Error Reduction"


- [ ] **Add Investment Asks to Roadmap**
  - Phase 1: Rp XXX million (current)
  - Phase 2: Rp XXX million (requesting)
  - Phase 3: Self-funded from savings
  - Show clear ROI per phase

- [ ] **Add "Request Funding" CTA**
  - Make the ask explicit
  - Sticky button or final section
  - "Approve Phase 2 Funding" or "Schedule Deep Dive"

- [ ] **Add Downloadable Pitch Deck**
  - PDF export of key slides
  - Let stakeholders share with peers

### Medium Priority

- [ ] **Mobile Navigation**
  - Add hamburger menu for mobile
  - Currently all nav items show (crowded)

- [ ] **Real Project URLs**
  - Branch Super App: https://zuma-ro-pwa.vercel.app (LIVE)
  - Others: Link when available

- [ ] **FAQ Section**
  - Preempt objections
  - "Is this secure?", "What if it fails?", "What's the timeline?"

- [ ] **SEO Optimization**
  - Open Graph images
  - Structured data (JSON-LD)
  - Sitemap.xml

- [ ] **Analytics Integration**
  - Vercel Analytics or Google Analytics
  - Track engagement for pitch meetings

### Low Priority / Nice to Have

- [ ] **Animated 3D Background** (like Modal.com)
- [ ] **Dark/Light Theme Toggle**
- [ ] **Blog/Updates Section**
- [ ] **Team Section**
- [ ] **Case Studies**
- [ ] **Testimonials** (internal stakeholder quotes)

---

## Content Still Needed

### From You (Project Owner)

| Item | Purpose | Status |
|------|---------|--------|
| Real ROI projections | Impact section metrics | ⏳ Waiting |
| Investment amounts per phase | Roadmap section | ⏳ Waiting |
| Competitor names (optional) | "Cost of Inaction" section | ⏳ Waiting |
| Internal stakeholder quotes | Testimonials | ⏳ Optional |
| Leadership approval on copy | Final sign-off | ⏳ Waiting |

### Auto-Generated (AI Can Create)

| Item | Status |
|------|--------|
| Hero copy with urgency | ✅ Done |
| Industry benchmarks | ✅ Done |
| "Powered by" AI badges | ✅ Done |
| Vision inspirational copy | ✅ Done |
| Project descriptions | ✅ Done |

---

## File Structure

```
frontier-landing-page/
├── app/
│   ├── page.tsx              # Main page (all sections)
│   ├── layout.tsx            # Plus Jakarta Sans + JetBrains Mono
│   ├── globals.css           # Tailwind + Modal-style typography
│   └── favicon.ico
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # ✅ Urgency copy, industry ticker
│   │   ├── Vision.tsx        # ✅ Glass cards
│   │   ├── Projects.tsx      # ✅ Multi-color cards with grain texture
│   │   ├── Roadmap.tsx       # ✅ 3-phase timeline
│   │   └── TechStack.tsx     # ✅ AI Foundation + tech badges
│   │   └── ~~Impact.tsx~~    # ❌ Removed
│   ├── AbstractGraphics.tsx  # Project card visuals
│   ├── Navbar.tsx            # ✅ Glassmorphism
│   ├── Footer.tsx            # ✅ Navigation + social
│   └── ui/                   # shadcn components
├── docs/
│   ├── DESIGN_BRIEF.md       # 693 lines - full design spec
│   └── IMPLEMENTATION_PLAN.md # Technical approach
├── public/
│   └── ZUMA_FINAL LOGO_UPDATED-08.png
├── SESSION_REFERENCE.md      # Session context
├── PROGRESS.md               # This file
└── package.json
```

---

## Development Commands

```bash
# Navigate to project
cd frontier-landing-page

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel (manual)
npx vercel --prod --token=YOUR_TOKEN

# Or just push to GitHub (auto-deploys)
git add -A && git commit -m "message" && git push origin main
```

---

## Session History

| Date | Session ID | Work Done |
|------|------------|-----------|
| Jan 31, 2026 | `ses_3ebd5b2f7ffe3uYSN5ChG8CQF1` | Initial setup, Hero, design iterations |
| Jan 31, 2026 | Current | All sections, pitching optimization, font upgrade |

---

## Oracle Recommendations (For Reference)

Key insights from Oracle consultation for funding pitch:

1. **Shift frame from "What we're building" to "Why you should pay + what happens if you don't"**

2. **Add urgency language:**
   - "By 2027, 75% of retail ops will be AI-augmented"
   - "The question isn't whether—it's whether Zuma leads or follows"

3. **Loss aversion > Gain anticipation:**
   - "Cost of Inaction" section
   - Competitors moving faster
   - Manual processes compound costs

4. **Make asks explicit:**
   - Investment per phase
   - Clear ROI projections
   - "Approve Phase 2 Funding" CTA

5. **Remove credibility killers:**
   - ✅ Replaced placeholder partners with industry benchmarks
   - ✅ Added enterprise AI credibility (Claude/Kimi badges)

---

## Quick Links

| Resource | URL |
|----------|-----|
| **Live Site** | https://frontier-landing-page.vercel.app |
| **GitHub Repo** | https://github.com/database-zuma/zuma-frontier-project |
| **Vercel Dashboard** | https://vercel.com/database-zumas-projects/frontier-landing-page |
| **Design Brief** | `docs/DESIGN_BRIEF.md` |
| **Implementation Plan** | `docs/IMPLEMENTATION_PLAN.md` |

---

## Notes for Next Session

1. **Get real ROI numbers** - Need projections for Impact section
2. **Investment amounts** - Budget per phase for Roadmap
3. **Leadership review** - Get sign-off on copy before final pitch
4. **Mobile testing** - Test on real devices
5. **Consider adding FAQ** - Preempt stakeholder objections

---

*This document tracks progress on the Zuma Frontier landing page project.*  
*Optimized for funding pitches with Oracle-guided improvements.*
