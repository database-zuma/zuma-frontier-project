# Zuma Frontier Landing Page - Progress & TODO

> **Live URL:** https://frontier-landing-page.vercel.app  
> **GitHub:** https://github.com/database-zuma/zuma-frontier-project  
> **Last Updated:** February 1, 2026

---

## Current Status: v1.21 - Medium Priority Features Complete

The landing page now includes **FAQ section**, **enhanced SEO** (Open Graph, Twitter Cards, structured data), **Vercel Analytics & Speed Insights**, **downloadable pitch deck link**, and updated copy ("frontier projects", "Are you Zumans?" button). All medium priority features implemented while maintaining the existing visual design.

---

## Key Achievements

### Design Excellence
- **Unified continuous background** - One green gradient spans entire page (no section breaks)
- **Premium Typography:** Plus Jakarta Sans (body) + Geist Mono (headings, light weight, tight letter-spacing)
- **Monochrome tech icons** - 15 logos in white/gray for cohesive aesthetic
- **Green-adjacent color palette** - all project cards use harmonious green variants (#00E273, #00D4AA, #00B899, #7AE060)
- **Vanishing point perspective grid** - animated SVG grid in hero background only
- **Zuma departments ticker** - 14 departments scrolling in hero
- **Full grain texture** on all project card graphics
- **Sharp corners** - refined to `rounded-md` (almost square)
- **Glassmorphism effects** throughout
- **Smooth Framer Motion animations** (optimized for performance)
- **Official AI logos** - Claude (Anthropic) and Kimi (Moonshot AI) brand SVGs

### Pitching Optimizations (Oracle-Guided)
- **"Powered by" badges:** Claude Opus 4.5 & Kimi K2.5 in Tech Stack
- **Urgency copy:** "By 2027, 75% of retail ops will be AI-augmented..."
- **Industry benchmarks:** Replaced placeholder partners with real stats
- **Enterprise credibility:** "Built on Enterprise-Grade AI" messaging
- **FAQ Section:** Preempts common questions and objections
- **Pitch Deck Download:** Direct PDF download link in footer

### Technical Infrastructure
- **SEO Optimized:** Open Graph, Twitter Cards, structured data, meta tags
- **Analytics:** Vercel Analytics & Speed Insights integrated
- **Performance:** Optimized animations with CSS transforms
- **Accessibility:** Semantic HTML, proper heading hierarchy
- **Mobile-First:** Responsive design with hamburger navigation

---

## Completed Features

### Sections Built

| Section | Status | Key Features |
|---------|--------|--------------|
| **Navbar** | ✅ Done | Fixed top, glassmorphism, responsive - Links: Vision, What We Do, Roadmap, Technology, Contact, Login |
| **Hero** | ✅ Done | FRONTIER branding, urgency copy, floating cards, vanishing grid |
| **Departments Ticker** | ✅ Done | 14 Zuma departments scrolling (HR, Finance, Operations, etc.) |
| **Vision** | ✅ Done | "The Dawn of a New Era", 4 glass cards |
| **What We Do** | ✅ Done | 4 initiative cards (AI Apps, Assistants, Workflows, Data Strategy), no "Learn more", horizontal scroll |
| ~~Impact~~ | ❌ Removed | Section removed - not needed for pitch |
| **Roadmap** | ✅ Done | 3-phase timeline with current phase indicator |
| **Tech Stack** | ✅ Done | AI Foundation tier + 15 tech logos in scrolling ticker with hover glow |
| **FAQ** | ✅ Done | 6 common questions with accordion-style expandable answers |
| **Footer** | ✅ Done | Zuma logo, navigation, social links, pitch deck download, copyright |

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
| **Background** | Unified dark with animated green gradient orbs (continuous across all sections) |
| **Body Font** | Plus Jakarta Sans (premium geometric) |
| **Heading Font** | **Geist Mono** (Vercel, light weight) |
| **Body Weight** | 500 (medium) |
| **Heading Weight** | 300 (light) for large titles, 400 for h3-h6 |
| **Title Letter Spacing** | -0.04em (tight) for large titles, -0.03em for headings |
| **Glassmorphism** | `backdrop-filter: blur(20px)` + borders |
| **Section Pattern** | All dark with unified green gradient background |
| **Card Border Radius** | `rounded-md` (almost square, sharp) |
| **Graphics Style** | Organic blob gradients with full grain texture, green-adjacent spectrums |
| **Card Colors** | Pure Green `#00E273`, Aqua-Teal `#00D4AA`, Deep Teal `#00B899`, Lime `#7AE060` |
| **Tech Icons** | Monochrome white/gray (no colors) |
| **Hero Background** | Vanishing point perspective grid (wireframe only) + unified page gradient |

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| Feb 1, 2026 | **v1.23** | Vision cards reordered: Single Source of Truth → AI-First Operations → Continuous Improvements → Agentic Workflows |
| Feb 1, 2026 | **v1.22** | Compressed What We Do images (99.5% reduction), Privacy & Terms pages created, Claude logo centering fixed, Footer links updated |
| Feb 1, 2026 | **v1.21** | Medium priority features: FAQ section added, SEO optimization (Open Graph, Twitter Cards, structured data), Vercel Analytics & Speed Insights integration, pitch deck download link in footer, "project" changed to "projects", "Get in touch" button changed to "Are you Zumans?" |
| Feb 1, 2026 | **v1.20** | Updated navbar order: Vision → What We Do → Roadmap → Technology, "Projects" renamed to "What We Do" in navigation |
| Feb 1, 2026 | v1.19 | Vision card updated - "Agentic Workflows" replaces "Integrated Data Management" |
| Feb 1, 2026 | v1.18 | Updated Vision section - new card titles and copy (Integrated Data Management, Single Source of Truth, AI-First Operations, Continuous Improvement) |
| Feb 1, 2026 | v1.17 | Added real images to "What We Do" section - 4 custom images for each initiative (AI-Powered Apps, AI Assistant, Auto Workflow, Data Strategy) |
| Feb 1, 2026 | v1.16 | Projects section transformed into "What We Do" with 4 initiative cards, removed "Learn more" links, subtle green gradient accents, Vision cards icon-free |
| Feb 1, 2026 | v1.15 | Removed icons from Vision section cards - text only in glassmorphism |
| Feb 1, 2026 | v1.14 | Darker vibe overall, reduced section spacing (py-20 vs py-32), optimized animations |
| Feb 1, 2026 | v1.12 | Unified continuous green gradient background across all sections (no more "jaggy" transitions), Zuma departments ticker (14 departments), removed individual section backgrounds, Hero has vanishing grid only (gradients from PageBackground), optimized for performance |
| Feb 1, 2026 | v1.11 | Added unified green gradient backgrounds to all sections (Projects, TechStack, Footer), removed Vision/Roadmap CTA, removed Hero Login button |
| Feb 1, 2026 | v1.10 | Removed Vision "Explore our projects" CTA, removed Hero Login button (kept navbar Login) |
| Feb 1, 2026 | v1.9 | Navbar Login button, green gradient backgrounds added to Vision and Roadmap sections |
| Feb 1, 2026 | v1.8 | Unified dark theme (Vision/Roadmap black), subtle vanishing grid, Login button in Hero |
| Feb 1, 2026 | v1.7 | Monochrome refinement: green-adjacent color palette for project cards, vanishing point perspective grid in hero, monochrome tech icons (white/gray), reduced border radius (rounded-md), fixed navbar width, updated footer (Instagram only), official Claude/Kimi SVG logos |
| Jan 31, 2026 | v1.6 | Tech logo ticker (15 logos, 3 rows, hover glow), tighter title letter-spacing (-0.04em) |
| Jan 31, 2026 | v1.5 | Multi-color project cards (4 spectrums), full grain texture, reduced border radius, removed Impact section, updated navbar links |
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
