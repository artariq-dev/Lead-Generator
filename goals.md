# Cinch — Lead Generator

> **Single-page lead gen tool.** 3 calculators, 7 questions each, scored report with grade.

## Stack
Next.js 16, Tailwind v4, Framer Motion, TypeScript. No database, no auth.

## Current state
- Landing page with pixel design and animated background grid
- 3 calculators: Cloud Mathematician, FullStack Alchemist, Pipeline Plumber
- Multi-step form with animated question transitions
- Report page with grade, progress bars, and category breakdowns
- Email capture before report reveal
- Dark mode with localStorage persistence
- Deployed on Vercel

## Structure
```
app/
├── (landing)/page.tsx
├── assess/page.tsx          ← Calculator picker
├── assess/[calculator]/     ← Question form
├── report/[id]/             ← Scored report
├── layout.tsx
├── globals.css
components/
├── Nav.tsx
├── ThemeToggle.tsx
└── calculators/
    ├── CalculatorForm.tsx   ← Multi-step form with animations
    └── ReportCard.tsx       ← Animated score display
lib/
├── calculators/
│   ├── config.ts            ← Questions + scoring rules
│   └── engine.ts            ← Scoring logic
└── metadata.ts              ← SEO metadata
```

## To add next
- [ ] Email capture to DB/API for lead storage
- [ ] More calculators
- [ ] SEO optimization (sitemaps, JSON-LD)
