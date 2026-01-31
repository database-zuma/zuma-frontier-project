# Zuma Frontier Landing Page — Implementation Plan

## Executive Summary

**Project:** Zuma Frontier Project Landing Page  
**Purpose:** Pitching visuals for AI adoption initiative  
**Target:** Leadership, stakeholders, department heads  
**Timeline:** 4 days  
**Status:** Ready for development

---

## Architecture Decisions (Oracle-Validated)

### Stack Confirmation

| Layer | Technology | Rationale | Oracle Verdict |
|-------|------------|-----------|----------------|
| **Framework** | Next.js 15 (App Router) | Static export, React 19, optimal performance | ✅ Correct choice |
| **Deployment** | Vercel (static export) | Push-to-deploy, global CDN, zero cold starts | ✅ Correct choice |
| **Styling** | Tailwind CSS + CSS Variables | Rapid iteration, maintainable design system | ✅ Correct choice |
| **Animations** | Framer Motion | Declarative React, staggered children, scroll triggers | ✅ Correct with bundle size watch |
| **Font** | Geist (via `geist` npm package) | Variable weight, Vercel-optimized, auto-preload | ✅ Recommended |
| **Icons** | Lucide React | Consistent stroke, modern aesthetic | ✅ Standard choice |

### Static Export Configuration

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,  // Required for static export
  },
};

export default nextConfig;
```

**Why static export?**
- No dynamic data needed
- Fastest possible TTFB
- CDN-edge caching by default
- Lower costs

---

## Design System

### Color Palette

```css
/* globals.css */
:root {
  /* Brand Colors */
  --zuma-green: #00E273;
  --zuma-green-light: #00FF88;
  --zuma-glow: rgba(0, 226, 115, 0.4);
  
  /* Dark Theme */
  --bg-primary: #0A0A0A;
  --bg-secondary: #111111;
  --bg-tertiary: #1A1A1A;
  --bg-card: rgba(255, 255, 255, 0.03);
  
  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #E5E5E5;
  --text-muted: #666666;
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(0, 226, 115, 0.5);
}
```

### Typography Scale

| Element | Size | Weight | Treatment |
|---------|------|--------|-----------|
| **FRONTIER (Hero)** | 80-96px | 700 | Gradient fill + glow |
| **ZUMA (Hero)** | 64px | 300 | Light/outline |
| H2 (Section) | 48px | 600 | Uppercase, tracking-wide |
| H3 (Card) | 24px | 500 | — |
| Body Large | 20px | 400 | Line-height 1.6 |
| Body | 16px | 400 | Line-height 1.5 |
| Caption | 14px | 500 | Uppercase |
| Badge | 12px | 600 | Uppercase |

### Glassmorphism Pattern

```css
.glass-card {
  background: rgba(17, 17, 17, 0.8); /* Fallback */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

@supports (backdrop-filter: blur(20px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
  }
}
```

**Oracle Watch-out:** Limit to 4-6 simultaneous blur elements. Don't apply to floating elements + cards + navbar simultaneously.

---

## Component Architecture

### File Structure

```
frontier-landing-page/
├── app/
│   ├── globals.css              # Tailwind + CSS variables
│   ├── layout.tsx               # Root layout with Geist font
│   └── page.tsx                 # Main page composing sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx             # ZUMA FRONTIER centerpiece
│   │   ├── Vision.tsx           # "The Dawn of a New Era"
│   │   ├── Projects.tsx         # 2x2 project grid
│   │   ├── Impact.tsx           # Animated counters
│   │   ├── Roadmap.tsx          # Timeline
│   │   ├── TechStack.tsx        # Logo cloud
│   │   └── Footer.tsx           # CTA + links
│   ├── ui/                      # shadcn components (copy-paste)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Navbar.tsx               # Fixed, glassmorphism
│   ├── AnimatedCounter.tsx      # Impact numbers
│   ├── GradientText.tsx         # Reusable FRONTIER style
│   └── ScrollReveal.tsx         # Wrapper for scroll animations
├── data/
│   └── projects.ts              # Project content (type-safe)
├── lib/
│   └── utils.ts                 # cn() utility
├── public/
│   └── images/                  # Static assets (WebP, <200KB)
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

### Component Breakdown

#### 1. Hero Section

**Purpose:** Immediate impact, FRONTIER highlight

**Structure:**
```tsx
<Hero>
  <FloatingBadge position="top-left">AI-Powered Future</FloatingBadge>
  <FloatingBadge position="top-right">Continuous Improvements</FloatingBadge>
  
  <Headline>
    <span className="font-light">ZUMA</span>
    <Connector />
    <GradientText className="font-bold glow">FRONTIER</GradientText>
  </Headline>
  
  <Subheadline>The Dawn of Intelligent Operations</Subheadline>
  <Tagline>Where AI meets ambition...</Tagline>
  
  <CTAGroup>
    <Button primary>Explore the Future</Button>
    <Button secondary>Our Vision</Button>
  </CTAGroup>
  
  <TrustIndicators>
    <Check>4 Projects Building Tomorrow</Check>
    <Check>Operations Reimagined</Check>
    <Check>The Future Starts Now</Check>
  </TrustIndicators>
</Hero>
```

**Animation Sequence (Framer Motion):**
1. Background fades in (0ms)
2. Floating badges float up (200ms delay, 600ms duration)
3. "ZUMA" fades in (400ms)
4. "FRONTIER" slides up + blur clears (600ms)
5. Subheadline fades up (800ms)
6. CTAs scale in (1000ms)
7. Trust indicators stagger in (1200ms+)

**FRONTIER Treatment (Oracle-Approved):**
```tsx
// Static gradient - zero runtime cost
// Entrance animation via Framer Motion
<motion.h1
  className="text-8xl font-bold bg-gradient-to-r from-[#00E273] to-[#00FF88] bg-clip-text text-transparent"
  style={{ filter: 'drop-shadow(0 0 30px rgba(0, 226, 115, 0.4))' }}
  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
>
  FRONTIER
</motion.h1>
```

**Oracle Note:** No animated gradient (performance hit). Static gradient with entrance animation only.

---

#### 2. Vision Section

**Purpose:** Emotional connection, manifesto-style copy

**Structure:**
```tsx
<Vision>
  <SectionTitle>THE DAWN OF A NEW ERA</SectionTitle>
  <GlassCard>
    <Paragraph>We stand at the frontier...</Paragraph>
    <Paragraph>This is not just adoption...</Paragraph>
  </GlassCard>
</Vision>
```

**Animation:** Fade in + slide up on scroll into view

---

#### 3. Projects Section

**Purpose:** Showcase 4 projects with concise summaries

**Structure:**
```tsx
<Projects>
  <SectionHeader 
    title="BUILDING TOMORROW, TODAY"
    subtitle="Four projects. One vision. Unlimited potential."
  />
  
  <Grid columns={2}>
    {projects.map((project, i) => (
      <ProjectCard 
        key={project.id}
        project={project}
        delay={i * 0.1}
      />
    ))}
  </Grid>
</Projects>
```

**ProjectCard Animation:**
- Scroll-triggered reveal
- Staggered by 100ms per card
- Hover: translateY(-8px) + border glow green
- Idle: Subtle floating animation

**Card Content Structure:**
- Icon (Lucide)
- Title
- Tagline (muted, uppercase)
- Description (1-2 sentences, futuristic tone)
- Status badge (● Live, ○ Planning, ◐ Developing)
- Link with arrow

---

#### 4. Impact Section

**Purpose:** Quantifiable optimism

**Structure:**
```tsx
<Impact>
  <SectionHeader 
    title="THE FUTURE BY NUMBERS"
    subtitle="Every metric tells a story of transformation..."
  />
  
  <Grid columns={3}>
    <Metric value={3} label="Tools Pioneering the Future" suffix="+" />
    <Metric value={20} label="Hours Reclaimed for Innovation" suffix="+" />
    <Metric value={10} label="Resources Redirected to Growth" prefix="IDR " suffix="M+" />
  </Grid>
</Impact>
```

**AnimatedCounter Implementation (Oracle-Approved):**
```tsx
// Simple RAF loop, no external library
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [target, duration, prefersReducedMotion]);
  
  return <span>{count}</span>;
};
```

---

#### 5. Roadmap Section

**Purpose:** Show progression, build confidence

**Structure:**
```tsx
<Roadmap>
  <SectionHeader title="OUR PATH TO THE FUTURE" />
  
  <Timeline>
    <Phase 
      number={1} 
      title="FOUNDATION" 
      subtitle="Laying the groundwork for tomorrow"
      items={["Document Auto-Extractor"]}
      status="complete"
    />
    <Phase 
      number={2} 
      title="ACCELERATION" 
      subtitle="Building momentum, scaling impact"
      items={["Sales Reports", "Inventory Alerts"]}
      status="current"
    />
    <Phase 
      number={3} 
      title="TRANSFORMATION" 
      subtitle="Proving the future is now"
      items={["Natural Language Queries"]}
      status="future"
    />
  </Timeline>
</Roadmap>
```

---

#### 6. Tech Stack Section

**Purpose:** Credibility through technology

**Structure:**
```tsx
<TechStack>
  <SectionHeader 
    title="POWERED BY POSSIBILITY"
    subtitle="Cutting-edge technology. Human-centered design."
  />
  
  <LogoCloud>
    {['Next.js', 'Supabase', 'Python', 'Gemini', 'GCP', 'Vercel'].map(tech => (
      <TechLogo key={tech} name={tech} />
    ))}
  </LogoCloud>
</TechStack>
```

**Style:** Grayscale by default, color + slight scale on hover

---

#### 7. Navbar

**Purpose:** Navigation, context

**Structure:**
```tsx
<Navbar>
  <Logo>
    <span className="font-light">ZF</span>
    <Badge variant="zuma">BETA</Badge>
  </Logo>
  
  <NavLinks>
    <NavLink href="#vision">Vision</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    <NavLink href="#impact">Impact</NavLink>
    <NavLink href="#roadmap">Roadmap</NavLink>
  </NavLinks>
  
  <CTA>Contact</CTA>
</Navbar>
```

**Behavior:**
- Fixed top, full width
- Height: 72px
- Background: transparent → rgba(10,10,10,0.8) + backdrop-blur on scroll
- Smooth scroll to sections

---

## Animation Specifications

### Global Animation Config

```typescript
// lib/animations.ts
export const transitions = {
  default: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  fast: { duration: 0.3, ease: 'easeOut' },
  slow: { duration: 0.8, ease: 'easeOut' },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};
```

### Scroll-Triggered Reveals

```tsx
// components/ScrollReveal.tsx
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
```

### Reduced Motion Support

```tsx
// hooks/useReducedMotion.ts
import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
};
```

**Oracle Rule:** Disable continuous/floating animations. Keep instant fade-ins.

---

## Content Data

### Projects Data

```typescript
// data/projects.ts
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: 'live' | 'planning' | 'brainstorm' | 'developing';
  icon: string;
  linkText: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'branch-super-app',
    title: 'Branch Super App',
    tagline: 'Intelligent Store Operations',
    description: 'The foundation of our retail revolution. Real-time RO management with AI-powered recommendations that transform how stores operate.',
    status: 'live',
    icon: 'Building2',
    linkText: 'Experience the Future →',
    url: 'https://zuma-ro-pwa.vercel.app',
  },
  {
    id: 'warehouse-super-app',
    title: 'Warehouse Super App Extended',
    tagline: 'Next-Gen Logistics',
    description: 'Where warehouse operations meet artificial intelligence. Smart automation, predictive alerts, and seamless coordination.',
    status: 'planning',
    icon: 'Warehouse',
    linkText: 'Preview the Vision →',
  },
  {
    id: 'multi-moltbot',
    title: 'Multi-MoltBot System',
    tagline: 'AI Workforce',
    description: 'Meet the team of the future: ARIA, DATUM, and CODER. AI agents working 24/7 to amplify human potential across every operation.',
    status: 'brainstorm',
    icon: 'Bot',
    linkText: 'Meet the Agents →',
  },
  {
    id: 'creative-hub',
    title: 'Creative Hub Agents',
    tagline: 'Generative Creativity',
    description: 'Where imagination meets intelligence. AI-powered creative workflows that accelerate innovation while honoring our brand DNA.',
    status: 'developing',
    icon: 'Sparkles',
    linkText: 'See the Magic →',
  },
];
```

---

## Development Phases

### Phase 1: Foundation (Day 1) — EST: 4-6 hours

**Goal:** Static structure, no animations

**Tasks:**
- [ ] Initialize Next.js project with TypeScript, Tailwind
- [ ] Install dependencies: `framer-motion`, `lucide-react`, `geist`
- [ ] Initialize shadcn/ui
- [ ] Configure `next.config.ts` with `output: 'export'`
- [ ] Set up CSS variables in `globals.css`
- [ ] Configure Tailwind with brand colors
- [ ] Set up Geist font in `layout.tsx`
- [ ] Create folder structure
- [ ] Build all 7 sections with placeholder content
- [ ] Verify responsive layouts (desktop, tablet, mobile)

**Deliverable:** Static landing page, visually correct, no animations

---

### Phase 2: Styling & Components (Day 2) — EST: 4-6 hours

**Goal:** Visual polish, glassmorphism, typography

**Tasks:**
- [ ] Implement glassmorphism cards with fallback
- [ ] Style FRONTIER hero text (gradient + glow)
- [ ] Style all project cards with hover states
- [ ] Style Navbar with scroll behavior
- [ ] Add section headers and typography
- [ ] Implement responsive grid layouts
- [ ] Test on real mobile device (iOS Safari + Android Chrome)

**Deliverable:** Fully styled page, pixel-perfect, responsive

---

### Phase 3: Animations (Day 3) — EST: 4-8 hours

**Goal:** Bring it to life with motion

**Tasks:**
- [ ] Hero entrance sequence (staggered children)
- [ ] Floating badge animations
- [ ] Scroll-triggered section reveals
- [ ] Project card staggered entrance
- [ ] Card hover animations (lift + glow)
- [ ] Animated counters for Impact section
- [ ] Navbar scroll background transition
- [ ] Reduced motion support
- [ ] Performance audit (Chrome DevTools)

**Oracle Timebox:** If running behind, ship basic reveals first. Add polish later.

**Deliverable:** Animated page, 60fps, accessible

---

### Phase 4: Polish & Deploy (Day 4) — EST: 2-4 hours

**Goal:** Production-ready, launched

**Tasks:**
- [ ] Optimize images (Squoosh → WebP, <200KB)
- [ ] Add meta tags (SEO, Open Graph)
- [ ] Lighthouse audit (target: 90+ all categories)
- [ ] Accessibility check (keyboard nav, contrast, screen reader)
- [ ] Cross-browser test (Chrome, Safari, Firefox)
- [ ] Git commit, push to GitHub
- [ ] Connect Vercel project
- [ ] Configure custom domain (if needed)
- [ ] Share preview URL with stakeholders

**Deliverable:** Live landing page on Vercel

---

## Performance Targets

| Metric | Target | Current Estimate |
|--------|--------|------------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ~1.5s (static export) |
| **FID** (First Input Delay) | < 100ms | ~50ms (no JS blocking) |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ~0 (fixed dimensions) |
| **Bundle Size** | < 200KB | ~150KB (Framer Motion tree-shaken) |

**Performance Checklist:**
- [ ] Preload hero font
- [ ] Lazy load below-fold sections
- [ ] Use CSS animations where possible (less JS)
- [ ] Minimize blur elements (max 6 visible)
- [ ] Test on 3G network throttling

---

## Risk Mitigation

| Risk | Probability | Mitigation |
|------|-------------|------------|
| **Over-engineering FRONTIER effect** | High | Timebox: 2 hours max. Static gradient + entrance animation is enough. |
| **Framer Motion learning curve** | Medium | Start with simple fade-ups. Add complexity incrementally. |
| **Mobile backdrop-filter jank** | Medium | Test on real device Day 2. Fallback to solid backgrounds if needed. |
| **Scope creep (extra sections)** | High | Stick to 7 sections. Create "Phase 2" wishlist for post-launch. |
| **Content changes** | Low | Use `data/projects.ts`. Easy to update without touching components. |

---

## Dependencies

```json
{
  "dependencies": {
    "next": "15.x",
    "react": "^19",
    "react-dom": "^19",
    "framer-motion": "^11",
    "lucide-react": "^0.x",
    "geist": "^1.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^3.4",
    "postcss": "^8",
    "autoprefixer": "^10",
    "eslint": "^8",
    "eslint-config-next": "15.x"
  }
}
```

---

## Appendix: Quick Reference

### Color Classes
```
bg-zuma-green
text-zuma-green
bg-black-rich
bg-black-soft
bg-card
text-primary
text-secondary
text-muted
border-subtle
hover:border-zuma-green/50
```

### Animation Classes
```
animate-fade-up
animate-scale-in
hover:translate-y-[-8px]
transition-transform duration-300
```

### Status Badges
```tsx
// Live
<span className="flex items-center gap-2">
  <span className="w-2 h-2 rounded-full bg-zuma-green animate-pulse" />
  LIVE
</span>

// Planning
<span className="flex items-center gap-2 text-yellow-500">
  <span className="w-2 h-2 rounded-full border-2 border-yellow-500" />
  PLANNING
</span>

// Developing
<span className="flex items-center gap-2 text-blue-500">
  <span className="w-2 h-2 rounded-full bg-blue-500/50" />
  DEVELOPING
</span>
```

---

**Status:** Ready for development  
**Next Step:** Initialize project and begin Phase 1  
**Oracle Review:** ✅ Architecture validated, minor watch-outs noted  
**Risk Level:** Low-Medium (4-day timeline is achievable)

---

*Document created: January 31, 2026*  
*Validated by: Oracle (Architecture Consultant)*  
*Ready for: Visual Agent aesthetic execution*
